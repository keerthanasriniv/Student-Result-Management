import React from 'react'
import { useState,useEffect } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
// import './Login.css'
import axios from 'axios'
import { useDispatch } from "react-redux";

import { Link } from 'react-router-dom'



const Login = () => {
 const [name,setName]=useState('')
 const [id,setId]=useState('')  
 const [password,setPassword]=useState('')
 const [errors, setErrors] = useState({});
 const[isSubmit,setIsSubmit]=useState(false);
 const navigate =useNavigate();
 const dispatch=useDispatch();

 const handleName=(event)=>{
    event.preventDefault();
    setName(event.target.value)
  }
 
  const handleId=(event)=>{
    event.preventDefault();
    setId(event.target.value)
  }
  const handlePassword=(event)=>{
    event.preventDefault();
    setPassword(event.target.value)
  }
  const handleSubmit=async (event)=>{
    event.preventDefault();
    setErrors(validateForm({name,id,password}));
    try{
      const response=await axios.post('http://localhost:8181/api/v1/auth/authenticate',{
        
        email:name,
        password:password
  
      });
      navigate('/UserHome');
      let token=response.data.token;
      localStorage.setItem('token',token);
      console.log(response.status);
      if(response.status===200){
        setName("");
        setId('');
        setPassword('');
  
        
  
      }
      
    }
    catch(error){
      console.log(error);
      setIsSubmit(false);
  
    }
    // setIsSubmit(true);
    
    
   
};
  

  const validateForm = (values) => {
    const errors = {};

    if (values.name.trim() === '') {
      errors.name = 'Email is required';
      setIsSubmit(false);
    }

    else if (values.password.trim() === '') {
      errors.password = 'Password is required';
      setIsSubmit(false);
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      setIsSubmit(false);
    }
    else{
        setIsSubmit(true)
    }
    return errors;

    // setErrors(errors);
  };

 

  return (
    <>
  
    <div className='login'>
        <form className='login_form' onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className='gogo'>
            <div className='form-floating mb-3'>
            <label for='nm'>Email</label>
            <br></br>
            <input type='email' className='form-control'
            placeholder='abc@gmail.com'
            value={name} id='nm'
            onChange={handleName} />
            </div>
            {errors.name}
            </div>
       <br></br>
            <div className='loginbox'>
              <div className="jo">
            <div className='form-floating mb-3'>
            <label for='pwd'>Password</label>
            <br></br>
            <input type='password' className='form-control'
            placeholder='password' id='pwd'
            value={password}
            onChange={handlePassword}/>
            </div>
            </div>
            {errors.password && <span>{errors.password}</span>}
            </div>
            
            <button  type='submit' className='btn btn-secondary' style={{background:'black',color:'white',width:180,height:50,margin:40}}>Sign In</button>

        </form>
        <br></br><br></br>
        <h2>Don't have an account? <a href='/SignUp'>SignUp</a></h2>
    </div>
    
    </>
  )
}

export default Login


















// import React from 'react'

// import './user.css';
// import {useNavigate} from 'react-router-dom';
// import UserHome from './UserHome.js'
// export default function User() {
// // const [id,setId]=useState(); 
// // const [password, setPassword]=useState();
// const navigate = useNavigate();

//   const navigateToUserHome = () => {
//     // 👇️ navigate to /contacts
//     navigate('/UserHome');
//   }; 
//   return (
//     <div class="container">
//      <div class="wrapper">
//    <centre> <h2 className='null'>Student Login</h2></centre>
//     <div class ="form-box login">
//       <form action="/UserHome">
      
//         <div class="input-box">
//           <span class="icon"></span>
//           <input type="email" required/>
//           <label>Email</label>
//         </div>
//         <div class="input-box">
//           <span class="icon"></span>
//           <input type="password" required/>
//           <label>Password</label>
//         </div>
//         <div class="remember-forgot">
//           <label><input type="checkbox"/>Remember me</label>
//         </div>
        

//         <div>
//         <div>
        
//   <button href="/UserHome" type='submit' class="btn">Login</button>
//         </div>
//       </div>




        
//         </form>
//         </div>
//         </div>
//         </div>
//     )
//   }