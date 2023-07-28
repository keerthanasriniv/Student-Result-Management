import React, { useState } from 'react';
import { connect } from 'react-redux';
import './contact.css';
import Navbar from './NavComp/Navbar';
import { sendMessage } from './redux/actions/contactActions';

function Contact({ sendMessage }) {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactData = {
      name,
      rollNo,
      email,
      message,
    };
    sendMessage(contactData);
    // Clear form fields
    setName('');
    setRollNo('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container-con">
      <span>
        <Navbar />
      </span>
      <div className="wrapper-con">
        <h2 className="null-con">Contact</h2>
        <div className="form-box-con login">
          <form onSubmit={handleSubmit}>
            <div className="input-box-con">
              <span className="icon-con"></span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label>Name</label>
            </div>
            <div className="input-box-con">
              <span className="icon-con"></span>
              <input
                type="text"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                required
              />
              <label>Roll No</label>
            </div>
            <div className="input-box-con">
              <span className="icon-con"></span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email</label>
            </div>
            <div className="mess">
              <span className="mess"></span>
              <label>Message</label>
              <br />
              <br />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <br />
            <button type="submit" className="btn-con">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (contactData) => dispatch(sendMessage(contactData)),
  };
};

export default connect(null, mapDispatchToProps)(Contact);





// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import './contact.css';
// import Navbar from './NavComp/Navbar';
// import { sendMessage } from './redux/actions/contactActions';

// function Contact({ sendMessage }) {
//   const [name, setName] = useState('');
//   const [rollNo, setRollNo] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const contactData = {
//       name,
//       rollNo,
//       email,
//       message,
//     };
//     sendMessage(contactData);
//     // Clear form fields
//     setName('');
//     setRollNo('');
//     setEmail('');
//     setMessage('');
//   };

//   return (
//     <div className="container-con">
//       <span>
//         <Navbar />
//       </span>
//       <div className="wrapper-con">
//         <h2 className="null-con">FEEDBACK FORM</h2>
//         <div className="form-box-con login">
//           <form onSubmit={handleSubmit}>
//             <div className="input-box-con">
//               <span className="icon-con"></span>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//               <label>Name</label>
//             </div>
//             <div className="input-box-con">
//               <span className="icon-con"></span>
//               <input
//                 type="text"
//                 value={rollNo}
//                 onChange={(e) => setRollNo(e.target.value)}
//                 required
//               />
//               <label>Roll No</label>
//             </div>
//             <div className="input-box-con">
//               <span className="icon-con"></span>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <label>Email</label>
//             </div>
//             <div className="mess">
//               <span className="mess"></span>
//               <label>Message</label>
//               <br />
//               <br />
//               <textarea
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               />
//             </div>
//             <br />
//             <button type="submit" className="btn-con">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     sendMessage: (contactData) => dispatch(sendMessage(contactData)),
//   };
// };

// export default connect(null, mapDispatchToProps)(Contact);




// // import React, { useRef } from "react";
// // import emailjs from "@emailjs/browser";
// // import styled from "styled-components";

// // import Navbar from './NavComp/Navbar.js'
// // const Contact = () => {
// //   const form = useRef();

// //   const sendEmail = (e) => {
// //     e.preventDefault();

// //     emailjs
// //       .sendForm(
// //         "replace with service id",
// //         "replace with template id",
// //         form.current,
// //         "replace with user id"
// //       )
// //       .then(
// //         (result) => {
// //           console.log(result.text);
// //           console.log("message sent");
// //         },
// //         (error) => {
// //           console.log(error.text);
// //         }
// //       );
// //   };

// //   return (
   
// //     <StyledContactForm>
// //     <Navbar/>
// //     <center>
   
// //       <form ref={form} onSubmit={sendEmail}>
// //       <h1>SEND FEEDBACK</h1>
// //         <label>Name</label>
// //         <input type="text" name="user_name" />
// //         <label>Email</label>
// //         <input type="email" name="user_email" />
// //         <label>Message</label>
// //         <textarea name="message" />
// //         <input type="submit" value="Send" />
// //       </form>
// //       </center>
// //     </StyledContactForm>
// //   );
// // };

// // export default Contact;

// // // Styles
// // const StyledContactForm = styled.div`
// //   width: 400px;

// //   form {
// //     display: flex;
// //     align-item:flex-start;
// //     flex-direction: column;
// //     width: 100%;
// //     font-size: 16px;
// //     margin-left:450px;
// //     margin-top:100px;

// //     input {
// //       width: 100%;
// //       height: 35px;
// //       padding: 7px;
// //       outline: none;
// //       border-radius: 5px;
// //       border: 1px solid rgb(220, 220, 220);

// //       &:focus {
// //         border: 2px solid rgba(0, 206, 158, 1);
// //       }
// //     }

// //     textarea {
// //       max-width: 100%;
// //       min-width: 100%;
// //       width: 100%;
// //       max-height: 100px;
// //       min-height: 100px;
// //       padding: 7px;
// //       outline: none;
// //       border-radius: 5px;
// //       border: 1px solid rgb(220, 220, 220);

// //       &:focus {
// //         border: 2px solid rgba(0, 206, 158, 1);
// //       }
// //     }

// //     label {
// //       margin-top: 1rem;
// //     }

// //     input[type="submit"] {
// //       margin-top: 2rem;
// //       cursor: pointer;
// //       background: rgb(249, 105, 14);
// //       color: white;
// //       border: none;
// //     }
// //   }
// // `;





