import React, { useState } from 'react';
import './Navbar.css';

// Subcomponent for the search input
const SearchInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by name"
      value={value}
      onChange={onChange}
    />
  );
};

// Subcomponent for a single employee item
const EmployeeItem = ({ employee, onDelete }) => {
  return (
    <li>
      <span>{employee.name}</span> - <span>{employee.department}</span>
      <button onClick={() => onDelete(employee.id)}>Delete</button>
    </li>
  );
};

// Subcomponent for adding a new employee
const AddEmployeeForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [id,setId]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, department,id });
    setName('');
    setDepartment('');
    setId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        required
      />
      <button type="submit">Add Employee</button>
    </form>
  );
};

// Subcomponent for the list of employees
const EmployeeList = ({ employees, onDelete }) => {
  return (
    <ul>
      {employees.map(employee => (
        <EmployeeItem key={employee.id} employee={employee} onDelete={onDelete} />
      ))}
    </ul>
  );
};

const EmployeeDirectory = () => {
  // Example data for employees
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', department: 'Engineering' },
    { id: 2, name: 'Jane Smith', department: 'Marketing' },
    { id: 3, name: 'Michael Johnson', department: 'Sales' },
    // Add more employee data as needed
  ]);

  // State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // Filtered employees based on search term
  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search input change
  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  // Function to add a new employee
  const handleAddEmployee = newEmployee => {
    setEmployees([...employees, { id: Math.random(), ...newEmployee }]);
  };

  // Function to delete an employee
  const handleDeleteEmployee = id => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  return (
    <div className="EmployeeDirectory">
      <h2>Employee Directory</h2>
      <SearchInput value={searchTerm} onChange={handleSearchChange} />
      <AddEmployeeForm onAdd={handleAddEmployee} />
      <EmployeeList employees={filteredEmployees} onDelete={handleDeleteEmployee} />
    </div>
  );
};

export default EmployeeDirectory;
