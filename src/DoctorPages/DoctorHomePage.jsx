import React from 'react';
import { Link } from 'react-router-dom';
const DoctorHomePage = ({ userData }) => {
  if (!userData) {
    return <div>Loading...</div>; 
  }

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
         <li><Link to="/dashboard/doctor/doctors">Apply As a Doctor</Link></li>
          <li><Link to="/dashboard/doctor/appointments">Appointments</Link></li>
          <li><Link to="/dashboard/doctor/notifications">Notifications</Link></li>
          <li><Link to="/dashboard/doctor/profile">Profile</Link></li>
          <li><Link to="/dashboard/doctor/logout">Logout</Link></li>
        </ul>
      </nav>
    </div>
    <div className="dashboard-content">
      <h2>Welcome to your HomePage</h2>
      <div>
      <p>First Name: {userData.firstName}</p>
      <p>Last Name: {userData.lastName}</p>
      <p>Email: {userData.email}</p>
      <p>Address: {userData.address}</p>
      <p>Phone Number: {userData.phoneNumber}</p>
    </div>
    </div>
  </div>

  );
};

export default DoctorHomePage;