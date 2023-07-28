// StudentTable.js
import React from 'react';
import Navbar from './NavComp/AdminNav';
import './studb.css';
const studentData = [
  { id: 1, name: 'John Doe', age: 18, grade: 'A',email:'727721euit67@skcet.ac.in' },
  { id: 2, name: 'Jane Smith', age: 18, grade: 'B+' ,email:'727721euit0755@skcet.ac.in'},
  { id: 3, name: 'Bob Johnson', age: 19, grade: 'A+' ,email:'727721euit081@skcet.ac.in'},
  { id: 4, name: 'sana', age: 18, grade: 'C' ,email:'727721euit123@skcet.ac.in'},
  { id: 5, name: 'keerthana', age: 19, grade: 'o' ,email:'727721euit076@skcet.ac.in'},
  { id: 6, name: 'krishna', age: 19, grade: 'B' ,email:'727721euit081@skcet.ac.in'},
  { id: 7, name: 'krishna Vigash', age: 19, grade: 'B' ,email:'727721euit081@skcet.ac.in'},
  { id: 8, name: 'Sarath', age: 19, grade: 'B' ,email:'727721euit081@skcet.ac.in'},
  // Add more students here
];

const StudentTable = () => {
  return (
    <div className='stuimage'>
    <div>
    <Navbar/>
      <h2 className='h2stu'>Student Details</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.grade}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default StudentTable;









// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import './App.css';
// import './studb.css';
// import Table from './Table';

// function App() {
//   const [dataTable, setDataTable] = useState([]);

//   useEffect(() => {
//     axios('https://jsonplaceholder.typicode.com/users')
//       .then(res => setDataTable(res.data))
//       .catch(err => console.log(err))
//   }, []);

//   const column = [
//     { heading: 'Name', value: 'name' },
//     { heading: 'Email', value: 'email' },
//     { heading: 'Phone', value: 'phone' },
//     { heading: 'City', value: 'address.city' },
//   ]

//   return (
//     <div className="studb">
//       <h1>STUDENT RECORDS</h1>
//       <Table data={dataTable} column={column} />
//     </div>
//   );
// }

// export default App;
