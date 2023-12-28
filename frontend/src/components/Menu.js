import React from "react";
import MenuIMG from "../images/Menu.png"
import BookingPNG from "../images/Booking.png";
import "../css/Menu.css";
export default function Menu(){
    return(
        <div>
            <div className="booking--list" style={{backgroundImage:`url(${BookingPNG})`}} ></div>
            <div style={{
                position:"fixed",
                top: "6%",
                left: "10%",
                padding: "20px",
                backgroundColor:"rgba(0,0,0,0.5",
                border: "3px solid rgb(212, 193, 16)"
            }}>
                <img src={MenuIMG} />
            </div>
        </div>
    )
}