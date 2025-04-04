import React, { createContext, useState, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) setUser(storedUser);
    setLoading(false); // Set loading to false after checking localStorage
  }, []);

  const loginstudent = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log('Token Response:', tokenResponse);
      try {
        const { data } = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
<<<<<<< HEAD

        console.log('Google User Data:', data);

        const response = await axios.post('/api/auth/login-student', {
          email: data.email,
        });

        if (response.status === 200) {
          localStorage.setItem('user', JSON.stringify(data));
          setUser(data);
=======
        console.log('Google User Data:', data);
        const response = await axios.post('/api/auth/login-student', {
          email: data.email,
        });
  
        if (response.status === 200) {
          const studentDetails = response.data;
          studentDetails.role = "student"; // Ensure role is stored
          localStorage.setItem('user', JSON.stringify(studentDetails));
          setUser(studentDetails);
>>>>>>> NEW-FINAL-MAIN
          navigate('/student/dashboard');
        } else {
          console.error('Authentication failed: ', response.data);
        }
      } catch (error) {
        console.error('Error during login: ', error);
      }
    },
    onError: () => {
      console.error('Login Failed');
    },
  });
<<<<<<< HEAD
=======
  

>>>>>>> NEW-FINAL-MAIN

  const loginfa = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log('Token Response:', tokenResponse);
      try {
        const { data } = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
<<<<<<< HEAD

        console.log('Google User Data:', data);

        const response = await axios.post('/api/auth/login-fa', {
          email: data.email,
        });

        if (response.status === 200) {
          localStorage.setItem('user', JSON.stringify(data));
          setUser(data);
=======
  
        console.log('Google User Data:', data);
  
        const response = await axios.post('/api/auth/login-fa', {
          email: data.email,
        });
  
        if (response.status === 200) {
          const faDetails = response.data;
          faDetails.role = "fa"; // Ensure role is stored
          localStorage.setItem('user', JSON.stringify(faDetails)); // Store FA details under 'user'
          setUser(faDetails);
>>>>>>> NEW-FINAL-MAIN
          navigate('/fa/dashboard');
        } else {
          console.error('Authentication failed: ', response.data);
        }
      } catch (error) {
        console.error('Error during login: ', error);
      }
    },
    onError: () => {
      console.error('Login Failed');
    },
  });
<<<<<<< HEAD

  const logout = () => {
    localStorage.clear();
    setUser(null);
    navigate('/login');
  };
=======
  
const logout = () => {
  localStorage.clear();
  setUser(null);
  navigate('/login');
};

>>>>>>> NEW-FINAL-MAIN

  return (
    <AuthContext.Provider value={{ user, loginstudent,loginfa, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
