import React, { useState } from 'react';
import { Typography, Paper, Container, Box, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function ExitInterview() {
  const [showInterviewForm, setShowInterviewForm] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [reasonForLeaving, setReasonForLeaving] = useState('');
  const [satisfactionLevel, setSatisfactionLevel] = useState('');

  const handleScheduleInterview = () => {
    setShowInterviewForm(true);
  };

  const handleSubmitFeedback = () => {
    // Handle submission of feedback and other data (for now, just showing an alert)
    const formData = {
      feedback,
      reasonForLeaving,
      satisfactionLevel,
    };
    window.alert(`Feedback and data submitted: ${JSON.stringify(formData)}`);
    setFeedback('');
    setReasonForLeaving('');
    setSatisfactionLevel('');
  };

  return (
    <Container component={Paper} elevation={3} sx={{ padding: 3, marginTop: 5 }}>
      <Typography variant="h5" gutterBottom>
        Schedule and Conduct Exit Interview
      </Typography>
      <Typography variant="body1" paragraph>
        Conducting an exit interview is a valuable process to gain insights into employee experiences, reasons for leaving, and areas for improvement.
      </Typography>
      <Typography variant="body1" paragraph>
        Schedule an exit interview with the departing employee and discuss the reasons for leaving, gather feedback, and offer support.
      </Typography>

      <Box sx={{ marginTop: 3 }}>
        <Button variant="contained" color="primary" onClick={handleScheduleInterview}>
          Schedule Interview
        </Button>
      </Box>

      {showInterviewForm && (
        <ExitInterviewForm
          feedback={feedback}
          setFeedback={setFeedback}
          reasonForLeaving={reasonForLeaving}
          setReasonForLeaving={setReasonForLeaving}
          satisfactionLevel={satisfactionLevel}
          setSatisfactionLevel={setSatisfactionLevel}
          onSubmit={handleSubmitFeedback}
        />
      )}
    </Container>
  );
}

function ExitInterviewForm({
  feedback,
  setFeedback,
  reasonForLeaving,
  setReasonForLeaving,
  satisfactionLevel,
  setSatisfactionLevel,
  onSubmit,
}) {
  const handleChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleReasonChange = (event) => {
    setReasonForLeaving(event.target.value);
  };

  const handleSatisfactionChange = (event) => {
    setSatisfactionLevel(event.target.value);
  };

  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography variant="h6" gutterBottom>
        Exit Interview Form
      </Typography>

      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Reason for Leaving</InputLabel>
        <Select
          value={reasonForLeaving}
          onChange={handleReasonChange}
        >
          <MenuItem value="Better Opportunity">Better Opportunity</MenuItem>
          <MenuItem value="Work-Life Balance">Work-Life Balance</MenuItem>
          <MenuItem value="Job Satisfaction">Job Satisfaction</MenuItem>
          <MenuItem value="Career Growth">Career Growth</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Satisfaction Level with the Company</InputLabel>
        <Select
          value={satisfactionLevel}
          onChange={handleSatisfactionChange}
        >
          <MenuItem value="Highly Satisfied">Highly Satisfied</MenuItem>
          <MenuItem value="Satisfied">Satisfied</MenuItem>
          <MenuItem value="Neutral">Neutral</MenuItem>
          <MenuItem value="Dissatisfied">Dissatisfied</MenuItem>
          <MenuItem value="Highly Dissatisfied">Highly Dissatisfied</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Feedback"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={feedback}
        onChange={handleChange}
        sx={{ marginBottom: 2 }}
      />
      
      <Button variant="contained" color="secondary" onClick={onSubmit}>
        Submit Feedback and Responses
      </Button>
    </Box>
  );
}

export default ExitInterview;
