import React from 'react';
import Navbar from './Navbar';
import '../styles/hero.css';
const Hero = () => {
  return (
    <div id="hero"
     className="hero-container"
       
      >
      <Navbar /> 
      <div className="hero-content">
        <div className='hidden lg:block'></div>

        <div className="hero-text">
          <div className="hero-msin">
           <p data-aos="zoom-in-up">I'm</p>
           <p data-aos="zoom-in-up">Mizna</p>
           <p data-aos="zoom-in-up">Younus</p> 
            </div>        
        </div>
        </div> 
    </div>
  );
};

export default Hero;
