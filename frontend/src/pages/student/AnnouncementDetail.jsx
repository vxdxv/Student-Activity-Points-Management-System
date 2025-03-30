import React from 'react'
import { Link } from 'react-router-dom'


const AnnouncementDetail = () => {
  return (
    <div>
      <div className="content">
        <Link to="/student/announcements">/Announcements</Link>
        <div className='announcement-content'>
            <div className="announcement-title-time">
                <h1>Announcement-1</h1>
                <span>03/02/2025,00:43am</span>
            </div>
            <div className="announcement-body">
                Write a report on the topic "The impact of the internet on the youth of today". The report should be submitted by 10th February 2025.
            </div>
            <Link to="/student/announcements"><button className="btn">Close</button></Link>
        </div>
      </div>
    </div>
  )
}

export default AnnouncementDetail
