import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
// import { reserveTable } from '../store';
import AdminNav from './NavComp/AdminNav'
import './admincourses.css';
import AdminDash from './admindash1.jpg';
const BookingPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  // const [lastname, setlName] = useState('');
  // const [search, setSearch] = useState('');
  const [email, setEmail] = useState('');
  const [assign, setAssign] = useState('');
  const [des, setDes] = useState('');
  

 

  // e.preventDefault();
    const handleSubmit = (e) => {
      const data1 =
      {
     
        name:name,
        email:email,
        assign:assign,
        des:des,
       
      };
      axios.post('http://localhost:8080/post',data1);
      alert("POSTED")
    }
  

  return (
    <div className='admincoursebg'>
    <AdminNav/>
    
    <div className='he1'>
    
   
      <div className='adminass'>
      <div className='back'>
      
        <h1 className='admincourseh2'>
          ASSIGN ASSIGNMENTS
        </h1>
     
    <div className='bod9'>

    <form className="reservation-form">
      <div className='clr'>
  
      <div className="form-group">
        <label >NAME </label>
        <input
          type="text"
          id="name"
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label >Email<br/></label>
        <input
          type="email"
          id="Email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label ><br/>ASSIGNMENT</label>
        <input
          type="text"
          id="assign"
          placeholder='Assign'
          value={assign}
          onChange={(e) => setAssign(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label ><br/>DESCRIPTION</label>
        <input
          type="text"
          id="des"
          placeholder='Description'
          value={des}
          onChange={(e) => setDes(e.target.value)}
        />
      </div>
     
      
      <br></br>
      <div className="form-group">
      <div className="reg">
        <button type="submit"  onClick={handleSubmit}>ASSIGN</button>
        </div>
      </div>
      </div>
    </form>
  <br/><br/>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
  };

export default BookingPage;



// import React from 'react'
// import './admincourses.css';
// import Navbar from './NavComp/AdminNav';

// export default function AdminAssignments() {
//   return (
//     <div className='container-ass'>
//     <span><Navbar/></span>
//     <div class="wrapper-ass">
//     <h2 className='null-ass'>POST</h2>
//     <div class ="form-box-ass login">
//       <form action="a">
//       <div class="input-box-ass">
//         <span class="icon-ass"></span>
//         <input type="text" required/>
//         <label>Name</label>
//       </div>
//         <div class="input-box-ass">
//           <span class="icon-ass"></span>
//           <input type="email" required/>
//           <label>Email</label>
//         </div>
//         <label>Assignment</label>
//         <div class="ass">
//         <span class="icon-ass"></span>
//         <br></br>
//         <textarea/>
//       </div><br></br>
//         <button type="submit" class="btn-ass">Submit</button>
//         </form>
//         </div>
//         </div>
//         </div>
//     )
//   }