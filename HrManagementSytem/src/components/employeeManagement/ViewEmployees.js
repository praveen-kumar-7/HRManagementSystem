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

const ViewEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [searchPhone, setSearchPhone] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/view_employees/');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setEmployees(data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event, setSearch) => {
    setSearch(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.full_name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    employee.email.toLowerCase().includes(searchEmail.toLowerCase()) &&
    employee.phone_number.includes(searchPhone)
  );

  return (
    <div>
      <h1>Employee List</h1>
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
          label="Search by phone..."
          variant="outlined"
          value={searchPhone}
          onChange={(e) => handleSearchChange(e, setSearchPhone)}
          fullWidth
          size="small"
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
        />
      </div>
      {employees.length > 0 ? (
        <TableContainer component={Paper} style={{ width: '100%', overflowX: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Full Name</TableCell>
                <TableCell>Experience</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEmployees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.id}</TableCell>
                  <TableCell>{employee.full_name}</TableCell>
                  <TableCell>{employee.experience}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.phone_number}</TableCell>
                  <TableCell>{employee.address}</TableCell>
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
}

export default ViewEmployees;
