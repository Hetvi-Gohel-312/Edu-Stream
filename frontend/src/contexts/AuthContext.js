import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../config/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, [token]);

  const fetchUser = async () => {
    try {
      const response = await api.get('/profile');
      setUser(response.data.user);
    } catch (error) {
      console.error('Error fetching user:', error);
      logout();
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await api.post('/login', { email, password });
      const { token: newToken, user: userData, success } = response.data;
      
      if (success) {
        setToken(newToken);
        setUser(userData);
        localStorage.setItem('token', newToken);
        return { success: true };
      } else {
        return { 
          success: false, 
          error: response.data.message || 'Login failed' 
        };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { 
        success: false, 
        error: error.response?.data?.message || error.message || 'Login failed' 
      };
    }
  };

  const register = async (name, email, password) => {
    try {
      const response = await api.post('/register', { name, email, password });
      const { token: newToken, user: userData, success } = response.data;
      
      if (success) {
        setToken(newToken);
        setUser(userData);
        localStorage.setItem('token', newToken);
        return { success: true };
      } else {
        return { 
          success: false, 
          error: response.data.message || 'Registration failed' 
        };
      }
    } catch (error) {
      console.error('Registration error:', error);
      return { 
        success: false, 
        error: error.response?.data?.message || error.message || 'Registration failed' 
      };
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
