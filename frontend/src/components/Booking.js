import React from "react";
import "../css/Booking.css";
import BookingPNG from "../images/Booking.png";
import {useDispatch} from "react-redux";
import { addNewBooking } from "../reducers/bookingReducer";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
export default function Booking(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [loading, setLoading]=React.useState(false);
    const [message, setMessage]=React.useState(false);
    const [formData, setFormData]=React.useState({
        dateTime:"",
        name:"",
        numPeople:"",
        mobilePhone:""
    });
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            setLoading(true);
            await dispatch(addNewBooking(formData))
            setMessage(true);
            navigate('/');
        }
        finally{
            setLoading(false);
        }
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
            {loading && <Loading/>}
        <div className="booking" style={{backgroundImage:`url(${BookingPNG})`}}></div>
        <div className="booking--container">
         <form className="booking--form" onSubmit={handleSubmit}>
            <fieldset>
                <legend className="booking--text">Booking</legend>
                {message && <p>We recieved your booking request and will contact with you shortly</p>}
                <label htmlFor="dateTime">Date and Time</label>
                <input type="datetime-local" id="dateTime" name="dateTime" value={formData.dateTime} onChange={handleChange} required/>
                <label htmlFor="name">Your Name:</label>
                <input type="text" id="name" name="name" placeholder="Please enter your name." value={formData.name} onChange={handleChange} required/>
                <label htmlFor="numPeople" >Number of People:</label>
                <input type="number" id="numPeople" name="numPeople" placeholder="Please enter number of people for reservation." value={formData.numPeople} onChange={handleChange} required/>
                <label htmlFor="mobilePhone">Your Contact Number/Email Address:</label>
                <input type="text" id="mobilePhone" name="mobilePhone" value={formData.mobilePhone} onChange={handleChange} required/>
                <button>Submit</button>
            </fieldset>
         </form>
         </div>
         </div>
    )
}