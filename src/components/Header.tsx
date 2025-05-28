import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm z-10 py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">
            <span className="text-cyan-500">Health</span>
            <span>care.</span>
          </h1>
        </div>
        
        <div className="flex-1 mx-16">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="bg-slate-50 border border-slate-200 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Search"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="relative p-2">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-cyan-500"></span>
          </button>
          
          <div className="flex items-center">
            <div className="h-9 w-9 rounded-lg bg-cyan-500 flex items-center justify-center">
              <span className="text-white text-sm font-medium">👨‍⚕️</span>
            </div>
          </div>
          
          <button className="h-9 w-9 rounded-lg bg-indigo-700 flex items-center justify-center">
            <Plus className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;