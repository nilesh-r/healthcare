// src/components/Sidebar.js
import React from 'react';
import { useAuth } from '../App';
import { navigationItems } from '../data/navigationData';

const Sidebar = () => {
  const { activeView, setActiveView } = useAuth();

  const handleNavigation = (itemId) => {
    setActiveView(itemId);
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 px-4 py-6">
      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">General</h3>
        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
