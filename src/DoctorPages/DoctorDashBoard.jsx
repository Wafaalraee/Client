import React ,{useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../style/ClientDash.css';
import axios from 'axios';


const DoctorDashboard = () => {
    return (
      <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <div className="client-info">
          <div className="profile-picture">
            <img src="https://placekitten.com/80/80" alt="Profile" />
          </div>
          <p>Welcome, Doctor!</p>
        </div>
        <nav className="dashboard-nav">
          <ul>
          <li><Link to="/dashboard/doctor/home">Home</Link></li> 
            <li><Link to="/dashboard/doctor/appointments">Appointments</Link></li>
            <li><Link to="/dashboard/doctor/notifications">Notifications</Link></li>
            <li><Link to="/dashboard/doctor/profile">Profile</Link></li>
            <button className='logout'><Link to="/dashboard/doctor/logout">Logout</Link></button>
          </ul>
        </nav>
      </div>
        <div className="dashboard-content">
          <h2>Doctor Dashboard</h2>
          <p className='doc-content'>This is the main content of the doctor dashboard.</p>
        </div>
      </div>
    );
  };

export default DoctorDashboard ;