import React, { useState, useContext } from 'react';
import { ChevronRight, UserCircle2, Users, ArrowRight } from 'lucide-react';
import twoPersonImg from '../../assets/twopersons.png';
import { AuthContext } from '../../context/AuthContext';
const LoginPage = () => {

  const { loginstudent, loginfa } = useContext(AuthContext);

  return (
    <div className="login-container">
      <style>{`
        /* Container & Global Styles */
        .login-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          overflow: hidden;
          font-family: Arial, sans-serif;
        }
        @media (min-width: 768px) {
          .login-container {
            flex-direction: row;
          }
        }
        .left-panel,
        .right-panel {
          width: 100%;
          padding: 2rem;
        }
        @media (min-width: 768px) {
          .left-panel,
          .right-panel {
            width: 50%;
            padding: 4rem;
          }
        }

        /* Left Panel */
        .left-panel {
          background-color: #000;
          display: flex;
          flex-direction: column;
          justify-content: center;
          animation: fadeIn 0.5s ease forwards;
        }
        .left-panel .max-width-md {
          max-width: 28rem;
          margin: 0 auto;
        }
        .left-panel h1 {
          font-size: 2rem;
          font-weight: bold;
          color: #fff;
          margin-bottom: 0.5rem;
          animation: fadeInUp 0.5s ease forwards;
        }
        .left-panel .subheading {
          color: #a3a3a3;
          margin-bottom: 2rem;
          animation: fadeInUp 0.5s ease forwards;
        }
        .login-options {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .login-option {
          width: 100%;
          padding: 1.5rem;
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: background 0.3s, transform 0.3s;
        }
        .login-option:hover {
          background: rgba(255, 255, 255, 0.15);
        }
        .login-option:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.5);
        }
        .option-text h3 {
          font-size: 1.125rem;
          font-weight: 500;
          color: #fff;
          margin: 0;
          transition: color 0.2s;
        }
        .login-option:hover .option-text h3 {
          color: #d6bcfa;
        }
        .option-text p {
          font-size: 0.875rem;
          color: #a0a0a0;
          margin: 0;
        }
        .option-icon {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .option-icon svg {
          transition: color 0.2s, transform 0.2s;
        }
        .login-option:hover .option-icon svg {
          color: #d6bcfa;
        }
        .signup-section {
          margin-top: 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          animation: fadeInUp 0.5s ease forwards;
        }
        .signup-section p {
          font-size: 0.875rem;
          color: #808080;
          margin: 0;
        }
        .signup-button {
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: background 0.3s;
        }
        .signup-button:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        /* Right Panel */
        .right-panel {
          background-color: #8B5CF6;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          animation: fadeIn 0.5s ease forwards;
        }
        .right-panel .content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 28rem;
          animation: scaleIn 0.5s ease forwards;
        }
        .right-panel h1 {
          font-size: 2.5rem;
          font-weight: bold;
          color: #fff;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .right-panel p {
          color: #d1c4e9;
          margin-bottom: 3rem;
        }
        .bg-circle1,
        .bg-circle2 {
          position: absolute;
          border-radius: 50%;
          background: #7e3af2;
        }
        .bg-circle1 {
          top: -20%;
          right: -10%;
          width: 80%;
          height: 80%;
          opacity: 0.3;
        }
        .bg-circle2 {
          bottom: -10%;
          left: -20%;
          width: 60%;
          height: 60%;
          opacity: 0.2;
        }
        .illustration {
          width: 100%;
          max-width: 28rem;
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
      <div className="left-panel">
        <div className="max-width-md">
          <h1 style={{ animationDelay: '0.1s' }}>Hello!</h1>
          <p className="subheading" style={{ animationDelay: '0.2s' }}>
            Choose your login option
          </p>
          <div className="login-options">
            <div style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <button
                className="login-option"
                onClick={() => loginstudent()}
              >
                <div className="option-text">
                  <h3>Student</h3>
                  <p>Access the students' portal here.</p>
                </div>
                <div className="option-icon">
                  <UserCircle2 size={24} />
                </div>
              </button>
            </div>
            <div style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <button className="login-option" onClick={() => loginfa()}>
                <div className="option-text">
                  <h3>Staff</h3>
                  <p>Exclusive to staff members only.</p>
                </div>
                <div className="option-icon">
                  <Users size={24} />
                  <ChevronRight
                    size={20}
                    style={{ transform: 'translateX(0)', transition: 'transform 0.2s' }}
                  />
                </div>
              </button>
            </div>
          </div >
        </div >
      </div >
      <div className="right-panel">
        <div className="bg-circle1"></div>
        <div className="bg-circle2"></div>
        <div className="content">
          <h1>Welcome to Activity Management</h1>
          <p>Login to access your account</p>
          <img src={twoPersonImg} alt="TwoPersons" />
        </div>
      </div>
    </div >
  );
};

export default LoginPage;
