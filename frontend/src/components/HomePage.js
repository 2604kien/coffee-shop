import "../css/HomePage.css"
import banner from "../images/homepage_banner.png"
import About from "./About"
import {useNavigate} from "react-router-dom"
import Staff from "./Staff"
export default function HomePage(){
    const navigate=useNavigate();
    return(
        <div className="homepage">
            <h2 
            onClick={()=>navigate('/booking')}
            className="book" style={{
                color: "rgb(212, 193, 16)",
                border: "1px solid rgb(212, 193, 16)",
                borderRadius: "20px",
                position:"absolute",
                width: "200px",
                height:"80px",
                display: "flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                top: "50%",
                left: "20%",
                backgroundColor:"rgba(0,0,0,0.6)",
                boxShadow: "0px 0px 50px 5px rgba(0,0,0,0.5)",
                cursor:"pointer",
                transition: "all 0.2s ease"
            }}>Book Now</h2>
            <div style={{
                backgroundImage:`url(${banner})`,
                backgroundSize: "cover",
                backgroundPosition:"30%",
                width: "100%",
                height: "680px"
            }}></div>
            <About/>
            <Staff/>
        </div>
    )
}