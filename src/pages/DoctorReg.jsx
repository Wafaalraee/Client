import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../style/Doctorreg.css';
function DoctorReg() {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    specialization: '',
    experience: '',
    feePerConsultation: '',
    phoneNumber: '',
    address: '',
    availability: {
      days: {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
      },
      startTime: '',
      endTime: '',
    },
  });

  const specializationOptions = [
    'Cardiology',
    'Dermatology',
    'Gastroenterology',
    'Orthopedics',
    'Pediatrics',
  ];

  const [err, setErr] = useState('');
  const [success, setSuccess] = useState('');

  const handleCalendarChange = (day) => {
    setUser((prevUser) => ({
      ...prevUser,
      availability: {
        ...prevUser.availability,
        days: {
          ...prevUser.availability.days,
          [day]: !prevUser.availability.days[day],
        },
      },
    }));
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleTimeChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      availability: {
        ...prevUser.availability,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const regDoctor = (e) => {
    e.preventDefault();
    if (
      user.email !== '' &&
      user.password !== '' &&
      user.firstname !== '' &&
      user.lastname !== '' &&
      user.specialization !== '' &&
      user.experience !== '' &&
      user.feePerConsultation !== '' &&
      user.phoneNumber !== '' &&
      user.address !== '' &&
      Object.values(user.availability.days).some((day) => day) &&
      user.availability.startTime !== '' &&
      user.availability.endTime !== ''
    ) {
      axios
        .post('http://localhost:4500/register/doctor', user)
        .then((result) => {
          setSuccess(result.data.message);
          window.location.href = '/login/doctor';
        })
        .catch((err) => {
          console.error(err);
          setErr(err.response.data);
        });
    } else {
      setErr('All fields are required');
    }
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
          <label>Availability Days:</label>
          <div className='checkbox-list'>
            {Object.keys(user.availability.days).map((day) => (
              <div key={day} className='checkbox-container'>
                <input
                  type='checkbox'
                  name={day}
                  checked={user.availability.days[day]}
                  onChange={() => handleCalendarChange(day)}
                />
                <label htmlFor={day}>{day.charAt(0).toUpperCase() + day.slice(1)}</label>
              </div>
            ))}
          </div>

          <label htmlFor='startTime'>Availability Time - From:</label>
          <input
            type='time'
            name='startTime'
            className='form-input'
            value={user.availability.startTime}
            onChange={handleTimeChange}
          />

          <label htmlFor='endTime'>Availability Time - To:</label>
          <input
            type='time'
            name='endTime'
            className='form-input'
            value={user.availability.endTime}
            onChange={handleTimeChange}
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
        <p className='err-msg'>{err ? err.message : null}</p>
        <p className='success-msg'>{success ? success.message : null}</p>

      </div>    
    </div>
  );
}

export default DoctorReg;








