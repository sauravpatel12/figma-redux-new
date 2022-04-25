import Logo from "../images/logo.png"
import Fill from "../images/user-icon.png"
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { curruser } from "../reducer/curruser";

const Navbar1=()=>{
    
    const location = useLocation();
    const navigate=useNavigate();
    const curruser =useSelector(store=>store.curruser);
    console.log(curruser);      
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
}}>{curruser[0].firstname}</span>

</div>



</div>
        </>
    )
}
export default Navbar1;