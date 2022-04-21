import Logo from "../images/logo.png"
import Fill from "../images/user-icon.png"
import { useLocation, useNavigate } from "react-router-dom";
const Navbar1=()=>{
    const location = useLocation();
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
{
 location.pathname==="/createpost" ? <button onClick={()=>{
     navigate("/createpost");
 }} className="bttttn">createpost</button>:console.log("hi")  


}
{
 location.pathname==="/postlist" ? <button onClick={()=>{
    navigate("/createpost");
}} className="bttttn">createpost</button>:console.log("hi")  


}
<img src={Fill} className="us12"  />
<span className="darrell" onClick={()=>{
    navigate('/profile')
}}>Darrell Steward</span>

</div>



</div>
        </>
    )
}
export default Navbar1;