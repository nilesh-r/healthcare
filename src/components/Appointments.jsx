import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const Appointments = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, patient: 'John Doe', doctor: 'Dr. Smith', time: '09:00', date: '2024-12-28', status: 'confirmed' },
    { id: 2, patient: 'Jane Smith', doctor: 'Dr. Johnson', time: '10:30', date: '2024-12-28', status: 'pending' },
    { id: 3, patient: 'Mike Wilson', doctor: 'Dr. Brown', time: '14:00', date: '2024-12-28', status: 'completed' }
  ]);

  return (
    <div className="p-6">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Appointments</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600">
            <Plus className="w-4 h-4" />
            New Appointment
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Patient</th>
                <th className="text-left py-3 px-4">Doctor</th>
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Time</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map(apt => (
                <tr key={apt.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{apt.patient}</td>
                  <td className="py-3 px-4">{apt.doctor}</td>
                  <td className="py-3 px-4">{apt.date}</td>
                  <td className="py-3 px-4">{apt.time}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      apt.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                      apt.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {apt.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Appointments;