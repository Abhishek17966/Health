import React from 'react';
import AnatomySection from './dashboard/AnatomySection';
import CalendarView from './dashboard/CalendarView';
import UpcomingSchedule from './dashboard/UpcomingSchedule';
import ActivitySection from './dashboard/ActivitySection';

const DashboardContent = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnatomySection />
        <CalendarView />
        <UpcomingSchedule />
        <ActivitySection />
      </div>
    </div>
  );
};

export default DashboardContent;