import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Bars3Icon, 
  XMarkIcon, 
  SunIcon, 
  MoonIcon,
  ShoppingCartIcon,
  UserIcon
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-primary-100 dark:border-primary-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold gradient-text">EduStream</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Home
            </Link>
            <Link to="/courses" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Courses
            </Link>
            <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              About
            </Link>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900 hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors"
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              ) : (
                <MoonIcon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              )}
            </button>

            {/* Auth Buttons */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/cart" className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900 hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors">
                  <ShoppingCartIcon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </Link>
                <Link to="/dashboard" className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900 hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors">
                  <UserIcon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </Link>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Welcome, {user?.name}</span>
                  <button
                    onClick={handleLogout}
                    className="btn-secondary text-sm"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Login
                </Link>
                <Link to="/register" className="btn-primary">
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900 hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors"
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              ) : (
                <MoonIcon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900 hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 border border-primary-100 dark:border-primary-800">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/courses"
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              {isAuthenticated ? (
                <>
                  <Link
                    to="/cart"
                    className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cart
                  </Link>
                  <Link
                    to="/dashboard"
                    className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <div className="px-3 py-2 text-sm text-gray-500 dark:text-gray-400">
                    Welcome, {user?.name}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900 rounded-lg transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-3 py-2 btn-primary text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

