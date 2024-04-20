import React, { useState } from 'react';
import { Typography, Card, CardContent, Button, Divider, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './EmployeeRelations.css';
import Box from '@mui/material/Box';
function EmployeeRelations() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="employee-relations-card">
      <CardContent>
        <Accordion expanded={expanded} onChange={toggleExpanded}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="address-content" id="address-header">
            <Typography variant="h6">Address Employee Concerns and Issues</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Address employee concerns and issues in a timely and effective manner. Provide support and resources to employees.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded} onChange={toggleExpanded}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="promote-content" id="promote-header">
            <Typography variant="h6">Promote Employee Engagement Activities</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Promote employee engagement activities such as team-building events, recognition programs, and training opportunities.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={toggleExpanded}>
            {expanded ? 'Collapse' : 'Expand'} All
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default EmployeeRelations;
