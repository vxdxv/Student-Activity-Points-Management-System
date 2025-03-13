import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentDetails = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100" style={{ background: "linear-gradient(to bottom, #b48dde, #8245a3)" }}>
      <div className="card p-4 shadow-lg" style={{ maxWidth: "1000px", width: "100%", backgroundColor: "#fff" }}>
        <div className="text-center mb-3">
          <i className="bi bi-person-circle fs-1"></i>
          <h5 className="mb-0">Rock</h5>
          <small className="text-muted">Faculty Advisor</small>
        </div>

        <h5 className="text-primary fw-bold text-center">Student Details</h5>
        <div>
        <div className="card p-3 shadow-sm" style={{ backgroundColor: "#f3e8ff" }}>
          <div className="d-flex align-items-center justify-content-between">
            <div className="text-center">
              <i className="bi bi-person-circle fs-1"></i>
              <p className="mb-0 fw-bold">Rock</p>
              <p className="text-muted small">B22xxxxxxcs</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white p-1 rounded shadow-sm">
                <h6 className="mb-0">Total Points:</h6>
                <h5 className="mb-0">25</h5>
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-primary">PDF/Proof</button>
            </div>
          </div>
</div>
          <table className="table mt-3">
            <thead>
              <tr>
                <th>Activity Name</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {[
                "Department level Activity",
                "Institute level Activity",
                "Ragam Activity",
                "Department of Activity",
              ].map((activity, index) => (
                <tr key={index}>
                  <td>{activity}</td>
                  <td className="text-primary fw-bold">5</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
