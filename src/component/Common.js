import P1 from "../images/p1.png"
import D1 from "../images/d1.png"
import L1 from "../images/L1.png"
import C1 from "../images/c1.png"
import Img from "../images/Rectangle 72.png"
const Common = () => {

    return (
        <>
        <div className="ci1">
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
                            <span>Liked by john and 50 other</span>

                        </div>


                    </div>
                </div>
             </div>
            <div className="cc132">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever <br></br> since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
            <div className="d-flex pp323">
             <img src={Img} className="imgg1" />
             <img src={Img} className="imgg1" />
             <img src={Img}  className="imgg1" />
             <img src={Img} className="imgg1" />

            </div>

</div>

        </>


    )


}
export default Common;