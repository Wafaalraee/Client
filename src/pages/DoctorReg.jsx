import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Doctorreg.css';  
import axios from 'axios';

function DoctorReg() {
  const [user, setUser] = useState({
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

  const specializationOptions = [
    'Cardiology',
    'Dermatology',
    'Gastroenterology',
    'Orthopedics',
    'Pediatrics',
  ];

  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");

  const regDoctor = (e) => {
    e.preventDefault();
    if (
      user.email !== "" &&
      user.password !== "" &&
      user.firstname !== "" &&
      user.lastname !== "" &&
      user.specialization !== "" &&
      user.date !== "" &&
      user.time !== "" &&
      user.experience !== "" &&
      user.feePerConsultation !== "" &&
      user.phoneNumber !== "" &&
      user.address !== ""
    ) {
      axios
        .post("http://localhost:4500/register/doctor", user)
        .then((result) => {
          setSuccess(result.data.message);
          // Redirect to login page after successful registration
          window.location.href = "/login/doctor";
        })
        .catch((err) => {
          console.error(err);
          setErr(err.response.data);
        });
    } else {
      setErr("All fields are required");
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='register-section'>
      <div className='register-container'>
        <h1 className='heading'>Register As Doctor</h1>
        <form className="register-form" onSubmit={regDoctor}>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            name="firstname"
            className="form-input"
            placeholder="Enter your first name"
            value={user.firstname}
            onChange={handleChange}
          />
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            name="lastname"
            className="form-input"
            placeholder="Enter your last name"
            value={user.lastname}
            onChange={handleChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"  
            value={user.email}
            onChange={handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password" 
            value={user.password}
            onChange={handleChange}
          />
          <label htmlFor="specialization">Specialization:</label>
          <select
            name="specialization"
            className="form-input"
            value={user.specialization}
            onChange={handleChange}
          >
            <option value="" disabled>Select specialization</option>
            {specializationOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            name="date"
            className="form-input"
            value={user.date}
            onChange={handleChange}
          />
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            name="time"
            className="form-input"
            value={user.time}
            onChange={handleChange}
          />
          <label htmlFor="experience">Experience in years:</label>
          <input
            type="number"
            name="experience"
            className="form-input"
            placeholder="Enter your experience in years"
            value={user.experience}
            onChange={handleChange}
          />
          <label htmlFor="feePerConsultation">Fee per Consultation:</label>
          <input
            type="text"
            name="feePerConsultation"
            className="form-input"
            placeholder="Enter your fee per consultation"
            value={user.feePerConsultation}
            onChange={handleChange}
          />
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            className="form-input"
            placeholder="Enter your phone number"
            value={user.phoneNumber}
            onChange={handleChange}
          />
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            className="form-input"
            placeholder="Enter your address"
            value={user.address}
            onChange={handleChange}
          />
          <button type="submit" className="btn form-btn">Sign up</button>
          <p className='para'>Already registered? <Link to="/login/Doctor">Login</Link></p> 
        </form>
        <h3>{err ? err : null}</h3>
        <h3>{success ? success : null}</h3> 
      </div>    
    </div>
  );
}

export default DoctorReg;



