import React from "react";
import moment from "moment";
export default function UserTableCard(props){
    return(
        <tr>
            <th>{props.data.fullName}</th>
            <th>{props.data.username}</th>
            <th>{props.data.roles.join(', ')}</th>
            <th>{moment(Number(props.data.createdDate)).format('h:mm A | DD/MM/YYYY')}</th>
            <th>
                <button className="small-button">View</button>
                <button className="small-button">Edit</button>
                <button className="small-button">Delete</button>
            </th>
        </tr>
    )
}