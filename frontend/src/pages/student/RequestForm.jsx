import React, { useState } from "react";
import "./request.css";



const RequestForm = () => {
  const [formData, setFormData] = useState({
    category: "",
    activity: "",
    file: null,
    activityName: "",
    date: "",
    organization: "",
    location: "",
    description: "",
    isCustomActivity: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, file });
    }
  };

  const resetCustomActivity = () => {
    setFormData({
      ...formData,
      isCustomActivity: false,
      activityName: "",
      date: "",
      organization: "",
      location: "",
      description: "",
    });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.category) errors.category = "Activity category is required";
    if (!formData.isCustomActivity && !formData.activity.trim()) errors.activity = "Activity selection is required";

    if (formData.isCustomActivity) {
      if (!formData.activityName) errors.activityName = "Activity name is required";
      if (!formData.date) errors.date = "Date is required";
      if (!formData.organization) errors.organization = "Organization name is required";
      if (!formData.location) errors.location = "Location is required";
      if (!formData.description) errors.description = "Description is required";
    }

    if (!formData.file) errors.file = "Proof document is required";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted", formData);
      alert("Request Submitted Successfully!");
    }
  };

  return (
    <div className="request-page">
      <main className="request-form-container">
        <div className="header">
          <h2 className="title">Request for Points</h2>
          <p style ={{marginBottom: "40px", marginLeft:"250px"}}>Select activity category, activity type, and upload proof to claim your points!</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
          <label style ={{marginBottom:"220px"}}>Activity Category:</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="category" value="Institutional" onChange={handleChange} />
                Institutional
              </label>
              <label>
                <input type="radio" name="category" value="Departmental" onChange={handleChange} />
                Departmental
              </label>
              <label>
                <input type="radio" name="category" value="Other" onChange={handleChange} />
                Other
              </label>
            </div>
            {errors.category && <span className="error">{errors.category}</span>}
          </div>

          <div className="form-group">
            {!formData.isCustomActivity ? (
              <>
                <select name="activity" value={formData.activity} onChange={handleChange}>
                  <option value="">Select an activity</option>
                  <option value="Sports">Sports</option>
                  <option value="Volunteering">Volunteering</option>
                  <option value="Cultural Event">Cultural Event</option>
                </select>
                {errors.activity && <span className="error">{errors.activity}</span>}
                <button type="button" className="not-listed-btn" onClick={() => setFormData({ ...formData, isCustomActivity: true })}>
                  Not Listed?
                </button>
              </>
            ) : (
              <>
                <input type="text" name="activityName" placeholder="Enter activity name" value={formData.activityName} onChange={handleChange} />
                {errors.activityName && <span className="error">{errors.activityName}</span>}

                <input type="date" name="date" value={formData.date} onChange={handleChange} />
                {errors.date && <span className="error">{errors.date}</span>}
              </>
            )}
          </div>

          {formData.isCustomActivity && (
            <div className="form-row">
            <div className="form-group">
              <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
              {errors.location && <span className="error">{errors.location}</span>}
              <input type="text" name="organization" placeholder="Name of Organisation" value={formData.organization} onChange={handleChange} />
              {errors.organization && <span className="error">{errors.organization}</span>}
            </div>
      
            <div className="form-description">
              <textarea name="description" placeholder="Description of the event" value={formData.description} onChange={handleChange} />
              {errors.description && <span className="error">{errors.description}</span>}
            </div>
            <div className="close">
            <button type="button" className="close-btn" onClick={resetCustomActivity}>Close</button>
            </div>
          </div>
          )}

<div className="form-upload">
  <label>Upload PDF Proof:</label>
  <div className="custom-file-upload">
    <label htmlFor="file-upload" className="upload-btn">
      Choose File
    </label>
    <input id="file-upload" type="file" accept="application/pdf" onChange={handleFileChange} />
    <span className="file-name">{formData.file ? formData.file.name : "No file chosen"}</span>
  </div>
  {errors.file && <span className="error">{errors.file}</span>}
</div>


          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default RequestForm;

