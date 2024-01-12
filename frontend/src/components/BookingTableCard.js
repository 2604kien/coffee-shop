import React from "react";
import moment from "moment"
import {useDispatch, useSelector} from "react-redux";
import { deleteABooking, getAllBooking } from "../reducers/bookingReducer";
export default function BookingTableCard(props){
    const dispatch=useDispatch();
    const token=useSelector(state=> state.auth.token);
    const handleDelete=async (e)=>{
        e.preventDefault();
        const data={
            id: props.data._id,
            token: token
        }
        await dispatch(deleteABooking(data))
        await dispatch(getAllBooking(token));

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