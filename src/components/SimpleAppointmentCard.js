// src/components/SimpleAppointmentCard.js
import React from 'react';

const SimpleAppointmentCard = ({ appointment }) => {
  const getCardColor = (type) => {
    switch (type) {
      case 'checkup': return 'bg-purple-100 border-purple-200';
      case 'specialist': return 'bg-blue-100 border-blue-200';
      default: return 'bg-gray-100 border-gray-200';
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case 'checkup': return '📋';
      case 'specialist': return '👨‍⚕️';
      default: return '📅';
    }
  };

  return (
    <div className={`p-4 rounded-lg border ${getCardColor(appointment.type)} transition-shadow hover:shadow-md`}>
      <div className="flex items-center space-x-2 mb-2">
        <span className="text-lg">{getIcon(appointment.type)}</span>
        <h4 className="font-medium text-gray-900">{appointment.title}</h4>
      </div>
      <p className="text-sm text-gray-600">{appointment.time}</p>
    </div>
  );
};

export default SimpleAppointmentCard;
