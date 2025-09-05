<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ChatController extends Controller
{
    /**
     * Get messages for the authenticated user.
     */
    public function index(Request $request)
    {
        $user = $request->user();
        
        $messages = Message::where('sender_id', $user->id)
            ->orWhere('receiver_id', $user->id)
            ->with(['sender', 'receiver'])
            ->orderBy('created_at', 'desc')
            ->paginate(20);

        return response()->json($messages);
    }

    /**
     * Store a new message.
     */
    public function store(Request $request)
    {
        $request->validate([
            'receiver_id' => 'required|exists:users,id',
            'message' => 'required|string|max:1000',
            'type' => 'sometimes|string|in:text,image,file',
        ]);

        $message = Message::create([
            'sender_id' => $request->user()->id,
            'receiver_id' => $request->receiver_id,
            'message' => $request->message,
            'type' => $request->type ?? 'text',
        ]);

        $message->load(['sender', 'receiver']);

        // Broadcast the message (in a real app, you'd use WebSockets/Pusher here)
        // broadcast(new MessageSent($message))->toOthers();

        return response()->json([
            'message' => 'Message sent successfully',
            'data' => $message
        ], 201);
    }

    /**
     * Get users for chat.
     */
    public function users(Request $request)
    {
        $user = $request->user();
        
        // Get users that the current user has chatted with
        $userIds = Message::where('sender_id', $user->id)
            ->orWhere('receiver_id', $user->id)
            ->pluck('sender_id')
            ->merge(Message::where('sender_id', $user->id)
                ->orWhere('receiver_id', $user->id)
                ->pluck('receiver_id'))
            ->unique()
            ->filter(fn($id) => $id !== $user->id);

        $users = User::whereIn('id', $userIds)
            ->select('id', 'name', 'email', 'avatar')
            ->get();

        return response()->json($users);
    }
}

