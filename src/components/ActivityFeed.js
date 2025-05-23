// src/components/ActivityFeed.js
import React from 'react';

const ActivityFeed = () => {
  const chartData = [
    { day: 'Mon', cyan: 8, indigo: 4 },
    { day: 'Tues', cyan: 16, indigo: 10 },
    { day: 'Wed', cyan: 6, indigo: 8 },
    { day: 'Thurs', cyan: 10, indigo: 6 },
    { day: 'Fri', cyan: 20, indigo: 4 },
    { day: 'Sat', cyan: 12, indigo: 8 },
    { day: 'Sun', cyan: 14, indigo: 6 }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Activity</h3>
        <span className="text-sm text-gray-500">3 appointment on this week</span>
      </div>
      
      <div className="flex items-end space-x-2 h-32">
        {chartData.map((data, index) => (
          <div key={data.day} className="flex-1 flex flex-col items-center">
            <div className="flex flex-col space-y-1 mb-2">
              <div 
                className="w-4 bg-cyan-400 rounded-sm"
                style={{ height: `${data.cyan * 4}px` }}
              ></div>
              <div 
                className="w-4 bg-indigo-400 rounded-sm"
                style={{ height: `${data.indigo * 4}px` }}
              ></div>
            </div>
            <span className="text-xs text-gray-500">{data.day}</span>
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-center space-x-4 mt-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-cyan-400 rounded-sm"></div>
          <span className="text-xs text-gray-500">Appointments</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-indigo-400 rounded-sm"></div>
          <span className="text-xs text-gray-500">Check-ups</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
