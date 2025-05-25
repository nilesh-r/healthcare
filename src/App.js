// src/App.js
import React, { useState, createContext, useContext } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

// Create Authentication Context
const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const App = () => {
  // State to track current user
  const [user, setUser] = useState(null);
  
  // State to track which page to show (login/signup)
  const [currentView, setCurrentView] = useState('login');

  // Login function
  const login = (userData) => {
    setUser(userData);
    console.log('User logged in:', userData);
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setCurrentView('login');
    console.log('User logged out');
  };

  // Google login simulation
  const handleGoogleLogin = () => {
    login({
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      loginMethod: 'Google OAuth'
    });
  };

  // Context value to share across components
  const authContextValue = {
    user,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {user ? (
        // If user is logged in, show your existing dashboard
        <div className="h-screen flex flex-col bg-gray-50">
          <Header />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <DashboardMainContent />
          </div>
        </div>
      ) : (
        // If user is not logged in, show Login/Signup
        <>
          {currentView === 'login' ? (
            <Login 
              onSwitchToSignup={() => setCurrentView('signup')}
              onGoogleLogin={handleGoogleLogin}
              onLogin={login}
            />
          ) : (
            <Signup 
              onSwitchToLogin={() => setCurrentView('login')}
              onSignup={login}
            />
          )}
        </>
      )}
    </AuthContext.Provider>
  );
};

export default App;
