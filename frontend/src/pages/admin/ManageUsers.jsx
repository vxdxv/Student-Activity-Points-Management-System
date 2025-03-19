import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './admin.css';
import { handleAddStudent, handleAddFA, handleEditStud, handleEditFa } from '../../handlers/UserManagement';

const ManageUsers = () => {
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [isFAModalOpen, setIsFAModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [students, setStudents] = useState([]);
  const [faculties, setFaculties] = useState([]);
  const [searchStudent, setSearchStudent] = useState(""); // 🔍 Student search query
  const [searchFA, setSearchFA] = useState(""); // 🔍 FA search query

  const [student, newStudent] = useState({
    sid: "",
    name: "",
    emailID: "",
    faid: "",
    did: "",
    deptPoints: "",
    institutePoints: "",
  });

  const [faculty, newFaculty] = useState({
    name: '',
    did: '',
    emailID: ''
  });

  useEffect(() => {
    fetchStudData();
    fetchFAData();
  }, []);

  const fetchStudData = async () => {
    try {
      const response = await axios.get("/api/admin/manage-users/student");
      if (response.status === 200) {
        setStudents(response.data);
      } else {
        alert('Error loading student info!');
      }
    } catch (error) {
      console.error('Error fetching student info', error);
      alert('Failed to fetch student info');
    }
  };

  const fetchFAData = async () => {
    try {
      const response = await axios.get("/api/admin/manage-users/fa");
      if (response.status === 200) {
        setFaculties(response.data);
      } else {
        alert('Error loading FA info!');
      }
    } catch (error) {
      console.error('Error fetching FA info', error);
      alert('Failed to fetch FA info');
    }
  };

  const handleDelete = (type, index) => {
    if (type === 'student') {
      setStudents(students.filter((_, i) => i !== index));
    } else {
      setFaculties(faculties.filter((_, i) => i !== index));
    }
  };

  const handleEdit = (type, index) => {
    if (type === 'student') {
      setEditData({ ...students[index], type, index });
    } else {
      setEditData({ ...faculties[index], type, index });
    }
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = () => {
    if (editData.type === 'student') {
      const updatedStudents = [...students];
      updatedStudents[editData.index] = { ...editData };
      setStudents(updatedStudents);
    } else {
      const updatedFaculty = [...faculties];
      updatedFaculty[editData.index] = { ...editData };
      setFaculties(updatedFaculty);
    }
    setIsEditModalOpen(false);
  };

  // 🔍 Filter students based on search query
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchStudent.toLowerCase())
  );

  // 🔍 Filter faculty advisors based on search query
  const filteredFaculties = faculties.filter(fa =>
    fa.name.toLowerCase().includes(searchFA.toLowerCase())
  );

  return (
    <div>
      <div className="content">
        <div className="header">
          <h1>User Management</h1>
        </div>
        <div className="body">
          {/* Student Management Section */}
          <div className="student-management">
            <h2>Student Management</h2>
            <div className="search-add">
              <div className="search">
                <label>Search by name:</label>
                <input
                  type="text"
                  name="search-name"
                  placeholder="Enter student name"
                  value={searchStudent}
                  onChange={(e) => setSearchStudent(e.target.value)}
                />
              </div>
              <button className="Add" onClick={() => setIsStudentModalOpen(true)}>
                Add Student
              </button>
            </div>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Roll No</th>
                  <th>Department</th>
                  <th>Email ID</th>
                  <th>Faculty Advisor</th>
                  <th>Institute Points</th>
                  <th>Dept Points</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student, index) => (
                  <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.sid}</td>
                    <td>{student.did}</td>
                    <td>{student.emailID}</td>
                    <td>{student.faid}</td>
                    <td>{student.institutePoints}</td>
                    <td>{student.deptPoints}</td>
                    <td>
                      <i className="bi bi-pencil-fill" onClick={() => handleEdit('student', index)}></i>
                      <i className="bi bi-trash-fill" onClick={() => handleDelete('student', index)}></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Faculty Advisor Management Section */}
          <div className="fa-management">
            <h2>FA Management</h2>
            <div className="search-add">
              <div className="search">
                <label>Search by name:</label>
                <input
                  type="text"
                  name="search-name"
                  placeholder="Enter FA name"
                  value={searchFA}
                  onChange={(e) => setSearchFA(e.target.value)}
                />
              </div>
              <button className="Add" onClick={() => setIsFAModalOpen(true)}>
                Add FA
              </button>
            </div>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Faculty ID</th>
                  <th>Department</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredFaculties.map((fa, index) => (
                  <tr key={index}>
                    <td>{fa.name}</td>
                    <td>{fa.faid}</td>
                    <td>{fa.did}</td>
                    <td>{fa.emailID}</td>
                    <td>
                      <i className="bi bi-pencil-fill" onClick={() => handleEdit('fa', index)}></i>
                      <i className="bi bi-trash-fill" onClick={() => handleDelete('fa', index)}></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
