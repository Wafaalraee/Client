import React from 'react';
import '../style/Doctorreg.css';  


function DoctorReg(){
    return (
        <div className='register-section'>
            <div className='register-container'>
                <h1 className='heading'>Register Form</h1>
                <form className="register-form">
                  <input
                    type="text"
                    name="firstname"
                    className="form-input"
                     placeholder="Enter your first name"/>
          
                   <input
                    type="text"
                    name="lastname"
                    className="form-input"
                    placeholder="Enter your last name"/>
         
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="Enter your email"  />
                   
                   <input
                     type="password"
                     name="password"
                     className="form-input"
                     placeholder="Enter your password" />
        
                   <input
                     type="password"
                     name="confpassword"
                     className="form-input"
                     placeholder="Confirm your password"/>
         
                     <button type="submit" className="btn form-btn" > sign up </button>
            
              </form>
          </div>    
     </div>       
    )
}
export default DoctorReg;