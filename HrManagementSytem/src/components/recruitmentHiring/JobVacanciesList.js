import React, { useState } from 'react';
import './JobVacanciesList.css';  // Importing CSS file

const JobVacanciesList = () => {
  const [recruitmentData, setRecruitmentData] = useState([]);
  const [sortBy, setSortBy] = useState('title');

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/vacancy_list_view/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRecruitmentData(data);
    } catch (error) {
      console.error('Error fetching job vacancies:', error);
    }
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const sortedData = recruitmentData.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : ((b[sortBy] > a[sortBy]) ? -1 : 0));

  return (
    <div className="recruitment-container">
      <h2 className="page-title">Recruitment and Applicant Tracking</h2>
      <div className="actions">
        <button className="fetch-button" onClick={fetchData}>Show Job Vacancies</button>
        <select className="sort-select" value={sortBy} onChange={handleSortByChange}>
          <option value="title">Position</option>
          <option value="category">Category</option>
          <option value="location">Location</option>
          <option value="level">Level</option>
        </select>
      </div>
      <table className="recruitment-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Location</th>
            <th>Level</th>
            <th>Description</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map(job => (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.category}</td>
              <td>{job.location}</td>
              <td>{job.level}</td>
              <td className="description-cell">
                <div className="description-content">{job.description}</div>
              </td>
              <td>{job.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobVacanciesList;
