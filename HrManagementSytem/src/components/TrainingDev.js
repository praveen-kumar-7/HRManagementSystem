// TrainingAndDevelopment.js

import React from 'react';
import './Navbar.css';

const TrainingAndDevelopment = () => {
  // Dummy training data
  const trainingData = [
    { id: 1, course: 'React Fundamentals', duration: '2 weeks' },
    { id: 2, course: 'Node.js Basics', duration: '1 week' },
    { id: 3, course: 'Advanced CSS Techniques', duration: '3 weeks' },
    // Add more training data as needed
  ];

  return (
    <div className="training">
      <h2>Training and Development</h2>
      <div className="training-list">
        {trainingData.map(training => (
          <div key={training.id} className="training-item">
            <span>{training.course}</span>
            <span>{training.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingAndDevelopment;
