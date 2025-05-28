import React from 'react';
import { activityData } from '../../data/activityData';

const ActivitySection = () => {
  const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Activity</h2>
        <span className="text-sm text-gray-500">3 appointments on this week</span>
      </div>
      
      <div className="h-44 flex items-end">
        <div className="w-full flex justify-between items-end">
          {activityData.map((day, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="w-8 flex flex-col items-center space-y-1">
                {day.appointments.map((appointment, idx) => (
                  <div 
                    key={idx}
                    className={`w-2 rounded-full ${appointment.color}`}
                    style={{ height: `${appointment.height}px` }}
                  ></div>
                ))}
              </div>
              <span className="text-xs text-gray-500">{daysOfWeek[index]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivitySection;