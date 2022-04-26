import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Star from "../images/Star.png"
import { useDispatch, useSelector } from "react-redux";
import { update } from "../action";
import { useState } from "react";

const Reset =()=>{
  const navigate=useNavigate();
  const index=useSelector(store=>store.arrayindex);
  const user=useSelector(store=>store.user);
  const dispatch=useDispatch();
  const [pass,newpass]=useState("");
  const [cpass,newcpass]=useState("");
  console.log(index);
  console.log(user);


    return(
        <>
           <Navbar/>
           <div className="row">
            <div className="col-0 col-sm-0	col-md-0	col-lg-4 col-xl-4 per1">
             <div className="r11 d-flex justify-content-center align-items-center">
             Lorem Ipsum is simply<br></br>dummy text of the printing<br></br> and typesetting industry. 

             </div>
         

           <div className="r12">
            <img src={Star} className="fffp"/>
          </div>
            </div>
            <div className="col-12 col-sm-12	col-md-12	col-lg-8 col-xl-8 per2 ">

               <div className="kg">
                   <div className="kg1">Reset Password</div>
                   <div className="kg2">Please enter your new password.</div>
                   <div className="kg3">New password</div>
                   <input type="text" placeholder="Typing..." className="kg4"  value={pass} onChange={(e)=>{newpass(e.target.value)}} />
                   <div className="kg5" >Confirm password</div>
                   <input type="text" placeholder="Typing..." className="kg6" value={cpass} onChange={(e)=>{newcpass(e.target.value)}} /><br></br>
                   <button className="kg7" onClick={()=>{
                     if(pass === cpass)
                     {
                     navigate('/signin')
                     
                    user[index].password=pass;
                    
                     dispatch(update(user))
                   }
                   else{
                     alert('password and confirm password not match')
                   }}}>Save</button>
                   <div className="footere">@2020 All Rights Reserved. Engage Pulse Cookie Preferences, Privacy and Tearms</div> 
               </div>


            </div>

           </div>
        </>
    )

}
export default Reset;