
import React from "react";
import Logo from "../images/logo.png"
import { useNavigate } from "react-router-dom";


const  Navbar=()=>{
    const navigate=useNavigate();
return(
<> 
<div className="nav">
<div className="logo">
 <img src={Logo} alt="openexcel" className="image" />
</div>
<div>
<button type="button" className="btn loginbtn" onClick={()=>navigate("/signin")}>Log In</button>
<button type="button"  className="btn registerbtn" onClick={()=>navigate('/register')}>Register</button>

</div>



</div>
    
</>



)


}
export default Navbar;