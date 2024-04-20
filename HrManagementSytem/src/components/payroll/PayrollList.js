import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

const PayrollList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [searchSalary, setSearchSalary] = useState('');
  const [employeeStatus, setEmployeeStatus] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/get_employees/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setEmployees(data);
      setEmployeeStatus(data.reduce((acc, emp) => ({ ...acc, [emp.id]: 'Pending' }), {}));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearchChange = (event, setSearch) => {
    setSearch(event.target.value);
  };

  const handleProcess = async (employeeId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/${employeeId}/process/`, { method: 'POST' });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setEmployeeStatus((prevStatus) => ({ ...prevStatus, [employeeId]: 'Processed' }));
      alert('Payroll processed successfully.');
    } catch (error) {
      console.error('Error processing payroll:', error);
      alert('An error occurred while processing the payroll.');
    }
  };

  const handleReject = async (employeeId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/${employeeId}/reject/`, { method: 'POST' });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setEmployeeStatus((prevStatus) => ({ ...prevStatus, [employeeId]: 'Rejected' }));
      alert('Payroll rejected successfully.');
    } catch (error) {
      console.error('Error rejecting payroll:', error);
      alert('An error occurred while rejecting the payroll.');
    }
  };

  const getStatus = (employeeId) => {
    return employeeStatus[employeeId] || 'Pending';
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.full_name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    employee.email.toLowerCase().includes(searchEmail.toLowerCase()) &&
    employee.salary.toString().includes(searchSalary.toLowerCase())
  );

  return (
    <div>
      <h1>Manage Payrolls</h1>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <TextField
          label="Search by name..."
          variant="outlined"
          value={searchQuery}
          onChange={(e) => handleSearchChange(e, setSearchQuery)}
          fullWidth
          size="small"
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
        />
        <TextField
          label="Search by email..."
          variant="outlined"
          value={searchEmail}
          onChange={(e) => handleSearchChange(e, setSearchEmail)}
          fullWidth
          size="small"
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
        />
        <TextField
          label="Search by salary..."
          variant="outlined"
          value={searchSalary}
          onChange={(e) => handleSearchChange(e, setSearchSalary)}
          fullWidth
          size="small"
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
        />
      </div>
      {filteredEmployees.length > 0 ? (
        <TableContainer component={Paper} style={{ width: '100%', overflowX: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Full Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEmployees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.id}</TableCell>
                  <TableCell>{employee.full_name}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.salary}</TableCell>
                  <TableCell>{getStatus(employee.id)}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={employee.salary <= 0 || getStatus(employee.id) !== 'Pending'}
                      onClick={() => handleProcess(employee.id)}
                    >
                      Process
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      disabled={employee.salary <= 0 || getStatus(employee.id) !== 'Pending'}
                      onClick={() => handleReject(employee.id)}
                    >
                      Reject
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>No employees found.</p>
      )}
    </div>
  );
};

export default PayrollList;
