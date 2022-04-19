import Navbar from './Navbar';
import  img3 from "../images/Ellipse.jpg";
import Rocket from "../images/rocket.png";
import Datepicker from './Datepicker';
import TextField from '@mui/material/TextField';
import Input1 from './Input1';
import UploadButtons from './Upload';
import { useState } from 'react';
const Register=()=>{
const [user,setuser] =useState({firstname:"",email:"",lastname:"",phone:"",gender:""});
const handlesubmit=(e)=>{
  e.preventDefault();
  console.log(user)

}



return(
<>
 <Navbar />
 
     <div className='row'>
           <div className='col-4 dd1'>
             
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
                  <img src={img3} alt="" />
                  <UploadButtons />
                  {/* <input type="file" name="" className='infil' placeholder='Upload Image' id="" /> */}
              </div>
              <div className='d-flex'>

              <div className='s'>
              <div className='s1'>First Name*</div>
              <input type="text" placeholder='Typing...' className='s2' value={user.firstname} onChange={(e)=>{
                
                setuser({...user,firstname:e.target.value})
              }}/>
              <div className='s3'>Email*</div>
              <input type="email" className='s4' placeholder='Enter your email' value={user.email}  onChange={(e)=>{
                
                setuser({...user,email:e.target.value})
              }}/>
              <div className='s44'>Password</div>
                <Input1  />
              {/* <input type="password" className='s5' placeholder='Enter your password' /> */}
              <div className='s6'>Date Of Birth*</div>
              <Datepicker />
               <div className='s8 d-flex align-items-center'>  
              <input type="radio" className='s9' />
              <div className='s10'>I agree to the tearms of services</div>
              </div>
              <button className='s11' onClick={handlesubmit}>Get Started</button>


             </div>
             <div className='fdf'>
             <div className='s1'>Last Name*</div>
             <input className='s4' type="text" placeholder='Enter your name' value={user.lastname} onChange={(e)=>{
                
                setuser({...user,lastname:e.target.value})
              }} />
             <div className='s3'>phone*</div>
             <input type="tel" className='s4' placeholder='Enter your phone number' value={user.phone} onChange={(e)=>{
                
                setuser({...user,phone:e.target.value})
              }} />
             <div className='s3'>Confirm Password* </div>
             <input className='s4' type="password" placeholder='Enter your password' />
             <div className='s3'>Gender</div>
             <input type="radio" name="gender" value={user.gender} onChange={(e)=>{
                
                setuser({...user,gender:e.target.value})
              }}/><span className='s3 '> Male</span>
             <input type="radio" name="gender" value={user.gender} className='female' onChange={(e)=>{
                
                setuser({...user,gender:e.target.value})
              }}/> <span className='s3  '>Female </span>

              <div className='fwe'>
              @2020 All Rights Reserved. Engage Pulse Cookie <br></br> Preferences, Privacy and Tearms
              </div>
     



             </div>
             </div>


          </div>               
 
           </div>
 
  

     </div>







</>

)



}
export default Register;