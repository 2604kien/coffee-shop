import React from "react";
import "../css/DisplayRecipe.css"
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrCoffeeData } from "../reducers/coffeeReducer";
import BookingPNG from "../images/Booking.png";
import { useParams } from "react-router-dom";
export default function DisplayRecipe(){
    const recipeData=useSelector(state=>state.coffee.currCoffeeData)
    const dispatch=useDispatch();
    const {id}=useParams();
    React.useEffect(()=>{
        console.log(recipeData.recipe)
        dispatch(fetchCurrCoffeeData(id));
    },[])
    return (
        <div >
            <div className="coffee-recipe" style={{backgroundImage:`url(${BookingPNG})`}}></div>
            <fieldset className="recipe--individual">
                    <legend>{recipeData.itemName}</legend>
                    <img src={`http://localhost:3500/images/${recipeData.imageName}`} style={{width: "50%"}}/>
                    <div>
                        <p>{recipeData.recipe}</p>
                    </div>
            </fieldset>
        </div>
    )
}