import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <i className="bi bi-bank2" title="wallet"></i>
      </div>
      <div className="navbar-right">
        <div className="notifications">
          <i className="bi-bell"></i>
        </div>
        <div className="profile">
          <a href="#" className="profile-link" onClick={toggleDropdown}>
            <i className="bi-person-circle"></i>
          </a>
          <div className={`dropdown ${isOpen ? 'show' : ''}`}>
            <a href="#">
              <i className="bi-person"></i>
              Profile
            </a>
            <a href="#">
              <i className="bi-gear"></i>
              Settings
            </a>
            <a href="#">
              <i className="bi-question-circle"></i>
              Help
            </a>
            <a href="#">
              <i className="bi-box-arrow-right"></i>
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;