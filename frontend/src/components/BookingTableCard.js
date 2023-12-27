import React from "react";
import moment from "moment"
export default function BookingTableCard(props){
    return(
        <tr>
            <td>{moment(props.data.dateTime).format('h:mm A | DD/MM/YYYY')}</td>
            <td>{props.data.name}</td>
            <td>{props.data.numPeople}</td>
            <td>{props.data.mobilePhone}</td>
            <td><button className="action--button">Delete</button></td>
        </tr>
    )
}