import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './admin.css';
import {handleAddStudent,handleAddFA,handleEditStud,handleEditFa,getDeptData,handleDeleteStud,handleDeleteFa} from '../../handlers/UserManagement';



const ManageUsers = () => {
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [isFAModalOpen, setIsFAModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [students, setStudents] = useState([]);
  const [faculties, setFaculties] = useState([]);
  const [departments,setDepartments]=useState([]);
  const [rollNoError, setRollNoError] = useState(""); // Store error message
  const [searchStudent, setSearchStudent] = useState(""); // 🔍 Student search query
  const [searchFA, setSearchFA] = useState(""); // 🔍 FA search query
  const [student,newStudent]=useState({
    sid: "",  // ✅ Backend expects this, but form sends rollNo
    name: "",
    emailID: "",
    faid: "",
    did: "",
    deptPoints: "",
    institutePoints: "",
  });
  const [editEmailError, setEditEmailError] = useState(""); // Store email error messages
  
const [faEmailError, setFAEmailError] = useState(""); // Store FA email error message
  const [faculty,newFaculty]=useState({
    name:'',
    did:'',
    emailID:''
  });
  const [emailError, setEmailError] = useState(""); // Store email error message

const handleEmailChange = (e) => {
  const enteredEmail = e.target.value.trim(); // Remove unnecessary spaces
  newStudent({ ...student, emailID: enteredEmail });

  // Check if email already exists
  const emailExists = students.some(stud => stud.emailID === enteredEmail);
  if (emailExists) {
    setEmailError("Email already exists");
    return;
  }

  // No errors
  setEmailError("");
};


const handleFAEmailChange = (e) => {
  const enteredEmail = e.target.value.trim(); // Remove unnecessary spaces
  newFaculty({ ...faculty, emailID: enteredEmail });

  // // Basic email format validation (Optional)
  // const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  // if (!emailPattern.test(enteredEmail)) {
  //   setFAEmailError("Invalid email format");
  //   return;
  // }

  // Check if email already exists among FA
  const emailExists = faculties.some(fa => fa.emailID === enteredEmail);
  if (emailExists) {
    setFAEmailError("Email already exists");
    return;
  }

  // No errors
  setFAEmailError("");
};

  useEffect(() => {
    fetchStudData();
    fetchFAData();
    getDeptData(setDepartments);
  }, []);

  const handleRollNoChange = (e) => {
    const enteredRollNo = e.target.value.toUpperCase();
    newStudent({ ...student, sid: enteredRollNo });
  
    // Check length
    if (enteredRollNo.length !== 9) {
      setRollNoError("Roll No must be 9 characters long");
      return;
    } 
  
    // Check if roll number already exists
    const rollNoExists = students.some(stud => stud.sid === enteredRollNo.toUpperCase());
    if (rollNoExists) {
      setRollNoError("Roll No already exists");
      return;
    }
  
    // No errors
    setRollNoError("");
  };



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
        alert('Error loading fa info!');
      }
    } catch (error) {
      console.error('Error fetching fa info', error);
      alert('Failed to fetch fa info');
    }
  };



const handleEditEmailChange = (e) => {
  const enteredEmail = e.target.value.trim();
  setEditData({ ...editData, emailID: enteredEmail });

  // Basic email format validation (Optional)
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(enteredEmail)) {
    setEditEmailError("Invalid email format");
    return;
  }

  // Check if email already exists (excluding the current user)
  const emailExists = editData.type === 'student'
    ? students.some(stud => stud.emailID === enteredEmail && stud.sid !== editData.sid)
    : faculties.some(fa => fa.emailID === enteredEmail && fa.faid !== editData.faid);

  if (emailExists) {
    setEditEmailError("Email already exists");
    return;
  }

  // No errors
  setEditEmailError("");
};


  const handleEdit = (type, index) => {
    if (type === 'student') {
        setEditData({ ...students[index], type, index });
    } else {
        setEditData({ ...faculties[index], type, index });
    }
    setIsEditModalOpen(true);
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
          <div className="student-management">
            <h2>Student Management</h2>
            <div className="search-add">
              <div className="search">
                <label>Search by name:</label>
                <input type="text" name="search-name" placeholder="Enter student name" value={searchStudent}
                  onChange={(e) => setSearchStudent(e.target.value)}/>
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
                  <th>Institute points</th>
                  <th>Dept points</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student, index) => (
                  <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.sid}</td>
                    {departments.filter(dept => dept.did===student.did).map(dept => (
                  <td>{dept.name}</td>
                ))}
                    <td>{student.emailID}</td>
                    {/* <td>{student.faid}</td> */}
                    {!student.faid && <td>Not assigned</td>}
                    {student.faid && faculties.filter(fa => fa.faid===student.faid).map(fa => (
                  <td>{fa.name}</td>
                ))}
                    <td>{student.institutePoints}</td>
                    <td>{student.deptPoints}</td>
                    <td>
                      <i className="bi bi-pencil-fill" onClick={() => handleEdit('student', index)}></i>
                      <i className="bi bi-trash-fill" onClick={() => handleDeleteStud(fetchStudData,student.sid)}></i>
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
                <input type="text" name="search-name" placeholder="Enter FA name" value={searchFA}
                  onChange={(e) => setSearchFA(e.target.value)}/>
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
                    {departments.filter(dept => dept.did===fa.did).map(dept => (
                  <td>{dept.name}</td>
                ))}
                    <td>{fa.emailID}</td>
                    <td>
                      <i className="bi bi-pencil-fill" onClick={() => handleEdit('fa', index)}></i>
                      <i className="bi bi-trash-fill" onClick={() => handleDeleteFa(fetchFAData,index)}></i>
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

      <div className="input-group">
        <label>Name:</label>
        <input 
          type="text" 
          placeholder="Enter FA name" 
          value={faculty.name || ""} 
          onChange={(e) => newFaculty({ ...faculty, name: e.target.value })} 
        />
      </div>
      <div className="input-group">
  <label>Email:</label>
  <input 
    type="email" 
    placeholder="Enter email"  
    value={faculty.emailID || ""} 
    onChange={handleFAEmailChange}
    className={faEmailError ? "input-error" : ""} // Highlight input if error
  />
  {faEmailError && <p className="error-message">{faEmailError}</p>} {/* Show error message */}
