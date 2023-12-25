import React from "react"
import '../css/Login.css'
import LoginIMG from "../images/Login.png"
export default function Login(){
    const [loginData, setLoginData]=React.useState({
        username: "",
        password:""
    })
    return (
        <div className="login">
            <div className="logo--login blur" style={{backgroundImage: `url(${LoginIMG})`}}>
                <h1>HIASE</h1>
                <h2>Since 1962</h2>
            </div>
            <h1>Member Login:</h1>
            <form className="login--form">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Please enter your username..." required/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Please enter your password..." required/>
                <button> Login </button>
            </form>
        </div>
    )
}