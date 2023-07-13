import React from 'react'
import bgImg from './bg.jpg';
import { useForm } from 'react-hook-form';
import './result.css';
// import View from './View';
import {Link,useNavigate} from "react-router-dom";
import Navbar from './components/Navbar.js'
export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (
    <section>
      <Navbar/>
        <div className="register">
            <div className="col-1">
                <h2>RESULT LOGIN</h2>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("reg_no", { required : true, maxLength: 13 })} placeholder='Reg no' />
                    {errors.reg_no?.type === "required" && "Reg Number is required"}
                    {errors.reg_no?.type === "maxLength" && "Max Length Exceed"}
                    <br></br>
                    <input type="text" {...register("password", { required : true, maxLength: 8 })} placeholder='Password' />
                    {errors.password?.type === "required" && "Password is required"}
                    {errors.password?.type === "maxLength" && "Max Length Exceed"}
                    <br></br>
                    <Link to="/View">
                    <button className='btn'>Get Result</button>
                    </Link>
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
// import React from 'react'
// import NavBar from './components/Navbar'
// export default function Result() {
//   return (
    
//     <div>Result
//     <NavBar/>
//     </div>
//   )
// }
