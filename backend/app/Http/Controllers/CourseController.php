<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    /**
     * Get all courses.
     */
    public function index(Request $request)
    {
        $courses = Course::with(['instructor'])
            ->where('status', 'published')
            ->orderBy('created_at', 'desc')
            ->paginate(12);

        return response()->json($courses);
    }

    /**
     * Get a specific course.
     */
    public function show(Course $course)
    {
        $course->load(['instructor', 'lessons']);
        
        return response()->json($course);
    }

    /**
     * Enroll user in a course.
     */
    public function enroll(Request $request, Course $course)
    {
        $user = $request->user();
        
        // Check if user is already enrolled
        if ($user->enrolledCourses()->where('course_id', $course->id)->exists()) {
            return response()->json([
                'message' => 'You are already enrolled in this course'
            ], 422);
        }

        // Enroll the user
        $user->enrolledCourses()->attach($course->id, [
            'enrolled_at' => now(),
            'progress' => 0,
        ]);

        // Update course students count
        $course->increment('students_count');

        return response()->json([
            'message' => 'Successfully enrolled in course',
            'course' => $course->fresh()
        ]);
    }
}

