// src/components/CalendarView.js
import React from 'react';
import { calendarData, appointmentCards } from '../data/appointments';

const CalendarView = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{calendarData.month}</h3>
        <div className="flex space-x-2">
          <button className="p-1 hover:bg-gray-100 rounded">←</button>
          <button className="p-1 hover:bg-gray-100 rounded">→</button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-4 mb-6">
        {calendarData.days.map((day) => (
          <div key={day.date} className="text-center">
            <div className="text-xs text-gray-500 mb-1">{day.day}</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">{day.date}</div>
            <div className="space-y-1">
              {day.appointments.map((time, index) => (
                <div key={index} className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {appointmentCards.map((card) => (
          <div key={card.id} className={`p-4 rounded-lg ${
            card.type === 'dental' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-900'
          }`}>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-lg">
                {card.type === 'dental' ? '🦷' : '🏃‍♂️'}
              </span>
              <h4 className="font-medium">{card.title}</h4>
            </div>
            <p className="text-sm opacity-90">{card.time}</p>
            <p className="text-sm opacity-75">{card.doctor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
