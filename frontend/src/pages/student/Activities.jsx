<<<<<<< HEAD
import React from "react";
import "./activities.css";

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
=======
import React, { useEffect, useState } from "react";
import "./activities.css";
import { FaStar } from "react-icons/fa";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getHeaders = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }
  }
  useEffect(() => {
    fetch("http://localhost:8080/api/activities", {
      method: 'GET', headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }) // Ensure backend is running
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch activities");
        }
        return response.json();
      })
      .then((data) => {
        setActivities(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading activities...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="activities-container">
      <h2 style={{ textAlign: "center", fontSize: "32px", fontWeight: "bold", textTransform: "uppercase" }}>
        Available Activities
      </h2>
      <div className="activities-list">
        {activities.map((activity) => (
          <div key={activity.actID} className="activity-card">
            <div className="activity-details">
              <h3 style={{textTransform:"uppercase"}}>{activity.name}</h3>
              <p>Date: {new Date(activity.date).toDateString()}</p>
              {activity.DID && <p>Department ID: {activity.DID}</p>}
              <p>Activity Type: {activity.type}</p>
              <p>Mandatory: {activity.mandatory ? "Yes" : "No"}</p>
>>>>>>> NEW-FINAL-MAIN
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
<<<<<<< HEAD
=======
<svg>
  <rect className="my-class" fillRule="evenodd" stopColor="red" />
</svg>

>>>>>>> NEW-FINAL-MAIN

export default Activities;
