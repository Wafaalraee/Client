import React from 'react';
import { Link } from 'react-router-dom';
import '../style/DoctorList.css'; 

const DoctorList = () => {
  const doctors = [
    { id: 1, name: 'Dr. Smith', phoneNumber: '123-456-7890', address: '123 Medical St', fee: '$100', timing: '9:00 AM - 5:00 PM' },
    { id: 2, name: 'Dr. Johnson', phoneNumber: '987-654-3210', address: '456 Health Ave', fee: '$120', timing: '10:00 AM - 6:00 PM' },
  ];

  return (
    <div className="doctor-list-container">
      <h2>List of Doctors</h2>
      <div className="doctors">
        {doctors.map(doctor => (
          <div key={doctor.id} className="doctor-card">
            <h3>{doctor.name}</h3>
            <p>Phone Number: {doctor.phoneNumber}</p>
            <p>Address: {doctor.address}</p>
            <p>Fee per Visit: {doctor.fee}</p>
            <p>Timing: {doctor.timing}</p>
            <Link to={`/dashboard/client/doctors/${doctor.id}`}>
              <button>Book Appointment</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;

