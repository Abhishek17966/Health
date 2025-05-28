import React from 'react';
import { ChevronRight, Maximize } from 'lucide-react';
import { healthData } from '../../data/healthData';

const AnatomySection = () => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <div className="relative min-h-[440px] flex">
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=300" 
              alt="Human Anatomy" 
              className="max-h-[400px] object-contain mx-auto"
            />
            
            {/* Heart Indicator */}
            <div className="absolute top-[25%] left-[45%]">
              <div className="relative">
                <div className="bg-red-500 text-white px-3 py-1 rounded-lg text-xs whitespace-nowrap">
                  <span className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 w-2 h-2 rounded-full bg-red-500"></span>
                  Healthy Heart
                </div>
              </div>
            </div>
            
            {/* Leg Indicator */}
            <div className="absolute bottom-[20%] left-[32%]">
              <div className="relative">
                <div className="bg-cyan-400 text-white px-3 py-1 rounded-lg text-xs whitespace-nowrap">
                  <span className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400"></span>
                  Healthy Leg
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-48 space-y-6">
          {healthData.map((item, index) => (
            <div key={index} className="pb-4 border-b border-gray-100">
              <div className="flex items-center mb-2">
                <img 
                  src={item.icon} 
                  alt={item.name} 
                  className="w-6 h-6 mr-2"
                />
                <h3 className="font-medium">{item.name}</h3>
              </div>
              <p className="text-xs text-gray-500 mb-2">Date: {item.date}</p>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${item.status === 'good' ? 'bg-green-400' : 'bg-red-400'}`}
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
          
          <div className="flex justify-end">
            <button className="flex items-center text-sm text-blue-600">
              Details <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
        
        <button className="absolute top-2 right-2 p-1">
          <Maximize className="h-4 w-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default AnatomySection;