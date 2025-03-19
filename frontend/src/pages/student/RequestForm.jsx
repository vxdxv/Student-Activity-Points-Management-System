import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./request.css";


const RequestForm = () => {
  const { user, loading } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    category: "",
    activity: "",
    activityName: "",
    date: "",
    organization: "",
    location: "",
    description: "",
    pastUrl: "", // New field for past URL
    isCustomActivity: false,
  });
  const extractSid = (email) => {
    const sid = email.split("@")[0].split("_")[1];
    return sid;
  }
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
      pastUrl: "", // Reset past URL
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

    return errors;
  };
  const email = user.email;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        // Prepare the request payload
        const payload = {
          sid: extractSid(email), // Hardcoded for now, replace with dynamic value if needed
          date: new Date().toISOString(), // Current date as the request date
          status: "Pending", // Default status
          link: formData.pastUrl, // Send pastUrl input as the link field in the backend
          ecisionDate: new Date().toISOString(), // Set decisionDate to submitting time
          activityName: formData.isCustomActivity ? formData.activityName : formData.activity,
          description: formData.description,
          activityDate: formData.date,
          type: formData.category,
          pastUrl: formData.pastUrl, // Include past URL in the payload
        };

        // Send the request to the backend
        const response = await fetch("http://localhost:8080/requests", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          alert("Request Submitted Successfully!");
          // Reset the form after successful submission
          setFormData({
            category: "",
            activity: "",
            activityName: "",
            date: "",
            organization: "",
            location: "",
            description: "",
            pastUrl: "", // Reset past URL
            isCustomActivity: false,
          });
        } else {
          const errorData = await response.json();
          alert(`Failed to submit request: ${errorData.message || "Unknown error"}`);
        }
      } catch (error) {
        console.error("Error submitting request:", error);
        alert("An error occurred while submitting the request.");
      }
    }
  };

  return (
    <div className="request-page">
      <main className="request-form-container">
        <div className="header">
          <h2 className="title">Request for Points</h2>
        </div>
        <div>
          <h2>Activity Category:</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="category"
                  value="Institute"
                  checked={formData.category === "Institute"}
                  onChange={handleChange}
                />
                Institutional
              </label>
              <label>
                <input
                  type="radio"
                  name="category"
                  value="Department"
                  checked={formData.category === "Department"}
                  onChange={handleChange}
                />
                Departmental
              </label>
              <label>
                <input
                  type="radio"
                  name="category"
                  value="Other"
                  checked={formData.category === "Other"}
                  onChange={handleChange}
                />
                Other
              </label>
            </div>
            {errors.category && <span className="error">{errors.category}</span>}
          </div>

          <div className="form-group">
            {!formData.isCustomActivity ? (
              <>
                <select
                  name="activity"
                  value={formData.activity}
                  onChange={handleChange}
                >
                  <option value="">Select an activity</option>
                  <option value="Sports">Sports</option>
                  <option value="Volunteering">Volunteering</option>
                  <option value="Cultural Event">Cultural Event</option>
                </select>
                {errors.activity && <span className="error">{errors.activity}</span>}
                <div className="url-and-not-listed">
                  <input
                    type="text"
                    name="pastUrl"
                    placeholder="Past URL (if applicable)"
                    value={formData.pastUrl}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="not-listed-btn"
                    onClick={() => setFormData({ ...formData, isCustomActivity: true })}
                  >
                    Not Listed?
                  </button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <input
                    type="text"
                    name="activityName"
                    placeholder="Enter activity name"
                    value={formData.activityName}
                    onChange={handleChange}
                  />
                  {errors.activityName && <span className="error">{errors.activityName}</span>}
                </div>

                <div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                  {errors.date && <span className="error">{errors.date}</span>}
                </div>
              </>
            )}
          </div>

          {formData.isCustomActivity && (
            <div className="form-row">
              <div className="form-group">
                <div>
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                  />
                  {errors.location && <span className="error">{errors.location}</span>}
                </div>
                <div>
                  <input
                    type="text"
                    name="organization"
                    placeholder="Name of Organisation"
                    value={formData.organization}
                    onChange={handleChange}
                  />
                  {errors.organization && <span className="error">{errors.organization}</span>}
                </div>

              </div>

              <div className="form-description">
                <div>
                  <textarea
                    name="description"
                    placeholder="Description of the event"
                    value={formData.description}
                    onChange={handleChange}
                  />
                  {errors.description && <span className="error">{errors.description}</span>}
                </div>
              </div>
              <input
                type="text"
                name="pastUrl"
                placeholder="Past URL (if applicable)"
                value={formData.pastUrl}
                onChange={handleChange}
              />
              <div className="close">
                <button
                  type="button"
                  className="close-btn"
                  onClick={resetCustomActivity}
                >
                  Close
                </button>
              </div>
            </div>
          )}

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default RequestForm;