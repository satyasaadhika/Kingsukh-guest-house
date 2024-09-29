import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './HeroSection.css';


const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

function HeroSection(){
 // useEffect hook to trigger ScrollReveal after component mounts
 useEffect(() => {
 //ScrollReveal() is a JavaScript library used to create scroll animations on a webpage.  
  ScrollReveal().reveal(".hero-container p", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".hero-container h1", {
    ...scrollRevealOption,
    delay: 500,
  });
}, []); 
  
  return (
   <main>
    <div className="hero-container">
      <p>Simple - Unique - Friendly</p>
      <h1>Make Yourself At Home
      In Our <span>Guest House</span>.</h1>
    </div>

    <section class="header__container">
      <div className="booking__form">
        <div className="input__group input__btn">
          <a href="#">
            <button class="btn">BOOK NOW</button>
          </a>
        </div>
      </div>
    </section>
    </main>
  );
};

export default HeroSection;
