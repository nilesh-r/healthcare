import React from 'react';
import { Clock } from 'lucide-react';

const History = () => {
  const historyItems = [
    { id: 1, action: 'Appointment scheduled', patient: 'John Doe', time: '2 hours ago', type: 'appointment' },
    { id: 2, action: 'Test results uploaded', patient: 'Jane Smith', time: '4 hours ago', type: 'test' },
    { id: 3, action: 'Patient registered', patient: 'Mike Wilson', time: '1 day ago', type: 'registration' }
  ];

  return (
    <div className="p-6">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">History</h2>
        <div className="space-y-4">
          {historyItems.map(item => (
            <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                item.type === 'appointment' ? 'bg-blue-100' :
                item.type === 'test' ? 'bg-green-100' : 'bg-purple-100'
              }`}>
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="font-medium">{item.action}</div>
                <div className="text-sm text-gray-600">{item.patient}</div>
              </div>
              <div className="text-sm text-gray-500">{item.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;