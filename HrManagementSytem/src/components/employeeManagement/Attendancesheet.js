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
var d=87;
  const handleSearchChange = (event, setSearch) => {
    setSearch(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.full_name.toLowerCase().includes(searchQuery.toLowerCase()) 
  
  );

  return (
    <div>
      <h1>Attendance Sheet</h1>
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
       
      </div>
      {employees.length > 0 ? (
        <TableContainer component={Paper} style={{ width: '100%', overflowX: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Full Name</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Attendance</TableCell>
               
                
                
                
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEmployees.map((employee,i) => (
                
                <TableRow key={employee.id}>
                  <TableCell>{employee.id}</TableCell>
                  <TableCell>{employee.full_name}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{d+i+4}%</TableCell>
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
