import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Navbar1 from "./Navbar1";
import {update} from "../action/index"
const Changepassord=()=>{
    const dispatch=useDispatch();
    const user=useSelector(store=>store.curruser)
    const totaluser=useSelector(store=>store.user)

    const [old,setold]=useState();
    const [npass,setnpass]=useState();
    const [cnpass,setncpass]=useState();
    const handleclick=()=>{
        console.log("user",user);
        console.log("totaluser",totaluser);
        console.log("old",old);
        console.log("userpass",user[0].password);
        
        if(old === user[0].password)
        {
            if(npass === cnpass)
            {
                const index= totaluser.findIndex(object => {
            
                    return object.email === user[0].email;
                  });
                  console.log("index",index);
                
                totaluser[index].password=npass;
                console.log("ne wtotal user",totaluser);
                dispatch(update(totaluser));
                alert("your password changed successfully");
                
                
            }
            else{
                alert("new password and confirm password not match")
            }
        }
        else{

            alert("plese enter correct current password")
        }
            

    }

    return(
         <>

         <Navbar1 />
         <div className="me">
         <div className="me1">

        <div className="me2">Change Password</div>
        <div className="me3">Please enter your new password.</div>
        <div className="me4">Old password</div> 
        <input type="password"  placeholder="Typing..." className="me5" value={old}  onChange={(e)=>{setold(e.target.value)}}/>
        <div className="me6">New password</div>
        <input type="password"  placeholder="Typing..." className="me7" value={npass} onChange={(e)=>{setnpass(e.target.value)}}/>
        <div className="me8">Confirm password</div>
        <input type="password" className="me9"  placeholder="Typing..." value={cnpass} onChange={(e)=>{setncpass(e.target.value)}}/><br></br>
        <button className="me10" onClick={handleclick}>Save</button>
        <div className="xyz">
            
        @2020 All Rights Reserved. Engage Pulse Cookie Preferences, Privacy and Tearms
        </div>
       
  
</div>
      </div>
         
      
         </>
    )
}
export default Changepassord;