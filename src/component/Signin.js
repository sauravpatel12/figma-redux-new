import React from "react";
import Navbar from "./Navbar";
import Group from "../images/Group 415.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import setuser from "../action/index";
import {useFormik,form} from "formik";
import * as yup from "yup";



const Signin=()=>{
  const formik =useFormik({
    initialValues:{
      email:"",
      password:""
    },
    validationSchema:yup.object({
     
      email: yup.string().email("invalid email address" ).required("Required"),
      password: yup.string()
  .required('No password provided.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
    }),
    onSubmit:(values)=>{
      console.log("hi");
      console.log(values);
    },

  })
  const navigate =useNavigate();
  const dispatch=useDispatch();
  const handelsubmit=(e)=>{
    e.preventDefault();
    // dispatch(setuser({email,password}));
    navigate('/postlist')

    }

return(
<>
   <Navbar />
   <div className=" row ">
    <div className="col-7 bg-primary con1">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
  <ol class="carousel-indicators" >
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active" ></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1" ></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2" ></li>
  </ol>
  <div class="carousel-inner" >
    <div class="carousel-item active "  >
      <img class="d-block w-100 img111" src={Group} alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 img111" src={Group} alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 img111" src={Group} alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>    
</div>
     <div  className="col-5  ">
    <div className="col2">
    <div className="cls1">Welcome Back!</div>
    <div className="cls2">Login to Your account</div>
    <div className="cls3" >Email</div>
    <form onSubmit={formik.handleSubmit}>
    
    <input  className="cls4"  type="text" placeholder="Typing..."  
    name="email"
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.email}/>
        <div  className="cls5 errr">{formik.touched.email && formik.errors.email? <p>{formik.errors.email}</p>:null} </div> 

    <div  className="cls5 ">Password</div>
    
    <input type="password" className="cls55" placeholder="Enter your password" 
    name="password"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.password}/>
    <div  className="cls5 errr">   {formik.touched.password && formik.errors.password? <p>{formik.errors.password}</p>:null} 
    </div>
    </form>

    <div className="flex1 btttn">
      <div className="d-flex justify-content-center align-items-center">
    <input type="checkbox" className="cls6" name="" id="" />
    <div className="cls7" >Remember Me</div>
    </div>
    <div className="cls8" onClick={()=>{navigate('/forgotpassword')}}>Forgot password?</div>
    </div>
    <button className="btn-lg cls9" type="submit">Sign in</button>
    <div className="cls10">@2020 All Rights Reserved. Engage Pulse Cookie Preferences, Privacy and Tearms</div>
   </div>
  </div>
  {/* </Form> */}




    </div>



</>

)

}
export default Signin;