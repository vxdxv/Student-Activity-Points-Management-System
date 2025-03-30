<<<<<<< HEAD
import React from "react";
import "./dashboard.css"; 

const StudentDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar"></div>
      <div className="main-content">
        <div className="header">
          <h5 className="dashboard-title">Student Portal Dashboard</h5>
          {/* <div className="profile-section">
            <img
              src="https://via.placeholder.com/40"
              alt="profile"
              className="profile-image"
            />
            <span>John Doe</span>
          </div> */}
        </div>

        {/* Welcome Banner */}
        <div className="welcome-banner">
          <h3>Welcome back, John!</h3>
          <p>September 4, 2023 | B220584CS</p>
        </div>

        {/* Progress Section */}
        <div className="progress-section">
          <div className="progress-box">
            <h4>14</h4>
            <p>Total Department Points</p>
          </div>
          <div className="progress-box">
            <h4>2</h4>
            <p>Total Institutional Points</p>
          </div>
          <div className="progress-box">
            <h4>16</h4>
            <p>Total Activity Points</p>
          </div>
        </div>

        {/* Activity History */}
        <div className="activity-section">
          <h5 className="section-title">Activity History</h5>
          <table className="activity-table">
            <thead>
              <tr>
                <th>Activity Name</th>
                <th>Institute or Departmental</th>
                <th>Activity Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Value Education Quiz</td>
                <td>Departmental</td>
                <td>--</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Announcements */}
        <div className="announcement-section">
          <h5 className="section-title">Announcements</h5>
          <div className="announcement-box">
            <h6>1. FA Meeting 2 Postponement</h6>
            <p>FA meeting is postponed to 18th March 2025</p>
            <br></br>
            <h6>2. Certificate Upload Deadline</h6>
            <p>Deadline for Winter semester: 20th April 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
=======
import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
    const [student, setStudent] = useState(null);
    const [latestActivity, setLatestActivity] = useState(null);
    const [announcements, setAnnouncements] = useState([]);

    const fetchStudentData = async () => {
        try {
            const storedUser = localStorage.getItem("user");
            if (!storedUser) {
                console.error("No user data in localStorage.");
                return;
            }

            const user = JSON.parse(storedUser);
            if (!user?.sid) {
                console.error("Student ID missing in user data:", user);
                return;
            }

            console.log("Fetching data for Student ID:", user.sid);

            // Fetch Student Data
            const studentResponse = await fetch(`http://localhost:8080/api/student/${user.sid}`);
            if (!studentResponse.ok) throw new Error("Failed to fetch student data.");
            const studentData = await studentResponse.json();
            setStudent(studentData);

            // Fetch Latest Activity
            const activityResponse = await fetch(`http://localhost:8080/api/student/${user.sid}/activities`);
            if (!activityResponse.ok) throw new Error("Failed to fetch activity data.");
            const activityData = await activityResponse.json();
            if (activityData.length > 0) {
                setLatestActivity(activityData[activityData.length - 1]);
            }

            // Fetch Announcements
            const announcementResponse = await fetch(`http://localhost:8080/api/student/${user.sid}/announcements`);
            if (!announcementResponse.ok) throw new Error("Failed to fetch announcements.");
            const announcementData = await announcementResponse.json();
            console.log("Fetched announcements:", announcementData);
            setAnnouncements(announcementData.slice(-2)); // Show only last 2 announcements

        } catch (error) {
            console.error("Error fetching student data:", error);
        }
    };

    useEffect(() => {
        fetchStudentData();
    }, []);

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">STUDENT DASHBOARD</h1>

            {student && (
                <div className="student-info">
                    <h3>Welcome back, {student.name}!</h3>
                    <p>{new Date().toLocaleDateString()} | Roll-number: {student.sid}</p>
                </div>
            )}
           {/* Display Points */}
            <div className="points-section">
                <div className="progress-box">
                    <h2>{student?.deptPoints || 0}</h2>
                    <p>Total Department Points</p>
                </div>
                <div className="progress-box">
                    <h2>{student?.institutePoints || 0}</h2>
                    <p>Total Institutional Points</p>
                </div>
                <div className="progress-box">
                    <h2>{(student?.deptPoints || 0) + (student?.institutePoints || 0)}</h2>
                    <p>Total Activity Points</p>
                </div>
            </div>

            {/* Latest Activity Section */}
            <div className="activity-header">
                <h2 className="activity-title">Activity History</h2>
                <Link to="/student/activity-history" className="see-all-btn">See All</Link>
            </div>
            <table className="activity-table">
                <thead>
                    <tr>
                        <th>Activity Name</th>
                        <th>Institute or Departmental</th>
                        <th>Activity Points</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {latestActivity ? (
                        <tr>
                            <td style={{textTransform:"uppercase"}}>{latestActivity?.title || "No title available"}</td>
                            <td>{latestActivity?.activityType || "No type available"}</td>
                            <td>{latestActivity?.points ?? "0"}</td>
                            <td>{latestActivity?.date || "No date available"}</td>
                        </tr>
                    ) : (
                        <tr>
                            <td colSpan="4">No recent activity available</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Announcements Section */}
            <div className="announcement-header">
                <h2 className="announcement-title">Announcements</h2>
                <Link to={`/student/announcements`} className="see-all-btn">See All</Link>
            </div>
            <table className="announcement-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {announcements.length > 0 ? (
                        announcements.map((announcement, index) => (
                            <tr key={index}>
                                <td>{announcement.title}</td>
                                <td>{announcement.body}</td>
                                <td>{new Date(announcement.date).toLocaleDateString()}</td>
                                <td>{announcement.time}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No announcements available.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
>>>>>>> NEW-FINAL-MAIN
};

export default StudentDashboard;
