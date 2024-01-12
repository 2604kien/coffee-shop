import React from "react"
import '../css/Login.css'
import LoginIMG from "../images/Login.png";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Loading from "./Loading";
import { login } from "../reducers/authReducer";
export default function Login(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [loading, setLoading]=React.useState(false);
    const message=useSelector(state=>state.auth.message)
    const isAuthenticated=useSelector(state=>state.auth.isAuthenticated);
    const [loginData, setLoginData]=React.useState({
        username: "",
        password:""
    });
    const handleChange=(e)=>{
        e.preventDefault();
        const {name, value}=e.target
        setLoginData(prev=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            setLoading(true);
            await dispatch(login(loginData))
        }
        finally{
            setLoading(false);
        }
    }
    React.useEffect(()=>{
        if(isAuthenticated) navigate('/');
    },[isAuthenticated, navigate])

    return (
        <div className="login">
            {loading && <Loading/>}
            <div className="logo--login blur" style={{backgroundImage: `url(${LoginIMG})`}}>
                <h1>HIASE</h1>
                <h2>Since 1962</h2>
            </div>
            <h1>Member Login:</h1>
            <form onSubmit={handleSubmit} className="login--form">
            {(message && message.includes("401")) && <p >Username/Password is incorrect</p>}
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" value={loginData.username} onChange={handleChange} placeholder="Please enter your username..." required/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={loginData.password} onChange={handleChange} placeholder="Please enter your password..." required/>
                <button> Login </button>
            </form>
            <h3 onClick={()=>{navigate('/register')}}>Or register new account here.</h3>
        </div>
    )
}