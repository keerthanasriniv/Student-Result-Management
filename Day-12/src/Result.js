import React from 'react'
import bgImg from './bg.jpg';
import { useForm } from 'react-hook-form';
import './result.css';
import View from './View';
import {Link,useNavigate} from "react-router-dom";
import Navbar from './NavComp/Navbar.js'
export default function Form() {

    const { register,  formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    
    
  return (
    <section>
      <Navbar/>
        <div className="register">
            <div className="col-1">
                <h2>RESULT LOGIN</h2>

                <form action='/View' id='form' className='flex flex-col' >
                    <input type="text" {...register("reg_no", { required : true, maxLength: 13 })} placeholder='Reg no' required/>
                    {errors.reg_no?.type === "required" && "Reg Number is required"}
                    {errors.reg_no?.type === "maxLength" && "Max Length Exceed"}
                    <br></br>
                    <input type="date" {...register("password", { required : true })} placeholder='Password' required/>
                    {errors.password?.type === "required" && "Password is required"}
                    <br></br>
                    <button href="/View" type='submit' className='btn'>Get Result</button>
                    <br></br>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}
