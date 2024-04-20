import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResponsiveDrawer from './components/ResonsiveDrawer';
import AdherencePolicies from './components/complianceReporting/AdherencePolicies'
import HRReporting from './components/complianceReporting/HRReporting'

import JobVacanciesList from './components/recruitmentHiring/JobVacanciesList';
import JobDescription from './components/recruitmentHiring/JobDescription';
import EmployeeRelations from './components/employeeManagement/EmployeeRelations';
import FeedbackImprovement from './components/employeeManagement/FeedbackImprovement';
import FinalSettlement from './components/employeeOffboarding/FinalSettlement';
import InformTeam from './components/employeeOnboarding/InformTeam';
import PrepareWorkstation from './components/employeeOnboarding/PrepareWorkstation';
import Orientation from './components/employeeOnboarding/Orientation';
import Training from './components/employeeOnboarding/Training';
import PerformanceReview from './components/employeeManagement/PerformanceReview';
import LegalCompliance from './components/complianceReporting/LegalCompliance';
import ExitInterview from './components/employeeOffboarding/ExitInterview';
import ViewEmployees from './components/employeeManagement/ViewEmployees';
import Home from './components/home';

import PayrollList from './components/payroll/PayrollList';
import AttendanceTracker from './components/employeeManagement/AttendenceTaker';
import AddEmployee from './components/employeeOnboarding/AddEmployee';
const App = () => {
  
  return (
    <Router>
      <ResponsiveDrawer>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/jobvacancieslist/" element={<JobVacanciesList />} />
          <Route path="/performancereview" element={<PerformanceReview />} />
          <Route path="/adherencePolicies" element={<AdherencePolicies />} />
          <Route path="/hrreporting/" element={<HRReporting />} />
         
          <Route path="/jobdescription/" element={<JobDescription />} />
          <Route path="/viewemployees/" element={<  ViewEmployees />} />
          <Route path="/feedbackimprovement/" element={<FeedbackImprovement />} />
          <Route path="/performancereview" element={<PerformanceReview />} />
          <Route path="/employeeRelations" element={<EmployeeRelations />} />
          <Route path="/attendencetracker" element={<AttendanceTracker />} />
        <Route path='/addemployee' element={<AddEmployee />} />
          <Route path="/finalsettlement" element={<FinalSettlement />} />
          <Route path="/exitinterview/" element={<ExitInterview />} />
        
          <Route path="/informteam/" element={<InformTeam />} />
          <Route path="/prepareworkstation/" element={<PrepareWorkstation />} />
          <Route path="/orientation/" element={<Orientation />} />
          <Route path="/training" element={<Training />} />
          
         
          <Route path="/legalcompliance/" element={<LegalCompliance />} />
          <Route path="/exitinterview/" element={<ExitInterview />} />
          <Route path="/payrolllist/" element={<PayrollList />} />
        </Routes>
      </ResponsiveDrawer>
    </Router>
  );
};

export default App;
