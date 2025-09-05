@echo off
echo Starting EduStream Servers...

echo.
echo Starting Backend Server...
start "Backend Server" cmd /k "cd backend && php artisan serve"

echo Waiting 3 seconds for backend to start...
timeout /t 3 /nobreak > nul

echo.
echo Starting Frontend Server...
start "Frontend Server" cmd /k "cd frontend && npm start"

echo.
echo 🚀 Both servers are starting!
echo.
echo Backend API: http://localhost:8000
echo Frontend App: http://localhost:3000
echo.
echo Demo Login:
echo Email: demo@edustream.com
echo Password: password123
echo.
echo Press any key to close this window...
pause > nul

