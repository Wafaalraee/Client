import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DoctorProfile = () => {
  const specializationOptions = [
    'Cardiology',
    'Dermatology',
    'Gastroenterology',
    'Orthopedics',
    'Pediatrics',
    'Neurology',
    'Oncology',
    'Psychiatry',
    'Radiology',
    'Urology',
    // Add more options as needed
  ];

  const [doctorData, setDoctorData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    specialization: "",
    date: "",
    time: "",
    experience: "",
    feePerConsultation: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Doctor data updated:', doctorData);
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
            <li><Link to="/dashboard/doctor/appointments">Appointments</Link></li>
            <li><Link to="/dashboard/doctor/notifications">Notifications</Link></li>
            <li><Link to="/dashboard/doctor/profile">Profile</Link></li>
            <li><Link to="/dashboard/logout">Logout</Link></li>
          </ul>
        </nav>
      </div>
      <div className="dashboard-content">
        <div>
            <h2>Edit Profile</h2>
          <form onSubmit={handleSubmit}>
            <label>
              First Name:
              <input
                type="text"
                name="firstname"
                value={doctorData.firstname}
                onChange={handleChange}
              />
            </label>

            <label>
              Last Name:
              <input
                type="text"
                name="lastname"
                value={doctorData.lastname}
                onChange={handleChange}
              />
            </label>

            <label>
              Email:
              <input
                type="email"
                name="email"
                value={doctorData.email}
                onChange={handleChange}
              />
            </label>

            <label>
              Password:
              <input
                type="password"
                name="password"
                value={doctorData.password}
                onChange={handleChange}
              />
            </label>
            <label>
  Specialization:
  <div>
    <select
      name="specialization"
      value={doctorData.specialization}
      onChange={handleChange}
    >
      <option value="">Select Specialization</option>
      {specializationOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
  <div>
    <input
      type="text"
      name="specialization"
      placeholder="Enter your specialization"
      value={doctorData.specialization}
      onChange={handleChange}
    />
  </div>
</label>

  <div>
    <input
      type="text"
      name="specialization"
      placeholder="Enter your specialization"
      value={doctorData.specialization}
      onChange={handleChange}
    />
  </div>
            <label>
              Date:
              <input
                type="date"
                name="date"
                value={doctorData.date}
                onChange={handleChange}
              />
            </label>

            <label>
              Time:
              <input
                type="time"
                name="time"
                value={doctorData.time}
                onChange={handleChange}
              />
            </label>

            <label>
              Experience (in years):
              <input
                type="number"
                name="experience"
                value={doctorData.experience}
                onChange={handleChange}
              />
            </label>

            <label>
              Fee per Consultation:
              <input
                type="text"
                name="feePerConsultation"
                value={doctorData.feePerConsultation}
                onChange={handleChange}
              />
            </label>

            <label>
              Phone Number:
              <input
                type="tel"
                name="phoneNumber"
                value={doctorData.phoneNumber}
                onChange={handleChange}
              />
            </label>

            <label>
              Address:
              <input
                type="text"
                name="address"
                value={doctorData.address}
                onChange={handleChange}
              />
            </label>
            
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;


