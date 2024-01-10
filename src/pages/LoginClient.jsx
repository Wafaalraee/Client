import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import '../style/Login.css';
import axios from 'axios';


// function LoginClient() {
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const isLoginSuccessful = true;

//     if (isLoginSuccessful) {
   
//       navigate('/dashboard/client');
//     } else {
//       console.error('Login failed. Please check your credentials.');
//     }
//   };
function LoginClient() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [err, setErr] = useState();
const submitLogIn = (e) => {
  e.preventDefault();
  setErr("");
  let data = {
    email: email,
    password: password,
  };
  if (email !== "" && password !== "") {
    axios
      .post("http://localhost:4500/login/client" , data)
      .then((result) => {
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("user-id", result.data.userID);

        window.location.href = "/dashboard/client";
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
          <h1 className='heading'>Login As Client</h1>
          <form className="login-form" onSubmit={submitLogIn}>
          <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn form-btn" >Login</button>
            <p className='para'> Don't have an account? <Link to = "/register/client">Register here</Link></p> 
          </form>
          <h3>{ err ? err : null }</h3>
        </div>
    </div>
  );
}

export default LoginClient;
