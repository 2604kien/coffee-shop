import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import {useSelector, useDispatch} from "react-redux";
import { logout, resetState } from "../reducers/authReducer";
export default function Navbar(){
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const isAuthenticated=useSelector(state=> state.auth.isAuthenticated);
    const isAdminAuthorized=useSelector(state=>state.auth.isAdminAuthorized);
    const [isScroll, setIsScroll]=React.useState(false);
    React.useEffect(()=>{
        const handleScroll=()=>{
            setIsScroll(window.scrollY>0);
        }
        window.addEventListener('scroll', handleScroll)
        return ()=>{ window.removeEventListener('scroll', handleScroll)}
    },[])
    const handleLogout=()=>{
        
        dispatch(resetState());
        dispatch(logout()).then(()=>{
            alert('You are succeessfully log out.')
            navigate('/login');
        })
    }
    return(
        <>
        <div className="navigation-bar">
            <ul style={{backgroundColor: isScroll>0? "white":"transparent", transition:"all 0.3s ease"}}>
                <li onClick={()=>{navigate('/')}} style={{fontWeight:"bold", fontSize:"2rem", width:"30%"}}>HIASE</li>
                <div className="window--nav" >
                <li onClick={()=>{navigate('/')}}>Home</li>
                    {isAuthenticated && <li onClick={()=>navigate('/recipe')}>Coffe Recipe</li>}
                    {isAdminAuthorized && isAuthenticated?<li onClick={()=>navigate('/booking-list')}>Booking List</li>: <li onClick={()=>navigate('/menu')}>Today's Menu</li>}
                    {isAdminAuthorized && isAuthenticated?<li onClick={()=>navigate('/all-users')}>All Users</li>:<li onClick={()=>navigate('/booking')}>Booking</li>}
                    {isAuthenticated?<li onClick={handleLogout}>Logout</li>: <li onClick={()=>navigate('/login')}>Login</li>}
                </div>
            </ul>
        </div>
        </>
    )
}