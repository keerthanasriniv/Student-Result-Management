import React from 'react'

import './user.css';
import {useNavigate} from 'react-router-dom';
import UserHome from './UserHome.js'
export default function User() {
// const [id,setId]=useState(); 
// const [password, setPassword]=useState();
const navigate = useNavigate();

  const navigateToUserHome = () => {
    // 👇️ navigate to /contacts
    navigate('/UserHome');
  }; 
  return (
    <div class="container">
     <div class="wrapper">
   <centre> <h2 className='null'>Student Login</h2></centre>
    <div class ="form-box login">
      <form action="a">
      
        <div class="input-box">
          <span class="icon"></span>
          <input type="email" required/>
          <label>Email</label>
        </div>
        <div class="input-box">
          <span class="icon"></span>
          <input type="password" required/>
          <label>Password</label>
        </div>
        <div class="remember-forgot">
          <label><input type="checkbox"/>Remember me</label>
        </div>
        

        <div>
        <div>
          <button onClick={navigateToUserHome} class="btn">Login</button>
  
        </div>
      </div>




        
        </form>
        </div>
        </div>
        </div>
    )
  }