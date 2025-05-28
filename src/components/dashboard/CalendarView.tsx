import React from 'react';
import { ChevronLeft, ChevronRight, Bluetooth as Tooth, Dumbbell } from 'lucide-react';
import { calendarData, appointments } from '../../data/calendarData';

const CalendarView = () => {
  const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <span className="text-sm text-blue-600 border-b border-blue-600 mr-2">This Week</span>
          <ChevronDown className="h-4 w-4 text-blue-600" />
        </div>
        
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">October 2021</h2>
          <div className="flex ml-4">
            <button className="p-1 rounded-lg bg-slate-100">
              <ChevronLeft className="h-4 w-4 text-gray-600" />
            </button>
            <button className="p-1 rounded-lg bg-slate-100 ml-2">
              <ChevronRight className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-4">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-center text-sm font-medium text-gray-600">
            {day}
          </div>
        ))}
        
        {calendarData.map((day, index) => (
          <div 
            key={index} 
            className={`rounded-lg p-1 text-center ${
              day.isToday ? 'bg-blue-100' : ''
            }`}
          >
            <p className={`text-sm font-medium ${
              day.isWeekend ? 'text-gray-400' : 'text-gray-800'
            }`}>
              {day.date}
            </p>
            
            <div className="mt-1 space-y-1">
              {day.appointments.map((time, idx) => (
                <div 
                  key={idx} 
                  className={`text-[10px] p-1 rounded ${
                    time.highlight ? 'bg-blue-500 text-white' : 'text-gray-600'
                  }`}
                >
                  {time.time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {appointments.map((appointment, index) => (
          <div 
            key={index} 
            className={`rounded-xl p-4 ${
              appointment.type === 'dentist' ? 'bg-indigo-900' : 'bg-blue-100'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className={`font-medium ${
                  appointment.type === 'dentist' ? 'text-white' : 'text-gray-800'
                }`}>
                  {appointment.title}
                </h3>
                <p className={`text-sm ${
                  appointment.type === 'dentist' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {appointment.time}
                </p>
                <p className={`text-sm ${
                  appointment.type === 'dentist' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {appointment.doctor}
                </p>
              </div>
              
              {appointment.type === 'dentist' ? (
                <Tooth className="h-6 w-6 text-white" />
              ) : (
                <Dumbbell className="h-6 w-6 text-yellow-500" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ChevronDown = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default CalendarView;