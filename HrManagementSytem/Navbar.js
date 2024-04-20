import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import JobPostingForm from './JobPostingForm';


const Navbar = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          HR Management System
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/module1" className="nav-link">
                Module 1
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="./JobPostingForm" className="dropdown-item">Submodule 1</Link></li>
                
              </ul>
            </li>
            
          </ul>
        </div>
      </nav>
  
      <Route path="./JobPostingForm" component={JobPostingForm} />
      
    </Router>
  );
};

export default Navbar;