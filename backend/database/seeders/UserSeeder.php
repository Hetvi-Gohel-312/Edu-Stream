<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create demo user
        User::create([
            'name' => 'Demo User',
            'email' => 'demo@edustream.com',
            'password' => Hash::make('password123'),
            'role' => 'student',
            'bio' => 'Passionate learner and developer',
        ]);

        // Create instructor
        User::create([
            'name' => 'John Doe',
            'email' => 'john@edustream.com',
            'password' => Hash::make('password123'),
            'role' => 'instructor',
            'bio' => 'Senior Full-Stack Developer with 10+ years of experience',
        ]);

        // Create more demo users
        User::create([
            'name' => 'Jane Smith',
            'email' => 'jane@edustream.com',
            'password' => Hash::make('password123'),
            'role' => 'instructor',
            'bio' => 'UI/UX Designer and Frontend Specialist',
        ]);

        User::create([
            'name' => 'Mike Johnson',
            'email' => 'mike@edustream.com',
            'password' => Hash::make('password123'),
            'role' => 'student',
            'bio' => 'Aspiring developer learning new technologies',
        ]);
    }
}

