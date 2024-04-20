import React from 'react';

const PayrollItem = ({ payroll }) => {
  if (!payroll) {
    return null;
  }

  const handleProcess = async () => {
    try {
      await fetch(`/api/payrolls/${payroll.id}/process/`, { method: 'POST' });
      alert('Payroll processed successfully.');
    } catch (error) {
      console.error("Error processing payroll:", error);
      alert('An error occurred while processing the payroll.');
    }
  };

  const handleReject = async () => {
    try {
      await fetch(`/api/payrolls/${payroll.id}/reject/`, { method: 'POST' });
      alert('Payroll rejected successfully.');
    } catch (error) {
      console.error("Error rejecting payroll:", error);
      alert('An error occurred while rejecting the payroll.');
    }
  };

  return (
    <div className="payroll-item">
      <h3>Payroll ID: {payroll.id}</h3>
      <p>Status: {payroll.status}</p>
      <p>Total Deductions: {payroll.total_deductions}</p>
      <p>Net Salary: {payroll.net_salary}</p>
      <button onClick={handleProcess} disabled={payroll.status !== 'pending'}>Process</button>
      <button onClick={handleReject} disabled={payroll.status !== 'pending'}>Reject</button>
    </div>
  );
};

export default PayrollItem;
