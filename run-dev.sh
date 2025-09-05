#!/bin/bash

echo "Starting EduStream Development Environment..."

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check if required tools are installed
if ! command_exists php; then
    echo "Error: PHP is not installed. Please install PHP 8.2+ and try again."
    exit 1
fi

if ! command_exists composer; then
    echo "Error: Composer is not installed. Please install Composer and try again."
    exit 1
fi

if ! command_exists node; then
    echo "Error: Node.js is not installed. Please install Node.js 18+ and try again."
    exit 1
fi

if ! command_exists npm; then
    echo "Error: npm is not installed. Please install npm and try again."
    exit 1
fi

echo "All required tools are installed. Starting servers..."

# Start backend in background
echo "Starting Laravel backend server..."
cd backend
php artisan serve --host=0.0.0.0 --port=8000 &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 3

# Start frontend in background
echo "Starting React frontend server..."
cd ../frontend
npm start &
FRONTEND_PID=$!

echo ""
echo "🚀 EduStream is now running!"
echo ""
echo "Frontend: http://localhost:3000"
echo "Backend API: http://localhost:8000"
echo ""
echo "Demo Credentials:"
echo "Email: demo@edustream.com"
echo "Password: password123"
echo ""
echo "Press Ctrl+C to stop both servers"

# Function to cleanup background processes
cleanup() {
    echo ""
    echo "Stopping servers..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    echo "Servers stopped."
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Wait for processes
wait

