import React from 'react'
import './admincourses.css';
import Navbar from './NavComp/AdminNav';

export default function AdminAssignments() {
  return (
    <div className='container-ass'>
    <span><Navbar/></span>
    <div class="wrapper-ass">
    <h2 className='null-ass'>POST</h2>
    <div class ="form-box-ass login">
      <form action="a">
      <div class="input-box-ass">
        <span class="icon-ass"></span>
        <input type="text" required/>
        <label>Name</label>
      </div>
        <div class="input-box-ass">
          <span class="icon-ass"></span>
          <input type="email" required/>
          <label>Email</label>
        </div>
        <label>Assignment</label>
        <div class="ass">
        <span class="icon-ass"></span>
        <br></br>
        <textarea/>
      </div><br></br>
        <button type="submit" class="btn-ass">Submit</button>
        </form>
        </div>
        </div>
        </div>
    )
  }