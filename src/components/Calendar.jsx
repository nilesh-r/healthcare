import React, { useState } from 'react';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const appointments = [
    { id: 1, title: 'Dentist Appointment', time: '09:00', doctor: 'Dr. Cameron Williamson', type: 'dentist' },
    { id: 2, title: 'Physiotherapy', time: '11:00', doctor: 'Dr. Kevin Djones', type: 'therapy' },
    { id: 3, title: 'Health Checkup', time: '14:00', doctor: 'Dr. Sarah Johnson', type: 'checkup' }
  ];

  // Get current month and year
  const currentMonth = selectedDate.getMonth();
  const currentYear = selectedDate.getFullYear();
  const today = new Date();
  
  // Get first day of the month and number of days
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  // Create array of days for the calendar
  const calendarDays = [];
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  
  // Add all days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const handleDateClick = (day) => {
    if (day) {
      const newDate = new Date(currentYear, currentMonth, day);
      setSelectedDate(newDate);
    }
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(currentMonth + direction);
    setSelectedDate(newDate);
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="p-6">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Calendar</h2>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigateMonth(-1)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              ←
            </button>
            <span className="text-lg font-semibold">
              {monthNames[currentMonth]} {currentYear}
            </span>
            <button 
              onClick={() => navigateMonth(1)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              →
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-2 mb-6">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center font-medium text-gray-600 py-2">{day}</div>
          ))}
          {calendarDays.map((day, index) => (
            <div 
              key={index} 
              onClick={() => handleDateClick(day)}
              className={`h-12 border rounded-lg flex items-center justify-center cursor-pointer transition-colors ${
                day ? 'hover:bg-gray-50' : ''
              } ${
                day && 
                day === selectedDate.getDate() && 
                currentMonth === selectedDate.getMonth() && 
                currentYear === selectedDate.getFullYear()
                  ? 'bg-blue-500 text-white' 
                  : ''
              } ${
                day &&
                day === today.getDate() && 
                currentMonth === today.getMonth() && 
                currentYear === today.getFullYear()
                  ? 'border-blue-500 border-2' 
                  : ''
              }`}
            >
              {day}
            </div>
          ))}
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">
            Appointments for {monthNames[selectedDate.getMonth()]} {selectedDate.getDate()}, {selectedDate.getFullYear()}
          </h3>
          {appointments.map(apt => (
            <div key={apt.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                {apt.time}
              </div>
              <div className="flex-1">
                <div className="font-medium">{apt.title}</div>
                <div className="text-sm text-gray-600">{apt.doctor}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;