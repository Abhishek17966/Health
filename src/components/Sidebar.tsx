import React from 'react';
import { LayoutDashboard, History, Calendar, CalendarClock, BarChart2, FlaskRound as Flask, MessageSquare, HelpCircle, Settings } from 'lucide-react';

const Sidebar = () => {
  const generalMenuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
    { icon: <History size={20} />, label: 'History', active: false },
    { icon: <Calendar size={20} />, label: 'Calendar', active: false },
    { icon: <CalendarClock size={20} />, label: 'Appointments', active: false },
    { icon: <BarChart2 size={20} />, label: 'Statistics', active: false },
    { icon: <Flask size={20} />, label: 'Tests', active: false },
  ];

  const toolsMenuItems = [
    { icon: <MessageSquare size={20} />, label: 'Chat', active: false },
    { icon: <HelpCircle size={20} />, label: 'Support', active: false },
    { icon: <Settings size={20} />, label: 'Setting', active: false },
  ];

  return (
    <aside className="w-56 bg-white shadow-sm z-10">
      <div className="h-full px-3 py-4 flex flex-col">
        <div className="mb-6 pl-3">
          <h1 className="text-xl font-bold">
            <span className="text-cyan-500">Health</span>
            <span>care.</span>
          </h1>
        </div>
        
        <div className="space-y-6 flex-1">
          <div>
            <h2 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              General
            </h2>
            <ul className="mt-3 space-y-1">
              {generalMenuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${
                      item.active 
                        ? 'bg-cyan-50 text-cyan-500' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Tools
            </h2>
            <ul className="mt-3 space-y-1">
              {toolsMenuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${
                      item.active 
                        ? 'bg-cyan-50 text-cyan-500' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;