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
    pastUrl: "", // field for past URL
    isCustomActivity: false,
    "select FA": [] // dynamic FA IDs inputs
  });
  // Predefined available FAs (update with real data as needed)
  const availableFAs = [
    { id: 1, name: "FA One" },
    { id: 2, name: "FA Two" },
    { id: 3, name: "FA Three" }
  ];

  // Updated extractSid function to convert SID to uppercase
  const extractSid = (email) => {
    const parts = email.split("@")[0].split("_");
    // If an underscore exists, use part after it; otherwise, use whole username
    return parts.length > 1 ? parts[1].toUpperCase() : email.split("@")[0].toUpperCase();
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
      pastUrl: ""
    });
  };

  // Functions to manage multiple FA ID inputs
  const addFA = () => {
    setFormData({
      ...formData,
      "select FA": [...(formData["select FA"] || []), ""]
    });
  };

  const removeFA = (index) => {
    const newFA = formData["select FA"].filter((_, i) => i !== index);
    setFormData({ ...formData, "select FA": newFA });
  };

  const handleFAChange = (e, index) => {
    const newFA = [...(formData["select FA"] || [])];
    newFA[index] = e.target.value; // expecting numeric FAID in string format, will convert
    setFormData({ ...formData, "select FA": newFA });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.category)
      errors.category = "Activity category is required";
    if (!formData.isCustomActivity && !formData.activity.trim())
      errors.activity = "Activity selection is required";
    if (formData.isCustomActivity) {
      if (!formData.activityName)
        errors.activityName = "Activity name is required";
      if (!formData.date)
        errors.date = "Date is required";
      if (!formData.organization)
        errors.organization = "Organization name is required";
      if (!formData.location)
        errors.location = "Location is required";
      if (!formData.description)
        errors.description = "Description is required";
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
        // Extract SID from user's email and convert to uppercase
        const sid = user && user.email ? extractSid(user.email) : "";
        // Convert FA input values to integers
        const faIds = formData["select FA"].map(v => parseInt(v, 10));
        // Prepare the request payload
        const payload = {
          sid: sid,
          date: new Date().toISOString(),
          status: "Pending",
          link: formData.pastUrl,
          decisionDate: new Date().toISOString(), // corrected property name
          activityName: formData.isCustomActivity ? formData.activityName : formData.activity,
          description: formData.description,
          activityDate: formData.date,
          type: formData.category,
          pastUrl: formData.pastUrl,
          "select FA": faIds // Include the FA values in the payload
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
          setFormData({
            category: "",
            activity: "",
            activityName: "",
            date: "",
            organization: "",
            location: "",
            description: "",
            pastUrl: "",
            isCustomActivity: false,
            "select FA": []
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
        {/* <div className="form-group">
          <label>Select FA:</label>
          <div className="fa-inputs">
            {formData["select FA"] && formData["select FA"].map((fa, index) => (
              <div key={index} className="fa-item">
                <input
                  type="text"
                  name="select FA"
                  value={fa}
                  onChange={(e) => handleFAChange(e, index)}
                />
                <button type="button" onClick={() => removeFA(index)}>Remove</button>
              </div>
            ))}
          </div>
          <button type="button" onClick={addFA}>Add FA</button>
        </div> */}
        {formData.isCustomActivity && (
          <div className="form-row">
            <div className="form-description">
              <div>

                {errors.description && <span className="error">{errors.description}</span>}
              </div>
            </div>



          </div>
        )}

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
              <p>{formData.category}</p>
            </div>

            {errors.category && <span className="error">{errors.category}</span>}
          </div>
          <div className="form-group">
            <label>Select FA:</label>
            <div className="fa-inputs">
              {formData["select FA"] && formData["select FA"].map((fa, index) => (
                <div key={index} className="fa-item">
                  <select
                    name="select FA"
                    value={fa}
                    onChange={(e) => handleFAChange(e, index)}
                  >
                    <option value="">Select FA</option>
                    {availableFAs.map((faOption) => (
                      <option key={faOption.id} value={faOption.id}>
                        {faOption.name}
                      </option>
                    ))}
                  </select>
                  <button type="button" onClick={() => removeFA(index)}>Remove</button>
                </div>
              ))}
            </div>
            <button type="button" onClick={addFA}>Add FA</button>
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
                    onClick={() =>
                      setFormData({ ...formData, isCustomActivity: true })
                    }
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
                <button type="button" className="close-btn" onClick={resetCustomActivity}>
                  Close
                </button>
              </div>
            </div>
          )}
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default RequestForm;