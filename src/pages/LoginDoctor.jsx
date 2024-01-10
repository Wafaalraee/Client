import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import '../style/Login.css';
import axios from 'axios';

function LoginDoctor() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [err, setErr] = useState();

  const submitLogin = (e) => {
    e.preventDefault();
    setErr("");
    let data = {
      email: email,
      password: password,
    };
    if (email !== "" && password !== "") {
      axios
        .post("http://localhost:4500/login/doctor" , data)
        .then((result) => {
          localStorage.setItem("token", result.data.token);
          localStorage.setItem("doctor_id", result.data.doctorID);
          window.location.href = "/dashboard/doctor";
          })
          .catch((error) => {
                    setErr(error.response.data);
            });
    } else {
      setErr("Email and Password are required");
    }
  };

  return (
    <div className='login-section'>
      <div className='login-container'>
          <h1 className='heading'>Login As Doctor</h1>                
          <form className="login-form"  onSubmit={submitLogin}>
          <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter your password" 
              onChange={(e) => setPassword(e.target.value)}/>
  
              <button type="submit" className="btn form-btn"  > Login </button>
              <p className='para'>Don't have an account? <Link to="/register/Doctor">Register here</Link>.</p>
          </form>
          <h3>{ err ? err : null }</h3>  
      </div>    
    </div>       
  )
} 
export default LoginDoctor;