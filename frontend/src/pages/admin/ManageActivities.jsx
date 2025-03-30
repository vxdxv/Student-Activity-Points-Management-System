import React, { useState, useEffect } from 'react';
import './admin.css';
import axios from 'axios';

const ActivityManagement = () => {
  const [activities, setActivities] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [editActivity, setEditActivity] = useState(null);
  const [newActivity, setNewActivity] = useState({
    name: '',
    type: '',
    mandatory: '',
    did: '',
    description: '',
    outside_inside: '',
    date: '',
<<<<<<< HEAD
=======
    end_date: '',
>>>>>>> NEW-FINAL-MAIN
    points: '',
    no_of_people: ''
  });
  
  // Fetch activities from backend
  useEffect(() => {
    fetchData();
    getDeptData();
  }, []);

<<<<<<< HEAD
=======

  const handleUploadAttendance = (actID) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".csv"; // Change as needed
    input.onchange = async (event) => {
      const file = event.target.files[0];
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        try {
          const response=await axios.post(`/api/admin/upload-attendance/${actID}`, formData);
          if(response.status===200){
            alert("Attendance uploaded successfully!");
          }
          else alert("Failed to upload attendance!");
        } catch (error) {
          console.error("Error uploading attendance", error);
          alert("Failed to upload attendance.");
        }
      }
    };
    input.click();
  };
  

>>>>>>> NEW-FINAL-MAIN
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/admin/manage-activities");
      if (response.status === 200) {
<<<<<<< HEAD
        setActivities(response.data);
=======
        const today = new Date();
        const updatedActivities = response.data.map(activity => {
          const startDate = new Date(activity.start_date); // Make sure your backend sends a start_date field
          const endDate = new Date(activity.end_date); 
  
          let status = "Upcoming";
          if (today >= startDate && today <= endDate) {
            status = "Ongoing";
          } else if (today > endDate) {
            status = "Completed";
          }
          return { ...activity, status };
        });
  
        setActivities(updatedActivities);
>>>>>>> NEW-FINAL-MAIN
      } else {
        alert('Error loading activities!');
      }
    } catch (error) {
      console.error('Error fetching activities', error);
      alert('Failed to fetch activities!');
    }
  };
<<<<<<< HEAD
=======
  
