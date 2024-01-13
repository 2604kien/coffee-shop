import React from "react";
import "../css/CoffeeRecipe.css"
import { useSelector, useDispatch } from "react-redux";
import { addNewCoffeeRecipe} from "../reducers/coffeeReducer";
import BookingPNG from "../images/Booking.png";
import Error404 from "./Error404";
import Loading from "./Loading";
export default function CoffeeRecipe(){
    const dispatch=useDispatch();
    const token=useSelector(state=>state.auth.token);
    const isAdminAuthorized=useSelector(state=>state.auth.isAdminAuthorized);
    const [imageFile, setImageFile]=React.useState(null);
    const [message, setMessage]=React.useState(false);
    const [loading, setLoading]=React.useState(false);
    const [formData, setFormData]=React.useState({
       itemName:"",
       recipe: "",
       imageName: ""
    });
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const newFormData= new FormData();
        newFormData.append('imageFile', imageFile);
        newFormData.append('itemName', formData.itemName);
        newFormData.append('recipe', formData.recipe);
        newFormData.append('imageName', formData.imageName);
        try{
            setLoading(true);
            await dispatch(addNewCoffeeRecipe({data: newFormData, token:token}));
        }
        finally{
            setLoading(false);
            setMessage(true)
        }
        
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
    if(!isAdminAuthorized) return <Error404/>
    return(
        <div>
            <div className="coffee-recipe" style={{backgroundImage:`url(${BookingPNG})`}}></div>
            {loading && <Loading/>}
            <div className="booking--container">
            <form className="coffee--form" onSubmit={handleSubmit}>
                <fieldset>
                    <legend className="booking--text">Add New Coffee Recipe</legend>
                    {message && <p>A new recipe is successfully added</p>}
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
        </div>
    )
}