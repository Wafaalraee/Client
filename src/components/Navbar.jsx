import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/Doctors">Doctors</a>
      <a href="/appointments">Appointments</a>
      <a href="/Notifications">Notifications</a>
      <div className="dropdown">
          <button className="login">Login</button>
          <div className="dropdown-content">
            <Link to="/login/doctor">Login as Doctor</Link>
           <Link to="/login/client">Login as Client</Link>
          </div>
        </div>
      <div className="dropdown">
        <button className="register">Register</button>
        <div className="dropdown-content">
          <Link to="/register/doctor">Apply as Doctor</Link>
          <Link to="/register/client">Apply as Client</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;