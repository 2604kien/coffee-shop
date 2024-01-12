import React from "react";
import "../css/DisplayRecipe.css"
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrCoffeeData } from "../reducers/coffeeReducer";
import BookingPNG from "../images/Booking.png";
import { useParams } from "react-router-dom";
export default function DisplayRecipe(){
    const recipeData=useSelector(state=>state.coffee.currCoffeeData)
    const dispatch=useDispatch();
    const token=useSelector(state=>state.auth.token)
    const {id}=useParams();
    React.useEffect(()=>{
        dispatch(fetchCurrCoffeeData({id, token}))
    },[dispatch, id, token]);
    return (
        <div >
            <div className="coffee-recipe" style={{backgroundImage:`url(${BookingPNG})`}}></div>
            <div className="booking--container">
            <fieldset  className="recipe--individual">
                    <legend style={{backgroundColor:"rgba(0,0,0,0.5", fontSize:"3rem"}}>{recipeData.itemName}</legend>
                    <img src={`https://hiase-api.onrender.com/images/${recipeData.imageName}`} style={{width: "50%"}} alt={recipeData.itemName}/>
                    <div>
                        <p>{recipeData.recipe}</p>
                    </div>
            </fieldset>
            </div>
        </div>
    )
}