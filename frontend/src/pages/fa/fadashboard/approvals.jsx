import React, { useState, useEffect, useContext } from "react";
import "./approvals.css";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";

const Approvals = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const [faDetails, setFaDetails] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch FA Details and Requests
  useEffect(() => {
    if (user) {
      fetchfaData(user.email);
    }
  }, [user]);

  const fetchfaData = async (email) => {
    if (!email) return;
    try {
      const response = await axios.get(`/api/fa/details?email=${email}`);
      if (response.status === 200) {
        setFaDetails({
          faId: response.data.fa_id,
          name: response.data.name
        });
        setRequests(response.data.requests);
      }
    } catch (error) {
      console.error("Error fetching FA details", error);
      alert("Error fetching FA details!");
    }
  };

  // Validate Student
  const handleValidation = async (rid, index) => {
    try {
        const response = await axios.post(`/api/fa/validate-request/${rid}`);
        
        if (response.status === 200) {
            // Fetch the latest requests after validation
            await fetchfaData(user.email);
            console.log("Validation successful")
        } else {
            alert(response.data); // response.body does not exist, use response.data instead
        }
        
    } catch (error) {
        console.error("Validation error", error);
        alert("Validation failed, attendance sheet for this activity has not been uploaded!");
    }
};


  // Approve Request
  const handleApprove = async (rid, index) => {
    try {
      const response = await axios.post(`/api/fa/approve-request/${rid}?email=${user.email}&points=${10}`);
      if (response.status === 200) {
        const updatedRequests = [...requests];
        updatedRequests[index].status = "Approved";
        setRequests(updatedRequests);
      }
    } catch (error) {
      console.error("Approval error", error);
      alert(error.response?.data || "Approval failed!");
    }
  };

  // Reject Request
  const handleReject = async (rid, index) => {
    try {
      const response = await axios.post(`/api/fa/reject-request/${rid}`);
      if (response.status === 200) {
        await fetchfaData(user.email);
        alert("Rejection successful")
      }else {
        alert("Failed to reject!");
    }
    } catch (error) {
      console.error("Rejection error", error);
      alert("Rejection failed!");
    }
  };

  return (
    <div className="content">
      <div className="header">
        <h1>Approval Management</h1>
        <div className="search-add">
          <div className="search">
            <label style={{ fontSize: "16px" }}>Search by SID:</label>
            <input
              type="text"
              placeholder="Enter Student ID"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="body">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Activity Name</th>
              <th>Activity Date</th>
              <th>Type</th>
              <th>Status</th>
              <th>Validate</th>
              <th>Approve</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {requests
              .filter((req)=>req.status==='Pending')
              .filter((req) => req.sid.includes(searchQuery))
              .map((req, index) => (
                <tr key={req.rid} className={req.status === "Approved" ? "approved-row" : req.status === "Rejected" ? "rejected-row" : ""}>
                  <td>{req.sid}</td>
                  <td>{req.activity_name}</td>
                  <td>{new Date(req.activity_date).toLocaleDateString("en-GB")}</td>
                  <td>{req.type}</td>
                  <td>
                    {req.waiting_for_other_FAs ? "⏳ Waiting for Others" : req.status}
                  </td>
                  <td>
                  <button
  className={`validate-btn ${req.validated === "Yes" ? "valid" : req.validated === "No" ? "invalid" : req.validated === "Pending" ? "pending" : ""}`}
  onClick={() => handleValidation(req.rid, index)}
  disabled={req.validated === "Yes"} // Disable if already validated
>
  {req.validated === "Yes" ? <i class="bi bi-check-circle-fill"></i> : req.validated === "No" ? <i class="bi bi-x-circle"></i> : req.validated === "Pending" ? "⏳ Pending" : "Validate"}
</button>
                  </td>
                  <td>
                    <button
                      className="approve-btn"
                      onClick={() => handleApprove(req.rid, index)}
                      disabled={req.status === "Approved" || req.waiting_for_other_FAs}
                    >
                      ✔️ Approve
                    </button>
                  </td>
                  <td>
                    <button
                      className="reject-btn"
                      onClick={() => handleReject(req.rid, index)}
                      disabled={req.status === "Rejected"}
                    >
                      ❌ Reject
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Approvals;
