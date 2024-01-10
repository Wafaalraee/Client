import React from 'react';
import { Link } from 'react-router-dom';
import "../style/clienthome.css"

const ClientHomePage = ({ userData }) => {
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
        <p>Welcome, John Doe!</p>
      </div>
      <nav className="dashboard-nav">
        <ul>
        <li><Link to="/dashboard/client/home">Home</Link></li> 
         <li><Link to="/dashboard/client/doctors">Doctors</Link></li>
          <li><Link to="/dashboard/client/appointments">Appointments</Link></li>
          <li><Link to="/dashboard/client/notifications">Notifications</Link></li>
          <li><Link to="/dashboard/client/profile">Profile</Link></li>
          <button className='logout'><Link to="/dashboard/client/logout">Logout</Link></button>
        </ul>
      </nav>
    </div>
    <div className="dashboard-content">
      <h2>Welcome to your HomePage</h2>
      <div className='dashbord-info'>
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

export default ClientHomePage;







