import React from 'react';
import { Typography, Paper, Container, Box, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

function HRReporting() {
  const handleViewReports = () => {
    window.alert('Viewing HR Reports...');
  };

  return (
    <Container component={Paper} elevation={3} sx={{ padding: 3, marginTop: 5 }}>
      <Typography variant="h5" gutterBottom>
        Prepare and Submit HR Reports
      </Typography>
      <Typography variant="body1" paragraph>
        As part of human resources management, it's crucial to prepare and submit various HR reports to assess the organization's performance and make informed decisions.
      </Typography>
      <Typography variant="body1" paragraph>
        These reports include turnover rates, time-to-hire metrics, and employee engagement scores, which provide valuable insights into employee satisfaction, recruitment efficiency, and overall organizational health.
      </Typography>

      <Box sx={{ marginTop: 3 }}>
        <Button variant="contained" color="primary" onClick={handleViewReports}>
          View Reports
        </Button>
      </Box>

      <HRMetrics />
    </Container>
  );
}

function HRMetrics() {
  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography variant="h6" gutterBottom>
        HR Metrics Overview
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Metric</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Turnover Rates</TableCell>
            <TableCell>Percentage of employees leaving the organization during a certain period. High turnover rates may indicate dissatisfaction among employees or issues with organizational culture.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Time-to-Hire</TableCell>
            <TableCell>Number of days from posting a job to hiring a candidate. A longer time-to-hire may suggest challenges in recruitment processes or a competitive job market.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Employee Engagement Scores</TableCell>
            <TableCell>Measure of employee satisfaction, motivation, and loyalty. Higher engagement scores often correlate with increased productivity, lower turnover, and better organizational outcomes.</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
}

export default HRReporting;
