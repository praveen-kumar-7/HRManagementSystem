import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

function JobDescription() {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    level: '',
    category: '',
    location: '',
    hours: '',
    description: '',
  });

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
      const response = await fetch('http://127.0.0.1:8000/create_job_description/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobDetails),
      });

      const data = await response.json();

      if (data.success) {
        alert(data.success);
      } else {
        alert('Failed to create job description');
      }
    } catch (error) {
      console.error('Error creating job description:', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ marginTop: 8 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Create Job Description
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
      <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Job Title"
          name="title"
          value={jobDetails.title}
          onChange={handleChange}
          required
        />
        <FormControl variant="outlined" fullWidth margin="normal">
          <InputLabel id="level-label">Level</InputLabel>
          <Select
            labelId="level-label"
            name="level"
            value={jobDetails.level}
            onChange={handleChange}
            label="Level"
            required
          >
            <MenuItem value="">Select Level</MenuItem>
            <MenuItem value="Entry">Entry</MenuItem>
            <MenuItem value="Mid">Mid</MenuItem>
            <MenuItem value="Senior">Senior</MenuItem>
          </Select>
        </FormControl>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Category"
          name="category"
          value={jobDetails.category}
          onChange={handleChange}
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Location"
          name="location"
          value={jobDetails.location}
          onChange={handleChange}
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Hours"
          name="hours"
          value={jobDetails.hours}
          onChange={handleChange}
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          multiline
          rows={4}
          label="Job Description"
          name="description"
          value={jobDetails.description}
          onChange={handleChange}
          required
        />
      <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3, mb: 2 }}
        >
          Create Job Description
        </Button>
      </form>
    </Container>
  );
}

export default JobDescription;
