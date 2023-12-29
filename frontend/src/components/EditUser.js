import React from "react";
import BookingPNG from "../images/Booking.png";
import { useSelector, useDispatch } from "react-redux";
import { getUserById,editUser } from "../reducers/userReducer";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";
import "../css/EditUser.css"
export default function EditUser(){
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const token=useSelector(state=>state.auth.token);
    const {id}=useParams();
    const userData=useSelector(state=> state.users.editUserData);
    const [formData, setFormData]=React.useState(userData);
    const handleChange=(e)=>{
        const {name, value}=e.target;
        if (name === "roles") {
            const rolesArray = value.split(",").map((role) => role.trim());
            setFormData((prev) => ({
              ...prev,
              [name]: rolesArray,
            }));
          } else {
            setFormData((prev) => ({
              ...prev,
              [name]: value,
            }));
          }
    }

    const submitRegister=(e)=>{
        e.preventDefault();
        dispatch(editUser({data:formData, token: token})).then(()=>navigate('/all-users'))
    }
    React.useEffect(()=>{
        dispatch(getUserById({id, token})).then(()=>{
            setFormData(userData);
        })
    },[dispatch, JSON.stringify(userData), JSON.stringify(token)])
    return(
        <div>
            <div className="coffee-recipe" style={{backgroundImage:`url(${BookingPNG})`}}></div>
            <form onSubmit={submitRegister} className="coffee--form">
                <fieldset style={{border: "3px solid rgb(212, 193, 16)", backgroundColor:"rgba(0,0,0,0.8", maxWidth:"300px"}}>
                    <legend style={{backgroundColor:"rgba(0,0,0,0.5", fontSize:"3rem"}}>Edit User</legend>
                  
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" onChange={handleChange}  value={formData.fullName} required/>
                    
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" onChange={handleChange} value={formData.username} required/>

                    <label htmlFor="roles">Roles: (use "," to separate the role)</label>
                    <input type="text" id="roles" name="roles" onChange={handleChange} value={formData.roles}required/>

                    <label htmlFor="refreshToken">Refresh Token:</label>
                    <input type="text" id="refreshToken" name="refreshToken" value={formData.refreshToken} readOnly required/>

                    <label htmlFor="createdDate">Created Date:</label>
                    <input type="text" id="createdDate" name="createdDate" value={moment(Number(formData.createdDate)).format('h:mm A | DD/MM/YYYY')} readOnly required/>

                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}