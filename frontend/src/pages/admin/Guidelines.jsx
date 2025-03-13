import React from "react";
import "./Guidelines.css";

const Guidelines = () => {
  return (
    <div className="guidelines-container">
      <h1>Guidelines</h1>
      <div className="guidelines-list">
        <p>➤ Students must upload their certificate in a PDF format with <b>activityname_rollnumber</b> as the file name.</p>
        <p>➤ Students must read the guidelines PDF provided by the institute.</p>
        <p>➤ Students must request activity points as and when they complete their participation and receive the certificates.</p>
      </div>
      <button type="submit" className="submit-button">Edit</button>
    </div>
  );
};

export default Guidelines;
