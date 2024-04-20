import React, { useState } from 'react';
import { Typography, Card, CardContent, Button, Accordion, AccordionDetails, AccordionSummary, Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function FeedbackImprovement() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  // Dummy data for feedback responses
  const feedbackData = [
    { id: 1, question: 'Quality of work', response: 'Excellent' },
    { id: 2, question: 'Communication skills', response: 'Good' },
    { id: 3, question: 'Team collaboration', response: 'Needs improvement' },
    { id: 4, question: 'Problem-solving abilities', response: 'Very good' },
    { id: 5, question: 'Time management', response: 'Excellent' },
  ];

  return (
    <Card className="feedback-improvement-card">
      <CardContent>
        <Accordion expanded={expanded} onChange={toggleExpanded}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="feedback-content" id="feedback-header">
            <Typography variant="h5">Discuss Feedback and Improvement Plans</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Discuss feedback and areas for improvement with the employee. Develop an improvement plan with specific goals and timelines.
            </Typography>

            <Box mt={3}>
              <Typography variant="h6">Feedback Responses</Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Question</TableCell>
                    <TableCell>Response</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {feedbackData.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.question}</TableCell>
                      <TableCell>{row.response}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={toggleExpanded}>
            {expanded ? 'Collapse' : 'Expand'} Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default FeedbackImprovement;
