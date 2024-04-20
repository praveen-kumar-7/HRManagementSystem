import React from "react";
import { Container, Typography, Grid, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  
  const handleViewJobVacancies = () => {
    // Navigate to job vacancies page
    console.log("View Job Vacancies clicked");
  };

  const handleEmployeeManagement = () => {
    // Navigate to employee management page
    console.log("Employee Management clicked");
  };

  return (
    <Container sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px' }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Welcome Home!
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        You are successfully logged in.
      </Typography>

      <Grid container spacing={3} mt={4}>
        <Grid item xs={12}>
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={handleViewJobVacancies}
            component={Link}
            to="/jobvacancieslist"
          >
            View Job Vacancies
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#ffffff' }}>
            <Typography variant="h6" color="primary" gutterBottom>
              Employee Management
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Manage employee details.
            </Typography>
            <Button 
              variant="outlined" 
              color="primary" 
              onClick={handleEmployeeManagement}
              component={Link}
              to="/attendencetracker/"
              sx={{ marginTop: '20px' }}
            >
              Go to Attendance
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#ffffff' }}>
            <Typography variant="h6" color="primary" gutterBottom>
              HR Reporting
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Generate HR reports.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
