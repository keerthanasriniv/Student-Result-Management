import React from 'react'
// import './usercourses.css';
import Navbar from './NavComp/Navbar';

export default function UserAssignments() {
  return (
    <div className='container-ass'>
    <span><Navbar/></span>
    <div class="wrapper-ass">
    <br></br>
    <br></br>
    <br></br>
    <h2 className='null-ass'>Assignments</h2>
    <div class ="form-box-ass login">
      <form action="a">
      <div class="input-box-ass">
      <label>Name</label>
      <br></br>
        <span class="icon-ass"></span>
        
        <input type="text" required/>
        
        <br></br>
      </div>
      <br></br>
      <div class="input-box-ass">
      <label>Roll No</label>
      <br></br>
        <span class="icon-ass"></span>
        <input type="text" required/>
       
      </div>
      <br></br>
        <div class="input-box-ass">
        <label>Email</label>
        <br></br>
          <span class="icon-ass"></span>
          <input type="email" required/>
          
        </div>
        <br></br>
        <label>Upload File</label>
        <br></br>
        <br></br>
        <div class="input-box-ass">
        <span class="icon-ass"></span>
        <input type="file" required/>
      </div>
      <br></br>
        <button type="submit" class="btn-ass">Submit</button>
        </form>
        </div>
        </div>
        </div>
    )
  }
// import React, { useState } from 'react';
// import axios from 'axios';

// const MAX_FILE_SIZE = 1000000000000000000; // 10 MB in bytes

// const FileUpload = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.size <= MAX_FILE_SIZE) {
//       setSelectedFile(file);
//     } else {
//       setSelectedFile(null);
//       setError('Please select a file smaller than 10 MB.');
//     }
//   };

//   const handleFileUpload = async () => {
//     if (selectedFile) {
//       setError('');
//       setLoading(true);

//       const formData = new FormData();
//       formData.append('file', selectedFile);

//       try {
//         const response = await axios.post('http://10.0.2.2:8080/upload', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });

//         console.log(response.data);
//         alert('File uploaded successfully!');
//       } catch (error) {
//         if (error.response) {
//           // Request was made and server responded with a status code
//           console.error('Server responded with:', error.response.data);
//           setError('Failed to upload file. Please try again later.');
//         } else if (error.request) {
//           // Request was made but no response received
//           console.error('No response from server:', error.request);
//           setError('Network Error. Please check your internet connection.');
//         } else {
//           // Something else happened
//           console.error('Error:', error.message);
//           setError('An unexpected error occurred. Please try again later.');
//         }
//       }

//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>File Upload</h2>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleFileUpload} disabled={!selectedFile || loading}>
//         Upload
//       </button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

// export default FileUpload;











// import { useState } from 'react'
// // import './App.scss';
// import FileUpload from './FileUpload/FileUpload';
// import FileList from './FileList/FileList';
// import FileItem from './FileItem/FileItem';
// function Some() {
//   const [files, setFiles] = useState([])

//   const removeFile = (filename) => {
//     setFiles(files.filter(file => file.name !== filename))
//   }

//   return (
//     <div className="App">
//       <div className="title">Upload file</div>
//       <FileUpload files={files} setFiles={setFiles}
//         removeFile={removeFile} />
//       <FileList files={files} removeFile={removeFile} />
//     </div>
//   );
// }

// export default Some;













// import React, { useState } from 'react';
// import axios from 'axios';

// const MAX_FILE_SIZE = 100000000000000000000000000000; // 10 MB in bytes

// const FileUpload = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.size <= MAX_FILE_SIZE) {
//       setSelectedFile(file);
//     } else {
//       setSelectedFile(null);
//       alert('Please select a file smaller than 10 MB.');
//     }
//   };

//   const handleFileUpload = () => {
//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append('file', selectedFile);

//       axios.post('http://10.0.2.2:8080/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       })


      
//         .then((response) => {
//           console.log(response.data);
//           alert('File uploaded successfully!');
//         })
//         // .catch((error) => {
//         //   console.error(error);
//         //   alert('Failed to upload file.');
//         // });
//     }
//   };

//   return (
//     <div>
//       <h2>File Upload</h2>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleFileUpload} disabled={!selectedFile}>Upload</button>
//     </div>
//   );
// };

// export default FileUpload;




// import React, { useState } from 'react';
// import axios from 'axios';

// const FileUpload = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleFileUpload = () => {
//     const formData = new FormData();
//     formData.append('file', selectedFile);

//     axios.post('http://localhost:8080/upload', formData)
//       .then((response) => {
//         console.log(response.data);
//         // Handle success
//       })
//       .catch((error) => {
//         console.error(error);
//         // Handle error
//       });
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button type="submit" onClick={handleFileUpload}>Upload File</button>
//     </div>
//   );
// };

// export default FileUpload;













// import React from 'react';
// import axios from 'axios';

// const FileDownload = ({ fileId }) => {
//   const handleFileDownload = () => {
//     axios.get(`/download/${fileId}`, { responseType: 'blob' })
//       .then((response) => {
//         // Create a temporary download link
//         const url = window.URL.createObjectURL(new Blob([response.data]));
//         const link = document.createElement('a');
//         link.href = url;
//         link.setAttribute('download', 'file.pdf'); // Set the desired file name here
//         document.body.appendChild(link);
//         link.click();
//         link.remove();
//       })
//       .catch((error) => {
//         console.error(error);
//         // Handle error
//       });
//   };

//   return (
//     <div>
//       <button onClick={handleFileDownload}>Download File</button>
//     </div>
//   );
// };

// export default FileDownload;












// import React from 'react'
// import './usercourses.css';
// import Navbar from './NavComp/Navbar';

// export default function UserAssignments() {
//   return (
//     <div className='container-ass'>
//     <span><Navbar/></span>
//     <div class="wrapper-asss">
//     <h2 className='null-ass'>Submit Assignments</h2>
//     <div class ="form-box-asss login">
//       <form action="a">
//       <div class="input-box-ass">
//         <span class="icon-ass"></span>
//         <input type="text" required/>
//         <label>Name</label>
//       </div>
//       <div class="input-box-ass">
//         <span class="icon-ass"></span>
//         <input type="text" required/>
//         <label>Roll No</label>
//       </div>
//         <div class="input-box-ass">
//           <span class="icon-ass"></span>
//           <input type="email" required/>
//           <label>Email</label>
//         </div>
//         <label>Upload File</label>
//         <div class="input-box-ass">
//         <span class="icon-ass"></span>
//         <input type="file" required/>
//       </div>
//         <button type="submit" class="btn-ass">Submit</button>
//         </form>
//         </div>
//         </div>
//         </div>
//     )
//   }