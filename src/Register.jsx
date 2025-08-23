import React, {useState, useEffect} from "react";
import Logo from "/DevTogether_Logo.png";
import "./Register.css";
import Footer from "./components/Footer.jsx"

function Register(){
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        userName: '',
        password: '',
        artist: false,
        musician: false,
        gameDev: false,
        webDev: false,
        video: false,
        actor: false
    })

    const [ageVerified, setAgeVerified] = useState(false);

    function inputUserData(event){
        const {name, value} = event.target;
        setUserData(prevUserData => ({
            ...prevUserData,
            [name]: value
        }));
    }

    useEffect(() =>{
        if(verifyAge(userData.dob, 18)){
            setAgeVerified(true);
        } else{
            setAgeVerified(false);
        }
    }, [userData.dob])

    function verifyAge(birthdateString, requiredAge) {
        // Parse the birthdate string into a Date object
        const birthDate = new Date(birthdateString);

        // Get the current date
        const today = new Date();

        // Calculate the difference in years
        let age = today.getFullYear() - birthDate.getFullYear();

        // Adjust age if the birthday hasn't occurred yet this year
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        // Check if the calculated age meets the required age
        return age >= requiredAge;
    } 


    return(
        <div className="register">
            <div className="head">
                <img src={Logo}></img>
                <h1>Register</h1>
            </div>
            <h1 className="title">Complete the registration form below to set up your account.</h1>
            <form className="registrationForm">
                <h2 className="title2">Personal Info</h2>
                <input type="text" id="fName" pattern="[a-zA-Z]" title="Only letters allowed" placeholder="*First Name" name="fName" value={userData.firstName} onChange={inputUserData} required></input>
                <input type="text" id="lName" pattern="[a-zA-Z]" title="Only letters allowed" placeholder="*LastName" name="lName" value={userData.lastName} onChange={inputUserData} required></input>
                <input type="text" id="email" placeholder="*Email Address" name="email" value={userData.email} onChange={inputUserData} required></input>
                <label htmlFor="dob" className="dob">*Date Of Birth:</label>
                <input type="date" id="dob" name="dob" value={userData.dob} onChange={inputUserData} required></input>
                {ageVerified ? null : <p className="ageVerification">**Due to potential adult content users must be 18 years or older to sign up**</p>}
                <p className="title3">Profile Information</p>
                <input type="text" id="userName" pattern="[a-zA-Z0-9]" title="Only letters and numbers are allowed" placeholder="*User Name" name="userName" value={userData.userName} onChange={inputUserData} required></input>
                <label htmlFor="userName" id="uNameLabel">Username can only contain Letters and Numbers.</label>
                <input type="password" id="password" minLength="8" title="Only letters and numbers are allowed" placeholder="*Password" name="password" value={userData.password} onChange={inputUserData} required></input>
                <label htmlFor="password" id="passwordLabel">Password must be at least 8 characters and can use Letters, Numbers, and Symbols.</label>
                <div className="questionaire">
                    <p className="title4">Select any that apply to you. This will help other users see you when they're searching for talent. Can be edited anytime in account settings.</p>
                    <div className="selections">
                        <label htmlFor="artist">I am an artist of some kind.</label>
                        <input type="checkbox" id="artist" name="artist" value={userData.artist}></input>   
                    </div>
                    <div className="selections">
                        <label htmlFor="musician">I produce/record music.</label>
                        <input type="checkbox" id="musician" name="musician" value={userData.musician}></input> 
                    </div>
                    <div className="selections">
                        <label htmlFor="gameDev">I write code or produce designs for games.</label>
                        <input type="checkbox" id="gameDev" name="gameDev" value={userData.gameDev}></input> 
                    </div>
                    <div  className="selections">
                        <label htmlFor="webDev">I write code for front-end and/or back-end code for websites.</label>
                        <input type="checkbox" id="webDev" name="webDev" value={userData.webDev}></input>
                    </div>
                    <div  className="selections">
                        <label htmlFor="video">I record/edit videos.</label>
                        <input type="checkbox" id="video" name="video" value={userData.video}></input>
                    </div>
                    <div  className="selections">
                        <label htmlFor="actor">I am an actor/voice actor.</label>
                        <input type="checkbox" id="actor" name="actor" value={userData.actor}></input>
                    </div>
                    
                </div>
            </form>
            <Footer />
        </div>
    )
}

export default Register;