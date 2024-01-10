import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/ApplyAsDoctorPage.css'; 

const ApplyAsDoctorPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    specialization: '',
    date: '', 
    time: '', 
    experience: '',
    consultationFee: '',
  });

  const specializationOptions = [
    'Cardiology',
    'Dermatology',
    'Gastroenterology',
    'Orthopedics',
    'Pediatrics',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

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
          <button className='logout'><Link to="/dashboard/doctor/logout">Logout</Link></button>
        </ul>
      </nav>
    </div>
    <div className="apply-as-doctor-container">
      <h2>Apply as a Doctor</h2>
      <form className="apply-as-doctor-form" onSubmit={handleSubmit}>
        <div className="form-columns">
            <h3>Personal Info</h3>
            <div className="form-section-1">
            
            <div className='sec-1'>
                <label for="firstName">First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />

                <label for="lastName">Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  className='inputt'
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

         <div className='sec-2'>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="address">Address:</label>
                <textarea
                  name="address"
                  className='inputt'
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
            </div>
            </div>

          

          <div className="form-section-2">
            <h3>Professional Info</h3>
            
            <div className='sec-3'>
                <label htmlFor="specialization">Specialization:</label>
                <select
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select Specialization</option>
                  {specializationOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>

                <label htmlFor="date">Date:</label>
                <input
                  type="date"
                  name="date"
                  className='inputt'
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
                </div>
            <div className='sec-4'>
                <label htmlFor="time">Time:</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="experience">Experience (in years):</label>
                <input
                  type="number"
                  name="experience"
                  className='inputt'
                  value={formData.experience}
                  onChange={handleChange}
                  required
                />
                </div>
              <div className='sec-5'>
                  <label htmlFor="consultationFee">Fee per Consultation:</label>
                  <input
                    type="text"
                    name="consultationFee"
                    value={formData.consultationFee}
                    onChange={handleChange}
                    required
                  />
                  </div>
          </div>
        </div>

        <button type="submit">Submit Application</button>
      </form>
    </div>
    </div>
  );
};

export default ApplyAsDoctorPage;




