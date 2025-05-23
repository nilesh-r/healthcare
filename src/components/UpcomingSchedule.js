// src/components/UpcomingSchedule.js
import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import { upcomingAppointments } from '../data/appointments';

const UpcomingSchedule = () => {
  const thursdayAppointments = upcomingAppointments.filter(apt => apt.day === 'Thursday');
  const saturdayAppointments = upcomingAppointments.filter(apt => apt.day === 'Saturday');

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">The Upcoming Schedule</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-gray-500 mb-3">On Thursday</h4>
          <div className="grid grid-cols-2 gap-3">
            {thursdayAppointments.map((appointment) => (
              <SimpleAppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-500 mb-3">On Saturday</h4>
          <div className="grid grid-cols-2 gap-3">
            {saturdayAppointments.map((appointment) => (
              <SimpleAppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
