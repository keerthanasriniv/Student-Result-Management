import React from 'react'

import './admin.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import AdminHome from './AdminHome.js'
export default function Admin() {
// const [id,setId]=useState(); 
// const [password, setPassword]=useState();
const navigate = useNavigate();

  const navigateToAdminHome = () => {
    // 👇️ navigate to /contacts
    navigate('/AdminHome');
  }; 
  return (
    <div class="containers">
     <div class="wrappers">
   <centre> <h2 className='nulls'>Login</h2></centre>
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
          <button onClick={navigateToAdminHome} class="btn">Login</button>
  
          <Routes>
            <Route path="/AdminHome" element={<AdminHome />} />
          </Routes>
        </div>
      </div>




        
        </form>
        </div>
        </div>
        </div>
    )
  }