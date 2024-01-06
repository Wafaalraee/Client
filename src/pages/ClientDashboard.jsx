// pages/ClientDashboard.jsx
import React from 'react';

const ClientDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <div className="client-info">
          {/* Display client information here (e.g., name) */}
          <p>Welcome, John Doe!</p>
        </div>
        <nav className="dashboard-nav">
          <ul>
            <li><a href="/dashboard/client">Home</a></li>
            <li><a href="/dashboard/client/appointments">Appointments</a></li>
            <li><a href="/dashboard/client/logout">Logout</a></li>
          </ul>
        </nav>
      </div>
      <div className="dashboard-content">
        {/* Dashboard content goes here */}
        <h2>Client Dashboard</h2>
        <p>This is the main content of the client dashboard.</p>
      </div>
      <div className="dashboard-notifications">
        {/* Notifications go here */}
        <p>Notifications</p>
      </div>
    </div>
  );
};

export default ClientDashboard;
