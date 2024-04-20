import React, { useState } from 'react';
import { Typography, Paper, Container, Box, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

function AdherencePolicies() {
  const [showTrainingDetails, setShowTrainingDetails] = useState(false);

  const handleStartTraining = () => {
    setShowTrainingDetails(true);
  };

  return (
    <Container component={Paper} elevation={3} sx={{ padding: 3, marginTop: 5 }}>
      <Typography variant="h5" gutterBottom>
        Ensure Adherence to HR Policies
      </Typography>
      <Typography variant="body1" paragraph>
        It's important to ensure that all employees adhere to the company's HR policies to maintain a productive and harmonious work environment.
      </Typography>
      <Typography variant="body1" paragraph>
        This component provides information and actions related to HR policies and employee adherence.
      </Typography>
      
      <HrTraining />
      <EmployeeAdherence />

      <Box sx={{ marginTop: 3 }}>
        <Button variant="outlined" color="secondary" onClick={handleStartTraining}>
          Start Training
        </Button>
      </Box>

      {showTrainingDetails && <TrainingDetails />}
    </Container>
  );
}

function HrTraining() {
  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography variant="h6" gutterBottom>
        HR Training
      </Typography>
      <Typography variant="body2">
        HR training plays a crucial role in educating employees about the company's HR policies, procedures, and best practices.
      </Typography>
    </Box>
  );
}

function EmployeeAdherence() {
  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography variant="h6" gutterBottom>
        Employee Adherence
      </Typography>
      <Typography variant="body2">
        Monitoring employee adherence to HR policies ensures compliance, reduces risks, and fosters a positive work culture.
      </Typography>
    </Box>
  );
}

function TrainingDetails() {
  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography variant="h6" gutterBottom>
        Training Details
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Training Topic</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Trainer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>HR Policies Overview</TableCell>
            <TableCell>1 hour</TableCell>
            <TableCell>John Doe</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Workplace Ethics</TableCell>
            <TableCell>45 minutes</TableCell>
            <TableCell>Jane Smith</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Conflict Resolution</TableCell>
            <TableCell>1.5 hours</TableCell>
            <TableCell>Emily Brown</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
}

export default AdherencePolicies;
