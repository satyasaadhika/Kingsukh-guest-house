import React from 'react';
import out from '../../assets/out.jpg';
import ScrollReveal from 'scrollreveal';
import './About.css'; 

function About() {
  
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
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

ScrollReveal().reveal(".about__content h4", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2500,
});

  return (
    <section className="section__container booking__container">
    <div className="booking_form">
      <section className="section__container about__container" id="about">
        <div className="about__image">
          <img src={out} alt="about"/>
        </div>
        <div className="about__content">
          <p className="section__subheader">ABOUT US</p>
          <h2 className="section__header">The Best Holidays Start Here!</h2>
          <p className="section__description">
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay. <br />
          </p>
            <h4><a href="#">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a></h4>
            <h4><a href="tel:+919007062180"> Contact us: +91 9007062180 </a></h4>
            <br />
          <div className="about__btn">
            <a href="#">
              <button className="btn">BOOK NOW</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  </section>
  );
}

export default About;
