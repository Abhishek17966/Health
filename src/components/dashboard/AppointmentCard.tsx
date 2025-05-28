import React from 'react';
import { 
  Stethoscope, 
  Eye, 
  Heart, 
  Brain 
} from 'lucide-react';

interface Appointment {
  title: string;
  time: string;
  type: string;
  day: string;
}

interface AppointmentCardProps {
  appointment: Appointment;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment }) => {
  const getIcon = () => {
    switch (appointment.type) {
      case 'checkup':
        return <Stethoscope className="h-4 w-4 text-red-500" />;
      case 'ophthalmologist':
        return <Eye className="h-4 w-4 text-blue-500" />;
      case 'cardiologist':
        return <Heart className="h-4 w-4 text-red-500" />;
      case 'neurologist':
        return <Brain className="h-4 w-4 text-indigo-500" />;
      default:
        return <Stethoscope className="h-4 w-4 text-gray-500" />;
    }
  };
  
  return (
    <div className="bg-blue-50 rounded-xl p-4">
      <div className="flex justify-between">
        <div>
          <h3 className="font-medium text-gray-800">{appointment.title}</h3>
          <p className="text-sm text-gray-600">{appointment.time}</p>
        </div>
        {getIcon()}
      </div>
    </div>
  );
};

export default AppointmentCard;