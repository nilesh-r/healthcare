// src/components/AnatomySection.js
import React from 'react';
import HealthStatusCards from './HealthStatusCards';

const AnatomySection = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
        <span className="text-sm text-gray-500">This Week</span>
      </div>
      
      <div className="flex space-x-8">
        <div className="flex-1">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=400&fit=crop"
              alt="Human Anatomy"
              className="w-80 h-96 object-cover rounded-lg"
            />
            <div className="absolute top-16 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              ❤️ Healthy Heart
            </div>
            <div className="absolute bottom-32 left-4 bg-cyan-400 text-white px-3 py-1 rounded-full text-sm font-medium">
              🦵 Healthy Leg
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <HealthStatusCards />
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;