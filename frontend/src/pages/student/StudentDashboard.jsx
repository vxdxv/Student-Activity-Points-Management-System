import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Space */}
        <div className="col-md-2 vh-100"></div>

        {/* Main Content */}
        <div className="col-md-10 p-4">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center">
            <h5>Student Portal Dashboard</h5>
            <div className="d-flex align-items-center">
              <img
                src="https://via.placeholder.com/40"
                alt="profile"
                className="rounded-circle me-2"
              />
              <span>John Doe</span>
            </div>
          </div>

          {/* Welcome Banner */}
          <div className="text-white p-4 rounded mt-3" style={{ backgroundColor: "#6f42c1" }}>
            <h3>Welcome back, John!</h3>
            <p>September 4, 2023 | B220584CS</p>
          </div>

          {/* Progress Section */}
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <div className="bg-light p-3 rounded">
                <h4>14</h4>
                <p>Total Department Points</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="bg-light p-3 rounded">
                <h4>2</h4>
                <p>Total Institutional Points</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="bg-light p-3 rounded">
                <h4>16</h4>
                <p>Total Activity Points</p>
              </div>
            </div>
          </div>

          {/* Activity History */}
          <div className="mt-4">
            <h5>Activity History</h5>
            <table className="table table-bordered">
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
          <div className="mt-4">
            <h5>Announcements</h5>
            <div className="bg-light p-3 rounded">
              <h6>FA Meeting 2 Postponement</h6>
              <p>FA meeting is postponed to 18th March 2025</p>
              <h6>Certificate Upload Deadline</h6>
              <p>Deadline for Winter semester: 20th April 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
