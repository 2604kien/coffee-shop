import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { refresh} from "../reducers/authReducer";
import Loading from "./Loading";
export default function Layout(){
    const dispatch=useDispatch();
    const token=useSelector(state=> state.auth.token);
    const status=useSelector(state=>state.auth.status);
    const isLogin=useSelector(state=>state.auth.isLogin);
    React.useEffect(()=>{
        if(!isLogin) dispatch(refresh())
        const tokenExpirationThreshold = 3*60; 
        let { exp } = token.length>0?JSON.parse(window.atob(token.split('.')[1])):"";
        const intervalId = setInterval(()=>{
                if (exp - Date.now() / 1000 < tokenExpirationThreshold) {
                  // Dispatch the refreshAccessToken action
                  
                 dispatch(refresh());
                 exp = {};
                }
            
        }, 13*60*1000)
        return () => clearInterval(intervalId);
},[dispatch,token, isLogin]);
    return (
        <>
            {status==="loading"&&<Loading/>}
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}