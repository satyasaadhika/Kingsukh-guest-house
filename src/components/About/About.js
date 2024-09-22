import React from 'react';
import ScrollReveal from 'scrollreveal';
import out from '../../assets/out.jpg';
import './About.css'; 

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

function About() {

  // about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

  return (
    <section class="section__container booking__container">
    <div class="booking_form">
      <section class="section__container about__container" id="about">
        <div class="about__image">
          <img src={out} alt="about"/>
        </div>
        <div class="about__content">
          <p class="section__subheader">ABOUT US</p>
          <h2 class="section__header">The Best Holidays Start Here!</h2>
          <p class="section__description">
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay. <br /></p>
            <h4><a href="#">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a></h4>
            <h4><a href="tel:+919007062180"> Contact us: +91 9007062180 </a></h4>
            <br />
          <div class="about__btn">
            <a href="#">
              <button class="btn">BOOK NOW</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  </section>
  );
}

export default About;