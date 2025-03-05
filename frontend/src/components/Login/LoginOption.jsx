
import React from 'react';
import { ChevronRight } from 'lucide-react';

const LoginOption = ({
  title,
  description,
  icon,
  showArrow = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full p-6 rounded-xl glass-card glass-card-hover group text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-background"
    >
      <div className="flex flex-col space-y-1">
        <h3 className="text-lg font-medium text-white group-hover:text-purple-300 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <div className="flex items-center space-x-2">
        {icon && <div className="text-gray-400 group-hover:text-purple-300 transition-colors duration-200">{icon}</div>}
        {showArrow && (
          <ChevronRight 
            className="w-5 h-5 text-gray-500 group-hover:text-purple-300 transform group-hover:translate-x-1 transition-all duration-200" 
          />
        )}
      </div>
    </button>
  );
};

export default LoginOption;
