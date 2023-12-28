import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BookingPNG from "../images/Booking.png";
import DisplayCoffeeCard from "./DisplayCoffeeCard";
import { getAllCoffeeRecipe } from "../reducers/coffeeReducer";
import { useNavigate } from "react-router-dom";
export default function DisplayCoffeeReceip(){
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const arrayRecipe=useSelector(state=>state.coffee.entities);
    const isAuthorized=useSelector(state=>state.auth.isAuthorized);
    const element=Array.isArray(arrayRecipe)? arrayRecipe.map(el=><DisplayCoffeeCard key={el._id} data={el}/>):(<></>)
    React.useEffect(()=>{
        dispatch(getAllCoffeeRecipe())
    },[dispatch])
    return(
        <div>
       
        <div className="coffee-recipe" style={{backgroundImage:`url(${BookingPNG})`}}></div>
        <div className="coffee--form">  
        {isAuthorized &&<button className="small-button" style={{
            position:"absolute",
            right: -578,
            zIndex:"1000",
            fontSize: "1.2rem"
        }}
        onClick={()=>navigate("/add-recipe")}>ADD</button>}
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