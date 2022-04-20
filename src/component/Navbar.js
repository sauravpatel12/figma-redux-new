
import React from "react";
import Logo from "../images/logo.png"
import { useLocation, useNavigate } from "react-router-dom";


const  Navbar=()=>{
    const location=useLocation();
    const path =location.pathname;
 

    const navigate=useNavigate();
return(
<> 
<div className="nav">
<div className="logo">
 <img src={Logo} alt="openexcel" className="image" onClick={()=>{
navigate("/signin");
 }}/>
</div>
<div>
<button type="button" className={ path==='/signin'? "btn loginbtn1": "btn loginbtn"} onClick={
    ()=>{navigate("/signin"); 

}}>Log In</button>
<button type="button"  className={ path==='/register'? "btn registerbtn": "btn registerbtn1"} onClick={()=>navigate('/register')}>Register</button>

</div>



</div>
    
</>



)


}
export default Navbar;