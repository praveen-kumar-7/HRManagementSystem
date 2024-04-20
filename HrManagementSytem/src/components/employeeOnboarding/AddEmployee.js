  import React, { useState } from 'react';
  import TextField from '@mui/material/TextField';
  import Button from '@mui/material/Button';
  import Typography from '@mui/material/Typography';
  import Container from '@mui/material/Container';
  import Select from '@mui/material/Select';
  import MenuItem from '@mui/material/MenuItem';
  import FormControl from '@mui/material/FormControl';
  import InputLabel from '@mui/material/InputLabel';
  function AddEmployee() {
    const [jobDetails, setJobDetails] = useState({
      full_name: '',
      experience: '',
      department: '',
      email: '',
      phone_number: '',
      address: '',
    });
    
    const [employees, setEmployees] = useState([]);
    const [, setError] = useState('');
    
  
        const handleChange = (e) => {
      const { name, value } = e.target;
      setJobDetails(prevState => ({
        ...prevState,
        [name]: value,
      }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
          const addEmployeeResponse = await fetch('http://127.0.0.1:8000/add_employee/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',

            },
            body: JSON.stringify(jobDetails),
            credentials: 'include',  // Include cookies in the request
          });
          
          // Check if response is not OK
          if (!addEmployeeResponse.ok) {
            throw new Error(`HTTP error! Status: ${addEmployeeResponse.status}`);
          }
      
          const newEmployee = await addEmployeeResponse.json();
      
          // Check if newEmployee is not valid JSON
          if (!newEmployee || typeof newEmployee !== 'object') {
            throw new Error('Invalid JSON response');
          }
      
          setEmployees([...employees, newEmployee]);
          setJobDetails({
            full_name: '',
            experience: '',
            department: '',
            email: '',
            phone_number: '',
            address: '',
          });
      
          setError('');
          alert('Employee added successfully');
        } catch (error) {
          console.error('Error adding employee:', error);
          setError('Failed to add employee');
        }
      };
    
      return (
        <Container component="main" maxWidth="xs" sx={{ marginTop: 8 }}>
          <Typography variant="h5" component="h1" gutterBottom>
            Add Employee
          </Typography>
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Full Name"
              name="full_name"
              value={jobDetails.full_name}
              onChange={handleChange}
              required
            />
            <FormControl variant="outlined" fullWidth margin="normal">
              <InputLabel>Experience</InputLabel>
              <Select
                name="experience"
                value={jobDetails.experience}
                onChange={handleChange}
                label="Experience"
                required
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="Fresher">Fresher</MenuItem>
                <MenuItem value="LessThan2">Less than 2 Years</MenuItem>
                <MenuItem value="Senior">Senior</MenuItem>
              </Select>
            </FormControl>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Department"
              name="department"
              value={jobDetails.department}
              onChange={handleChange}
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Email"
              type="email"
              name="email"
              value={jobDetails.email}
              onChange={handleChange}
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Phone Number"
              type="tel"
              name="phone_number"
              value={jobDetails.phone_number}
              onChange={handleChange}
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              multiline
              rows={4}
              label="Address"
              name="address"
              value={jobDetails.address}
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              Add Employee
            </Button>
          </form>
        </Container>
      );
    }

    export default AddEmployee;