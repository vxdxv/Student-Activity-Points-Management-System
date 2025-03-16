import React from "react";
import "./admin_1.css";
import { FaUserGraduate, FaUserTie } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <main className="main-content">
        <header>
          <h1 style={{
            fontSize: "40px",
            fontWeight: "bold",
            textTransform: "uppercase"
          }}> Admin Dashboard</h1>
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
          <h2 style={{ fontSize: "25px", textTransform: "uppercase", fontWeight: "bold" }}>Activity Management</h2>
          <div className="activity-card">
            <h3 style={{ fontSize: "20px", textTransform: "uppercase" }}>Total Activities:<br></br>100</h3>
          </div>
          <button className="activity-button">Add/Edit/Delete Activities</button>
        </section>

        <section className="guidelines">
          <h2 style={{ fontSize: "25px", textTransform: "uppercase", fontWeight: "bold" }}>Edit Guidelines</h2>

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
    </div>
  );
};

export default AdminDashboard;
