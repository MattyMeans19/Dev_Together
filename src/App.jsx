import { useState } from 'react';
import Logo from "/DevTogether_Logo.png";
import Footer from './components/Footer';
import "./Styles/App.css";
import { NavLink } from 'react-router';


function App() {

  return (
    <div className='LandingPage'>
      <div className='Logo'>
        <h1 className='Motto1'>Alone, we're good.</h1>
        <img src={Logo} className='LogoImg'></img>
        <h1 className='Motto2'>Together, we're great.</h1>
      </div>

      <div className='content'>
        <div className='mission'>
          <h1 className='title'>The Mission:</h1>
          <p className='body'>To bring together developers from all fields who lack the resources to hire out or commission crucial pieces of their projects. 
              This community is focused on long term goals, not short term gain (not that you can't accept payment up front if offered 😉). Connect with developers, artists, and experts across various fields
              to bring your grand visions to life!
          </p>

        </div>
        <div className='buttons'>
          <p className='SUmessage'>Signing up is free!</p>
          <NavLink to='register' className='signUp'>Sign up</NavLink>
          <NavLink to='login' className='logIn'>Log in</NavLink>
          <p className='LImessage'>Logging in is also free 😜</p>
        </div>

        <div className='Features'>
          <h2>Key Features</h2>
          <ul>
            <li>Upload pictures and videos to your profile to showcase your talent.</li>
            <li>Use the Forums for tips and to ask questions.</li>
            <li>Browse Groups and Collabs to find projects that can use your talents!</li>
          </ul>
        </div> 
      </div>

      
      
      <Footer />
    </div>
  )
}

export default App;
