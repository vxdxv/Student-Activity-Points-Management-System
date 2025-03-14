import React from "react";
<<<<<<< HEAD
import "./admin_1.css";
import { FaUserGraduate, FaUserTie } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <main className="main-content">
        <header>
        <h1 style={{fontSize: "40px",
        fontWeight: "bold",
        textTransform: "uppercase"}}> Admin Dashboard</h1>
        </header>

        {/* Stats Section */}
        <section className="stats">
          <div className="stat-card">
            <FaUserGraduate className="icon" />
            <h3>Total Students</h3>
            <p>500</p>
          </div>
          <div className="stat-card">
            <FaUserTie className="icon" />
            <h3>Total Faculty Advisors</h3>
            <p>50</p>
          </div>
         
        </section>
       
        {/* Activity Management */}
        <section className="activities">
        <h2 style={{fontSize: "25px",textTransform: "uppercase",fontWeight:"bold"}}>Activity Management</h2>
          <div className="activity-card">
            <h3 style={{fontSize: "20px",textTransform: "uppercase"}}>Total Activities:<br></br>100</h3>
          </div>
          <button className="activity-button">Add/Edit/Delete Activities</button>
        </section>

        <section className="guidelines">
          <h2 style={{ fontSize: "25px", textTransform: "uppercase" ,fontWeight:"bold"}}>Edit Guidelines</h2>
          
        <div className="guidelines-card">
            <h3 style={{ fontSize: "26px", textTransform: "uppercase" }}>Guidelines</h3>
          
            <button className="guidelines-button">
              <i className="bi bi-box-arrow-up-right"></i>
            </button>
          </div>
        </section>
        
        {/* <section className="user">
          <h2 style={{ fontSize: "25px", textTransform: "uppercase" ,fontWeight:"bold"}}>user management</h2>
          <div className="userr-card">
           
          </div>
         
        </section> */}

      </main>
=======
import "./AdminDashboard.css"; // Ensure this file exists in the same directory

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="header">
        <h1>Admin Dashboard</h1>
        <div className="profile">
          <img src="/assets/profile.jpg" alt="Profile" className="profile-pic" />
          <div>
            <p>John Doe</p>
            <span>3rd year</span>
          </div>
        </div>
      </div>

      <div className="stats-container">
        <div className="card">
          <p>Total students:</p>
          <h2>500</h2>
        </div>
        <div className="card">
          <p>Total faculty advisors:</p>
          <h2>50</h2>
        </div>
      </div>
      <button className="action-btn">Add/Edit/Delete users ➜</button>

      <div className="activity-container">
        <h2>Activity Management</h2>
        <div className="activity-card">
          <p>Total Activities:</p>
          <h2>100</h2>
          <button className="action-btn">Add/Edit/Delete activities ➜</button>
        </div>
      </div>

      <div className="guidelines-container">
        <h2>Edit guidelines</h2>
        <div className="guidelines-card">
          <h3>Guidelines</h3>
          <button className="action-btn">➜</button>
        </div>
      </div>
>>>>>>> 55bdc32cb43da2ae0fce6cc81bbbb1341610a76b
    </div>
  );
};

<<<<<<< HEAD
export default AdminDashboard;
=======
export default Dashboard;
>>>>>>> 55bdc32cb43da2ae0fce6cc81bbbb1341610a76b
