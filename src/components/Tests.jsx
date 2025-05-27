import React from 'react';
import { Plus } from 'lucide-react';

const Tests = () => {
  const tests = [
    { id: 1, name: 'Blood Test', patient: 'John Doe', date: '2024-12-28', status: 'completed', result: 'Normal' },
    { id: 2, name: 'X-Ray', patient: 'Jane Smith', date: '2024-12-28', status: 'pending', result: '-' },
    { id: 3, name: 'MRI Scan', patient: 'Mike Wilson', date: '2024-12-27', status: 'completed', result: 'Review Required' }
  ];

  return (
    <div className="p-6">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Tests</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600">
            <Plus className="w-4 h-4" />
            Schedule Test
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Test Name</th>
                <th className="text-left py-3 px-4">Patient</th>
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Result</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tests.map(test => (
                <tr key={test.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{test.name}</td>
                  <td className="py-3 px-4">{test.patient}</td>
                  <td className="py-3 px-4">{test.date}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      test.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {test.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{test.result}</td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800">View</button>
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

export default Tests;