<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import './student.css';

const Tracking = () => {
  const trackingRequests = [
    { id: "1", title: "Value Education quiz", status: "Pending" },
    { id: "2", title: "Value Education seminar", status: "Pending" },
    { id: "3", title: "Ragam Informals Volunteer", status: "Pending" },
    { id: "4", title: "Tathva Informals Volunteer", status: "Approved" },
    { id: "5", title: "Ragam PRC Executive", status: "Rejected" },
    { id: "6", title: "Aerowunired Student Executive", status: "Pending" },
    { id: "7", title: "CSEA Seminar", status: "Rejected" }
  ];
=======
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./student.css";

const Tracking = () => {
  const { user } = useContext(AuthContext); // Get user details from AuthContext
  const [trackingRequests, setTrackingRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Updated function to extract student ID from email in uppercase
  const getSid = (email) => {
    if (!email) return null;
    const username = email.split("@")[0];
    const parts = username.split("_");
    return parts.length > 1 ? parts[1].toUpperCase() : username.toUpperCase();
  };

  const sid = getSid(user?.email); // Extract student ID in uppercase

  useEffect(() => {
    if (!sid) return;

    fetch(`http://localhost:8080/requests/student/${sid}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setTrackingRequests(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [sid]); // Re-fetch when sid changes
>>>>>>> NEW-FINAL-MAIN

  const getStatusClass = (status) => {
    switch (status) {
      case "Approved":
        return "approved";
      case "Rejected":
        return "rejected";
      default:
        return "pending";
    }
  };

<<<<<<< HEAD
=======
  const fetchRequestById = (id) => {
    fetch(`http://localhost:8080/requests/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request not found");
        }
        return response.json();
      })
      .then((data) => {
        setSelectedRequest(data);
      })
      .catch((error) => {
        console.error(error);
        setSelectedRequest(null);
      });
  };

>>>>>>> NEW-FINAL-MAIN
  return (
    <div className="content">
      <div className="tracking">
        <h1 id="heading">Tracking Requests</h1>
<<<<<<< HEAD
        <div className="tracking-section">
          {trackingRequests.map((request) => (
            <div key={request.id} className="tracking-items">
              <h3>{request.title}</h3>
              <span className={getStatusClass(request.status)}>{request.status}</span>
            </div>
          ))}
        </div>
=======

        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}

        {!loading && !error && trackingRequests.length > 0 ? (
          <div className="tracking-section">
            {trackingRequests.map((request) => (
              <div key={request.rid} className="tracking-items">
                <h3 onClick={() => fetchRequestById(request.rid)} style={{ cursor: "pointer" }}>
                  {request.activityName || "No Title"}
                </h3>
                <span className={getStatusClass(request.status)}>{request.status}</span>
              </div>
            ))}
          </div>
        ) : (
          <p>No tracking requests found.</p>
        )}

        {selectedRequest && (
          <div className="request-details">
            <h2>Request Details</h2>
            <p><strong>ID:</strong> {selectedRequest.rid}</p>
            <p><strong>Activity Name:</strong> {selectedRequest.activityName || "N/A"}</p>
            <p><strong>Description:</strong> {selectedRequest.description || "No description"}</p>
            <p><strong>Status:</strong> {selectedRequest.status}</p>
            <p><strong>Activity Date:</strong> {selectedRequest.activityDate || "N/A"}</p>
            <button onClick={() => setSelectedRequest(null)}>Close</button>
          </div>
        )}
>>>>>>> NEW-FINAL-MAIN
      </div>
    </div>
  );
};

export default Tracking;