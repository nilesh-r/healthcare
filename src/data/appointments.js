export const calendarData = {
  month: 'October 2021',
  days: [
    { date: 25, day: 'Mon', appointments: ['10:00'] },
    { date: 26, day: 'Tues', appointments: ['08:00', '09:00', '10:00'] },
    { date: 27, day: 'Wed', appointments: ['12:00', '13:00'] },
    { date: 28, day: 'Thurs', appointments: ['10:00', '11:00'] },
    { date: 29, day: 'Fri', appointments: ['14:00', '15:00', '16:00'] },
    { date: 30, day: 'Sat', appointments: ['12:00', '14:00'] },
    { date: 31, day: 'Sun', appointments: ['09:00', '10:00', '11:00'] }
  ]
};

export const upcomingAppointments = [
  { id: 1, title: 'Health checkup complete', time: '11:00 AM', day: 'Thursday', type: 'checkup' },
  { id: 2, title: 'Ophthalmologist', time: '14:00 PM', day: 'Thursday', type: 'specialist' },
  { id: 3, title: 'Cardiologist', time: '12:00 AM', day: 'Saturday', type: 'specialist' },
  { id: 4, title: 'Neurologist', time: '16:00 PM', day: 'Saturday', type: 'specialist' }
];

export const appointmentCards = [
  { id: 1, title: 'Dentist', time: '09:00-11:00', doctor: 'Dr. Cameron Williamson', type: 'dental' },
  { id: 2, title: 'Physiotherapy Appointment', time: '11:00-12:00', doctor: 'Dr. Kevin Djones', type: 'physio' }
];