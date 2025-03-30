<<<<<<< HEAD
import React from 'react';
import './activities.css';


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
=======
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./activities.css";
const ActivityHistory = () => {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    const studentID = JSON.parse(localStorage.getItem("user"))?.sid; // Ensure correct localStorage structure

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                if (!studentID) {
                    console.warn("Student ID is missing.");
                    return;
                }

                console.log("Fetching activities for student ID:", studentID);

                const response = await fetch(`http://localhost:8080/api/student/${studentID}/activities`);
                if (!response.ok) throw new Error(`Failed to fetch activities: ${response.statusText}`);

                const data = await response.json();
                console.log("Fetched activity data:", data);

                setActivities(data);
            } catch (error) {
                console.error("Error fetching activities:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchActivities();
    }, [studentID]);

    if (loading) return <p>Loading activities...</p>;

    return (
        <div className="activities-container">
            <h2 style={{ textAlign: "center", fontSize: "32px", fontWeight: "bold", textTransform: "uppercase" }}>
                Activity History
            </h2>
            <div className="activities-list">
                {activities.length > 0 ? (
                    activities.map((activity, index) => (
                        <div key={index} className="activity-card">
                            <div className="activity-details">
                                <h3 style= {{textTransform: "uppercase"}}>{activity.title || "No title available"}</h3>
                                <p>Date: {activity.date}</p>
                                <p>Activity type: {activity.activityType || "No type available"}</p>
                            </div>
                            <div className="activity-points">
                                <span>{activity.points}</span>
                                <FaStar className="star-icon" />
                            </div>
                        </div>
                    ))
                ) : (
                    <p style={{ textAlign: "center", fontSize: "18px" }}>No activities available.</p>
                )}
            </div>
        </div>
    );
>>>>>>> NEW-FINAL-MAIN
};

export default ActivityHistory;
