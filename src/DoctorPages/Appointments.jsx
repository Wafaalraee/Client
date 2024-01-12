import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom'; 
import '../style/ClientAppointmentsPage.css'; 

const DoctorAppointments = ({ userData }) => {
  const [appointments, setAppointments] = useState([]);

  // const fetchAppointments = useCallback(async () => {
  //   try {
  //     const response = await fetch(`/api/appointments?doctorId=${userData.id}`);
  //     const data = await response.json();
  //     setAppointments(data);
  //   } catch (error) {
  //     console.error('Error fetching appointments:', error);
  //   }
  // }, [userData.id]);

  // const handleApprove = async (appointmentId) => {
  //   try {
  //     await fetch(`/api/appointments/${appointmentId}/approve`, {
  //       method: 'PUT',
  //     });
  //     fetchAppointments();
  //   } catch (error) {
  //     console.error('Error approving appointment:', error);
  //   }
  // };

  // const handleReject = async (appointmentId) => {
  //   try {
  //     await fetch(`/api/appointments/${appointmentId}/reject`, {
  //       method: 'PUT',
  //     });
  //     fetchAppointments();
  //   } catch (error) {
  //     console.error('Error rejecting appointment:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchAppointments();
  // }, [fetchAppointments]);

  useEffect( () => {
    let doctorId = localStorage.getItem("doctor_id")
    if(doctorId) { 
      axios.get(`http://localhost:4500/get-doctor-appointments/${doctorId}`)
        .then( result => {
          console.log(result.data);
          setAppointments(result.data);
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [])

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
          <button className='logout'><Link to="/dashboard/logout">Logout</Link></button>
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
                <th>#</th>
                <th>Client</th>
                <th>Email</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Actions</th> 
              </tr>
            </thead>
            <tbody>
              {appointments && appointments.map((appointment, index) => (
                <tr key={appointment.id}>
                  <td>{index+1}</td>
                  <td>{appointment.userId.firstname} {appointment.userId.lastname}</td>
                  <td>{appointment.userId.email}</td>
                  <td>{appointment.day}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.status}</td>
                  <td>
                    {appointment.status === 'Pending' && (
                      <>
                        <button>Approve</button>
                        <button>Reject</button>
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
