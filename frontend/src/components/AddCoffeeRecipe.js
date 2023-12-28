import React from "react";
import "../css/CoffeeRecipe.css"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewCoffeeRecipe, uploadImage } from "../reducers/coffeeReducer";
import BookingPNG from "../images/Booking.png";
export default function CoffeeRecipe(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [imageFile, setImageFile]=React.useState(null);
    const [formData, setFormData]=React.useState({
       itemName:"",
       recipe: "",
       imageName: ""
    });
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newFormData= new FormData();
        newFormData.append('imageFile', imageFile);
        newFormData.append('itemName', formData.itemName);
        newFormData.append('recipe', formData.recipe);
        newFormData.append('imageName', formData.imageName);
        console.log(formData);
        dispatch(addNewCoffeeRecipe(newFormData)).then(()=>{
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
                        <label htmlFor="imageFile">Upload IMG</label>
                        <input style={{border: "none"}} type="file" onChange={(e)=>{
                                setImageFile(e.target.files[0])
                                setFormData(prev=>{
                                    return {
                                        ...prev,
                                        imageName: e.target.files[0].name
                                    }
                                })
                            }}  name="imageFile" id="imageFile"/>
                    <label htmlFor="recipe">Coffee Recipe:</label>
                    <textarea name="recipe" id="recipe" value={formData.recipe} onChange={handleChange} required/>
                    <button>Submit</button>
                </fieldset>
            </form>
        </div>
    )
}