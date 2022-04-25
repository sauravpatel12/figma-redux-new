import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Star from "../images/Star.png"

const Reset =()=>{
  const navigate=useNavigate();


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
                   <input type="text" placeholder="Typing..." className="kg4" />
                   <div className="kg5" >Confirm password</div>
                   <input type="text" placeholder="Typing..." className="kg6" /><br></br>
                   <button className="kg7" onClick={()=>{
                     navigate('/signin')
                   }}>Save</button>
                   <div className="footere">@2020 All Rights Reserved. Engage Pulse Cookie Preferences, Privacy and Tearms</div> 
               </div>


            </div>

           </div>
        </>
    )

}
export default Reset;