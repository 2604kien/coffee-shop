import "../css/HomePage.css"
import banner from "../images/homepage_banner.png"
import About from "./About"
export default function HomePage(){
    return(
        <div className="homepage">
            <h2 className="book" style={{
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
            <img src={banner} style={{width:"100%"}}/>
            <About/>
        </div>
    )
}