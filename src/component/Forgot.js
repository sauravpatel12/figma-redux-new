import Navbar from "./Navbar";
import Img1 from "../images/Star.png";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { setstate } from "../action/index";
import { useDispatch, useSelector } from "react-redux";
const Forgot=()=>{
    const data=useSelector(store=>store.user);
    const dispatch=useDispatch();

    const navigate=useNavigate();
    const [email,setemail]=useState("");
    const handlesubmit =(e)=>{

        // e.preventDefault();
        if(!email){
             alert("please enter email");
        }
        else{
            const index= data.findIndex(object => {
                return object.email === email;
              });
              
              if(index=== -1)
              {
                  alert("please enter right email!")
              }
              else{
                dispatch(  setstate(index))
                  setTimeout(() => {

                      
                      navigate("/verify");
                  }, 1000);
              }
              

    
    }

    }

return(
    <>
     <Navbar/>
     <div className="row">
     <div className="col-4 per1">

         <div className="pp1">
             <div>Lorem Ipsum is simply <br></br> dummy text of the printing <br></br> and typesetting industry. </div>
         </div>
         <div className="pp2">
           <img src={Img1} className="popo"/>
         </div>

     </div>
  <div className="col-8 per2">
  
 <div className="hi">
 <div className="hi1">Forgot password?</div>
<div className="hi2">Please enter your registered email address<br></br> we'll send you reset instruction</div>
<div className="hi3">
    Email
</div>
<input type="email" className="hi4" placeholder="Typing..."  value={email} onChange={(e)=>{
    setemail(e.target.value)

}}/>
<div className="hi5" onClick={()=>{
  setemail("");

}}>RESET</div>
<button className="hi6" onClick={()=>
    {
    handlesubmit();
    
    }
    }>Send
</button>
<div className=" footere">@2020 All Rights Reserved. Engage Pulse Cookie Preferences, Privacy and Tearms</div>

 </div>



  </div>
</div>

    </>
)

}
export default Forgot;