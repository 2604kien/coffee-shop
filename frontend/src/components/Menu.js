import React from "react";
import MenuIMG from "../images/Menu.png"
import BookingPNG from "../images/Booking.png";
import "../css/Menu.css";
export default function Menu(){
    return(
        <div>
            <div className="booking--list" style={{backgroundImage:`url(${BookingPNG})`}} ></div>
            <div className="booking--container">
            <div style={{
                width:"80vw",
                padding: "20px",
                backgroundColor:"rgba(0,0,0,0.5",
                border: "3px solid rgb(212, 193, 16)"
            }}>
                <img style={{
                    width:"100%"
                }} src={MenuIMG} alt="Coffe shop menu"/>
            </div>
            </div>
        </div>
    )
}