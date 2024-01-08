import React from 'react';
import '../style/Clientreg.css';
import { Link } from 'react-router-dom';


function ClientReg(){
    return (
        <div className='register-section'>
            <div className='register-container'>
                <h1 className='heading'>Register As Client</h1>
                <form className="register-form">
                <label for="firstname">First Name:</label>
                  <input
                    type="text"
                    name="firstname"
                    className="form-input"
                     placeholder="Enter your first name"/>
                   <label for="lastname">Last Name:</label>
                   <input
                    type="text"
                    name="lastname"
                    className="form-input"
                    placeholder="Enter your last name"/>
                  <label for="email">Email:</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="Enter your email"  />
                   <label for="password">Password:</label>
                   <input
                     type="password"
                     name="password"
                     className="form-input"
                     placeholder="Enter your password" />
                   <label >Confirm Password:</label>
                   <input
                     type="password"
                     name="confpassword"
                     className="form-input"
                     placeholder="Confirm your password"/>
         
                     <button type="submit" className="btn form-btn" > sign up </button>
                     <p> Already registered? <Link to = "/login/client">Login</Link></p>
              </form>
          </div>    
     </div>       
    )
}
export default ClientReg;