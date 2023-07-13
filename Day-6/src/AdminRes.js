import "./adminres.css";
import React, { useState } from "react";
import Navbar from './components/Navbar'
import Sidebar from './components/sidebar'
import { Link } from "react-router-dom";
export default function App() {
  const [values, setValues] = useState({
    Name: "",
    Sub1: "",
    sub2: "",
    sub3:"",
    sub4:"",
    sub5:"",
  });

  const handleInputChange = (event) => {
    /* event.persist(); NO LONGER USED IN v.17*/
    event.preventDefault();

    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.Name && values.sub1 && values.sub2 && values.sub3 && values.sub4 && values.sub5 ) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid && (
          <div className="success-message">
            <h3>
            </h3>
            <div>  Result added  successfully!
            </div>
            
            </div>
            )}
            {!valid && (
              <input
              class="form-field"
              type="text"
              placeholder="Student Name"
              name="Name"
              value={values.Name}
              onChange={handleInputChange}
              />
              )}
              

        {submitted && !values.Name && (
          <span id="first-name-error">Please enter student name</span>
        )}

        {!valid && (
          <input
            class="form-field"
            type="number"
            placeholder="Subject1"
            name="sub1"
            value={values.sub1}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.sub1 && (
          <span id="last-name-error">Please enter Subject 1 Mark</span>
        )}
        {!valid && (
          <input
            class="form-field"
            type="number"
            placeholder="Subject2"
            name="sub2"
            value={values.sub2}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.sub2 && (
          <span id="last-name-error">Please enter Subject 2 Mark</span>
        )}
        
        {!valid && (
          <input
            class="form-field"
            type="number"
            placeholder="Subject3"
            name="sub3"
            value={values.sub3}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.sub3 && (
          <span id="last-name-error">Please enter Subject 3 Mark</span>
        )}
        {!valid && (
          <input
            class="form-field"
            type="number"
            placeholder="Subject4"
            name="sub4"
            value={values.sub4}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.sub4 && (
          <span id="last-name-error">Please enter Subject 4 Mark</span>
        )}
        {!valid && (
          <input
            class="form-field"
            type="number"
            placeholder="Subject5"
            name="sub5"
            value={values.sub5}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.sub5 && (
          <span id="last-name-error">Please enter Subject 5 Mark</span>
        )}
        {!valid && (
          <button class="form-field" type="submit">
            ADD RESULT
          </button>
        )}
      </form>
    </div>
  );
}
