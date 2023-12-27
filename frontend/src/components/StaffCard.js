import React from "react";
export default function StaffCard(props){
    const [isHover, setIsHover]=React.useState(false);
    return (
        <div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} style={{
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            marginTop:"5%"
        }}>
            <div style={{display:"flex", flexDirection:"column", width: "100%", height: "495px", backgroundImage: `url(${props.data.image})`, backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat", placeContent:"flex-end"}}>
                <div className="staff--card" style={{
                    backgroundColor:"rgba(0,0,0,0.5)",
                    color: "rgb(212, 193, 16)",
                    opacity: isHover?"1":"0",
                    transition:"all 0.3s ease"
                }}>
                    <h3 style={{fontFamily:"'Handlee', cursive"}}>{props.data.name}</h3>
                    <h3 style={{fontFamily:"'Handlee', cursive"}}>Position: {props.data.role}</h3>
                </div>
            </div>
            
        </div>
    )
}