</div>


      <div className="input-group">
        <label>Department:</label>
        <select value={faculty.did} onChange={(e) => newFaculty({...faculty, did: e.target.value})}>
              <option value="">Select Department</option>
              {departments.map(dept => (
                <option key={dept.did} value={dept.did}>{dept.name}</option>
              ))}
            </select>
      </div>

      <button 
        className="submit-btn" 
        onClick={() => handleAddFA(fetchFAData, setIsFAModalOpen, newFaculty, faculty)}
      >
        Submit
      </button>
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
        <input 
          type="text" 
          placeholder="Enter name" 
          value={student.name || ""} 
          onChange={(e) => newStudent({ ...student, name: e.target.value })} 
        />
      </div>

      <div className="input-group">
  <label>Roll No:</label>
  <input 
    type="text" 
    placeholder="Enter Roll No"
    value={student.sid || ""} 
    onChange={handleRollNoChange}
    className={rollNoError ? "input-error" : ""} // Add class if there's an error
  />
  {rollNoError && <p className="error-message">{rollNoError}</p>} {/* Show error message */}
</div>


      
<div className="input-group">
  <label>Email:</label>
  <input 
    type="email" 
    placeholder="Enter email" 
    value={student.emailID || ""} 
    onChange={handleEmailChange}
    className={emailError ? "input-error" : ""} // Highlight input if error
  />
  {emailError && <p className="error-message">{emailError}</p>} {/* Show error message */}
</div>


      <div className='input-group'>
        <label>Department:</label>
        <select value={student.did} onChange={(e) => newStudent({...student ,did: e.target.value})}>
              <option value="">Select Department</option>
              {departments.map(dept => (
                <option key={dept.did} value={dept.did}>{dept.name}</option>
              ))}
            </select>
      </div>

      <div className='input-group'>
  <label>FA In-Charge:</label>
  <select value={student.faid} onChange={(e) => newStudent({ ...student, faid: e.target.value })}>
    <option value="">Select FA</option>
    {faculties.map(fa => (
      <option key={fa.faid} value={fa.faid}>{fa.name}</option>
    ))}
  </select>
</div>

      <div className='input-group'>
      <label>Institute points:</label>
        <input 
          type="number" 
          placeholder="Enter institute points" 
          value={student.institutePoints || ""} 
          onChange={(e) => newStudent({ ...student,  institutePoints: e.target.value })} 
        />
      </div>

      <div className='input-group'>
        <label>Department points:</label>
        <input 
          type="number" 
          placeholder="Enter dept points" 
          value={student.deptPoints || ""} 
          onChange={(e) => newStudent({ ...student, deptPoints: e.target.value })} 
        />
      </div>

      <button 
        className="submit-btn" 
        onClick={() => handleAddStudent(fetchStudData, setIsStudentModalOpen, newStudent, student)}
      >
        Submit
      </button>
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
        <input 
          type="text" 
          value={editData.name || ''} 
          onChange={(e) => setEditData({ ...editData, name: e.target.value })} 
        />
      </div>

      <div className='input-group'>
  <label>Email:</label>
  <input 
    type="email" 
    value={editData.emailID || ''} 
    onChange={handleEditEmailChange}
    className={editEmailError ? "input-error" : ""} // Highlight input if error
  />
  {editEmailError && <p className="error-message">{editEmailError}</p>} {/* Show error message */}
</div>


      <div className='input-group'>
        <label>Department:</label>
        <select value={editData.did} onChange={(e) => newStudent({...editData ,did: e.target.value})}>
              <option value="">Select Department</option>
              {departments.map(dept => (
                <option key={dept.did} value={dept.did}>{dept.name}</option>
              ))}
            </select>
      </div>

      {editData.type === 'student' && (
        <div className='input-group'>
        <label>FA In-Charge:</label>
        <select value={editData.faid} onChange={(e) => setEditData({ ...editData, faid: e.target.value })}>
          <option value="">Select FA</option>
          {faculties.map(fa => (
            <option key={fa.faid} value={fa.faid}>{fa.name}</option>
          ))}
        </select>
      </div>
      )}
<button 
  className="submit-btn" 
  onClick={() => editData.type === 'student' 
    ? handleEditStud(fetchStudData,setIsEditModalOpen,editData) 
    : handleEditFa(fetchFAData,setIsEditModalOpen,editData)}
>
  Submit
</button>
    </div>
  </div>
)}


    </div>
  );
};



export default ManageUsers;

// const [students, setStudents] = useState([
  //   { name: 'Alice Johnson', rollNo: 'B220101', department: 'CSE', email: 'alice@example.com', facultyAdvisor: 'Dr. Smith' },
  // ]);
  // const [faculty, setFaculty] = useState([
  //   { name: 'Dr. Emily White', facultyId: 'FA1001', department: 'CSE', email: 'emily@example.com' },
  // ]);

