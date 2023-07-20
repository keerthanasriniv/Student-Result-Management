import React from 'react'
import AdminNav from './NavComp/AdminNav'
import './adminhome.css';
import AdminDash from './admindash1.jpg';
export default function AdminHome() {
  return (
    <div>
 
   <img src={AdminDash}width={1500}height={800}/>
   <AdminNav/> 
    </div>
  )
}
