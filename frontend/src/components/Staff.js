import React from "react";
import "../css/Staff.css"
import StaffCard from "./StaffCard";
import {staff} from "../documents/staffData"
export default function Staff(){
    const element=staff.map(el=><StaffCard key={Math.random()*1000} data={el}/>);
    return(
        <div style={{textAlign:"center"}}>
            <h1 style={{color: "rgb(212, 193, 16)"}}>Our Staff</h1>
            <div className="staff">
                {element}
            </div>
        </div>
    )
}