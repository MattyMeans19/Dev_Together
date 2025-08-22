import React from "react";
import Logo from "/DevTogether_Logo.png";
import "./Register.css";

function Register(){
    return(
        <div className="register">
            <div className="head">
                <img src={Logo}></img>
                <h1>Register</h1>
            </div>
        </div>
    )
}

export default Register;