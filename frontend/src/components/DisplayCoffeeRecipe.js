import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BookingPNG from "../images/Booking.png";
import DisplayCoffeeCard from "./DisplayCoffeeCard";
import { getAllCoffeeRecipe } from "../reducers/coffeeReducer";
export default function DisplayCoffeeReceip(){
    const dispatch=useDispatch();
    const arrayRecipe=useSelector(state=>state.coffee.entities);
    const element=Array.isArray(arrayRecipe)? arrayRecipe.map(el=><DisplayCoffeeCard key={el._id} data={el}/>):(<></>)
    React.useEffect(()=>{
        dispatch(getAllCoffeeRecipe())
    },[dispatch])
    return(
        <div>
        <div className="coffee-recipe" style={{backgroundImage:`url(${BookingPNG})`}}></div>
        <div className="coffee--form">  
            <fieldset className="booking--table--container">
                    <legend>Coffee Recipe</legend>
                    <table className="booking--table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {element}
                        </tbody>
                    </table>
            </fieldset>
        </div>
        </div>
    )
}