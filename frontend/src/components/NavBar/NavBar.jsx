import React, { useState, useEffect } from 'react';
import './navbar.css';

const NavBar = () => {
  const [student, setStudent] = useState(null);

  const fetchStudentData = async () => {
    try {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) {
        console.error("No user data in localStorage.");
        return;
      }

      const user = JSON.parse(storedUser);
      if (!user?.sid) {
        console.error("Student ID missing in user data:", user);
        return;
      }

      console.log("Fetching data for Student ID:", user.sid);

      // Fetch Student Data
      const studentResponse = await fetch(`http://localhost:8080/api/student/${user.sid}`);
      if (!studentResponse.ok) throw new Error("Failed to fetch student data.");
      const studentData = await studentResponse.json();
      setStudent(studentData);
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  return (
    <div className="navbar">
      <div className="navbar__left">
        <h3>{student ? student.name : "Loading..."}</h3>
      </div>
      <div className="navbar__right">
        {/* <h3>Name</h3> */}
      </div>
    </div>
  );
};

export default NavBar;
