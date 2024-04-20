import React, { useState } from 'react';
import './Navbar.css'
function EmployeeManagementSystem() {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState('');

  const addEmployee = () => {
    if (newEmployee.trim() !== '') {
      setEmployees([...employees, newEmployee]);
      setNewEmployee('');
    }
  };

  const deleteEmployee = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1);
    setEmployees(updatedEmployees);
  };

  return (
    <div>
      <h1>Employee Management System</h1>
      <input
        type="text"
        value={newEmployee}
        onChange={(e) => setNewEmployee(e.target.value)}
        placeholder="Enter employee name"
      />
      <button onClick={addEmployee}>Add Employee</button>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            {employee}
            <button onClick={() => deleteEmployee(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeManagementSystem;
