import { Link } from 'react-router-dom'
import admin from './images/admin.png'
import user from './images/user1.png'
import './main.css'
export default function Main() {
  return (
    <div className='mainpage'>
    <div className='title'><h1>STUDENT RESULT MANAGEMENT</h1></div>
    <div className='div-user'>
    <Link to="/user" className='link-user-login'>
    <img src={user} alt='user'width={250}height={250}/>
    <h3>USER</h3>
    </Link>
    </div>
    <div className='div-admin'>
    <Link to="/admin" className='link-admin-login'>
    <img src={admin} alt='admin' width={200} height={200}/>
    <h3>ADMIN</h3>
    </Link>
    </div>
    </div>
    )
  }