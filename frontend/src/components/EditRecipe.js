import React from "react";
import "../css/DisplayRecipe.css"
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrCoffeeData, updateCoffeeData } from "../reducers/coffeeReducer";
import BookingPNG from "../images/Booking.png";
import { useParams, useNavigate } from "react-router-dom";
export default function EditRecipe(){
    const navigate=useNavigate();
    const token=useSelector(state=>state.auth.token);
    const recipeData=useSelector(state=>state.coffee.currCoffeeData)
    const dispatch=useDispatch();
    const {id}=useParams();
    const [formData,setFormData]=React.useState(recipeData);
    const handleFormChange=(e)=>{
        const {name, value}=e.target;
        setFormData(prev=>{
            return{
                ...prev,
                [name]: value
            }
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const dataObject={
            recipe: formData.recipe,
            id: formData._id
        }
        dispatch(updateCoffeeData({data: dataObject, token:token})).then(()=>{
            navigate('/recipe');
        });
    }
    React.useEffect(()=>{
        dispatch(fetchCurrCoffeeData({id, token})).then(()=>{
            setFormData(recipeData);
        });
    },[dispatch, JSON.stringify(recipeData), JSON.stringify(token)]);
    return (
        <div >
            <div className="coffee-recipe" style={{backgroundImage:`url(${BookingPNG})`}}></div>
            <form onSubmit={handleSubmit}>
                <fieldset className="recipe--individual">
                        <legend>{recipeData.itemName}</legend>
                        <img src={`http://localhost:3500/images/${recipeData.imageName}`} style={{width: "50%"}}/>
                        <textarea className="edit--coffee" name="recipe" onChange={handleFormChange} value={formData.recipe}/>
                        <button className="submit--button">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}