import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar(){
    const navigate=useNavigate();
    const [isScroll, setIsScroll]=React.useState(false);
    React.useEffect(()=>{
        const handleScroll=()=>{
            setIsScroll(window.scrollY>0);
        }
        window.addEventListener('scroll', handleScroll)
        return ()=>{ window.removeEventListener('scroll', handleScroll)}
    },[])
    return(
        <>
        <div className="navigation-bar">
            <ul style={{backgroundColor: isScroll>0? "white":"transparent", transition:"all 0.3s ease"}}>
                <li onClick={()=>navigate('/')} style={{fontWeight:"bold", fontSize:"2rem"}}>HIASE</li>
                <li onClick={()=>navigate('/')}>Home</li>
                <li onClick={()=>navigate('/about')}>About</li>
                <li onClick={()=>navigate('/menu')}>Today's Menu</li>
                <li onClick={()=>navigate('/booking')}>Booking</li>
                <li onClick={()=>navigate('/login')}>Login</li>
            </ul>
        </div>
        <Outlet/>
        </>
    )
}