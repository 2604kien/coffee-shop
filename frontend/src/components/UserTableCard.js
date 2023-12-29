import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../reducers/userReducer";
export default function UserTableCard(props){
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleDelete=()=>{
        console.log(props.data._id);
        dispatch(deleteUser(props.data._id)).then(()=>{
            window.location.reload();
        })
    }
    return(
        <tr>
            <th>{props.data.fullName}</th>
            <th>{props.data.username}</th>
            <th>{props.data.roles.join(', ')}</th>
            <th>{moment(Number(props.data.createdDate)).format('h:mm A | DD/MM/YYYY')}</th>
            <th>
                <button onClick={()=>navigate(`/all-users/edit/${props.data._id}`)} className="small-button">Edit</button>
                <button onClick={handleDelete} className="small-button">Delete</button>
            </th>
        </tr>
    )
}