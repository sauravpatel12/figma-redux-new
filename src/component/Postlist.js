import Navbar1 from "./Navbar1";
import Common from "./Common";
import { useSelector } from "react-redux";
const Postlist=()=>{
   
   
    return(<>
    <div style={{background: "#E5E5E5"}}>
        <Navbar1/>
        <div className="miabaap">
        <div className="oopd">
        <div className="pp2">Post List</div>
       <Common />
       </div>
       <div className="footere">@2020 All Rights Reserved. Engage Pulse Cookie Preferences, Privacy and Tearms</div>
            </div>
            </div>   
        </>
    )
}
export default Postlist;