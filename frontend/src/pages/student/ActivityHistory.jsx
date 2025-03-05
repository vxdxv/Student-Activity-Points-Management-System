import React from 'react';
import './student.css';

const activities = [
  { title: "Value Education Quiz", branch: "CS", type: "Departmental", date: "12-Dec-2024", points: 5 },
  { title: "Ragam Dance Workshop", branch: "", type: "Institute", date: "14-Feb-2024", points: 5 },
  { title: "Tathva EV Workshop", branch: "", type: "Institute", date: "17-March-2024", points: 5 },
  { title: "MUN Debate", branch: "", type: "Institute", date: "7-August-2024", points: 5 },
];

const ActivityHistory = () => {
  return (
    <div className="content">
      <div className="activity-history">
        <h1>Activity History</h1>
        <hr />
        <div className="activity-history-contents">
          {activities.map((activity, index) => (
            <div className="activity-history-content" key={index}>
              <div className="activity-history-content-left">
                <h1>{activity.title}</h1>
                <div className="bind">
                  {activity.branch && <span>Branch: {activity.branch}</span>}
                  <span>Activity Type: {activity.type}</span>
                </div>
              </div>
              <div className="activity-history-content-middle">
                <span>Date</span>
                <span>{activity.date}</span>
              </div>
              <div className="activity-history-content-right">
                <span>Points</span>
                <h1>{activity.points}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityHistory;
