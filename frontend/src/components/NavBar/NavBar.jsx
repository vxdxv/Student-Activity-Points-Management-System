<<<<<<< HEAD
import React from 'react'
import './navbar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
     <div className='navbar__left'>
        <h3>Name</h3>
      </div>
      <div className='navbar__right'> 
            {/* <h3>Name</h3> */}
      </div>
    </div>
  )
}

export default NavBar
=======
import React, { useState, useEffect } from 'react';
import './navbar.css';

const NavBar = () => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
          console.error("No user data in localStorage.");
          return;
        }

        const userData = JSON.parse(storedUser);
        console.log("Parsed User Data:", userData);

        if (userData.role === "student") {  
          setRole("student");
          console.log("Fetching data for Student ID:", userData.sid);
          const response = await fetch(`http://localhost:8080/api/student/${userData.sid}`);
          if (!response.ok) throw new Error("Failed to fetch student data.");
          const data = await response.json();
          console.log("Fetched student data:", data);
          setUser(data);
        } 
        
        
        else if (userData.role === "fa") {  
          setRole("fa");
          console.log("Fetching data for FA ID:", userData.faid);
          const response = await fetch(`http://localhost:8080/api/fa/${userData.faid}`);
          if (!response.ok) throw new Error("Failed to fetch FA data.");
          const data = await response.json();
          console.log("Fetched FA data:", data);
          setUser(data);
        }
      } 
      
      catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="navbar">
      <div className="navbar__left">
        <h3>{user ? user.name : "Loading..."}</h3>
      </div>
      <div className="navbar__right">
        {/* Additional UI elements if needed */}
      </div>
    </div>
  );
};

export default NavBar;
>>>>>>> NEW-FINAL-MAIN
