import React from "react";
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
    </div>
  );
};

export default Dashboard;