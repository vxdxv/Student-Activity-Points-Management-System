import React from "react";
import { Link } from "react-router-dom";
import './student.css'
import "./global.css";

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
      </div>
    </div>
  );
};

export default Announcements;
