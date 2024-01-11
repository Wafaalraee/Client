
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import "../style/bookappointment.css"
import axios from 'axios'


const BookAppointment = () => {
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

      const handleChange = (e) => {
        setSelectedDay(e.target.value);
        setSelectedTime(e.target.value);
      };

        useEffect(() => {
          axios.post("http://localhost:4500/doctors/book-appointment")
            .then( result => {
              setSelectedDay(result.data);
              setSelectedTime(result.data)
            })
            .catch( err => {
              console.log(err)
            })
        }, [])
    
  // const handleCheckAvailability = () => {
  //   console.log(`Booking appointment with ${doctorName} on ${selectedDate} at ${selectedTime}`);
  // };

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
        <label htmlFor="day">Select Day:</label>
        <input type="day" id="date" value={selectedDay} onChange={handleChange} />
        <br />
        <label htmlFor="time">Select Time:</label>
        <input type="time" id="time" value={selectedTime} onChange={handleChange} />
        <br />
        <button onClick={BookAppointment}>Book Appointment</button>
      </div>
    </div>
    </div>
  );
};

export default BookAppointment;




