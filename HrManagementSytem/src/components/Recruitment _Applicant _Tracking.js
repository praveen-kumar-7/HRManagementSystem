// RecruitmentAndApplicantTracking.js

import React, { useState } from 'react';
import './Navbar.css';

const RecruitmentAndApplicantTracking = () => {
  // Dummy recruitment data
  const [recruitmentData, setRecruitmentData] = useState([
    { id: 1, position: 'Software Engineer', status: 'Open', applications: 10 },
    { id: 2, position: 'HR Manager', status: 'Closed', applications: 5 },
    { id: 3, position: 'Marketing Intern', status: 'Open', applications: 7 },
    // Add more recruitment data as needed
  ]);

  const [filter, setFilter] = useState('All');
  const [sortBy, setSortBy] = useState('position');

  const handleAddPosition = () => {
    const newPosition = { id: recruitmentData.length + 1, position: 'New Position', status: 'Open', applications: 0 };
    setRecruitmentData([...recruitmentData, newPosition]);
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredData = filter === 'All' ? recruitmentData : recruitmentData.filter(job => job.status === filter);
  const sortedData = filteredData.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : ((b[sortBy] > a[sortBy]) ? -1 : 0));

  return (
    <div className="recruitment">
      <h2>Recruitment and Applicant Tracking</h2>
      <div className="actions">
        <button onClick={handleAddPosition}>Add Position</button>
        <select value={sortBy} onChange={handleSortByChange}>
          <option value="position">Position</option>
          <option value="status">Status</option>
          <option value="applications">Applications</option>
        </select>
        <select value={filter} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </select>
      </div>
      <div className="recruitment-list">
        {sortedData.map(job => (
          <div key={job.id} className="recruitment-item">
            <span>{job.position}</span>
            <span>{job.status}</span>
            <span>{job.applications}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecruitmentAndApplicantTracking;
