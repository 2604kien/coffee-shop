import React from "react";
export default function LoginSuccess(){
    React.useEffect(()=>{
        setTimeout(()=>{
            window.close();
        }, 2000)
    },[])
    return(
        <h1 style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            width:"100%",
            height:"100vh",
            overflow:"hidden"
        }}>Thank you for login</h1>
    )
}