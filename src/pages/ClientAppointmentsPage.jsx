import React, { useEffect, useState, useCallback } from 'react';
import '../style/ClientAppointmentsPage.css';
import { Link } from 'react-router-dom'; 

const ClientAppointmentsPage = ({ userData }) => {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = useCallback(async () => {
    try {
      const response = await fetch(`/api/appointments?userId=${userData.id}`);
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  }, [userData.id]); 

  useEffect(() => {
    fetchAppointments();
  }, [fetchAppointments]);
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
          <button className='logout'><Link to="/dashboard/logout">Logout</Link></button>
        </ul>
      </nav>
    </div>
    <div className="dashboard-content">
      <div className="appointments-container">
      <h2>Your Appointments</h2>
      <table className="appointments-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Doctor</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.doctor}</td>
              <td>{appointment.phone}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  </div>
   
  );
};

export default ClientAppointmentsPage;






