import Navbar from "./Navbar";
const Forgot=()=>{

return(
    <>
     <Navbar/>
     <div className="row">
     <div className="col-4 per1">

         <div className="pp1">
             <div>Lorem Ipsum is simply <br></br> dummy text of the printing <br></br> and typesetting industry. </div>
         </div>
         <div className="pp2">
             <h1>images</h1>
         </div>

     </div>
  <div className="col-8 per2">
  
 <div className="hi">
 <div className="hi1">Forgot password?</div>
<div className="hi2">Please enter your registered email address<br></br> we'll send you reset instruction</div>
<div className="hi3">
    Email
</div>
<input type="email" className="hi4" placeholder="Typing..." />
<div className="hi5">RESET</div>
<button className="hi6">Send</button>


 </div>



  </div>
</div>

    </>
)

}
export default Forgot;