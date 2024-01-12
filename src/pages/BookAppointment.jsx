import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import "../style/bookappointment.css";

const BookAppointment = () => {
  const { doctorId } = useParams();
  const [doctorInfo, setDoctorInfo] = useState({});
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [msg, setMsg] = useState('');

  // const doctorName = localStorage.getItem("doctor-name");

  useEffect(() => {
    axios.get(`http://localhost:4500/doctors/${doctorId}`)
      .then(response => {
        setDoctorInfo(response.data);
      })
      .catch(error => {
        console.error('Error fetching doctor information:', error);
      });
  }, [doctorId]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const submitAppointment = () => {
    let data = {
      doctorId: doctorId,
      userId: localStorage.getItem("user-id"),
      day: selectedDate,
      time: selectedTime,
    }
    axios.post(`http://localhost:4500/set-appointment`, data)
      .then(response => {
        setMsg(response.data);
      })
      .catch(error => {
        console.error('Error fetching doctor information:', error);
      });
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
          <li><Link to="/dashboard/client/profile">Profile</Link></li>
          <button className='logout'><Link to="/dashboard/logout">Logout</Link></button>
        </ul>
      </nav>
    </div>
      <div className="dashboard-container">
        <div className='m-l-3'>
          <h2>Book Appointment</h2>
          <p>Doctor: {doctorInfo.firstname} {doctorInfo.lastname}</p>
          <label htmlFor="date">Select Date:</label>
          <input type="date" id="date" value={selectedDate} onChange={handleDateChange} />
          <br />
          <label htmlFor="time">Select Time:</label>
          <input type="time" id="time" value={selectedTime} onChange={handleTimeChange} />
          <br />
          <button onClick={submitAppointment}>Book Now</button>
          <h4 className='success-msg'>{msg && msg}</h4>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;







