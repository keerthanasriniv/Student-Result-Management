// import UserLogin from './userPages/userLogin';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Main';
import Admin from './admin'
import User from './user';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    
      <Route path="/user" element={<User/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/" element={<Main/>}/>
        
      
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;