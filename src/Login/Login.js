import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import "./login.css";


function Login(props) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); 
  const[username, setUsername]=useState("");
  const[password, setPassword]=useState("");
  const [error, setError] = useState(null); 
  const [post, setPost] = React.useState(null);

  async function loginUser(credentials) {
    return fetch('http://localhost:8080/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      username,
      password
    });
   
    if ('token' in response) {
        localStorage.setItem('token', response['token']);
        localStorage.setItem('user', JSON.stringify(response['user']));
        navigate ('home')
      }
    else {
      swal("Failed", response.message, "error");
    }
  }

  return (
    <body>
    <div className="main">
       
          <h3 className="sign">Sign In</h3>
          <div className="form-group mt-3">
          <div className="input-username">
            <label htmlFor="username"></label>
            <input
              type="text"
              name="username"
              className="input-user"
              placeholder="Username" onChange={event => setUsername(event.target.value)}
              value={username}/>
          </div>
          
            <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              className="input-password"
              placeholder="Password" value={password}
              onChange={event => setPassword(event.target.value)}/>
                
        
            </div>
          
          {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input className= 'login-btn' type="submit" value={loading ? 'Loading...' : 'Login'} onClick={handleSubmit} disabled={loading} /><br />
        
        </div>
      
        </body>
  );
  
}

  
export default Login;