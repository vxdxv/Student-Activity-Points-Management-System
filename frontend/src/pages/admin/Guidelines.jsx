import React, { useState } from 'react';
import "./admin_1.css";

const Guidelines = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [inputText, setInputText] = useState('');

  const handleCreateClick = () => {
    setShowPopup(true);
  };

  const handleCloseClick = () => {
    setShowPopup(false);
    setInputText('');
  };

  const handleSaveClick = () => {
    alert(`Saved: ${inputText}`);
    setShowPopup(false);
  };

  return (
    <div className="content">
      <div className="container-fluid">
      <div className="header">
        <h3 className="guidelines-title">Activity Points Guidelines</h3>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Important Guidelines for Students</h5>
          <div className="guidelines-header">
            <span>Guideline</span>
            <span style={{marginLeft:"600px"}}>Edit</span>
            <span>Delete</span>
          </div>
          <ul className="guidelines-list">
            <li className="guideline-item">
              <span style ={{ marginBottom: '10px',marginTop:"20px",color:"black"}}>1. Students must request activity points as they complete their participation and receive the certificates.</span>
              <div className="icon-group">
                <i className="bi bi-pencil-fill edit-icon"></i>
                <i className="bi bi-trash3 delete-icon"></i>
              </div>
            </li>
            <li className="guideline-item">
              <span style={{ marginBottom: '10px',color:"black" }}>2. Students must read the guidelines PDF provided by the institute.</span>
              <div className="icon-group">
                <i className="bi bi-pencil-fill edit-icon"></i>
                <i className="bi bi-trash3 delete-icon"></i>
              </div>
            </li>
            <li className="guideline-item">
              <span  style={{ marginBottom: '20px',color:"black" }}>3. Students must upload their certificate in PDF format with "activityname_rollnumber" as the file name.</span>
              <div className="icon-group">
                <i className="bi bi-pencil-fill edit-icon"></i>
                <i className="bi bi-trash3 delete-icon"></i>
              </div>
            </li>
          </ul>
          <div className="alert alert-info mt-4">
            <i className="bi bi-info-circle me-2"></i>
            Note: Make sure to follow all guidelines strictly to ensure smooth processing of your activity points.
          </div>
        </div>
      </div>
      <button className="activity-guideline-button" onClick={handleCreateClick}>Create</button>
      
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
          <h4>Enter the Guideline</h4>
            <input 
              type="text" 
              value={inputText} 
              onChange={(e) => setInputText(e.target.value)}
            />
            <div className="popup-buttons">
              <button className="save-button" onClick={handleSaveClick}>Save</button>
              <button className="close-button" onClick={handleCloseClick}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
    
  );
};

export default Guidelines;
