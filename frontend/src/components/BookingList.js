import React from "react";
import "../css/BookingList.css";
import BookingPNG from "../images/Booking.png";
import {useSelector, useDispatch} from "react-redux";
import BookingTableCard from "./BookingTableCard";
import Error404 from "./Error404";
import { getAllBooking } from "../reducers/bookingReducer";
import Loading from "./Loading";
export default function BookingList(){
    const dispatch=useDispatch();
    const allBooking=useSelector(state=>state.booking.entities);
    const token=useSelector(state=> state.auth.token);
    const status=useSelector(state=>state.booking.status);
    const [loading, setLoading]=React.useState(false);
    const isAuthenticated=useSelector(state=>state.auth.isAuthenticated);
    const isAdminAuthorized=useSelector(state=>state.auth.isAdminAuthorized);
    const element=Array.isArray(allBooking)?allBooking.map(el=><BookingTableCard key={el._id} data={el}/>):(<></>)
    React.useEffect(()=>{
        if(status==="loading") setLoading(true);
        else setLoading(false);
    },[status])
    React.useEffect(()=>{        
        if(isAuthenticated && isAdminAuthorized) dispatch(getAllBooking(token));
    },[dispatch, token, isAuthenticated]);

    if(!isAdminAuthorized) return <Error404/>
    return(
        <div>
            {loading && <Loading/>}
            <div className="booking--list" style={{backgroundImage:`url(${BookingPNG})`}} ></div>
            <div className="booking--container">
            <fieldset className="booking--table--container">
                <legend style={{backgroundColor:"rgba(0,0,0,0.5", fontSize:"3rem"}}>All Booking</legend>
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
        </div>
    )
}