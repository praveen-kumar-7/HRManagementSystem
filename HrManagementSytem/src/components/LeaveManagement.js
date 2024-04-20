import React, { useState } from 'react';
import './Navbar.css';

const LeaveManagement = () => {
  
    console.log("LeaveManagement component rendered");
    // Rest of your component code
  
  
  // Sample leave data
  const [leaveRequests, setLeaveRequests] = useState([
    { id: 1, name: 'John Doe', startDate: '2024-04-01', endDate: '2024-04-03', status: 'Approved' },
    { id: 2, name: 'Jane Smith', startDate: '2024-04-05', endDate: '2024-04-07', status: 'Pending' },
    // Add more leave requests as needed
  ]);

  // Function to handle new leave request submission
  const handleLeaveRequest = (formData) => {
    const newLeaveRequest = { id: leaveRequests.length + 1, ...formData, status: 'Pending' };
    setLeaveRequests([...leaveRequests, newLeaveRequest]);
  };

  return (
    <div className="leave-management">
      <h2>Leave Management</h2>
      <LeaveRequestForm onSubmit={handleLeaveRequest} />
      <LeaveRequestList leaveRequests={leaveRequests} />
    </div>
  );
};

// Leave request form component
const LeaveRequestForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', startDate: '', endDate: '' });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', startDate: '', endDate: '' });
  };

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="leave-request-form">
      <input type="text" name="name" placeholder="Employee Name" value={formData.name} onChange={handleChange} required />
      <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
      <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

// Leave request list component
const LeaveRequestList = ({ leaveRequests }) => {
  return (
    <div className="leave-request-list">
      <h3>Leave Requests</h3>
      {leaveRequests.map(request => (
        <div key={request.id} className="leave-request-item">
          <span>Name: {request.name}</span>
          <span>Start Date: {request.startDate}</span>
          <span>End Date: {request.endDate}</span>
          <span>Status: {request.status}</span>
        </div>
      ))}
    </div>
  );
};

export default LeaveManagement;
