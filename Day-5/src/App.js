import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Main';
import Admin from './admin'
import User from './user';
import UserHome from './UserHome';
import Result from './Result';
import View from './View';
import AdminHome from './AdminHome';
import Courses from './Courses';
import Contact from './Contact';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    
<Route path="/user" element={<User/>}/>
<Route path="/admin" element={<Admin/>}/>
<Route path="/" element={<Main/>}/>
    <Route path='UserHome' element={<UserHome/>}/>
    <Route path='AdminHome' element={<AdminHome/>}/>
    <Route path='Result' element={<Result/>}/>
    <Route path='View' element={<View/>}/>
    <Route path='Courses' element={<Courses/>}/>
    <Route path='Contact' element={<Contact/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;