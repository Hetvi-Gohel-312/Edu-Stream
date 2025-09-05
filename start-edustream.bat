@echo off
echo Starting EduStream Learning Platform...

echo.
echo [1/3] Starting Backend Server...
start "EduStream Backend" cmd /k "cd backend && php artisan serve --host=127.0.0.1 --port=8000"

echo.
echo [2/3] Waiting for backend to start...
timeout /t 5 /nobreak > nul

echo.
echo [3/3] Starting Frontend Server...
start "EduStream Frontend" cmd /k "cd frontend && npm start"

echo.
echo ✅ EduStream is starting up!
echo.
echo 🌐 Frontend: http://localhost:3000
echo 🔧 Backend API: http://127.0.0.1:8000
echo.
echo 🔑 Demo Login Credentials:
echo    Email: demo@edustream.com
echo    Password: password123
echo.
echo 📝 Test Backend: Open test-backend.html in your browser
echo.
echo Press any key to close this window...
pause > nul

