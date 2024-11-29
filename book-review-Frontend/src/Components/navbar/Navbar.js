import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../../Assets/R.png';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Left side: Logo */}
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-links">
        {/* Right side: Navigation links */}

        <Link to="/reviewform" className="navbar-link">Add Review</Link> {/* Correct Link component */}
       { /*<Link to="/reviewlist" className="navbar-link">See Review</Link> {/* Correct Link component */}

      </div>
    </nav>
  );
};

export default Navbar;
