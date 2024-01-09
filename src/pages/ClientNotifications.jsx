import React from 'react';
import { Link } from 'react-router-dom';
const ClientNotifications = () => {
  return (
    <div>
     <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <div className="client-info">
          <div className="profile-picture">
            <img src="https://placekitten.com/80/80" alt="Profile" />
          </div>
          <p>Welcome, John Doe!</p>
        </div>
        <nav className="dashboard-nav">
          <ul>
          <li><Link to="/dashboard/client/home">Home</Link></li>
          <li><Link to="/dashboard/client/doctors">Doctors</Link></li>
          <li><Link to="/dashboard/client/appointments">Appointments</Link></li>
          <li><Link to="/dashboard/client/notifications">Notifications</Link></li>
          <li><Link to="/dashboard/client/profile">Profile</Link></li>
          <li><Link to="/dashboard/client/logout">Logout</Link></li>
          </ul>
        </nav>
      </div>
    </div>
    </div>
  );
};

export default ClientNotifications;
