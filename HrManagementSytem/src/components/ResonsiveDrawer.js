import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box, Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';


const ResponsiveDrawer = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
   
    <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: '#blue' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ textAlign: 'center' }} noWrap component="div">
            <p>Hr Management System</p>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ zIndex: 1, position: 'relative', maxWidth: '950px', top: '64px', left: '0px' }}>
        <Grid container>
          <Grid item xs={3}>
            <Drawer variant="persistent" open={drawerOpen}>
              <Sidebar />
            </Drawer>
          </Grid>
          <Grid item xs={9}>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 3,
                marginLeft: drawerOpen ? '0px' : '50px',
                transition: 'margin-left 0.3s ease'
              }}
            >
              {children}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
    
  );
};

const Sidebar = () => {
  const [openItems, setOpenItems] = useState({});

  const routes = [
    {
      label: 'Recruitment & Hiring',
      children: [
        { path: '/jobvacancieslist/', label: 'JobVacanciesList' },
        { path: '/jobdescription/', label: 'Job Description' },
      ]
    },
    {
      label: 'Employee Onboarding',
      children: [
        { path: '/addemployee/', label: 'Add Employee' },
        { path: '/orientation/', label: 'Orientation' },
        { path: '/prepareworkstation/', label: 'Prepare Workstation' },
      ]
    },
    {
      label: 'Employee Management',
      children: [
        { path: '/performancereview/', label: 'Performance Review' },
        { path: '/viewemployees/', label: 'View Employees' },
        { path: '/employeeRelations/', label: 'Employee Relations' },
        { path: '/attendencetracker/', label: 'Monitor Attendance' },
        { path: '/feedbackimprovement/', label: 'Feedback Improvement' },
      ]
    },
    {
      label: 'Payroll',
      children: [
       
        { path: '/payrolllist/', label: 'Payroll List' },
      ]
    },
    {
      label: 'Compliance & Reporting',
      children: [
        { path: '/adherencePolicies/', label: 'Adherence Policies' },
        { path: '/hrreporting/', label: 'HR Reporting' },
        
        { path: '/legalcompliance/', label: 'Legal Compliance' },
      ]
    },
    {
      label: 'Employee Offboarding',
      children: [
        { path: '/exitinterview/', label: 'Exit Interview' },
        { path: '/finalsettlement/', label: 'Final Settlement' },
      ]
    },
  ];

  const handleCollapse = (label) => {
    setOpenItems({
      ...openItems,
      [label]: !openItems[label]
    });
  };

  return (
    <List sx={{ position: 'relative', top: '60px', borderRadius: '8px', padding: '16px' }}>
      {routes.map((route, index) => {
        const hasChildren = route.children && route.children.length > 0;
        return (
          <React.Fragment key={index}>
            <ListItem
              button
              onClick={() => {
                if (hasChildren) {
                  handleCollapse(route.label);
                }
              }}
              component={Link}
              to={route.path}
              sx={{ pl: 4 }}
            >
              <ListItemText primary={route.label} />
              {hasChildren && (openItems[route.label] ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
            {hasChildren && (
              <Collapse in={openItems[route.label]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {route.children.map((childRoute, childIndex) => (
                    <ListItem
                      key={childIndex}
                      button
                      onClick={() => {}}
                      component={Link}
                      to={childRoute.path}
                      sx={{ pl: 6 }}
                    >
                      <ListItemText primary={childRoute.label} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        );
      })}
    </List>
  );
};

export default ResponsiveDrawer;
