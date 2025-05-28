export const calendarData = [
  { date: 25, isToday: false, isWeekend: false, appointments: [
    { time: '10:00', highlight: false },
    { time: '11:00', highlight: false },
    { time: '12:00', highlight: false },
  ]},
  { date: 26, isToday: false, isWeekend: false, appointments: [
    { time: '08:00', highlight: false },
    { time: '09:00', highlight: true },
    { time: '10:00', highlight: false },
  ]},
  { date: 27, isToday: false, isWeekend: false, appointments: [
    { time: '12:00', highlight: false },
    { time: '-', highlight: false },
    { time: '13:00', highlight: false },
  ]},
  { date: 28, isToday: true, isWeekend: false, appointments: [
    { time: '10:00', highlight: false },
    { time: '11:00', highlight: false },
    { time: '-', highlight: false },
  ]},
  { date: 29, isToday: false, isWeekend: false, appointments: [
    { time: '-', highlight: false },
    { time: '14:00', highlight: false },
    { time: '16:00', highlight: false },
  ]},
  { date: 30, isToday: false, isWeekend: true, appointments: [
    { time: '12:00', highlight: false },
    { time: '14:00', highlight: false },
    { time: '15:00', highlight: false },
  ]},
  { date: 31, isToday: false, isWeekend: true, appointments: [
    { time: '09:00', highlight: false },
    { time: '10:00', highlight: false },
    { time: '11:00', highlight: false },
  ]},
];

export const appointments = [
  {
    type: 'dentist',
    title: 'Dentist',
    time: '09:00-11:00',
    doctor: 'Dr. Cameron Williamson',
  },
  {
    type: 'physiotherapy',
    title: 'Physiotherapy Appointment',
    time: '11:00-12:00',
    doctor: 'Dr. Kevin Dones',
  },
];