import React, { useState, createContext, useContext } from 'react';
import { Grid3x3, Clock, BarChart3, Activity, MessageCircle, HelpCircle } from 'lucide-react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import Login from './components/Login';
import Signup from './components/Signup';
import Calendar from './components/Calendar';
import Appointments from './components/Appointments';
import Statistics from './components/Statistics';
import Tests from './components/Tests';
import History from './components/History';
import Chat from './components/Chat';
import Settings from './components/Settings';
import Support from './components/Support';
import Dashboard from './components/Dashboard';
import { navigationItems } from './data/navigationData';
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
  
  // State to track which main content to show (dashboard/calendar)
  const [activeView, setActiveView] = useState('dashboard');

  // Login function
  const login = (userData) => {
    setUser(userData);
    console.log('User logged in:', userData);
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setCurrentView('login');
    setActiveView('dashboard'); // Reset to dashboard on logout
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
  

  // Function to render main content based on active view
  const renderMainContent = () => {
    switch(activeView) {
      case 'calendar':
        return <Calendar />;
      case 'Dashboard':
        return <Dashboard />;
      case 'Appointments':
        return <Appointments />;
      case 'analytics':
        return <Statistics />;
      case 'Tests':
        return <Tests />;
      case 'patients':
        return <History />;
      case 'message':
        return <Chat />;
      case 'Setting':
        return <Settings />;
      case 'help':
        return <Support />;
      case 'dashboard': 
      default:
        return <DashboardMainContent />;
    }
  };

  // Context value to share across components
  const authContextValue = {
    user,
    login,
    logout,
    activeView,
    setActiveView,
    navigationItems
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {user ? (
        // If user is logged in, show your existing dashboard
        <div className="h-screen flex flex-col bg-gray-50">
          <Header />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            {renderMainContent()}
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
