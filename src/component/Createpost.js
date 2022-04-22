import { useNavigate } from "react-router-dom";
import Navbar1 from "./Navbar1";
import Img from "../images/Rectangle 72.png"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { useState } from "react";
import { createpost } from "../action/index";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "react";


const Createpost=()=>{
    const dispatch =useDispatch();
    const [url,setUrl]=useState([]);
    const [text1,settext1]=useState("");

    const navigate=useNavigate();
    const Input = styled('input')({
        display: 'none',
      });
      
      
      
  const handleChange1 = (e) => {
     console.log("Checked");
    console.log(e);
    console.log('temp files',e.target.files)
    const img=URL.createObjectURL(e.target.files[0]);
    setUrl([...url,img]);

  }
    return(<>
     <Navbar1 />
     
     <div className="cp">
     
     <div className="cp1">Create Post</div>
     <div className="cp2">Add a Description</div>
     <textarea className="cp3" rows="12" cols="80" onChange={(e)=>{settext1(e.target.value)}}>
At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
</textarea><br></br>
{/* <button className="cp4">Add media</button> */}
<div className="fdfdg">
<Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file"  onChange={handleChange1} />
        <Button variant="contained" component="span" >
          Upload Image
        </Button>
      </label>
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" onChange={handleChange1} />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </Stack>
    </div>
<div className="cp5">
<div className="d-flex pp323">
             
             {
             url.map((currentval)=>{
                 return    <img src={currentval} className="imgg1 cpcp" />
             })
             }
            </div>

</div>
<div className="d-flex cp6 justify-content-center align-items-center">
    <div className="cp7">Cancel</div>
    <button className="cp8" onClick={()=>{
         dispatch(createpost({
             arr1:text1,
             arr2:url
         }));
        navigate('/postlist')

        
    }}>Create Post</button>
</div>

</div>

         
     
     </>
    )
}
export default Createpost;