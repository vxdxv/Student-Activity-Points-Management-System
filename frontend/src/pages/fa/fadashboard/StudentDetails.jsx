import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
     

      <main className="main-content">
       

        <div className="stats-container">
          <div className="stat-card">
            <h3>42</h3>
            <p>Total Students</p>
          </div>
          <div className="stat-card">
            <h3>8</h3>
            <p>Pending Reviews</p>
          </div>
          <div className="stat-card">
            <h3>15</h3>
            <p>Completed Reviews</p>
          </div>
        </div>

        <section className="pending-reviews">
          <h3>Pending Reviews</h3>
          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Activity</th>
                <th>Category</th>
                <th>Submitted</th>
                <th>Points</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alex Johnson</td>
                <td>Research Paper Publication</td>
                <td>Academic</td>
                <td>Jan 25, 2024</td>
                <td>15</td>
                <td><button className="review-btn">Review</button></td>
              </tr>
              <tr>
                <td>Emma Wilson</td>
                <td>National Debate Competition</td>
                <td>Academic</td>
                <td>Jan 28, 2024</td>
                <td>12</td>
                <td><button className="review-btn">Review</button></td>
              </tr>
              <tr>
                <td>Michael Brown</td>
                <td>Hackathon Participation</td>
                <td>Technical</td>
                <td>Feb 5, 2024</td>
                <td>8</td>
                <td><button className="review-btn">Review</button></td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;

