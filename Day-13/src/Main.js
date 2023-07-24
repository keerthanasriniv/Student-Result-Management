// import { Link } from 'react-router-dom'
// import admin from './images/admin.png'
// import user from './images/user1.png'
import React from 'react';
import { useNavigate } from "react-router-dom";
import './main.css'
export default function Main() {
  let navigate = useNavigate(); 
  const routeChangeUser = () =>{ 
    let path = `/user`; 
    navigate(path);
  }
  const routeChangeAdmin = () =>{ 
    let path = `/admin`; 
    navigate(path);
  }

  return (
    <div className='mainpage'>
    <div className='title'><h1>STUDENT RESULT MANAGEMENT</h1></div>
    <div className='div-user'>
    <h2>LOGIN AS</h2>
    <br></br>
  <button onClick={routeChangeUser}type='submit' class="btn1">USER</button>
  <br></br>
  <br></br>
  <h2>OR</h2>
  <br></br>
  <button onClick={routeChangeAdmin} type='submit' class="btn2">ADMIN</button>
    </div>
    </div>
    )
  }
// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// function Start() {
//     const navigate = useNavigate()
//   return (
//     <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
//             <div className='p-3 rounded w-25 border loginForm text-center'>
//                 <h2>Login As</h2>
//                 <div className='d-flex justify-content-between mt-5'>
//                     <button className='btn btn-primary btn-lg' onClick={e => navigate('/employeeLogin')}>Employee</button>
//                     <button className='btn btn-success btn-lg' onClick={e => navigate('/login')}>Admin</button>
//                 </div>
//             </div>
//         </div>
//   )
// }

// export default Start