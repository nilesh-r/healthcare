import React from 'react';
import { 
  User, Heart, Circle, Square
} from 'lucide-react';

const Dashboard = () => {
  const healthMetrics = [
    { name: 'Lungs', date: '12 Oct 2021', progress: 85, color: 'bg-red-500', icon: Heart },
    { name: 'Teeth', date: '12 Oct 2021', progress: 92, color: 'bg-green-500', icon: Circle },
    { name: 'Bone', date: '12 Oct 2021', progress: 65, color: 'bg-orange-500', icon: Square }
  ];

  const upcomingAppointments = [
    { title: 'Health checkup complete', time: '11:00 AM', type: 'checkup' },
    { title: 'Ophthalmologist', time: '14:00 PM', type: 'specialist' }
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Health Overview Card */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="relative">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f1f5f9'/%3E%3Cpath d='M50 150 Q200 50 350 150' stroke='%2306b6d4' stroke-width='3' fill='none'/%3E%3Ccircle cx='100' cy='120' r='40' fill='%23f87171'/%3E%3Ccircle cx='300' cy='180' r='35' fill='%2322d3ee'/%3E%3Ctext x='85' y='125' fill='white' font-size='12' font-weight='bold'%3EHeart%3C/text%3E%3Ctext x='285' y='185' fill='white' font-size='12' font-weight='bold'%3ELeg%3C/text%3E%3C/svg%3E"
                alt="Health Overview"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                ❤️ Healthy Heart
              </div>
              <div className="absolute bottom-4 left-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                🦵 Healthy Leg
              </div>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-900">Calendar</h3>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            <div className="text-gray-500 p-2">Mon</div>
            <div className="text-gray-500 p-2">Tue</div>
            <div className="text-gray-500 p-2">Wed</div>
            <div className="text-gray-500 p-2">Thu</div>
            <div className="text-gray-500 p-2">Fri</div>
            <div className="text-gray-500 p-2">Sat</div>
            <div className="text-gray-500 p-2">Sun</div>
            {[25, 26, 27, 28, 29, 30, 31].map((day, idx) => (
              <div key={day} className={`p-2 ${day === 28 ? 'bg-blue-500 text-white rounded-lg' : 'hover:bg-gray-100 rounded'}`}>
                {day}
              </div>
            ))}
          </div>
          <div className="mt-4 bg-blue-500 text-white p-3 rounded-lg">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="text-sm font-medium">Dentist</span>
            </div>
            <div className="text-sm opacity-90">09:00-11:00</div>
            <div className="text-sm opacity-90">Dr. Cameron Williamson</div>
          </div>
        </div>
      </div>

      {/* Health Metrics */}
      <div className="mt-6 bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-4">Health Metrics</h3>
        <div className="space-y-4">
          {healthMetrics.map((metric, idx) => {
            const IconComponent = metric.icon;
            return (
              <div key={idx} className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full ${metric.color} flex items-center justify-center`}>
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{metric.name}</span>
                    <span className="text-sm text-gray-500">{metric.date}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${metric.color}`}
                      style={{ width: `${metric.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Schedule & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">The Upcoming Schedule</h3>
          <div className="text-sm text-gray-600 mb-4">On Thursday</div>
          <div className="space-y-3">
            {upcomingAppointments.map((apt, idx) => (
              <div key={idx} className={`p-4 rounded-lg ${idx === 0 ? 'bg-purple-50' : 'bg-blue-50'}`}>
                <div className="font-medium text-gray-900">{apt.title}</div>
                <div className="text-sm text-gray-600">{apt.time}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-900">Activity</h3>
            <span className="text-sm text-gray-500">3 appointments this week</span>
          </div>
          <div className="grid grid-cols-7 gap-1 h-32">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
              <div key={day} className="flex flex-col items-center">
                <div className="text-xs text-gray-500 mb-2">{day}</div>
                <div className="flex-1 w-full flex flex-col justify-end gap-1">
                  <div className={`w-full rounded-sm ${idx === 1 || idx === 4 ? 'bg-cyan-400 h-8' : idx === 3 || idx === 6 ? 'bg-blue-500 h-12' : 'bg-gray-200 h-4'}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;