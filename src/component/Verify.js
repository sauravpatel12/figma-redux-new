import Navbar from './Navbar';
import OtpInput from 'react-otp-input';
import { useState } from 'react';
import Star from '../images/Star.png';
import { border } from '@mui/system';
const Verify=()=>{
    const [otp,setotp]= useState('');
    const handleChange=(e)=>{
        setotp(e);
        
        
    }
    return(
     <>
    <Navbar />
    <div className='row'>
    <div className='col-4 per1'>
   <div className='pp1'>
    
    <div className='halo'>Lorem Ipsum is simply<br></br> dummy text of the printing  <br></br>and typesetting industry. </div>
   </div>
   <div className='pp2 '>
  
  <img src={Star}  className="java"/>

   </div>
        

    </div>
    <div className='col-8'>
    <div className='fm'>
      <div className='fm1'>Verification</div>
      <div className='fm2'>We have sent you OTP on your email address</div>
      <div classname='fm3'>
       
        <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={4}
        separator={<span><pre> </pre></span>}
        inputStyle={{
          width:"52px",
          height:"50px",
          
          background: "#F7F9FC",
          borderradius: "4px",
          border:"none",
          margin:"16px"
        }}
      />
      </div>
      <div className='fm4'>
          RESEND 
      </div>
      <div>
      <button className='fm5'>Verify</button>
      </div>
      <button className='fm6'>Change Email</button>



    </div>




    </div>

</div>


     </>
    )
}
export default Verify;