import React from "react";
import "./dashboard.css";

const StudentDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar"></div>
      <div className="main-content">
        <div className="header">
          <h5 className="dashboard-title">Student Portal Dashboard</h5>
          {/* <div className="profile-section">
            <img
              src="https://via.placeholder.com/40"
              alt="profile"
              className="profile-image"
            />
            <span>John Doe</span>
          </div> */}
        </div>

        {/* Welcome Banner */}
        <div className="welcome-banner">
          <h3>Welcome back, John!</h3>
          <p>September 4, 2023 | B220584CS</p>
        </div>

        {/* Progress Section */}
        <div className="progress-section">
          <div className="progress-box">
            <h4>14</h4>
            <p>Total Department Points</p>
          </div>
          <div className="progress-box">
            <h4>2</h4>
            <p>Total Institutional Points</p>
          </div>
          <div className="progress-box">
            <h4>16</h4>
            <p>Total Activity Points</p>
          </div>
        </div>

        {/* Activity History */}
        <div className="activity-section">
          <h5 className="section-title">Activity History</h5>
          <table className="activity-table">
            <thead>
              <tr>
                <th>Activity Name</th>
                <th>Institute or Departmental</th>
                <th>Activity Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Value Education Quiz</td>
                <td>Departmental</td>
                <td>--</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Announcements */}
        <div className="announcement-section">
          <h5 className="section-title">Announcements</h5>
          <div className="announcement-box">
            <h6>1. FA Meeting 2 Postponement</h6>
            <p>FA meeting is postponed to 18th March 2025</p>
            <br></br>
            <h6>2. Certificate Upload Deadline</h6>
            <p>Deadline for Winter semester: 20th April 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
