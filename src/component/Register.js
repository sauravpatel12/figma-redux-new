import Navbar from './Navbar';
import  img3 from "../images/Ellipse.jpg";
import Rocket from "../images/rocket.png";
import Datepicker from './Datepicker';
// import TextField from '@mui/material/TextField';
import Input1 from './Input1';
import UploadButtons from './Upload';
import { useState } from 'react';
import {useFormik,form} from "formik";
import * as yup from "yup";
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { useDispatch } from "react-redux";
import setuser from "../action/index";
import { useNavigate } from 'react-router-dom';



const Register=()=>{

  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [selectedImage, setSelectedImage] = useState(img3);
  
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const Input = styled('input')({
    display: 'none',
  });
  
  
  const handleChange1 = (e) => {
     console.log("Checked");
    console.log(e);
    console.log('temp files',e.target.files)
    const img=URL.createObjectURL(e.target.files[0]);
    setSelectedImage(img);

  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log('password',values.password);
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

const formik =useFormik({
  initialValues:{
    email:"",
    firstname:"",
    lastname:"",
    phone:"",
    password:"",
    dob:"",
    gender:"",
    url:""
  
  },
  validationSchema:yup.object({
   
    email: yup.string().email("invalid email address" ).required("Required"),
    firstname:yup.string()
   .required("Please enter the required field")
   .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    lastname:yup.string()
   .required("Please enter the required field")
   .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
   phone: yup.string()
   .required("This field is Required")
   .matches(
     /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
     "Phone number is not valid"
   )
   
  }),
  onSubmit:(values)=>{
    console.log("values");
    dispatch(setuser({email:values.email,
    password:values.password, 
    phone:values.phone,
    firstname:values.firstname,
    lastname:values.lastname,
    url:selectedImage,
    dob:values.dob,
    gender:values.gender

}
   
    ));
alert("user successfuly created");
navigate('/signin');

  },

})





return(
<>
 <Navbar />
 
     <div className='row'>
           <div className='col-4 ddr1'>
             
              <div className='d3'>
                  <div>
                  Lorem Ipsum is simply <br></br>dummy text of the printing<br></br> and typesetting industry.    
                  </div>

              </div>
              <div className='d4'>

                <div className='ooo'>
                    <img src={Rocket} />
                   
                </div>

              </div>
           </div>
           
           <div className='col-8  d2'>
           <div className='Rdiv'>
              <div className='rdiv1'>Create Your account</div> 
              <div className='rdiv2'>We need some details to setup your account</div>
              <div className='d-flex  align-items-center cen1'>
                  <img src={selectedImage} alt="" style={{width: 102, height: 102, borderRadius: 400/ 2}} />
                  <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file"  onChange={handleChange1 }  />
        <Button variant="contained" component="span" >
          Upload Image
        </Button>
      </label>
    
    </Stack>
                  {/* <input type="file" name="" className='infil' placeholder='Upload Image' id="" /> */}
              </div>
              <form onSubmit={formik.handleSubmit}>
              <div className='d-flex'>

              <div className='s'>
              <div className='s1'>First Name*</div>
              
              <input type="text" placeholder='Typing...' className='s2' name='firstname' 
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.firstname}/>

              <div  className="errr " >{formik.touched.firstname && formik.errors.firstname? <p>{formik.errors.firstname}</p>:null} </div> 

              <div className='s3'>Email*</div>
              <input type="email"  name="email" className='s4' placeholder='Enter your email' 
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.email}/>
                <div  className="errr " >{formik.touched.email && formik.errors.email? <p>{formik.errors.email}</p>:null} </div> 
              <div className='s44'>Password</div>
              {/* width: '21vw',backgroundColor:"#F9F9F9",height:"2.8vw" */}
              <input className='s4' type="password" placeholder='Enter your password' name='password' 
                  onChange={formik.handleChange}
               onBlur={formik.handleBlur} 
               value={formik.values.password} />
           
   
              {/* <input type="password" className='s5' placeholder='Enter your password' /> */}
              <div className='s6'>Date Of Birth*</div>
              <input type="date" name='dob'        onChange={(e)=>{formik.values.dob=e.target.value}}
               onBlur={formik.handleBlur} 
               value={formik.values.dob}  />
              {/* <Datepicker /> */}
               <div className='s8 d-flex align-items-center'>  
              <input type="radio" className='s9' />
              <div className='s10'>I agree to the tearms of services</div>
              </div>
              <button className='s11' type="submit" >Get Started</button>


             </div>
             <div className='fdf'>
             
             <div className='s1'>Last Name*</div>
             <input className='s4' type="text" name='lastname' placeholder='Enter your name' 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastname} />
            <div  className="errr " >{formik.touched.lastname && formik.errors.lastname? <p>{formik.errors.lastname}</p>:null} </div> 


             <div className='s3'>phone*</div>
             <input type="tel" className='s4' placeholder='Enter your phone number' name='phone'
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.phone}
             />
              <div  className="errr " >{formik.touched.phone && formik.errors.phone? <p>{formik.errors.phone}</p>:null} </div> 
             <div className='s3'>Confirm Password* </div>
             <input className='s4' type="password" placeholder='Enter your password' />
             <div className='s3'>Gender</div>
             <input type="radio" name="gender" onChange={(e)=>{
             formik.values.gender="male";  

            
              }}/><span className='s3 '> Male</span>
             <input type="radio" name="gender" className='female' onChange={(e)=>{
                
                formik.values.gender="female";

               console.log("female",e.target.value)
              }}/> <span className='s3  '>Female </span>

              <div className='fwe'>
              @2020 All Rights Reserved. Engage Pulse Cookie <br></br> Preferences, Privacy and Tearms
              </div>
     



             </div>
             </div>

             </form>

          </div>               
 
           </div>
 
  

     </div>







</>

)



}
export default Register;