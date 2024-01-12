import React from 'react';
import { Link } from 'react-router-dom';
import image from "../image/logo.jpeg";

const Navbar = () => {
  console.log(localStorage.getItem("token"))
  return (
    <nav className='nav-bar'>
      <div className='logo'>
      <img  className="logo-img" src={image}  alt="logo" />
      </div>

       <div className='nav-link'>
      <a href="/">Home</a>
      <a href="/">About Us</a>
      <a href="/">Contact</a>
      </div>

      <div className='nav-btn'>
        {
          localStorage.getItem("token") === null? 
            <div>
                <div className="dropdown">
                  <button className="login-btn">Login</button>
                  <div className="dropdown-content">
                    <Link to="/login/doctor">Login As Doctor</Link>
                    <Link to="/login/client">Login As Client</Link>
                  </div>
                </div>
              <div className="dropdown">
                <button className="register-btn">Register</button>
                <div className="dropdown-content">
                  <Link to="/register/doctor">Apply As Doctor</Link>
                  <Link to="/register/client">Apply As Client</Link>
                </div>
              </div>
            </div>
          :
            localStorage.getItem("doctor_id") != null ? 
              <Link to="/dashboard/doctor" className="register-btn"> Doctor Dashboard</Link>
          :   <Link to="/dashboard/client" className="register-btn">Client Dashboard</Link>
        }
      </div>
    </nav>
    
  );
};

export default Navbar;