
import React, { useState } from 'react';
import { UserCircle2, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LoginOption from '../../components/Login/LoginOption';
import LoginIllustration from '../../components/Login/LoginIllustration';

const Index = () => {
  const [activeOption, setActiveOption] = useState(null);
  const navigate = useNavigate();
  
  const handleOptionClick = (option) => {
    setActiveOption(option);
    console.log(`Selected login option: ${option}`);
    
    // Navigate to the appropriate login page
    if (option === 'student') {
      navigate('/student-login');
    } else if (option === 'staff') {
      navigate('/staff-login');
    }
  };

  const handleStaffClick = () => {
    navigate('/staff-login');
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row overflow-hidden">
      {/* Left panel */}
      <div className="w-full md:w-1/2 bg-black p-8 md:p-16 flex flex-col justify-center animate-fade-in">
        <div className="max-w-md mx-auto md:mx-0">
          <h1 className="text-3xl font-bold text-white mb-2 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Hello!
          </h1>
          <p className="text-gray-400 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Choose your login option
          </p>
          
          <div className="space-y-4">
            <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <LoginOption
                title="Student"
                description="Access the students' portal here."
                icon={<UserCircle2 size={24} />}
                onClick={() => handleOptionClick('student')}
              />
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <LoginOption
                title="Staff"
                description="Exclusive to staff members only."
                icon={<Users size={24} />}
                showArrow
                onClick={() => handleStaffClick()}
              />
            </div>
          </div>
          
          <div className="mt-12 flex justify-between items-center animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <p className="text-sm text-gray-500">
              Don't have an account?
            </p>
            <button 
              className="px-4 py-2 rounded-lg glass-button text-white flex items-center gap-2 group"
              onClick={() => console.log('Sign up clicked')}
            >
              Sign up
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Right panel */}
      <div className="w-full md:w-1/2 bg-purple-600 p-8 md:p-16 flex flex-col justify-center items-center relative overflow-hidden animate-fade-in">
        {/* Background circles */}
        <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] rounded-full bg-purple-500 opacity-30"></div>
          <div className="absolute bottom-[-10%] left-[-20%] w-[60%] h-[60%] rounded-full bg-purple-500 opacity-20"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-md animate-scale-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow">
            Welcome to Activity Management
          </h1>
          <p className="text-purple-200 mb-12">
            Login to access your account
          </p>
          
          <div className="w-full max-w-md mx-auto">
            <LoginIllustration />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
