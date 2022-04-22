import P1 from "../images/p1.png"
import D1 from "../images/d1.png"
import L1 from "../images/L1.png"
import C1 from "../images/c1.png"
import Img from "../images/Rectangle 72.png"
import Modal from "react-modal";
import { useState } from "react"
import { useSelector } from "react-redux"
import  Like from './like';




const Common = () => {
   
    const data=useSelector(store=>store.postlist)

    const [modelIsOpen,setModalIsOpen] =useState(false);
 
    return (
        <>
       { data.map((currentval)=>{
           

       return (<div className="ci1">
            <div className="d-flex align-items-center" >
                <img src={P1}  className="pp9"/>
                <div>
                    <div className="pp10">Bessie Cooper</div>
                    <div className="d-flex pp44">
                        <div className="pp100">
                            <img src={D1} />
                            <span>15/12/2020</span>

                        </div>
                        <div className="pp101">
                            <img src={C1} />
                            <span>11.00Am to 10.30Am </span>

                        </div>
                        <div className="pp102">
                            <img src={L1} />
                            <span onClick={()=>{
                                setModalIsOpen(true)

                            }}>Liked by john and 50 other</span>

                        </div>
                        <Modal isOpen={modelIsOpen}
                        style={
                            {
                                overlay:{
                                
                                   
                                },
                                content:{
                                    width: "536px",
                                    height: "503px",
                                    marginLeft:"442px",
                                    marginTop:"96px",
    
                                }
                            }
                        }>
                       <div className="bbbbt d-flex justify-content-center align-items-center">
                           <h1 className="oops">Liked by</h1>
                          <span className="fiop" onClick={()=>{  setModalIsOpen(false)}}>X</span>
                       </div>
                       <div className="hjhj"> <Like /></div>
                       <div className="hjhj"> <Like /></div>
                       <div className="hjhj"> <Like /></div>
                       <div className="hjhj"> <Like /></div>
                       <div className="hjhj"> <Like /></div>
                    

                        </Modal>


                    </div>
                </div>
             </div>
            <div className="cc132">
              {currentval.arr1}
            </div>
            <div className="d-flex pp323">
                

               {currentval.arr2.map((currentval1)=>{
                   console.log("Hello ");
                   console.log('hhh',currentval1);
                  
                  return <img src={currentval1} className="imgg1" height="52px" width="52px" />
               })
             
            }

            </div>

</div>
       ) }) }

        </>


    )


}
export default Common;