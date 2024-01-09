import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom'; 
import '../style/ClientAppointmentsPage.css'; 
const DoctorAppointments = ({ userData }) => {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = useCallback(async () => {
    try {
      const response = await fetch(`/api/appointments?doctorId=${userData.id}`);
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  }, [userData.id]);

  const handleApprove = async (appointmentId) => {
    try {
      await fetch(`/api/appointments/${appointmentId}/approve`, {
        method: 'PUT',
      });
      fetchAppointments();
    } catch (error) {
      console.error('Error approving appointment:', error);
    }
  };

  const handleReject = async (appointmentId) => {
    try {
      await fetch(`/api/appointments/${appointmentId}/reject`, {
        method: 'PUT',
      });
      fetchAppointments();
    } catch (error) {
      console.error('Error rejecting appointment:', error);
    }
  };

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
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="appointments-container">
          <h2>Doctor Appointments</h2>
          <table className="appointments-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Client</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Actions</th> 
              </tr>
            </thead>
            <tbody>
              {appointments.map(appointment => (
                <tr key={appointment.id}>
                  <td>{appointment.id}</td>
                  <td>{appointment.client}</td>
                  <td>{appointment.phone}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.status}</td>
                  <td>
                    {appointment.status === 'pending' && (
                      <>
                        <button onClick={() => handleApprove(appointment.id)}>Approve</button>
                        <button onClick={() => handleReject(appointment.id)}>Reject</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DoctorAppointments;
