import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function UserTableCard(props){
    const navigate=useNavigate();
    return(
        <tr>
            <th>{props.data.fullName}</th>
            <th>{props.data.username}</th>
            <th>{props.data.roles.join(', ')}</th>
            <th>{moment(Number(props.data.createdDate)).format('h:mm A | DD/MM/YYYY')}</th>
            <th>
                <button className="small-button">View</button>
                <button onClick={()=>navigate(`/all-users/edit/${props.data._id}`)} className="small-button">Edit</button>
                <button className="small-button">Delete</button>
            </th>
        </tr>
    )
}