import React from "react";
import Error404 from "./Error404";
import UserTableCard from "./UserTableCard";
import {useSelector, useDispatch} from "react-redux";
import { getAllUser } from "../reducers/userReducer";
import BookingPNG from "../images/Booking.png";
import Loading from "./Loading";
export default function AllUser(){
    const dispatch=useDispatch();
    const usersData=useSelector(state=>state.users.entities);
    const token=useSelector(state=>state.auth.token);
    const status=useSelector(state=>state.users.status);
    const [loading, setLoading]=React.useState(false);
    const isAdminAuthorized=useSelector(state=>state.auth.isAdminAuthorized);
    const element=Array.isArray(usersData)?usersData.map(el=><UserTableCard key={el._id} data={el}/>):(<></>);
    React.useEffect(()=>{
        dispatch(getAllUser(token))
    },[dispatch, token])
    React.useEffect(()=>{
        if(status==="loading") setLoading(true);
        else setLoading(false);
    },[status])
    if(!isAdminAuthorized) return <Error404/>
    return(
        <div>
            {loading && <Loading/>}
            <div className="booking--list" style={{backgroundImage:`url(${BookingPNG})`}} ></div>
            <div className="booking--container">
            <fieldset className="booking--table--container">
                <legend style={{backgroundColor:"rgba(0,0,0,0.5", fontSize:"3rem"}}>All Users</legend>
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
        </div>
    
    )
}