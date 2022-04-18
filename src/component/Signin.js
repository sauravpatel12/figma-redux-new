import React from "react";
import Navbar from "./Navbar";
// import img1 from "../images/Rectangle1.png";
// import img2 from "../images/Rectangle2.png";
// import img3 from "../images/Rectangle2.png";
import Group from "../images/Group 415.png";



const Signin=()=>{
return(
<>
   <Navbar />
   <div className=" row ">
    <div className="col-7 bg-primary con1">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
  <ol class="carousel-indicators" >
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active" ></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1" ></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2" ></li>
  </ol>
  <div class="carousel-inner" >
    <div class="carousel-item active "  >
      <img class="d-block w-100 img111" src={Group} alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 img111" src={Group} alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 img111" src={Group} alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>    



    </div>
    <div  className="col-5  ">
    <div className="col2">
    <div className="cls1">Welcome Back!</div>
    <div className="cls2">Login to Your account</div>
    <div className="cls3">Email</div>
    <input  className="cls4"  type="text" placeholder="Typing..." />
    <div  className="cls5">Password</div>
    <input type="password" className="cls55" placeholder="Enter your password" />
    <div className="flex1">
    <input type="checkbox" className="cls6" name="" id="" />
    <div className="cls7" >Remember Me</div>
    <div className="cls8">Forgot password?</div>
    </div>
    <button className="btn-lg cls9">Sign in</button>
    <div className="cls10">@2020 All Rights Reserved. Engage Pulse Cookie Preferences, Privacy and Tearms</div>
   </div>
  </div>


    </div>



</>

)

}
export default Signin;