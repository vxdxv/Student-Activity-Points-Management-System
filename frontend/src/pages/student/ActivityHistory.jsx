import React from 'react'
import './student.css'
const ActivityHistory = () => {
  return (
    <div className='content'>
      <div className="activity-history">
        <h1>Activity History</h1>
        <hr/>
        <div className="activity-history-contents">
          <div className="activity-history-content">
            <div className="activity-history-content-left">
            <h1>Value Education quiz</h1>
            <div className="bind">
              <span>Branch:CS</span>
            <span>Activity Type:Departmental</span>
            </div>
            </div>
          <div className="activity-history-content-middle">
            <span>Date</span>
            <span>12-Dec-2024</span>
            </div>
            <div className="activity-history-content-right">
            <span>Points</span>
            <h1>5</h1>
            </div>

            
          </div>
          <div className="activity-history-content">
            <div className="activity-history-content-left">
            <h1>Value Education quiz</h1>
            <div className="bind">
              <span>Branch:CS</span>
            <span>Activity Type:Departmental</span>
            </div>
            </div>
          <div className="activity-history-content-middle">
            <span>Date</span>
            <span>12-Dec-2024</span>
            </div>
            <div className="activity-history-content-right">
            <span>Points</span>
            <h1>5</h1>
            </div>
          </div>
          </div>
          
      </div>
    </div>
  )
}

export default ActivityHistory
