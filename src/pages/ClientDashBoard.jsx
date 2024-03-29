import React from 'react';
import { Link } from 'react-router-dom';
import '../style/ClientDash.css';

const ClientDashboard = () => {
  const userName = localStorage.getItem("user-name") ? localStorage.getItem("user-name") : "USERNAME"
  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <div className="client-info">
          <div className="profile-picture">
            <img src="https://placekitten.com/80/80" alt="Profile" />
          </div>
          <p>Welcome, {userName}!</p>
        </div>
        <nav className="dashboard-nav">
          <ul>
          <li><Link to="/dashboard/client/home">Home</Link></li>
          <li><Link to="/dashboard/client/doctors">Doctors</Link></li>
          <li><Link to="/dashboard/client/profile">Profile</Link></li>
          <button className='logout'><Link to="/dashboard/logout">Logout</Link></button>
          </ul>
        </nav>
      </div>
      <div className="dashboard-content">
        <h2>Client Dashboard</h2>
        <p className='doc-content'>This is the main content of the client dashboard.</p>
      </div>
    </div>
  );
};

export default ClientDashboard;



