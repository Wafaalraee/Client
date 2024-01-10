import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorLogout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("doctor_id");
    localStorage.removeItem("token");
    navigate('/login/doctor');
  };

  return (
    <div>
      <h2>Logout</h2>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DoctorLogout;

