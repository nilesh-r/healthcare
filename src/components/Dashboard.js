// src/components/Dashboard.js

import React from 'react';
import { Heart, User, Mail } from 'lucide-react'; // Make sure 'lucide-react' is installed

const Dashboard = () => {
  // Mock user data (since no useAuth hook is defined)
  const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    loginMethod: "Google",
  };

  const logout = () => {
    alert("Logged out!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-cyan-500">Healthcare.</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Welcome, {user.name || user.email}</span>
            <button 
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-3">
              <Heart className="text-red-500" size={24} />
              <div>
                <h3 className="font-semibold">Health Status</h3>
                <p className="text-gray-600">All systems normal</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-3">
              <User className="text-blue-500" size={24} />
              <div>
                <h3 className="font-semibold">Next Appointment</h3>
                <p className="text-gray-600">Thursday, 11:00 AM</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-3">
              <Mail className="text-green-500" size={24} />
              <div>
                <h3 className="font-semibold">Messages</h3>
                <p className="text-gray-600">3 new messages</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">User Profile</h2>
          <div className="space-y-2">
            <p><strong>Name:</strong> {user.name || 'Not provided'}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone || 'Not provided'}</p>
            <p><strong>Login Method:</strong> {user.loginMethod}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
