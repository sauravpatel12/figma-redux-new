
import React from "react";
import Logo from "../images/logo.png"


const  Navbar=()=>{
return(
<> 
<div className="nav">
<div className="logo">
 <img src={Logo} alt="openexcel" className="image" />
</div>
<div>
<button type="button" className="btn loginbtn">Log In</button>
<button type="button"  className="btn registerbtn">Register</button>

</div>



</div>
    
</>



)


}
export default Navbar;