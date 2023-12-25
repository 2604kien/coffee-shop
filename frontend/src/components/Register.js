import React from "react";
import LoginIMG from "../images/Login.png";
import "../css/Register.css";
import {useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { postNewUser } from "../reducers/userReducer";
export default function Register(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [registerData, setRegisterData]=React.useState({
        fullName:"",
        username:"",
        password:"",
        confirmPassword:"",
        roles:['Member']
    });
    const [passwordNotMatch, setPasswordNotMatch]=React.useState(false)
    const handleChange=(event)=>{
        const {name, value}=event.target;
        setRegisterData(prev=>{
            return {
                ...prev,
                [name]:value
            }
        })
    }
    const submitRegister=(event)=>{
        event.preventDefault()
        if(registerData.confirmPassword!==registerData.password){
            setPasswordNotMatch(true);
        }
        else{
            setPasswordNotMatch(false);
            dispatch(postNewUser(registerData)).then(()=>{
                navigate('/login');
            });
        }
    }
    return (
        <div className="register">
            <div className="logo--login blur" style={{backgroundImage: `url(${LoginIMG})`}}>
                <h1>HIASE</h1>
                <h2>Since 1962</h2>
            </div>
            <form onSubmit={submitRegister} className="register--form">
                <fieldset style={{border: "3px solid rgb(212, 193, 16)", backgroundColor:"rgba(0,0,0,0.8", maxWidth:"300px"}}>
                    <legend style={{backgroundColor:"rgba(0,0,0,0.5", fontSize:"3rem"}}>Register</legend>
                    {passwordNotMatch && <p style={{color: "red"}}>*Confirm password does not match, please try again.</p>}
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" onChange={handleChange} value={registerData.fullName} required/>
                    
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" onChange={handleChange} value={registerData.username} required/>

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={handleChange} value={registerData.password} required/>
                    <label htmlFor="confirmPassword">Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" onChange={handleChange} value={registerData.confirmPassword} required/>
                    <button type="submit">Register</button>
                </fieldset>
            </form>
        </div>
    )
}