@echo off
echo Setting up EduStream for Windows...

echo.
echo Setting up Backend...
cd backend

echo Installing PHP dependencies...
composer install

echo Creating environment file...
copy env.example .env

echo Generating application key...
php artisan key:generate

echo Setting up database...
if not exist database mkdir database
echo. > database\database.sqlite

echo Running database migrations...
php artisan migrate

echo Seeding database...
php artisan db:seed

echo.
echo Backend setup complete!
echo.

echo Setting up Frontend...
cd ..\frontend

echo Installing Node.js dependencies...
call npm install

echo Creating environment file...
echo REACT_APP_API_URL=http://localhost:8000/api > .env

echo.
echo Frontend setup complete!
echo.
echo You can now start the servers:
echo Backend: cd backend ^&^& php artisan serve
echo Frontend: cd frontend ^&^& npm start
echo.
pause

