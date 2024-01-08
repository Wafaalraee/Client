import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/Login.css';

function LoginClient() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const isLoginSuccessful = true;

    if (isLoginSuccessful) {
   
      navigate('/dashboard/client');
    } else {
      console.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className='login-section'>
      <div className='login-container'>
        <h1 className='heading'>Login As Client</h1>
        
        <form className="login-form" onSubmit={handleLogin}>
        <label for="email">Email:</label>
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            required
          />
           <label for="password">Password:</label>
          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            required
          />
          <button type="submit" className="btn form-btn">Login</button>
          <p className='para'> Don't have an account? <Link to = "/register/client">Register here</Link></p> 
        </form>
       
      </div>
    </div>
  );
}

export default LoginClient;
