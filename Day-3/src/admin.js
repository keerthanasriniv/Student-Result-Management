import React from 'react'
// import { useState } from "react"

import './admin.css';
// import EmailIcon from '@mui/icons-material/Email';
export default function Admin() {
// const [id,setId]=useState(); 
// const [password, setPassword]=useState(); 
  return (
    <div class="container">
   // <div class="wrapper">
   <centre> <h2 className='null'>Admin Login</h2></centre>
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
        <button type="submit" class="btn">Login</button>
        </form>
        </div>
        </div>
        </div>


        
    )
  }
  