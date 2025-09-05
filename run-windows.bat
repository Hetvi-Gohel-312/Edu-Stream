@echo off
echo Starting EduStream Development Environment...

echo.
echo Starting Laravel backend server...
start "Backend Server" cmd /k "cd backend && php artisan serve"

echo Waiting for backend to start...
timeout /t 5 /nobreak > nul

echo.
echo Starting React frontend server...
start "Frontend Server" cmd /k "cd frontend && npm start"

echo.
echo 🚀 EduStream is now running!
echo.
echo Frontend: http://localhost:3000
echo Backend API: http://localhost:8000
echo.
echo Demo Credentials:
echo Email: demo@edustream.com
echo Password: password123
echo.
echo Press any key to close this window...
pause > nul

