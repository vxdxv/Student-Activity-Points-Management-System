<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import './student.css'

const Announcements = () => {
  const announcements = [
    { id: "announcement-1", title: "Announcement 1", details: "Details about announcement 1", date: "2 days ago" },
    { id: "announcement-2", title: "Announcement 2", details: "Details about announcement 2", date: "4 days ago" },
  ];

  return (
    <div>
      <div className="content">
        <h1>Announcements</h1>
        <div className="announcements">
          {announcements.map((announcement) => (
            <Link to={`/student/announcements/${announcement.id}`} key={announcement.id} className="announcement">
              <div className="announcement-details">
                <h3>{announcement.title}</h3>
                <p>{announcement.details}</p>
              </div>
              <span>{announcement.date}</span>
            </Link>
          ))}
        </div>
=======
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./student.css";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAnnouncements = async () => {
    try {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) {
        console.error("No user data in localStorage.");
        setError("User not found. Please log in.");
        return;
      }

      const user = JSON.parse(storedUser);
      if (!user?.sid) {
        console.error("Student ID missing in user data:", user);
        setError("Invalid student ID.");
        return;
      }

      const response = await fetch(`http://localhost:8080/api/student/${user.sid}/announcements`);
      if (!response.ok) throw new Error("Failed to fetch announcements.");

      const data = await response.json();
      setAnnouncements(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  return (
    <div className="content">
      <h1>Announcements</h1>

      {loading && <p>Loading announcements...</p>}
      {error && <p className="error-message">Error: {error}</p>}

      {!loading && !error && announcements.length === 0 && <p>No announcements available.</p>}

      <div className="announcements">
        {announcements.map((announcement) => (
          <Link to={`/student/announcements/${announcement.aid}`} key={announcement.aid} className="announcement">

            <div className="announcement-details">
              <h3>{announcement.title}</h3>
              <p>{announcement.body}</p>
            </div>
            <span>{new Date(announcement.date).toLocaleDateString("en-GB")} | {announcement.time}</span>
          </Link>
        ))}
>>>>>>> NEW-FINAL-MAIN
      </div>
    </div>
  );
};

export default Announcements;
