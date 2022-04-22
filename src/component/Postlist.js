import Navbar1 from "./Navbar1";
import Common from "./Common";
import { useSelector } from "react-redux";
const Postlist=()=>{
   
   
    return(<>
    <div style={{background: "#E5E5E5"}}>
        <Navbar1/>
        <div className="pp2">Post List</div>
       <Common />
            </div>   
        </>
    )
}
export default Postlist;