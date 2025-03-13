import React, { useState } from 'react';
import './admin.css';

const ActivityManagement = () => {
  const [activities, setActivities] = useState([
    { id: 1, name: 'Hackathon', type: 'Technical', date: '2025-04-10', location: 'Auditorium', participants: 50, description: 'Coding event' },
    { id: 2, name: 'Workshop', type: 'Departmental', date: '2025-05-15', location: 'Lab 2', participants: 30, description: 'ML Workshop' },
    { id: 3, name: 'Sports Fest', type: 'Cultural', date: '2025-06-05', location: 'Ground', participants: 100, description: 'Annual sports event' },
    { id: 4, name: 'Karate', type: 'Cultural', date: '2025-06-05', location: 'Auditorium', participants: 100, description: 'Annual sports event' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editActivity, setEditActivity] = useState(null);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [newActivity, setNewActivity] = useState({
    name: '',
    type: '',
    date: '',
    location: '',
    participants: '',
    description: ''
  });

  const handleDelete = (id) => {
    setActivities(activities.filter(activity => activity.id !== id));
  };

  const handleEdit = (activity) => {
    setEditActivity(activity);
    setIsEditModalOpen(true);
  };

  const handleUpdate = () => {
    setActivities(activities.map(activity => activity.id === editActivity.id ? editActivity : activity));
    setIsEditModalOpen(false);
  };

  const handleAddActivity = () => {
    setActivities([...activities, { id: activities.length + 1, ...newActivity }]);
    setAddModalOpen(false);
    setNewActivity({ name: '', type: '', date: '', location: '', participants: '', description: '' });
  };

  return (
    <div className="content">
      <div className="header">
        <h1>Activity Management</h1>
      </div>
      <div className="body">
        <div className="search-add">
          <div className="search">
            <label>Search by name:</label>
            <input type="text" placeholder="Enter activity name" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          </div>
          <button className="Add" onClick={() => setAddModalOpen(true)}>Add Activity</button>
        </div>

        <table className="styled-table">
          <thead>
            <tr>
              <th>Activity Name</th>
              <th>Type</th>
              <th>Date</th>
              <th>Location</th>
              <th>No. of Participants</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {activities.filter(activity => activity.name.toLowerCase().includes(searchQuery.toLowerCase())).map(activity => (
              <tr key={activity.id}>
                <td>{activity.name}</td>
                <td>{activity.type}</td>
                <td>{activity.date}</td>
                <td>{activity.location}</td>
                <td>{activity.participants}</td>
                <td>
                  <i className="bi bi-pencil-fill" onClick={() => handleEdit(activity)}></i>
                  <i className="bi bi-trash-fill" onClick={() => handleDelete(activity.id)}></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isAddModalOpen && (
        <div className="modal-overlay" onClick={() => setAddModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="title">
              <h2>Add New Activity</h2>
              <span className="close" onClick={() => setAddModalOpen(false)}>x</span>
            </div>
            <div className="input-group">
              <label>Name:</label>
              <input type="text" value={newActivity.name} onChange={(e) => setNewActivity({...newActivity, name: e.target.value})} />
            </div>
            <div className="input-group">
              <label>Date:</label>
              <input type="date" value={newActivity.date} onChange={(e) => setNewActivity({...newActivity, date: e.target.value})} />
            </div>
            <div className="input-group">
              <label>Type:</label>
              <input type="text" value={newActivity.type} onChange={(e) => setNewActivity({...newActivity, type: e.target.value})} />
            </div>
            <div className="input-group">
              <label>Location:</label>
              <input type="text" value={newActivity.location} onChange={(e) => setNewActivity({...newActivity, location: e.target.value})} />
            </div>
            <div className="input-group">
              <label>Description:</label>
              <input type="text" value={newActivity.description} onChange={(e) => setNewActivity({...newActivity, description: e.target.value})} />
            </div>
            <button className="submit-btn" onClick={handleAddActivity}>Add</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityManagement;
