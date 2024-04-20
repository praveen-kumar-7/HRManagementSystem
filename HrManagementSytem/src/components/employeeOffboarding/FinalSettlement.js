import React, { useState } from 'react';
import { Typography, Paper, Container, Box, Button, TextField } from '@mui/material';

function FinalSettlement() {
  const [salary, setSalary] = useState('');
  const [accruedVacationTime, setAccruedVacationTime] = useState('');
  const [otherBenefits, setOtherBenefits] = useState('');
  const [finalPay, setFinalPay] = useState(null);
  const handleSettle = () => {
   
    window.alert('Final settlement is in Process!');
  };

  const handleCalculateFinalPay = () => {
    // Simulate fetching data from backend (in a real-world scenario, this would be an API call)
    // For now, using simple calculations to determine final pay
    const totalBenefits = parseFloat(salary) + parseFloat(accruedVacationTime) + parseFloat(otherBenefits);
    const taxDeduction = totalBenefits * 0.15; // Assuming a 15% tax deduction
    const finalAmount = totalBenefits - taxDeduction;

    setFinalPay(finalAmount.toFixed(2));
  };

  return (
    <Container component={Paper} elevation={3} sx={{ padding: 3, marginTop: 5 }}>
      <Typography variant="h5" gutterBottom>
        Calculate Final Pay
      </Typography>
      <Typography variant="body1" paragraph>
        Calculate the final pay based on the employee's salary, accrued vacation time, and any other benefits.
      </Typography>
      <Typography variant="body1" paragraph>
        Complete final paperwork such as tax forms and benefits enrollment forms.
      </Typography>

      <Box sx={{ marginTop: 3 }}>
        <TextField
          label="Salary"
          variant="outlined"
          fullWidth
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Accrued Vacation Time (hours)"
          variant="outlined"
          fullWidth
          type="number"
          value={accruedVacationTime}
          onChange={(e) => setAccruedVacationTime(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Other Benefits"
          variant="outlined"
          fullWidth
          type="number"
          value={otherBenefits}
          onChange={(e) => setOtherBenefits(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handleCalculateFinalPay}>
          Calculate Final Pay
        </Button>
      </Box>

      {finalPay !== null && (
        <Box sx={{ marginTop: 3 }}>
          <Typography variant="h6" gutterBottom>
            Final Pay: ${finalPay}
          </Typography>
          <Typography variant="body2">
            This is an estimated amount after a 15% tax deduction.
          </Typography>
        </Box>
      )}
      <Box sx={{ marginTop: 3 }}>
        <Button variant="contained" color="secondary" onClick={handleSettle}>
          Settle
        </Button>
      </Box>
    </Container>
  );
}

export default FinalSettlement;
