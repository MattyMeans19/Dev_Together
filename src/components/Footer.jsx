import React from "react";

function Footer(){
    const year = new Date().getFullYear();
    
    return(
        <div className="w-full text-center text-2xl mt-10 bg-(--system-background) bg-linear-(--background-gradient)">
            <footer>©DevTogether {year}</footer>
        </div>
    )
}

export default Footer;