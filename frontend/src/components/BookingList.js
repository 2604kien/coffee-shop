import React from "react";
import "../css/BookingList.css";
import BookingPNG from "../images/Booking.png";
import {useSelector, useDispatch} from "react-redux";
import BookingTableCard from "./BookingTableCard";
import { refresh } from "../reducers/authReducer";
import { getAllBooking } from "../reducers/bookingReducer";
export default function BookingList(){
    const dispatch=useDispatch();
    const allBooking=useSelector(state=>state.booking.entities);
    const token=useSelector(state=> state.auth.token);
    const isAuthenticated=useSelector(state=>state.auth.isAuthenticated);
    const element=Array.isArray(allBooking)?allBooking.map(el=><BookingTableCard key={el._id} data={el}/>):(<></>)
    React.useEffect(()=>{        
        if(isAuthenticated) dispatch(getAllBooking(token));
    },[dispatch, token]);
    return(
        <div>
            <div className="booking--list" style={{backgroundImage:`url(${BookingPNG})`}} ></div>
            <fieldset className="booking--table--container">
                <legend>All Booking</legend>
                <table className="booking--table">
                    <thead>
                        <tr>
                            <th>Date & Time</th>
                            <th>Customer Name</th>
                            <th>Number of People</th>
                            <th>Contact Info</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {element}
                    </tbody>
                </table>
            </fieldset>
        </div>
    )
}