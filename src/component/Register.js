import Navbar from './Navbar';
import  img3 from "../images/Ellipse.jpg";
import Rocket from "../images/rocket.png";
import Datepicker from './Datepicker';
import TextField from '@mui/material/TextField';
import Input1 from './Input1';
const Register=()=>{

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
                  <input type="file" name="" className='infil' placeholder='Upload Image' id="" />
              </div>
              <div className='d-flex'>

              <div className='s'>
              <div className='s1'>First Name*</div>
              <input type="text" placeholder='Typing...' className='s2' />
              <div className='s3'>Email*</div>
              <input type="email" className='s4' placeholder='Enter your email'  />
              <div className='s44'>Password</div>
                <Input1 />
              {/* <input type="password" className='s5' placeholder='Enter your password' /> */}
              <div className='s6'>Date Of Birth*</div>
              <Datepicker />
               <div className='s8 d-flex align-items-center'>  
              <input type="radio" className='s9' />
              <div className='s10'>I agree to the tearms of services</div>
              </div>
              <button className='s11'>Get Started</button>


             </div>
             <div className='fdf'>
             <div className='s1'>Last Name*</div>
             <input className='s4' type="text" placeholder='Enter your name' />
             <div className='s3'>phone*</div>
             <input type="number" className='s4' placeholder='Enter your phone number ' />
             <div className='s3'>Confirm Password* </div>
             <input className='s4' type="password" placeholder='Enter your password' />
             <div className='s3'>Gender</div>
             <input type="radio" name="gender" value="male" /><span className='s3 '> Male</span>
             <input type="radio" name="gender" value="female" className='female'/> <span className='s3  '>Female </span>

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