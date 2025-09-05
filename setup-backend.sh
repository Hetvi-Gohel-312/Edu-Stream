#!/bin/bash

echo "Setting up EduStream Backend..."

# Navigate to backend directory
cd backend

# Install PHP dependencies
echo "Installing PHP dependencies..."
composer install

# Create .env file from example
echo "Creating environment file..."
cp env.example .env

# Generate application key
echo "Generating application key..."
php artisan key:generate

# Create database directory and file
echo "Setting up database..."
mkdir -p database
touch database/database.sqlite

# Run migrations
echo "Running database migrations..."
php artisan migrate

# Seed the database
echo "Seeding database..."
php artisan db:seed

echo "Backend setup complete!"
echo "You can now start the backend server with: php artisan serve"

