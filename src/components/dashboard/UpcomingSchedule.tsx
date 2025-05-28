import React from 'react';
import { upcomingAppointments } from '../../data/upcomingData';
import AppointmentCard from './AppointmentCard';

const UpcomingSchedule = () => {
  // Group appointments by day
  const appointmentsByDay = upcomingAppointments.reduce((acc, appointment) => {
    if (!acc[appointment.day]) {
      acc[appointment.day] = [];
    }
    acc[appointment.day].push(appointment);
    return acc;
  }, {} as Record<string, typeof upcomingAppointments>);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-6">The Upcoming Schedule</h2>
      
      {Object.entries(appointmentsByDay).map(([day, appointments], idx) => (
        <div key={idx} className="mb-6">
          <h3 className="text-sm text-gray-500 mb-3">On {day}</h3>
          <div className="grid grid-cols-2 gap-4">
            {appointments.map((appointment, index) => (
              <AppointmentCard key={index} appointment={appointment} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;