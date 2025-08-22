import React from "react";
import "./Components.css";

function Footer(){
    const year = new Date().getFullYear();
    
    return(
        <div className="myFooter">
            <span>©DevTogether {year}</span>
        </div>
    )
}

export default Footer;