// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/services">Services</a>
      <a href="/appointments">Appointments</a>
      <a href="/about">About Us</a>
      <a href="/contact">Contact</a>
      <a href="/login" className="login">Login</a>
      <div className="dropdown">
        <button className="register">Register</button>
        <div className="dropdown-content">
          <a href="/apply-doctor">Apply as Doctor</a>
          <a href="/apply-client">Apply as Client</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;