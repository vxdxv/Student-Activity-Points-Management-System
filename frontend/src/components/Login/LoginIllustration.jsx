
import React from 'react';

const LoginIllustration = () => {
  return (
    <svg
      className="w-full max-w-lg"
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background elements */}
      <circle cx="250" cy="250" r="200" fill="#8B5CF6" fillOpacity="0.4" />
      <circle cx="250" cy="250" r="150" fill="#8B5CF6" fillOpacity="0.3" />
      
      {/* Dashboard element */}
      <rect x="140" y="200" width="200" height="160" rx="10" fill="white" />
      
      {/* Dashboard content lines */}
      <rect x="165" y="225" width="70" height="10" rx="3" fill="#E2E8F0" />
      <rect x="165" y="245" width="150" height="6" rx="3" fill="#E2E8F0" />
      <rect x="165" y="260" width="150" height="6" rx="3" fill="#E2E8F0" />
      <rect x="165" y="275" width="150" height="6" rx="3" fill="#E2E8F0" />
      <rect x="165" y="290" width="150" height="6" rx="3" fill="#E2E8F0" />
      <rect x="165" y="305" width="150" height="6" rx="3" fill="#E2E8F0" />
      <rect x="165" y="320" width="90" height="6" rx="3" fill="#E2E8F0" />
      
      {/* Navigation dots */}
      <circle cx="180" cy="350" r="5" fill="#8B5CF6" />
      <circle cx="200" cy="350" r="5" fill="#E2E8F0" />
      <circle cx="220" cy="350" r="5" fill="#E2E8F0" />
      
      {/* Person 1 - standing */}
      <g transform="translate(300, 300) scale(0.8)">
        {/* Body */}
        <rect x="-15" y="-70" width="30" height="60" rx="10" fill="white" />
        
        {/* Head */}
        <circle cx="0" cy="-85" r="15" fill="white" />
        
        {/* Legs */}
        <rect x="-15" y="-10" width="15" height="50" rx="5" fill="white" />
        <rect x="0" y="-10" width="15" height="50" rx="5" fill="white" />
        
        {/* Arms */}
        <rect x="-40" y="-60" width="25" height="10" rx="5" fill="white" transform="rotate(-20)" />
        <rect x="15" y="-70" width="30" height="10" rx="5" fill="white" transform="rotate(20)" />
        
        {/* Phone */}
        <rect x="35" y="-75" width="10" height="20" rx="2" fill="#8B5CF6" />
      </g>
      
      {/* Person 2 - sitting */}
      <g transform="translate(400, 250) scale(0.8)">
        {/* Body */}
        <rect x="-15" y="-50" width="30" height="50" rx="10" fill="white" />
        
        {/* Head */}
        <circle cx="0" cy="-65" r="15" fill="white" />
        
        {/* Legs */}
        <rect x="-25" y="0" width="50" height="10" rx="5" fill="white" />
        <rect x="-25" y="0" width="10" height="30" rx="5" fill="white" />
        <rect x="15" y="0" width="10" height="30" rx="5" fill="white" />
        
        {/* Arms */}
        <rect x="-40" y="-40" width="25" height="10" rx="5" fill="white" />
        <rect x="15" y="-40" width="25" height="10" rx="5" fill="white" />
        
        {/* Laptop */}
        <rect x="-20" y="-30" width="40" height="25" rx="2" fill="#8B5CF6" />
        <rect x="-20" y="-5" width="40" height="2" rx="1" fill="white" />
      </g>
    </svg>
  );
};

export default LoginIllustration;
