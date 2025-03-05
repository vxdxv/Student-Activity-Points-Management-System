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

  return (
    <div className="content">
      <div className="tracking">
        <h1 id="heading">Tracking Requests</h1>
        <div className="tracking-section">
          {trackingRequests.map((request) => (
            <div key={request.id} className="tracking-items">
              <h3>{request.title}</h3>
              <span className={getStatusClass(request.status)}>{request.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tracking;