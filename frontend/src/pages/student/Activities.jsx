import React from "react";
import "./activities.css";
import "./global.css";

import { FaStar } from "react-icons/fa";

const activities = [
  {
    title: "CSEA Seminar",
    date: "25 Mar 2025",
    branch: "CSE",
    type: "Departmental",
    mandatory: "Yes",
    points: 5,
  },
  {
    title: "NSS Eye camp Volunteering",
    date: "12 April 2025",
    type: "Institutional",
    mandatory: "No",
    points: 5,
  },
  {
    title: "Ragam Dance Workshop",
    date: "15 Feb 2025",
    type: "Institutional",
    mandatory: "No",
    points: 5,
  },
  {
    title: "CSEA Hackathon",
    date: "3 Mar 2025",
    branch: "CSE",
    type: "Departmental",
    mandatory: "Yes",
    points: 5,
  },
];

const Activities = () => {
  return (
    <div className="activities-container">
      <h2 style={{ 
        textAlign: "center", 
        fontSize: "32px", 
        fontWeight: "bold", 
        textTransform: "uppercase" 
        }}>
          Available Activities
        </h2>
      <div className="activities-list">
        {activities.map((activity, index) => (
          <div key={index} className="activity-card">
            <div className="activity-details">
              <h3>{activity.title}</h3>
              <p>Date: {activity.date}</p>
              <p>Branch: {activity.branch}</p>
              <p>Activity type: {activity.type}</p>
              <p>Mandatory: {activity.mandatory}</p>
            </div>
            <div className="activity-points">
              <span>{activity.points}</span>
              <FaStar className="star-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
