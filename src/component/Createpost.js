import { useNavigate } from "react-router-dom";
import Navbar1 from "./Navbar1";
import Img from "../images/Rectangle 72.png"
const Createpost=()=>{
    const navigate=useNavigate();

    return(<>
     <Navbar1 />
     
     <div className="cp">
     
     <div className="cp1">Create Post</div>
     <div className="cp2">Add a Description</div>
     <textarea className="cp3" rows="12" cols="80">
At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
</textarea><br></br>
<button className="cp4">Add media</button>
<div className="cp5">
<div className="d-flex pp323">
             <img src={Img} className="imgg1 cpcp" />
             <img src={Img} className="imgg1 cpcp" />
             <img src={Img}  className="imgg1 cpcp" />
             <img src={Img} className="imgg1 cpcp" />

            </div>

</div>
<div className="d-flex cp6 justify-content-center align-items-center">
    <div className="cp7">Cancel</div>
    <button className="cp8" onClick={()=>{
        navigate('/postlist')
        
    }}>Create Post</button>
</div>

</div>

         
     
     </>
    )
}
export default Createpost;