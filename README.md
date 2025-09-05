# EduStream - Online Learning Platform

A modern, responsive fullstack web application for online learning with a beautiful lavender theme.

## 🌈 Features

- **Modern UI/UX**: Lavender-themed design with dark mode support
- **Authentication**: Secure login and registration with Laravel Sanctum
- **Course Management**: Browse and enroll in courses
- **Interactive Dashboard**: Progress tracking with beautiful charts
- **Shopping Cart**: Course purchasing with promo codes
- **Real-time Chat**: Instructor-student communication
- **Responsive Design**: Works perfectly on all devices

## 🎨 Theme

- **Primary**: #6D28D9 (deep violet)
- **Secondary**: #A78BFA (lavender)
- **Accent**: #F5F3FF (soft lilac)
- **Dark Mode**: Muted deep violet with glowing lavender highlights

## 🛠 Tech Stack

### Frontend
- React 18
- Tailwind CSS
- Headless UI
- Recharts
- Axios
- React Router

### Backend
- Laravel 11
- MySQL/SQLite
- Laravel Sanctum (Authentication)
- Laravel WebSockets (Real-time features)

## 🚀 Quick Start

### Prerequisites
- PHP 8.2+
- Composer
- Node.js 18+
- npm

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
composer install
```

3. Set up environment:
```bash
cp env.example .env
php artisan key:generate
```

4. Set up database:
```bash
mkdir -p database
touch database/database.sqlite
php artisan migrate
php artisan db:seed
```

5. Start the backend server:
```bash
php artisan serve
```

The API will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
echo "REACT_APP_API_URL=http://localhost:8000/api" > .env
```

4. Start the development server:
```bash
npm start
```

The frontend will be available at `http://localhost:3000`

## 📁 Project Structure

```
/project-root
├── /frontend          # React frontend application
│   ├── /src
│   │   ├── /components    # Reusable UI components
│   │   ├── /pages        # Page components
│   │   ├── /contexts     # React contexts (Auth, Theme)
│   │   └── /config       # API configuration
│   └── package.json
├── /backend           # Laravel backend API
│   ├── /app
│   │   ├── /Http/Controllers
│   │   └── /Models
│   ├── /database
│   │   ├── /migrations
│   │   └── /seeders
│   └── composer.json
└── README.md
```

## 🔑 Demo Credentials

- **Email**: demo@edustream.com
- **Password**: password123

## 🎯 Key Features

### Homepage
- Hero section with gradient background
- Media gallery (videos, audio, images)
- Statistics showcase
- Feature highlights

### Authentication
- Secure login/register forms
- Password validation
- Demo credentials provided
- Responsive design

### Dashboard
- Overview with statistics
- Course progress tracking
- Interactive charts (Recharts)
- Recent courses
- Settings management

### Shopping Cart
- Course selection and management
- Promo code system
- Price calculation
- Secure checkout flow

### Chat System
- Real-time messaging
- Instructor-student communication
- Message history
- User management

## 🚀 Deployment

### Backend Deployment
1. Set up your production environment
2. Configure database (MySQL recommended)
3. Set environment variables
4. Run migrations and seeders
5. Configure web server (Nginx/Apache)

### Frontend Deployment
1. Build the production version:
```bash
npm run build
```
2. Deploy the `build` folder to your web server
3. Configure API URL for production

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
```
APP_NAME="EduStream API"
APP_URL=http://localhost:8000
DB_CONNECTION=sqlite
DB_DATABASE=database/database.sqlite
SANCTUM_STATEFUL_DOMAINS=localhost,127.0.0.1,localhost:3000
```

#### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:8000/api
```

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Customization

### Theme Colors
Edit `frontend/tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    // ... more shades
  }
}
```

### Components
All components are modular and reusable. They can be found in `frontend/src/components/`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email support@edustream.com or create an issue in the repository.

---

Built with ❤️ using React and Laravel

