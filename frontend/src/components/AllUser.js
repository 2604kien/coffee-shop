import React from "react";
import Error404 from "./Error404";
import UserTableCard from "./UserTableCard";
import {useSelector, useDispatch} from "react-redux";
import { getAllUser } from "../reducers/userReducer";
import BookingPNG from "../images/Booking.png";
export default function AllUser(){
    const dispatch=useDispatch();
    const usersData=useSelector(state=>state.users.entities);
    const isAdminAuthorized=useSelector(state=>state.auth.isAdminAuthorized);
    const element=Array.isArray(usersData)?usersData.map(el=><UserTableCard key={el._id} data={el}/>):(<></>);
    React.useEffect(()=>{
        dispatch(getAllUser())
    },[dispatch])
    if(!isAdminAuthorized) return <Error404/>
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
                            <th>User Roles</th>
                            <th>Created Date</th>
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