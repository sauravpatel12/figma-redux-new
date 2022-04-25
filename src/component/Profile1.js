import Navbar1 from "./Navbar1";
import User1 from '../images/profile.jpg';
import Lee from '../images/Ellipse.jpg';
import Birthday from  '../images/birthday.jpg';
import Call from "../images/call.jpg";
import Female from "../images/female.jpg";
import  Mail from "../images/mail.jpg";
import Con1 from "../images/Construction.png"
import Con2 from "../images/Construction (1).png"
import Con3 from "../images/Construction (2).png"
import Con4 from "../images/Construction (3).png"
import { useNavigate } from "react-router-dom";
import { Store } from "@mui/icons-material";
import { useSelector } from "react-redux";

const Profile1=()=>{
  const user=useSelector(store=>store.user);
  console.log(user[1].email);
 
  const navigate=useNavigate();
    return(
  <>
    <Navbar1/>
    <div className="ren">


       <div className="ren1">

         {/* cmp1  */}
        <div  className="uiii">
        <img src={User1} className="img99" />

        </div>

          <div className="ct d-flex ">
        {/* cmp2 */}
        <div className="ct1">
             
            <div >
               <img src={user[1].url} className="lolo"   />
               <div className="texi">{user[1].firstname}</div>
             </div>
          
          <div className="bb">   
        <div className="d-flex xx  align-items-center">
               <div><img src={Mail}/></div>
               <div className="vpv">{user[1].email}</div>
        </div>
        <div className="d-flex xx  align-items-center">
               <div><img src={Call} /></div>
               <div className="vpv">{user[1].phone}</div>
        </div>
        <div className="d-flex xx  align-items-center">
               <div><img src={Female} /></div>
               <div className="vpv">male</div>
        </div>
        <div className="d-flex xx  align-items-center">
               <div><img src={Birthday} /></div>
               <div className="vpv">12/12/1994</div>
        </div>


        <div>
          <button className="kk1 bbnm" onClick={()=>{
            navigate("/changepassword")

          }}>Change Password</button> <br></br>
          <button className="kk2 bbnm">Logout</button>
        </div>
        </div>

        </div>
        
        {/* cmp3 */}
        <div className="ct2">
              <div className="fff">
              <img src={user[1].url} />
              <input type="file" className="dsdsf" placeholder="Change image" ></input>
              </div>
              <div className="d-flex">
              <div className="hee">
              <div className="comm1">First name*</div>
              <input type="text" placeholder="Darrell" className="ji1" value={user[1].firstname}/>
              <div className="comm">Email*</div>
              <input type="email" placeholder="jane.cooper@gmail.com" className="ji1" value={user[1].email}/>
              <div className="comm">Date of Birth*</div>
              <input type="date"  className="ji1" /> <br></br>
              <button className="savee">Save</button>
              </div>
              <div className="hee">
              <div className="comm1">Last Name*</div>
              <input type="text" placeholder="Steward" className="ji1" value={user[1].lastname}/>
              <div className="comm">Phone*</div>
              <input type="number" placeholder="987 654 3210" className="ji1" value={user[1].phone}/>
              <div className="comm">Gender</div>
              <div className="priyank">
              <input type="radio" name="gender" value="male"/> <span className="comm">Male</span> <input type="radio" name="gender" value="female" className="rtrr"/> <span className="comm">Female</span>
              </div>

                 


              </div>
              </div>
        </div>
        </div>
      
       </div>



      

    </div>
  </>
    )
}
export default Profile1;