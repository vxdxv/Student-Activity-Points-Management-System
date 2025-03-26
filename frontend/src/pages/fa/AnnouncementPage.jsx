import React, { useState } from "react";
import "./Announcementpage.css"; // Import the CSS file

const AnnouncementForm = () => {
  const [heading, setHeading] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Announcement Submitted!\nHeading: ${heading}\nBody: ${body}`);
    setHeading("");
    setBody("");
  };

  return (
    <div className="form-container">
      <h2>New announcement</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="heading"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          className="input-field"
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="textarea-field"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AnnouncementForm;
