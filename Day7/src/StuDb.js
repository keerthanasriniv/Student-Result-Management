import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import './studb.css';
import Table from './Table';

function App() {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => setDataTable(res.data))
      .catch(err => console.log(err))
  }, []);

  const column = [
    { heading: 'Name', value: 'name' },
    { heading: 'Email', value: 'email' },
    { heading: 'Phone', value: 'phone' },
    { heading: 'City', value: 'address.city' },
  ]

  return (
    <div className="studb">
      <h1>STUDENT RECORDS</h1>
      <Table data={dataTable} column={column} />
    </div>
  );
}

export default App;
