#!/bin/bash

echo "Setting up EduStream Frontend..."

# Navigate to frontend directory
cd frontend

# Install Node.js dependencies
echo "Installing Node.js dependencies..."
npm install

# Create .env file
echo "Creating environment file..."
echo "REACT_APP_API_URL=http://localhost:8000/api" > .env

echo "Frontend setup complete!"
echo "You can now start the frontend development server with: npm start"

