import Navbar1 from "./Navbar1";
const Createpost=()=>{

    return(<>
     <Navbar1 />
     
     <div className="cp">
     
     <div className="cp1">Create Post</div>
     <div className="cp2">Add a Description</div>
     <textarea className="cp3" rows="12" cols="100">
At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
</textarea><br></br>
<button className="cp4">Add media</button>
<div className="cp5">
<img src="" alt="" />
<img src="" alt="" />
<img src="" alt="" />
<img src="" alt="" />

</div>
<div className="d-flex cp6 justify-content-center align-items-center">
    <div className="cp7">Cancel</div>
    <button className="cp8">Create Post</button>
</div>

</div>

         
     
     </>
    )
}
export default Createpost;