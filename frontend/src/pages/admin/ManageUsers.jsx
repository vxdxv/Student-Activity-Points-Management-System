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
    </div>
  );
};

export default UsersManagement;
