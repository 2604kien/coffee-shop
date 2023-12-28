import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { refresh} from "../reducers/authReducer";
export default function Layout(){
    const dispatch=useDispatch();
    const token=useSelector(state=> state.auth.token);
    
    React.useEffect(()=>{
        dispatch(refresh())
        const tokenExpirationThreshold = 3; 
        let { exp } = token.length>0?JSON.parse(window.atob(token.split('.')[1])):"";
        setInterval(()=>{
                if (exp - Date.now() / 1000 < tokenExpirationThreshold) {
                  // Dispatch the refreshAccessToken action
                  
                 dispatch(refresh());
                 exp = {};
                }
            
        }, 13*60*1000)
},[dispatch,token])
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}