import React, {useState, useEffect} from "react";
import Logo from "/DevTogether_Logo.png";
import Footer from "./components/Footer.jsx"
import Iframe from "react-iframe";

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
        actor: false,
        ToS: false,
        PP: false
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
        <div className="flex flex-col max-w-screen font-display">
            <div className="w-full place-items-center text-7xl pb-5 bg-(--system-background) bg-linear-(--background-gradient)">
                <img src={Logo} className="size-[10rem]"></img>
                <h1>Register</h1>
            </div>
            <h1 className="text-5xl place-self-center my-15 text-center">Complete the registration form below to set up your account.</h1>
            <form className="MediaBox md:w-[80vw] justify-self-center flex flex-col md:inline-grid grid-cols-6 gap-10 md:gap-1 p-5 md:p-15">
                <h2 className="title row-start-1 col-start-2 col-span-4 mb-10">Personal Info</h2>
                <input type="text" id="fName" placeholder="*First Name" className="inputBox row-start-2 col-span-2 col-start-2 md:place-self-end"
                name="firstName" pattern="[a-zA-Z]+" value={userData.firstName} onChange={inputUserData} required>
                </input>
                <input type="text" id="lName" placeholder="*LastName" className="inputBox row-start-2 col-span-2 md:place-self-start"
                name="lastName" pattern="[a-zA-Z]+" value={userData.lastName} onChange={inputUserData} required>
                 </input>
                <input type="email" id="email" placeholder="*Email Address" className="inputBox row-start-3 col-start-2 col-span-4 md:my-10"
                name="email" value={userData.email} onChange={inputUserData} required>
                </input>
                <label htmlFor="dob" className="row-start-4 col-start-2 text-center md:place-self-end text-3xl">*Date Of Birth:</label>
                <input type="date" id="dob" className="w-full md:w-fit row-start-4 col-start-3 col-span-1 text-3xl place-self-center"
                 name="dob" value={userData.dob} onChange={inputUserData} required>
                 </input>
                {ageVerified ? null : <p className="row-start-4 col-start-4 col-span-2 text-red-600 place-content-center text-center">**Due to potential adult content users must be 18 years or older to sign up**</p>}
                <p className="title row-start-5 col-start-2 col-span-4 my-15">Profile Information</p>
                <input type="text" id="userName" maxLength="12" placeholder="*User Name" 
                name="userName" value={userData.userName} onChange={inputUserData} required className="inputBox row-start-6 col-start-2 col-span-2">
                </input>
                <label htmlFor="userName" className="row-start-7 col-start-2 col-span-2 text-center">Username cannot be more than 12 characters.</label>
                <input type="password" id="password" minLength="8" title="Only letters and numbers are allowed" placeholder="*Password" 
                name="password" value={userData.password} onChange={inputUserData} required className="inputBox row-start-6 col-start-4 col-span-2">
                </input>
                <label htmlFor="password" className="row-start-7 col-start-4 col-span-2 text-center md:px-15">Password must be at least 8 characters and can use Letters, Numbers, and Symbols.</label>
                <div className="SecondaryMedia row-start-8 col-start-2 col-span-4 my-10 inline-flex flex-col gap-5">
                    <p className="text-2xl text-center">Select any that apply to you. This will help other users see you when they're searching for talent. Can be edited anytime in account settings.</p>
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
                        <label htmlFor="webDev">I write code for front-end and/or back-end for websites.</label>
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
                <p className="title row-start-9 col-start-2 col-span-4">Please read and accept the Terms of Use</p>
                <Iframe src="src\components\Tos.html"
                height="1000px"
                    className="w-full row-start-10 row-span-4 col-start-2 col-span-4 SecondaryMedia place-self-center"
                />
                <div  className="selections row-start-16 col-start-2 col-span-4 mt-5">
                    <label htmlFor="ToS">I have read and accept the terms of use.</label>
                    <input type="checkbox" id="Tos" name="ToS" value={userData.ToS} required></input>
                </div>
                <p className="SecondaryMedia row-start-17 col-start-2 col-span-4 text-3xl mt-15">We don't have a formal privacy policy at this time, but will update it here in the future. 
                        For now, please trust that we won't be selling any of the data that we collect from you for ANY reason, and we will trust that you do the same!</p>
                <div className=" selections row-start-18 col-start-2 col-span-4 mt-15">
                    <label htmlFor="PP">I have read and accept the privacy policy.</label>
                    <input type="checkbox" id="PP" name="PP" value={userData.PP} required></input>
                </div>
                <input type="submit" className="PrimaryButton row-start-20 row-span-2 min-h-full col-start-3 col-span-2 mt-15 place-self-center"></input>
            </form>
            <Footer />
        </div>
    )
}

export default Register;