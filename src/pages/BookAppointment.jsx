
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import "../style/bookappointment.css"


const BookAppointment = ({ doctorName }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleCheckAvailability = () => {
    console.log(`Booking appointment with ${doctorName} on ${selectedDate} at ${selectedTime}`);
  };

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
    <div className="dashboard-container">
      <div>
        <h2>Book Appointment</h2>
        <p>Doctor: {doctorName}</p>
        <label htmlFor="date">Select Date:</label>
        <input type="date" id="date" value={selectedDate} onChange={handleDateChange} />
        <br />
        <label htmlFor="time">Select Time:</label>
        <input type="time" id="time" value={selectedTime} onChange={handleTimeChange} />
        <br />
        <button onClick={handleCheckAvailability}>Check Availability</button>
      </div>
    </div>
    </div>
  );
};

export default BookAppointment;




