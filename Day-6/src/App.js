import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Main';
import Admin from './admin'
import User from './user';
import UserHome from './UserHome';
import Result from './Result';
import View from './View';
import AdminHome from './AdminHome';
import UserCourses from './UserCourses';
import Contact from './Contact';
import AdminAtt from './AdminAtt';
import StuDb from './StuDb';
import AdminRes from './AdminRes';
import AdminCourses from './AdminCourses';
import Grade from './Grade';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    
<Route path="/user" element={<User/>}/>
<Route path="/admin" element={<Admin/>}/>
<Route path="/" element={<Main/>}/>
    <Route path='/UserHome' element={<UserHome/>}/>
    <Route path='/AdminHome' element={<AdminHome/>}/>
    <Route path='/Result' element={<Result/>}/>
    <Route path='/View' element={<View/>}/>
    <Route path='/UserCourses' element={<UserCourses/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/AdminAtt' element={<AdminAtt/>}/>
    <Route path='/Grade' element={<Grade/>}/>
    <Route path='/AdminCourses' element={<AdminCourses/>}/>
    <Route path='/AdminRes' element={<AdminRes/>}/>
    <Route path='/StuDb' element={<StuDb/>}/>
     

    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;