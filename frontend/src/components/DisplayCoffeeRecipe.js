import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BookingPNG from "../images/Booking.png";
import DisplayCoffeeCard from "./DisplayCoffeeCard";
import { getAllCoffeeRecipe } from "../reducers/coffeeReducer";
import { useNavigate } from "react-router-dom";
import Error404 from "./Error404";
import Loading from "./Loading";
export default function DisplayCoffeeReceip(){
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const token=useSelector(state=>state.auth.token);
    const status=useSelector(state=>state.coffee.status);
    const [loading, setLoading]=React.useState(false);
    const arrayRecipe=useSelector(state=>state.coffee.entities);
    const isAuthenticated=useSelector(state=>state.auth.isAuthenticated);
    const isAdminAuthorized=useSelector(state=>state.auth.isAdminAuthorized);
    const element=Array.isArray(arrayRecipe)? arrayRecipe.map(el=><DisplayCoffeeCard key={el._id} data={el}/>):(<></>)
    React.useEffect(()=>{
        dispatch(getAllCoffeeRecipe(token))
    },[dispatch, token]);
    React.useEffect(()=>{
        if(status==="loading") setLoading(true);
        else setLoading(false);
    },[status])
    if(!isAuthenticated) return <Error404/>
    return(
        <div>
        {loading && <Loading/>}
        <div className="coffee-recipe" style={{backgroundImage:`url(${BookingPNG})`}}></div>
        
        <div className="booking--container">
        <div className="coffee--form">  
        {isAdminAuthorized &&<button className="small-button"onClick={()=>navigate("/add-recipe")}>ADD</button>}
        
            <fieldset className="booking--table--container">
                    <legend style={{backgroundColor:"rgba(0,0,0,0.5", fontSize:"3rem"}}>Coffee Recipe</legend>
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
        </div>
    )
}