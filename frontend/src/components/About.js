import React from "react";
import "../css/About.css"
import About1 from "../images/About1.png"
import About2 from "../images/About2.png"
export default function About(){
    return(
        <div style={{textAlign:"center"}}>
        <h1 style={{color: "rgb(212, 193, 16)"}}>About Us</h1>
        <div className="about">

                <p>"Step into a sensory journey at <span style={{color: "rgb(212, 193, 16)"}}>HIASE</span> the newest coffee haven that seamlessly marries the modern ambiance of 2023 with the timeless allure of traditional coffee craftsmanship dating back to 1960. Nestled in the heart of the city, this enchanting coffee shop invites patrons to savor the rich heritage of coffee culture through meticulously preserved recipes that have stood the test of time. As you enter, the aroma of freshly ground beans wafts through the air, transporting you to a bygone era where every cup was a celebration of artistry and flavor. From meticulously hand-pulled shots of espresso to the frothy perfection of cappuccinos, each beverage is a testament to the expertise handed down through generations. At <span style={{color: "rgb(212, 193, 16)"}}>HIASE</span>, we invite you to immerse yourself in the warm embrace of tradition, where every sip tells a story that has been brewing for over a century."</p>
                <img style={{width:"100%"}} src={About1}/>

                <img style={{width:"100%"}} src={About2}/>
                <p>At <span style={{color: "rgb(212, 193, 16)"}}>HIASE</span>, our commitment is simple yet unwavering – to ensure every customer leaves with a satisfied palate and a contented smile. We take pride in crafting each cup with precision, using the finest ingredients and time-honored recipes that have delighted coffee enthusiasts since 1960. Your satisfaction is not just our goal; it's our promise, ensuring that every sip at <span style={{color: "rgb(212, 193, 16)"}}>HIASE</span> is a moment of pure joy, leaving you consistently delighted with the unparalleled richness and flavor of our coffee. Your contentment is our greatest reward.</p>

        </div>
        </div>
    )
}