import React from "react";
import "../css/DisplayRecipe.css"
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrCoffeeData, updateCoffeeData } from "../reducers/coffeeReducer";
import BookingPNG from "../images/Booking.png";
import Loading from "./Loading";
import { useParams, useNavigate } from "react-router-dom";
export default function EditRecipe(){
    const navigate=useNavigate();
    const token=useSelector(state=>state.auth.token);
    const recipeData=useSelector(state=>state.coffee.currCoffeeData)
    const dispatch=useDispatch();
    const {id}=useParams();
    const status=useSelector(state=>state.coffee.status);
    const [loading, setLoading]=React.useState(false);
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
    React.useEffect(()=>{
        if(status==="loading") setLoading(true);
        else setLoading(false);
    },[status])
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
    },[dispatch, JSON.stringify(recipeData), token, id]);
    return (
        <div >
            {loading && <Loading/>}
            <div className="coffee-recipe" style={{backgroundImage:`url(${BookingPNG})`}}></div>
            <div className="booking--container">
            <form onSubmit={handleSubmit}>
                <fieldset className="recipe--individual">
                        <legend style={{backgroundColor:"rgba(0,0,0,0.5", fontSize:"3rem"}}>{recipeData.itemName}</legend>
                        <img src={`https://hiase-api.onrender.com/images/${recipeData.imageName}`} style={{width: "50%"}} alt={recipeData.itemName}/>
                        <textarea className="edit--coffee" name="recipe" onChange={handleFormChange} value={formData.recipe}/>
                        <button className="submit--button">Submit</button>
                </fieldset>
            </form>
        </div>
        </div>
    )
}