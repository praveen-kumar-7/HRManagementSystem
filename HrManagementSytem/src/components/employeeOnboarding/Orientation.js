import React, { useState } from 'react';
import './Orientation.css';  // Importing CSS file

function Orientation() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Conduct Orientation Session', completed: false },
    { id: 2, title: 'Introduce to Team and Supervisor', completed: false }
  ]);

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks === 0 ? 0 : (completedCount / totalTasks) * 100;

  return (
    <div className="orientation-container">
      <h2>Orientation Checklist</h2>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      {tasks.map(task => (
        <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
          <h3>{task.title}</h3>
          <p>{task.completed ? 'Completed' : 'Pending'}</p>
          <button onClick={() => toggleTaskCompletion(task.id)}>
            {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
          </button>
        </div>
      ))}
      <div className="additional-resources">
        <h3>Additional Resources</h3>
        <p>Employee Handbook</p>
        <p>Company Policies</p>
        <a href="/training-videos">Training Videos</a>
      </div>
    </div>
  );
}

export default Orientation;
