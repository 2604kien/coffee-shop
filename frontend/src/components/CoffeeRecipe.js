import React from "react";
import "../css/CoffeeRecipe.css"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewCoffeeRecipe, uploadImage } from "../reducers/coffeeReducer";
import BookingPNG from "../images/Booking.png";
export default function CoffeeRecipe(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [formData, setFormData]=React.useState({
       itemName:"",
       recipe: "",
       imageName:"Will be set later",
    });
    const [file, setFile]=React.useState();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newFormData= new FormData();
        newFormData.append('file', file);
        dispatch(uploadImage(newFormData));
        dispatch(addNewCoffeeRecipe(formData)).then(()=>{
            alert('A coffee recipe is created.');
            window.location.reload();
        })
    }
    const handleChange=(e)=>{
        const {name, value}=e.target
        setFormData(prev=>{
            return {
                ...prev,
                [name]: value
            }
        })
    }
    return(
        <div>
            <div className="coffee-recipe" style={{backgroundImage:`url(${BookingPNG})`}}></div>
            <form className="coffee--form" onSubmit={handleSubmit}>
                <fieldset>
                    <legend className="booking--text">Add New Coffee Recipe</legend>
                    <label htmlFor="itemName">Coffee Item Name:</label>
                    <input type="text" name="itemName" id="itemName"value={formData.itemName} onChange={handleChange} required/>
                        <label htmlFor="file">Upload IMG</label>
                        <input style={{border: "none"}} type="file" onChange={(e)=>setFile(e.target.files[0])}  name="file" id="file"/>
                    <label htmlFor="recipe">Coffee Recipe:</label>
                    <textarea name="recipe" id="recipe" value={formData.recipe} onChange={handleChange} required/>
                    <button>Submit</button>
                </fieldset>
            </form>
        </div>
    )
}