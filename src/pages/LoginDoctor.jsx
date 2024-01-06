import React from 'react';
import '../style/Login.css';

function LoginPage(){
    return (
        <div className='login-section'>
            <div className='login-container'>
                <h1 className='heading'>Login Form as Doctor</h1>
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
          </div>    
     </div>       
    )
} 
export default LoginPage;