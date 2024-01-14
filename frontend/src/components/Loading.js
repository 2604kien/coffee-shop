import React from "react"
import ReactDOM from "react-dom"
import { useLocation } from "react-router-dom"
import "../css/Loading.css"
export default function Loading(){
    const {pathname}=useLocation();
    return ReactDOM.createPortal(
        <div className="overlay">
            {pathname==="/login"?<h3>Server may be slow sometimes, please be patient...</h3>: <></>}
            <span className="loader"></span>
        </div>,
        document.body
    )
}