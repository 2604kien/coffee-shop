import React from "react";
import moment from "moment"
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import { deleteABooking } from "../reducers/bookingReducer";
export default function BookingTableCard(props){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleDelete=()=>{
        dispatch(deleteABooking(props.data._id)).then(()=>{
            alert('A booking is deleted');
            window.location.reload();
        });
    }
    return(
        <tr>
            <td>{moment(props.data.dateTime).format('h:mm A | DD/MM/YYYY')}</td>
            <td>{props.data.name}</td>
            <td>{props.data.numPeople}</td>
            <td>{props.data.mobilePhone}</td>
            <td><button onClick={handleDelete} className="action--button">Delete</button></td>
        </tr>
    )
}