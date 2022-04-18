import Logo from "../images/logo.png"
import Fill from "../images/user-icon.png"
import { useLocation } from "react-router-dom";
const Navbar1=()=>{
    const location = useLocation();
      
    return(
        <>
            <div className="nav">
<div className="logo">
 <img src={Logo} alt="openexcel" className="image" />
</div>
<div>
{
 location.pathname=="/createpost"? <button>createpost</button>:""    


}
<img src={Fill} className="us12"  />
<span className="darrell">Darrell Steward</span>

</div>



</div>
        </>
    )
}
export default Navbar1;