import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import '../style/Doctorreg.css';  
import axios from 'axios';


function DoctorReg() {
  const [user, setUser] = useState({
    firstName: "",
    lastName:"",
    email: "",
    password: "",
  });

  const [err, setErr] = useState();
  const [success, setSuccess] = useState();


  const regDoctor = (e) => {
    e.preventDefault();
    if (user.email !== "" && user.password !== "" && user.firstName !== "" && user.lastName !== "") {
      axios
        .post("http:localhost:4500/register/doctor")
        
        .then((result) => {
          setSuccess(result.data);
          window.location.href = "/login/doctor";
        })
        .catch((err) => {
          console.error(err);
          setErr(err.response.data);
        });
    } else {
      setErr("Email, Username  and Password are required");
    }
  }
  const handleChange = (e) => {
    // Update the state when input values change
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
                      <label for="name">First Name:</label>
                          <input
                            type="text"
                            name="firstname"
                            className="form-input"
                            placeholder="Enter your first name"
                            value={user.firstName}
                            onChange={handleChange}/>
                          
                       <label for="lastname">Last Name:</label>
                          <input
                            type="text"
                            name="lastname"
                            className="form-input"
                            placeholder="Enter your last name"
                            value={user.lastName}
                            onChange={handleChange}/>

                        <label for="email">Email:</label>
                            <input
                              type="email"
                              name="email"
                              className="form-input"
                              placeholder="Enter your email"  
                              value={user.email}
                              onChange={handleChange}/>

                        <label for="password">Password:</label>
                            <input
                              type="password"
                              name="password"
                              className="form-input"
                              placeholder="Enter your password" 
                              value={user.password}
                              onChange={handleChange}/>

       
                           <button type="submit" className="btn form-btn" > sign up </button>
                          <p className='para'> Already registered? <Link to= "/login/Doctor">Login</Link></p> 
                </form>        
          </div>    
     </div>       
    )
}
export default DoctorReg;