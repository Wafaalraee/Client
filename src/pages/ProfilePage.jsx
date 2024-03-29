import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  
  const [userData, setUserData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    address: '123 Main St, Cityville',
    phoneNumber: '123-456-7890',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User data updated:', userData);
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
          <li><Link to="/dashboard/client/profile">Profile</Link></li>
          <button className='logout'><Link to="/dashboard/logout">Logout</Link></button>
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
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Address:
          <input
            type="text"
            name="address"
            value={userData.address}
            onChange={handleChange}
          />
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <button type="submit" onClick={handleChange}>Update</button>
      </form>
    </div>
    </div>
  </div>
 
  );
};

export default ProfilePage;


