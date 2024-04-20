import React, { useState } from 'react';
import { 
  Container,
  Typography,
  TextField,
  Button,
} from '@mui/material';

function PerformanceReview() {
  const [employeeName, setEmployeeName] = useState('');
  const [reviewDate, setReviewDate] = useState('');
  const [question1, setQuestion1] = useState('');
  const [question2, setQuestion2] = useState('');

  const handleSubmit = () => {
    // Implement POST request to save performance review
    fetch('http://127.0.0.1:8000/performance-reviews/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        employee_name: employeeName,
        review_date: reviewDate,
        question_1: question1,
        question_2: question2,
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Review saved:', data);
      // Reset form fields
      setEmployeeName('');
      setReviewDate('');
      setQuestion1('');
      setQuestion2('');
    })
    .catch(error => console.error('Error saving review:', error));
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Schedule and Conduct Reviews
      </Typography>
      <TextField 
        label="Employee Name" 
        fullWidth 
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField 
        label="Review Date" 
        type="datetime-local" 
        fullWidth 
        value={reviewDate}
        onChange={(e) => setReviewDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ mb: 2 }}
      />
      <Typography variant="h6" gutterBottom>
        Structured Format
      </Typography>
      <TextField 
        label="Question 1" 
        multiline 
        fullWidth 
        value={question1}
        onChange={(e) => setQuestion1(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField 
        label="Question 2" 
        multiline 
        fullWidth 
        value={question2}
        onChange={(e) => setQuestion2(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSubmit}
      >
        Schedule Review
      </Button>
    </Container>
  );
}

export default PerformanceReview;
