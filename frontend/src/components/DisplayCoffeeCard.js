import React from "react";
import { useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import { deleteCoffeeById, getAllCoffeeRecipe } from "../reducers/coffeeReducer";
import { serverURL } from "../reducers/server";
export default function DisplayCoffeeCard(props){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const token=useSelector(state=>state.auth.token);
    const isAdminAuthorized=useSelector(state=> state.auth.isAdminAuthorized);
    const handleClickView=()=>{
        navigate(`/recipe/${props.data._id}`)
    }
    const handleClickEdit=()=>{
        navigate(`/recipe/edit/${props.data._id}`)
    }
    const handleClickDelete=()=>{
        dispatch(deleteCoffeeById({ id: props.data._id, token: token }))
            .then(() => dispatch(getAllCoffeeRecipe(token)));
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
            <td><img src={serverURL+`images/${props.data.imageName}`} style={{width: "140px"}} alt={props.data.imageName}/></td>
            <td>{props.data.itemName}</td>
            <td>{element}</td>
        </tr>
    )
}