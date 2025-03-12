import React from 'react';
import './activities.css';
import "./global.css";

import { FaStar } from "react-icons/fa";

const activities = [
  { title: "Value Education Quiz", branch: "CS", type: "Departmental", date: "12-Dec-2024", points: 5 },
  { title: "Ragam Dance Workshop", branch: "", type: "Institute", date: "14-Feb-2024", points: 5 },
  { title: "Tathva EV Workshop", branch: "", type: "Institute", date: "17-March-2024", points: 5 },
  { title: "MUN Debate", branch: "", type: "Institute", date: "7-August-2024", points: 5 },
];

const ActivityHistory = () => {
  return (
    <div className="activities-container">
      <h2 style={{ 
        textAlign: "center", 
        fontSize: "32px", 
        fontWeight: "bold", 
        textTransform: "uppercase" 
        }}>
        Activity History
      </h2>
      <div className="activities-list">
        {activities.map((activity, index) => (
          <div key={index} className="activity-card">
            <div className="activity-details">
              <h3>{activity.title}</h3>
              <p>Date: {activity.date}</p>
              {activity.branch && <p>Branch: {activity.branch}</p>}
              <p>Activity type: {activity.type}</p>
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

export default ActivityHistory;
