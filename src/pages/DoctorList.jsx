import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../style/DoctorList.css'; 

const DoctorList = () => {
  const [doctors, setDoctorsData] = useState();

  useEffect(() => {
    axios.get("http://localhost:4500/doctors/git-all-doctors")
      .then( result => {
        setDoctorsData(result.data.data);
      })
      .catch( err => {
        console.log(err)
      })
  }, [])

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
    <div className="doctor-list-container">
      <h2>List of Doctors</h2>
      <div className="doctors">
        {doctors && doctors.map(doctor => {
          let Avdays = [];
          let days = Object.keys(doctor.availability.days[0]);
          days.forEach(day => {
            if( doctor.availability.days[0][day] !== false ) {
              Avdays.push(day)
            }
          })
          return (
            <div key={doctor._id} className="doctor-card">
              <h3>{doctor.firstname} {doctor.lastname}</h3>
              <p><span className='doctor-info-title'>Phone Number:</span> {doctor.phoneNumber}</p>
              <p><span className='doctor-info-title'>Specialization:</span> {doctor.specialization}</p>
              <p><span className='doctor-info-title'>Fee per Visit:</span> {doctor.feePerConsultation}</p>
              <>
                <span className='doctor-info-title'>Available date:</span> 
                <ul>
                  {
                    Avdays.map(day => {
                      return(
                        <li key={day}>{day},</li>
                      )
                    })
                  }
                </ul>
              </>
              <>
                <span className='doctor-info-title'>Timing:</span>
                <ul>
                  <li>From: {doctor.availability.startTime}</li>
                  <li>To: {doctor.availability.endTime}</li>
                </ul>
              </>
              <Link to={`/dashboard/client/doctors/${doctor._id}`}>
                <button>Book Appointment</button>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
    </div>
  );
};

export default DoctorList;

