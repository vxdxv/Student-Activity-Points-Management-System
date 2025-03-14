<<<<<<< HEAD
import React, { useState } from 'react';
import './admin.css';

const ManageUsers = () => {
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [isFAModalOpen, setIsFAModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [students, setStudents] = useState([
    { name: 'Alice Johnson', rollNo: 'B220101', department: 'CSE', email: 'alice@example.com', facultyAdvisor: 'Dr. Smith' },
  ]);
  const [faculty, setFaculty] = useState([
    { name: 'Dr. Emily White', facultyId: 'FA1001', department: 'CSE', email: 'emily@example.com' },
  ]);

  const handleDelete = (type, index) => {
    if (type === 'student') {
      setStudents(students.filter((_, i) => i !== index));
    } else {
      setFaculty(faculty.filter((_, i) => i !== index));
    }
  };

  const handleEdit = (type, index) => {
    if (type === 'student') {
      setEditData({ ...students[index], type, index });
    } else {
      setEditData({ ...faculty[index], type, index });
    }
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = () => {
    if (editData.type === 'student') {
      const updatedStudents = [...students];
      updatedStudents[editData.index] = { ...editData };
      setStudents(updatedStudents);
    } else {
      const updatedFaculty = [...faculty];
      updatedFaculty[editData.index] = { ...editData };
      setFaculty(updatedFaculty);
    }
    setIsEditModalOpen(false);
  };

  return (
    <div>
      <div className="content">
        <div className="header">
          <h1>User Management</h1>
        </div>
        <div className="body">
          <div className="student-management">
            <h2>Student Management</h2>
            <div className="search-add">
              <div className="search">
                <label>Search by name:</label>
                <input type="text" name="search-name" placeholder="Enter student name" />
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
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.rollNo}</td>
                    <td>{student.department}</td>
                    <td>{student.email}</td>
                    <td>{student.facultyAdvisor}</td>
                    <td>
                      <i className="bi bi-pencil-fill" onClick={() => handleEdit('student', index)}></i>
                      <i className="bi bi-trash-fill" onClick={() => handleDelete('student', index)}></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="fa-management">
            <h2>FA Management</h2>
            <div className="search-add">
              <div className="search">
                <label>Search by name:</label>
                <input type="text" name="search-name" placeholder="Enter FA name" />
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
                {faculty.map((fa, index) => (
                  <tr key={index}>
                    <td>{fa.name}</td>
                    <td>{fa.facultyId}</td>
                    <td>{fa.department}</td>
                    <td>{fa.email}</td>
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

      {isFAModalOpen && (
        <div className="modal-overlay" onClick={() => setIsFAModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="title">
            <h2>Add FA</h2>
            
            <span className="close" onClick={() => setIsFAModalOpen(false)}>x</span>
            </div>
            <div className='input-group'>
            <label>Name:</label>
            <input type="text" placeholder="Enter name" />
            </div>
            <div className='input-group'>
            <label>Faculty ID:</label>
            <input type="text" placeholder="Enter Faculty ID" />
            </div>
            <div className='input-group'>
            <label>Email:</label>
            <input type="email" placeholder="Enter email" />
            </div>
            <div className='input-group'>
            <label>Department:</label>
            <input type="text" placeholder="Enter department" />
            </div>
            <button className="submit-btn">Submit</button>
          </div>
        </div>
      )}

{isStudentModalOpen && (
        <div className="modal-overlay" onClick={() => setIsStudentModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="title">
            <h2>Add Student</h2>
            <span className="close" onClick={() => setIsStudentModalOpen(false)}>x</span>
            </div>
           
            <div className='input-group'>
            <label>Name:</label>
            <input type="text" placeholder="Enter name" />
            </div>
            <div className='input-group'>
           <label>Roll No:</label>
           <input type="text" placeholder="Enter roll number" />
           </div>
           <div className='input-group'>
            <label>Email:</label>
            <input type="email" placeholder="Enter email" />
            </div>
            <div className='input-group'>
           <label>Department:</label>
           <input type="text" placeholder="Enter department" />
           </div>
           <div className='input-group'>
            <label>FA In-Charge:</label>
            <input type="text" placeholder="Enter FA name" />
            </div>
           
            <button className="submit-btn">Submit</button>
            
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="modal-overlay" onClick={() => setIsEditModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="title">
              <h2>Edit {editData.type === 'student' ? 'Student' : 'FA'}</h2>
              <span className="close" onClick={() => setIsEditModalOpen(false)}>x</span>
            </div>
            <div className='input-group'>
              <label>Name:</label>
              <input type="text" value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} />
            </div>
            <div className='input-group'>
              <label>{editData.type === 'student' ? 'Roll No' : 'Faculty ID'}:</label>
              <input type="text" value={editData.type === 'student' ? editData.rollNo : editData.facultyId} 
                     onChange={(e) => setEditData({ ...editData, [editData.type === 'student' ? 'rollNo' : 'facultyId']: e.target.value })} />
            </div>
            <div className='input-group'>
              <label>Email:</label>
              <input type="email" value={editData.email} onChange={(e) => setEditData({ ...editData, email: e.target.value })} />
            </div>
            <div className='input-group'>
              <label>Department:</label>
              <input type="text" value={editData.department} onChange={(e) => setEditData({ ...editData, department: e.target.value })} />
            </div>
            {editData.type === 'student' && (
              <div className='input-group'>
                <label>FA In-Charge:</label>
                <input type="text" value={editData.facultyAdvisor} onChange={(e) => setEditData({ ...editData, facultyAdvisor: e.target.value })} />
              </div>
            )}
            <button className="submit-btn" onClick={handleEditSubmit}>Submit</button>
          </div>
        </div>
      )}
=======
import React from 'react';
import "./UsersManagement.css";

const UsersManagement = () => {
  return (
    <div className="container">
      <h1>Users Management</h1>

      {/* Student Management */}
      <section>
        <h2>Student Management</h2>
        <label>Search by name: <input type="text" /></label>
        <button className="add-btn">Add Student <span>+</span></button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll no</th>
              <th>Department</th>
              <th>Email ID</th>
              <th>Faculty Advisor</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Data rows will be added dynamically here */}
          </tbody>
        </table>
      </section>

      {/* FA Management */}
      <section>
        <h2>FA Management</h2>
        <label>Search by name: <input type="text" /></label>
        <button className="add-btn">Add FA <span>+</span></button>
        <table>
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
            {/* Data rows will be added dynamically here */}
          </tbody>
        </table>
      </section>
>>>>>>> 55bdc32cb43da2ae0fce6cc81bbbb1341610a76b
    </div>
  );
};

<<<<<<< HEAD


export default ManageUsers;
=======
export default UsersManagement;
>>>>>>> 55bdc32cb43da2ae0fce6cc81bbbb1341610a76b
