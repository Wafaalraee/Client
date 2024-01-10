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
            <Link to="/login/doctor">Login As Doctor</Link>
            <Link to="/login/client">Login As Client</Link>
          </div>
        </div>
      <div className="dropdown">
        <button className="register">Register</button>
        <div className="dropdown-content">
          <Link to="/register/doctor">Apply As Doctor</Link>
          <Link to="/register/client">Apply As Client</Link>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;