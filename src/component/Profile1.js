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
const Profile1=()=>{
    return(
  <>
    <Navbar1/>
    <div className="ren">


       <div className="ren1">

         {/* cmp1  */}
        <div>
        <img src={User1} className="img99" />

        </div>

          <div className="ct d-flex ">
        {/* cmp2 */}
        <div className="ct1">
             
            <div >
               <img src={Lee} className="lolo"   />
               <div className="texi">Darrell Steward</div>
             </div>
          
          <div className="bb">   
        <div className="d-flex xx">
               <div><img src={Mail}/></div>
               <div><div><img className="pp" src={Con1}/></div></div>
        </div>
        <div className="d-flex xx">
               <div><img src={Call} /></div>
               <div><div><img className="pp" src={Con2}/></div></div>
        </div>
        <div className="d-flex xx">
               <div><img src={Female} /></div>
               <div><div><img  className="pp" src={Con3}/></div></div>
        </div>
        <div className="d-flex xx">
               <div><img src={Birthday} /></div>
               <div><div><img  className="pp" src={Con4}/></div></div>
        </div>


        <div>
          <button className="kk1">Change Password</button> <br></br>
          <button className="kk2">Logout</button>
        </div>
        </div>

        </div>
        
        {/* cmp3 */}
        <div className="ct2">
              <div className="fff">
              <img src={Lee} />
              <button className="hh1">Change image</button>
              </div>
              <div className="d-flex">
              <div className="hee">
              <div className="comm1">First name*</div>
              <input type="text" placeholder="Darrell" className="ji1" />
              <div className="comm">Email*</div>
              <input type="email" placeholder="jane.cooper@gmail.com" className="ji1" />
              <div className="comm">Date of Birth*</div>
              <input type="date"  className="ji1" /> <br></br>
              <button className="savee">Save</button>
              </div>
              <div className="hee">
              <div className="comm1">Last Name*</div>
              <input type="text" placeholder="Steward" className="ji1"/>
              <div className="comm">Phone*</div>
              <input type="number" placeholder="987 654 3210" className="ji1"/>
              <div className="comm">Gender</div>
              <div>
              <input type="radio" name="gender" value="male"/> <span className="comm">Male</span> <input type="radio" name="gender" value="female"/> <span className="comm">Female</span>
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