import React from "react";
import Error404 from "./Error404";

import {useSelector, useDispatch} from "react-redux";
import BookingPNG from "../images/Booking.png";
export default function AllUser(){
    
    const isAuthorized=useSelector(state=>state.auth.isAuthorized);
    if(!isAuthorized) return <Error404/>
    return(
        <div>
            <div className="booking--list" style={{backgroundImage:`url(${BookingPNG})`}} ></div>
            <fieldset className="booking--table--container">
                <legend>All Users</legend>
                <table className="booking--table">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>User Roles</th>
                            <th>Created Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </fieldset>
        </div>
    
    )
}