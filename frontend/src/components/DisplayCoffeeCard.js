import React from "react";
import { useSelector } from "react-redux";
export default function DisplayCoffeeCard(props){
    const isAuthorized=useSelector(state=> state.auth.isAuthorized);
    const element= isAuthorized?(<div style={{
        display: "flex",
        flexDirection: "row"
    }}>
        <button className="small-button">View</button>
        <button className="small-button">Edit</button>
        <button className="small-button">Delete</button>
    </div>):(<button className="small-button">View</button>)
    return(
        <tr>
            <td><img src={`http://localhost:3500/images/${props.data.imageName}`} style={{width: "140px"}}/></td>
            <td>{props.data.itemName}</td>
            <td>{element}</td>
        </tr>
    )
}