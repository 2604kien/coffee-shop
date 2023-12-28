import React from "react";
import BookingPNG from "../images/Booking.png";
import { useSelector, useDispatch } from "react-redux";
import { getUserById } from "../reducers/userReducer";
import { useParams } from "react-router-dom";
import "../css/EditUser.css"
export default function EditUser(){
    const dispatch=useDispatch();
    const {id}=useParams();
    const userData=useSelector(state=> state.users.editUserData);
    const [formData, setFormData]=React.useState(userData);
    const handleChange=()=>{

    }
    React.useEffect(()=>{
        dispatch(getUserById(id))
    },[])
    return(
        <div>
            <div className="coffee-recipe" style={{backgroundImage:`url(${BookingPNG})`}}></div>
            <h1>This is Edit UserPage</h1>
        </div>
    )
}