// src/components/HealthStatusCards.js
import React from 'react';
import { healthStatusData } from '../data/healthData';

const HealthStatusCards = () => {
  return (
    <div className="space-y-4">
      {healthStatusData.map((item) => (
        <div key={item.id} className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              item.name === 'Lungs' ? 'bg-red-100' : 
              item.name === 'Teeth' ? 'bg-green-100' : 'bg-orange-100'
            }`}>
              {item.name === 'Lungs' && '🫁'}
              {item.name === 'Teeth' && '🦷'}
              {item.name === 'Bone' && '🦴'}
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${
                item.status === 'good' ? 'bg-green-500' :
                item.status === 'warning' ? 'bg-red-500' : 'bg-orange-500'
              }`}
              style={{ width: `${item.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
