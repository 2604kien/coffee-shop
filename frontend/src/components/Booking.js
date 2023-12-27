import React from "react";
import "../css/Booking.css";
import BookingPNG from "../images/Booking.png";
export default function Booking(){
    const [formData, setFormData]=React.useState({
        dateTime:"",
        name:"",
        numPeople:"",
        mobilePhone:""
    });
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    const handleChange=(e)=>{
        const {name, value}=e.target
        setFormData(prev=>{
            return {
                ...prev,
                [name]: value
            }
        })
    }
    return (
        <div>
        <div className="booking" style={{backgroundImage:`url(${BookingPNG})`}}></div>
         <form className="booking--form" onSubmit={handleSubmit}>
            <fieldset>
                <legend className="booking--text">Booking</legend>
                <label htmlFor="dateTime">Date and Time</label>
                <input type="datetime-local" id="dateTime" name="dateTime" value={formData.dateTime} onChange={handleChange} required/>
                <label htmlFor="name">Your Name:</label>
                <input type="text" id="name" name="name" placeholder="Please enter your name." value={formData.name} onChange={handleChange} required/>
                <label htmlFor="numPeople" >Number of People:</label>
                <input type="number" id="numPeople" name="numPeople" defaultValue={1} value={formData.numPeople} onChange={handleChange} required/>
                <label htmlFor="mobilePhone">Your Contact Number/Email Address:</label>
                <input type="text" id="mobilePhone" name="mobilePhone" value={formData.mobilePhone} onChange={handleChange} required/>
                <button>Submit</button>
            </fieldset>
         </form>
         </div>
    )
}