import React from "react";
import { useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import { deleteCoffeeById } from "../reducers/coffeeReducer";
export default function DisplayCoffeeCard(props){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const isAdminAuthorized=useSelector(state=> state.auth.isAdminAuthorized);
    const handleClickView=()=>{
        navigate(`/recipe/${props.data._id}`)
    }
    const handleClickEdit=()=>{
        navigate(`/recipe/edit/${props.data._id}`)
    }
    const handleClickDelete=()=>{
        dispatch(deleteCoffeeById(props.data._id))
    }
    const element= isAdminAuthorized?(<div style={{
        display: "flex",
        flexDirection: "row"
    }}>
        <button onClick={handleClickView} className="small-button">View</button>
        <button onClick={handleClickEdit} className="small-button">Edit</button>
        <button onClick={handleClickDelete} className="small-button">Delete</button>
    </div>):(<button onClick={handleClickView} className="small-button">View</button>)
    return(
        <tr>
            <td><img src={`http://localhost:3500/images/${props.data.imageName}`} style={{width: "140px"}}/></td>
            <td>{props.data.itemName}</td>
            <td>{element}</td>
        </tr>
    )
}