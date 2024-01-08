import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Login.css';

function LoginDoctor(){
    return (
        <div className='login-section'>
            <div className='login-container'>
                <h1 className='heading'>Login Form As Doctor</h1>
                <form className="login-form">
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="Enter your email"/>
                   
                   <input
                     type="password"
                     name="password"
                     className="form-input"
                     placeholder="Enter your password" />
         
                     <button type="submit" className="btn form-btn" > Login </button>
              </form>
              <p>
          Don't have an account? <Link to="/register/Doctor">Register here</Link>.
        </p>
          </div>    
     </div>       
    )
} 
export default LoginDoctor;