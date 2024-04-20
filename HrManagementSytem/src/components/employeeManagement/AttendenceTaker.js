import React, { useState, useEffect } from 'react';
import { Typography, TextField, Box, Checkbox, FormControlLabel, Container, Button } from '@mui/material';
import styles from './AttendanceTracker.module.css';
import AttendenceSheet from './Attendancesheet';

const AttendanceTracker = () => {
  const [attendance, setAttendance] = useState([]);
  const [selectedDate, setSelectedDate] = useState(getCurrentDate());
  const [employees, setEmployees] = useState([]);
  const [showAttendenceSheet, setShowAttendenceSheet] = useState(false);

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleAttendanceToggle = (index) => {
    const updatedAttendance = [...attendance];
    updatedAttendance[index] = !updatedAttendance[index];
    setAttendance(updatedAttendance);
  };

  const fetchEmployeeNames = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/view_employees/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setEmployees(data);
      setAttendance(new Array(data.length).fill(false));
    } catch (error) {
      console.error('Error fetching employee names:', error);
    }
  };

  const handleShowAttendenceSheet = () => {
    setShowAttendenceSheet(true);
  };

  useEffect(() => {
    fetchEmployeeNames();
  }, []);

  return (
    <Container className={styles.AttendanceTracker}>
      <Typography variant="h4" gutterBottom>
        MARK ATTENDANCE
      </Typography>
      <Box mb={3}>
        <TextField
          type="date"
          id="date"
          label="Date"
          value={selectedDate}
          onChange={handleDateChange}
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box display="flex" flexWrap="wrap">
        {employees.map((employee, index) => (
          <Box 
            key={index} 
            className={`${styles.attendanceItem} ${attendance[index] ? styles.present : styles.absent}`} 
            onClick={() => handleAttendanceToggle(index)}
            p={2}
            borderRadius={1}
            flexGrow={1}
            textAlign="center"
            sx={{
              '&:hover': {
                backgroundColor: 'whitesmoke',
                cursor: 'pointer'
              }
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={attendance[index] || false}
                  onChange={() => handleAttendanceToggle(index)}
                  color="primary"
                />
              }
              label={employee.full_name}
              labelPlacement="bottom"
            />
            <Typography variant="body2" color="textSecondary">
              {attendance[index] ? 'Present' : 'Absent'}
            </Typography>
          </Box>
        ))}
      </Box>
      <Button variant="contained" color="primary" onClick={handleShowAttendenceSheet} fullWidth sx={{marginTop: '20px' }}>
        Get Employee Attendance Data
      </Button>
      {showAttendenceSheet && <AttendenceSheet />}
    </Container>
  );
};

export default AttendanceTracker;
