import React from "react";
import { useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import { fetchCurrCoffeeData } from "../reducers/coffeeReducer";
export default function DisplayCoffeeCard(props){
    const navigate=useNavigate();
    const isAuthorized=useSelector(state=> state.auth.isAuthorized);
    const handleClick=()=>{
        navigate(`/recipe/${props.data._id}`)
    }
    const element= isAuthorized?(<div style={{
        display: "flex",
        flexDirection: "row"
    }}>
        <button onClick={handleClick} className="small-button">View</button>
        <button className="small-button">Edit</button>
        <button className="small-button">Delete</button>
    </div>):(<button onClick={handleClick} className="small-button">View</button>)
    return(
        <tr>
            <td><img src={`http://localhost:3500/images/${props.data.imageName}`} style={{width: "140px"}}/></td>
            <td>{props.data.itemName}</td>
            <td>{element}</td>
        </tr>
    )
}