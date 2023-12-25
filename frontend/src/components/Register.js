import React from "react";
import LoginIMG from "../images/Login.png";
import "../css/Register.css"
export default function Register(){
    const [registerData, setRegisterData]=React.useState({
        fullName:"",
        userName:"",
        password:"",
        confirmPassword:"",
        role:['Member']
    })
    return (
        <div className="register">
            <div className="logo--login blur" style={{backgroundImage: `url(${LoginIMG})`}}>
                <h1>HIASE</h1>
                <h2>Since 1962</h2>
            </div>
            <form className="register--form">
                <fieldset style={{border: "3px solid rgb(212, 193, 16)", backgroundColor:"rgba(0,0,0,0.8"}}>
                    <legend style={{backgroundColor:"rgba(0,0,0,0.5", fontSize:"3rem"}}>Register</legend>
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" required/>
                    
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="userName" name="userName" required/>

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required/>
                    <label htmlFor="confirmPassword">Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required/>
                    <button>Register</button>
                </fieldset>
            </form>
        </div>
    )
}