>>>>>>> NEW-FINAL-MAIN

  const getDeptData=async()=>{
    try {
      const response = await axios.get("/api/admin/get-departments");
      if (response.status === 200) {
        setDepartments(response.data);
      } else {
        console.log('Error loading departments!');
      }
    } catch (error) {
      console.error('Error fetching departments', error);
      
    }
  };

  // Add a new activity
  const handleAddActivity = async () => {
    try {
      const response = await axios.post("/api/admin/manage-activities", newActivity);
      if (response.status === 200) {
        fetchData(); // Refresh list
        setAddModalOpen(false);
        setNewActivity({
          name: '',
          type: '',
          mandatory: '',
          did: '',
          description: '',
          outside_inside: '',
          date: '',
<<<<<<< HEAD
=======
          end_date: '',
>>>>>>> NEW-FINAL-MAIN
          points: '',
          no_of_people: ''
        });
      } else {
        alert("Error adding activity!");
      }
    } catch (error) {
      console.error("Error adding activity", error);
      alert("Failed to add activity!");
    }
  };

  // Edit an existing activity
  const handleUpdate = async () => {
    try {
      const response = await axios.put(`/api/admin/manage-activities/${editActivity.actID}`, editActivity);
      if (response.status === 200) {
        fetchData(); // Refresh list
        setIsEditModalOpen(false);
      } else {
        alert("Error updating activity!");
      }
    } catch (error) {
      console.error("Error updating activity", error);
      alert("Failed to update activity!");
    }
  };

  // Delete an activity
  const handleDelete = async (id) => {
    try {
      console.log(id);
      const response = await axios.delete(`/api/admin/manage-activities/${id}`);
      if (response.status === 200) {
        fetchData(); // Refresh list
      } else {
        alert("Error deleting activity!");
      }
    } catch (error) {
      console.error("Error deleting activity", error);
      alert("Failed to delete activity!");
    }
  };

  // Open Edit Modal
  const handleEdit = (activity) => {
    setEditActivity(activity);
    setIsEditModalOpen(true);
  };

  return (
    <div className="content">
      <div className="header">
        <h1>Activity Management</h1>
<<<<<<< HEAD
      </div>
      <div className="body">
        <div className="search-add">
          <div className="search">
            <label>Search by name:</label>
=======
        <div className="search-add">
          <div className="search">
            <label style={{fontSize:"16px"}}>Search by name:</label>
>>>>>>> NEW-FINAL-MAIN
            <input
              type="text"
              placeholder="Enter activity name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="Add" onClick={() => setAddModalOpen(true)}>Add Activity</button>
        </div>

<<<<<<< HEAD
=======
      </div>
      <div className="body">
       
>>>>>>> NEW-FINAL-MAIN
        <table className="styled-table">
          <thead>
            <tr>
              <th>Activity Name</th>
              <th>Type</th>
              <th>Mandatory</th>
              <th>Dept</th>
              <th>Description</th>
              <th>O/I</th>
<<<<<<< HEAD
              <th>Date</th>
              <th>Points</th>
              <th>No. of Participants</th>
=======
              <th>Start date</th>
              <th>End date</th>
              <th>Points</th>
              <th>No. of Participants</th>
              <th>Status</th>
              <th>Attendance list</th>
>>>>>>> NEW-FINAL-MAIN
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
<<<<<<< HEAD
            {activities.filter(activity => activity.name.toLowerCase().includes(searchQuery.toLowerCase())).map(activity => (
              <tr key={activity.actID}>
                <td>{activity.name}</td>
                <td>{activity.type}</td>
                {activity.mandatory===1?<td>Yes</td>:<td>No</td>}
                {/* <td>{activity.did}</td> */}
                {departments.filter(dept => dept.did===activity.did).map(dept => (
                  <td>{dept.name}</td>
                ))}
                {activity.description.length > 20 ? <td>{activity.description.substring(0, 20)}...</td> : <td>{activity.description}</td>}
                <td>{activity.outside_inside}</td>
                <td>{new Date(activity.date).toLocaleDateString('en-GB')}</td>
                <td>{activity.points}</td>
                {activity.no_of_people===null?<td>0</td>:<td>{activity.no_of_people}</td>}
                <td>
                  <i className="bi bi-pencil-fill" onClick={() => handleEdit(activity)}></i>
                  <i className="bi bi-trash-fill" onClick={() => handleDelete(activity.actID)}></i>
                </td>
              </tr>
            ))}
          </tbody>
=======
  {activities
    .filter(activity => activity.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .map(activity => (
      <tr key={activity.actID}>
        <td>{activity.name}</td>
        <td>{activity.type}</td>
        <td>{activity.mandatory === 1 ? "Yes" : "No"}</td>
        <td>{departments.find(dept => dept.did === activity.did)?.name || "N/A"}</td>
        <td>{activity.description.length > 20 ? `${activity.description.substring(0, 20)}...` : activity.description}</td>
        <td>{activity.outside_inside}</td>
        <td>{new Date(activity.date).toLocaleDateString('en-GB')}</td>
        <td>{new Date(activity.end_date).toLocaleDateString('en-GB')}</td>
        <td>{activity.points}</td>
        <td>{activity.no_of_people || 0}</td>
        <td>{activity.status }</td>
        <td>
  {activity.status === "Completed" ? (
    <button style={{padding:"1px",borderRadius:"2px",cursor:"pointer"}} onClick={() => handleUploadAttendance(activity.actID)}>
      Upload Attendance
    </button>
  ) : (
    "N/A"
  )}
</td>
        <td>
          <i className="bi bi-pencil-fill" onClick={() => handleEdit(activity)}></i>
          <i className="bi bi-trash-fill" onClick={() => handleDelete(activity.actID)}></i>
        </td>
      </tr>
    ))}
</tbody>
>>>>>>> NEW-FINAL-MAIN
        </table>
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="modal-overlay" onClick={() => setIsEditModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Edit Activity</h2>
            <label>Name:</label>
            <input type="text" value={editActivity.name} onChange={(e) => setEditActivity({...editActivity, name: e.target.value})} />
            <label>Type:</label>
<select value={newActivity.type} onChange={(e) => setNewActivity({...newActivity, type: e.target.value})}>
  <option value="">Select Type</option>
  <option value="Institute">Institute</option>
  <option value="Department">Department</option>
  <option value="Other">Other</option>
</select>
<<<<<<< HEAD
            <label>Date:</label>
            <input type="date" value={editActivity.date} onChange={(e) => setEditActivity({...editActivity, date: e.target.value})} />

            <label>Department:</label>
            <select value={editActivity.did} onChange={(e) => setEditActivity({...editActivity, did: e.target.value})}>
=======
            <label>Start Date:</label>
            <input type="date" value={editActivity.date} onChange={(e) => setEditActivity({...editActivity, date: e.target.value})} />
            <label>End Date:</label>
            <input type="date" value={editActivity.end_date || ""} onChange={(e) => setEditActivity({...editActivity, end_date: e.target.value})} />
            <label>Department:</label>
            <select value={editActivity.did } onChange={(e) => setEditActivity({...editActivity, did: e.target.value})}>
>>>>>>> NEW-FINAL-MAIN
              <option value="">Select Department</option>
              {departments.map(dept => (
                <option key={dept.did} value={dept.did}>{dept.name}</option>
              ))}
            </select>
            <label>Mandatory:</label>
            <input type="text" value={editActivity.mandatory} onChange={(e) => setEditActivity({...editActivity, mandatory: e.target.value})} />
            <label>Description:</label>
            <input type="text" value={editActivity.description} onChange={(e) => setEditActivity({...editActivity, description: e.target.value})} />
            <button onClick={handleUpdate}>Submit</button>
          </div>
        </div>
      )}

      {/* Add Modal */}
      {isAddModalOpen && (
        <div className="modal-overlay" onClick={() => setAddModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Add New Activity</h2>
            <label>Name:</label>
            <input type="text" value={newActivity.name} onChange={(e) => setNewActivity({...newActivity, name: e.target.value})} />
            <label>Type:</label>
<select value={newActivity.type} onChange={(e) => setNewActivity({...newActivity, type: e.target.value})}>
  <option value="">Select Type</option>
  <option value="Institute">Institute</option>
  <option value="Department">Department</option>
  <option value="Other">Other</option>
</select>
            <label>Date:</label>
            <input type="date" value={newActivity.date} onChange={(e) => setNewActivity({...newActivity, date: e.target.value})} />
<<<<<<< HEAD
=======
            <label>End Date:</label>
            <input type="date" value={newActivity.end_date} onChange={(e) => setNewActivity({...newActivity, end_date: e.target.value})} />
>>>>>>> NEW-FINAL-MAIN
            <label>Mandatory:</label>
            <select value={newActivity.mandatory} onChange={(e) => setNewActivity({...newActivity, mandatory: e.target.value})}>
              <option value="">Select value</option>
              {/* {departments.map(dept => ( */}
                <option key={1} value={1}>Yes</option>
                <option key={0} value={0}>No</option>
              {/* ))} */}
            </select>
            <label>Description:</label>
            <input type="text" value={newActivity.description} onChange={(e) => setNewActivity({...newActivity, description: e.target.value})} />
            <label>O/I:</label>
            <select value={newActivity.outside_inside} onChange={(e) => setNewActivity({...newActivity, outside_inside: e.target.value})}>
              <option value="">Select value</option>
                <option key={1} value={"Inside"}>Inside</option>
                <option key={0} value={"Outside"}>Outside</option>
            </select>
            <label>Department:</label>
            <select value={newActivity.did} onChange={(e) => setNewActivity({...newActivity, did: e.target.value})}>
              <option value="">Select Department</option>
              {departments.map(dept => (
                <option key={dept.did} value={dept.did}>{dept.name}</option>
              ))}
            </select>
            <label>Points:</label>
            <input type="text" value={newActivity.points} onChange={(e) => setNewActivity({...newActivity, points: e.target.value})} />
            <button onClick={handleAddActivity}>Add</button>
          </div>
        </div>
      )}
    </div>
  );
};


export default ActivityManagement;
