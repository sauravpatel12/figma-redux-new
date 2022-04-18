import Navbar from "./Navbar";

const Reset =()=>{

    return(
        <>
           <Navbar/>
           <div className="row">
            <div className="col-4 per1">
             <div className="r11 d-flex justify-content-center align-items-center">
             Lorem Ipsum is simply<br></br>dummy text of the printing<br></br> and typesetting industry. 

             </div>
         

           <div className="r12">
            <h1>images</h1>
          </div>
            </div>
            <div className="col-8 per2 ">

               <div className="kg">
                   <div className="kg1">Reset Password</div>
                   <div className="kg2">Please enter your new password.</div>
                   <div className="kg3">New password</div>
                   <input type="text" placeholder="Typing..." className="kg4" />
                   <div className="kg5" >Confirm password</div>
                   <input type="text" placeholder="Typing..." className="kg6" /><br></br>
                   <button className="kg7">Save</button>
                   <div className="fee">@2020 All Rights Reserved. Engage Pulse Cookie Preferences, Privacy and Tearms</div> 
               </div>


            </div>

           </div>
        </>
    )

}
export default Reset;