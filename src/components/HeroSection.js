import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <main>
    <div className="hero-container">
      <p>Simple - Unique - Friendly</p>
      <h1>Make Yourself At Home
      In Our <span>Guest House</span>.</h1>
    </div>

    <section class="section__container booking__container">
      <div class="booking__form">
        <div class="input__group input__btn">
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
