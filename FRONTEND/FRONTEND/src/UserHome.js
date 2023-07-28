import React from 'react'
import Navbar from './NavComp/Navbar'
import "./UserHome.css"
import bg from './images/admindash.jpg';
// import { useSelector } from 'react-redux'
// import { selectUser } from './reduxx/userSlice.js'
export default function UserHome() {
  
  return (  
   <div className='bgimage'>
   <div>
   <img src={bg}width={1400}height={700}/>
   <Navbar/>                     
   </div>
    </div>
  )
}
