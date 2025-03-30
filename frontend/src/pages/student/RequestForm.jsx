<<<<<<< HEAD
import React, { useState } from "react";
import "./request.css";



const RequestForm = () => {
  const [formData, setFormData] = useState({
    category: "",
    activity: "",
    file: null,
=======
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import "./request.css";

const RequestForm = () => {
  const { user, loading } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    category: "",
    activity: "",
>>>>>>> NEW-FINAL-MAIN
    activityName: "",
    date: "",
    organization: "",
    location: "",
    description: "",
<<<<<<< HEAD
    isCustomActivity: false,
  });

  const [errors, setErrors] = useState({});

=======
    pastUrl: "",
    isCustomActivity: false,
    "select FA": []
  });
  const [faculties, setFaculties] = useState([]);
  const [errors, setErrors] = useState({});

  // Fetch FA data from API
  useEffect(() => {
    const fetchFAData = async () => {
      try {
        const response = await axios.get("/api/admin/manage-users/fa");
        if (response.status === 200) {
          setFaculties(response.data);
        }
      } catch (error) {
        console.error('Error fetching FA data:', error);
        alert('Failed to load faculty advisors');
      }
    };
    fetchFAData();
  }, []);

  // Extract SID from email
  const extractSid = (email) => {
    const parts = email.split("@")[0].split("_");
    return parts.length > 1 ? parts[1].toUpperCase() : email.split("@")[0].toUpperCase();
  };

>>>>>>> NEW-FINAL-MAIN
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

<<<<<<< HEAD
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, file });
    }
  };

=======
>>>>>>> NEW-FINAL-MAIN
  const resetCustomActivity = () => {
    setFormData({
      ...formData,
      isCustomActivity: false,
      activityName: "",
      date: "",
      organization: "",
      location: "",
      description: "",
<<<<<<< HEAD
    });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.category) errors.category = "Activity category is required";
    if (!formData.isCustomActivity && !formData.activity.trim()) errors.activity = "Activity selection is required";

=======
      pastUrl: ""
    });
  };

  // FA selection functions
  const addFA = () => {
    setFormData({
      ...formData,
      "select FA": [...formData["select FA"], ""]
    });
  };

  const removeFA = (index) => {
    const newFA = formData["select FA"].filter((_, i) => i !== index);
    setFormData({ ...formData, "select FA": newFA });
  };

  const handleFAChange = (e, index) => {
    const newFA = [...formData["select FA"]];
    newFA[index] = e.target.value;
    setFormData({ ...formData, "select FA": newFA });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.category) errors.category = "Activity category is required";
    if (!formData.isCustomActivity && !formData.activity.trim())
      errors.activity = "Activity selection is required";
>>>>>>> NEW-FINAL-MAIN
    if (formData.isCustomActivity) {
      if (!formData.activityName) errors.activityName = "Activity name is required";
      if (!formData.date) errors.date = "Date is required";
      if (!formData.organization) errors.organization = "Organization name is required";
      if (!formData.location) errors.location = "Location is required";
      if (!formData.description) errors.description = "Description is required";
    }
<<<<<<< HEAD

    if (!formData.file) errors.file = "Proof document is required";

    return errors;
  };

  const handleSubmit = (e) => {
=======
    return errors;
  };

  const handleSubmit = async (e) => {
>>>>>>> NEW-FINAL-MAIN
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
<<<<<<< HEAD
      console.log("Form Submitted", formData);
      alert("Request Submitted Successfully!");
=======
      try {
        const sid = user && user.email ? extractSid(user.email) : "";
        const faIds = formData["select FA"].map(v => parseInt(v, 10));

        const payload = {
          sid: sid,
          date: new Date().toISOString(),
          status: "Pending",
          link: formData.pastUrl,
          decisionDate: new Date().toISOString(),
          activityName: formData.isCustomActivity ? formData.activityName : formData.activity,
          description: formData.description,
          activityDate: formData.date,
          type: formData.category,
          pastUrl: formData.pastUrl,
          "select FA": faIds
        };

        const response = await fetch("http://localhost:8080/requests", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
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
>>>>>>> NEW-FINAL-MAIN
    }
  };

  return (
    <div className="request-page">
      <main className="request-form-container">
<<<<<<< HEAD
        <div className="header">
          <h2 className="title">Request for Points</h2>
=======
          <h2 className="title" >Request for Points</h2>
        <div>
          <p>Activity Category:</p>
>>>>>>> NEW-FINAL-MAIN
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
<<<<<<< HEAD
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
          
=======
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
            <label>Select FA:</label>
            <div className="fa-inputs">
              {formData["select FA"].map((fa, index) => (
                <div key={index} className="fa-item">
                  <select
                    name="select FA"
                    value={fa}
                    onChange={(e) => handleFAChange(e, index)}
                  >
                    <option value="">Select FA</option>
                    {faculties.map(fa => (
                      <option key={fa.faid} value={fa.faid}>
                        {fa.name} {fa.department?.name && `(${fa.department.name})`}
                      </option>
                    ))}
                  </select>
                  <button type="button" className="remove-fa-button"onClick={() => removeFA(index)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <button type="button" className="add-fa-button" onClick={addFA}>
              Add FA
            </button>
>>>>>>> NEW-FINAL-MAIN
          </div>

          <div className="form-group">
            {!formData.isCustomActivity ? (
              <>
<<<<<<< HEAD
                <select name="activity" value={formData.activity} onChange={handleChange}>
=======
                <select
                  name="activity"
                  value={formData.activity}
                  onChange={handleChange}
                >
>>>>>>> NEW-FINAL-MAIN
                  <option value="">Select an activity</option>
                  <option value="Sports">Sports</option>
                  <option value="Volunteering">Volunteering</option>
                  <option value="Cultural Event">Cultural Event</option>
                </select>
                {errors.activity && <span className="error">{errors.activity}</span>}
<<<<<<< HEAD
                <button type="button" className="not-listed-btn" onClick={() => setFormData({ ...formData, isCustomActivity: true })}>
                  Not Listed?
                </button>
              </>
            ) : (
              <>
              <div>
              <input type="text" name="activityName" placeholder="Enter activity name" value={formData.activityName} onChange={handleChange} />
              {errors.activityName && <span className="error">{errors.activityName}</span>}
              </div>
               
              <div>
              <input type="date" name="date" value={formData.date} onChange={handleChange} />
              {errors.date && <span className="error">{errors.date}</span>}
              </div>
                
=======
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
>>>>>>> NEW-FINAL-MAIN
              </>
            )}
          </div>

          {formData.isCustomActivity && (
            <div className="form-row">
<<<<<<< HEAD
            <div className="form-group">
              <div>
              <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
              {errors.location && <span className="error">{errors.location}</span>}
              </div>
              <div>
              <input type="text" name="organization" placeholder="Name of Organisation" value={formData.organization} onChange={handleChange} />
              {errors.organization && <span className="error">{errors.organization}</span>}
              </div>
              
            </div>
      
            <div className="form-description">
              <div>
              <textarea name="description" placeholder="Description of the event" value={formData.description} onChange={handleChange} />
              {errors.description && <span className="error">{errors.description}</span>}
              </div>
             
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
=======
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

          <button type="submit" className="submit-btn">
            Submit
          </button>
>>>>>>> NEW-FINAL-MAIN
        </form>
      </main>
    </div>
  );
};

<<<<<<< HEAD
export default RequestForm;

=======
export default RequestForm;
>>>>>>> NEW-FINAL-MAIN
