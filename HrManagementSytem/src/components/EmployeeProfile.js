import React from 'react';
import './Navbar'; // Assuming you have a CSS file for styling

const EmployeeProfile = ({ employee }) => {
    

  return (
    // <div className='Ep'>
    <div className="EmployeeProfile">
      <h2>Employee Profile</h2>
      <div className="profile-details">
        <div>
          <label>Name:</label>
          <span>{'Ullas'}</span>
        </div>
        <div>
          <label>Department:</label>
          <span>{'Cse'}</span>
        </div>
        <div>
          <label>Name:</label>
          <span>{'Shrik'}</span>
        </div>
        <div>
          <label>Department:</label>
          <span>{'Cse'}</span>
        </div>
        {/* Add more profile details here */}
      </div>
    </div>
    // </div>
  );
};

export default EmployeeProfile;
