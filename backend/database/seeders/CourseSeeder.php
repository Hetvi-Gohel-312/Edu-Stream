<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\User;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $instructors = User::where('role', 'instructor')->get();

        $courses = [
            [
                'title' => 'Complete React Developer Course',
                'description' => 'Master React from basics to advanced concepts including hooks, context, and state management.',
                'price' => 99.99,
                'thumbnail' => 'https://images.unsplash.com/photo-1633356122544-f134324a6cce?w=400&h=225&fit=crop',
                'duration' => 900, // 15 hours
                'level' => 'intermediate',
                'category' => 'Web Development',
                'status' => 'published',
                'rating' => 4.8,
                'students_count' => 1250,
            ],
            [
                'title' => 'Advanced JavaScript Masterclass',
                'description' => 'Deep dive into advanced JavaScript concepts, ES6+, async programming, and modern patterns.',
                'price' => 79.99,
                'thumbnail' => 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=225&fit=crop',
                'duration' => 720, // 12 hours
                'level' => 'advanced',
                'category' => 'Programming',
                'status' => 'published',
                'rating' => 4.9,
                'students_count' => 890,
            ],
            [
                'title' => 'CSS & Design Systems',
                'description' => 'Learn modern CSS techniques, design systems, and responsive web design principles.',
                'price' => 59.99,
                'thumbnail' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop',
                'duration' => 480, // 8 hours
                'level' => 'beginner',
                'category' => 'Web Design',
                'status' => 'published',
                'rating' => 4.7,
                'students_count' => 2100,
            ],
            [
                'title' => 'Node.js Backend Development',
                'description' => 'Build scalable backend applications with Node.js, Express, and MongoDB.',
                'price' => 89.99,
                'thumbnail' => 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=225&fit=crop',
                'duration' => 600, // 10 hours
                'level' => 'intermediate',
                'category' => 'Backend Development',
                'status' => 'published',
                'rating' => 4.6,
                'students_count' => 680,
            ],
            [
                'title' => 'Python for Data Science',
                'description' => 'Learn Python programming for data analysis, visualization, and machine learning.',
                'price' => 119.99,
                'thumbnail' => 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=225&fit=crop',
                'duration' => 1200, // 20 hours
                'level' => 'intermediate',
                'category' => 'Data Science',
                'status' => 'published',
                'rating' => 4.9,
                'students_count' => 1500,
            ],
            [
                'title' => 'UI/UX Design Fundamentals',
                'description' => 'Master the principles of user interface and user experience design.',
                'price' => 69.99,
                'thumbnail' => 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=225&fit=crop',
                'duration' => 540, // 9 hours
                'level' => 'beginner',
                'category' => 'Design',
                'status' => 'published',
                'rating' => 4.8,
                'students_count' => 1800,
            ],
        ];

        foreach ($courses as $courseData) {
            Course::create(array_merge($courseData, [
                'instructor_id' => $instructors->random()->id,
            ]));
        }
    }
}

