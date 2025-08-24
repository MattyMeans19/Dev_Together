import { useState } from 'react';
import Logo from "/DevTogether_Logo.png";
import Footer from './components/Footer';
import { NavLink } from 'react-router';


function App() {

  return (
    <div className='flex flex-col max-w-screen min-h-screen'>
      <div className='bigHeader'>
        <h1 className='text-center text-[3rem] md:text-[5rem] md:place-self-start md:pt-15 animate-fade-down animate-once animate-duration-1000 animate-ease-in font-display'>Alone, we're good.</h1>
        <img src={Logo} className='size-[10rem] md:size-[25rem]'></img>
        <h1 className='text-center text-[3rem] md:text-[4rem] md:place-self-end md:pb-15 animate-fade-up animate-once animate-duration-1000 animate-delay-1000 animate-ease-in font-display'>Together, we're great.</h1>
      </div>

      <div className='inline-grid grid-cols-5 gap-10 my-15 md:my-10 grow'>
        <div className='PrimaryBox max-w-full inline-flex flex-col gap-5 p-5 mx-10 animate-fade-right animate-duration-1000 animate-delay-[2000ms] animate-ease-in font-display col-span-full md:col-span-3'>
          <h1 className='PrimaryTitle grow'>The Mission:</h1>
          <p className='PrimaryContent grow'>To bring together developers from all fields who lack the resources to hire out or commission crucial pieces of their projects. 
              This community is focused on long term goals, not short term gain (not that you can't accept payment up front if offered 😉). Connect with developers, artists, and experts across various fields
              to bring your grand visions to life!
          </p>

        </div>
        <div className='SecondaryBox animate-fade-down animate-duration-1000 animate-delay-[2000ms] animate-ease-in place-self-center inline-flex flex-wrap justify-center md:gap-5 col-span-full md:col-span-2 '>
          <p className='text-2xl basis-full text-center'>Signing up is free!</p>
          <NavLink to='register' className='PrimaryButton'>Sign up</NavLink>
          <NavLink to='login' className='SecondaryButton'>Log in</NavLink>
          <p className='text-[0.75rem] basis-full text-center'>Logging in is also free 😜</p>
        </div>

        <div className='TertiaryBox row-start-2 col-start-3 md:col-span-full place-self-center text-3xl mt-10 font-display animate-flip-up animate-duration-1000 animate-delay-[2000ms] animate-ease-in'>
          <h2 className='text-center text-4xl underline underline-offset-4 mb-5'>Key Features</h2>
          <ul className='list-disc'>
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
