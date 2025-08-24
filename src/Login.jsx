import React, { useState } from "react";
import Logo from "/DevTogether_Logo.png";
import Footer from "./components/Footer.jsx"

function Login(){
    const [userData, setUserData] = useState(
        {
            userName: '',
            password: ''
        }
    )

        function inputUserData(event){
        const {name, value} = event.target;
        setUserData(prevUserData => ({
            ...prevUserData,
            [name]: value
        }));
    }

    return(
        <div className="flex flex-col max-w-screen min-h-screen">
            <div className="w-full place-items-center text-7xl pb-5 bg-(--system-background) bg-linear-(--background-gradient)">
                <img src={Logo} className="size-[10rem]"></img>
                <h1>Login</h1>
            </div>
            <div className="MediaBox h-[40vh] inline-flex flex-col grow">
                <input type="text" id="userName" maxLength="12" placeholder="*User Name" 
                name="userName" value={userData.userName} onChange={inputUserData} required className="inputBox">
                </input>
                <input type="password" id="password" minLength="8" title="Only letters and numbers are allowed" placeholder="*Password" 
                name="password" value={userData.password} onChange={inputUserData} required className="inputBox">
                </input>
            </div>
            <Footer />
        </div>
    )
}

export default Login;