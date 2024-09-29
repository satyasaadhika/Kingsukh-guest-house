import React from 'react';
import { GrShieldSecurity } from "react-icons/gr";
import { Ri24HoursFill } from "react-icons/ri";
import { IoMdRestaurant } from "react-icons/io";
import { FcOnlineSupport } from "react-icons/fc";
import ScrollReveal from 'scrollreveal';
import './Service.css';

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

function Services(){

  // service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});

    return(
    <section className="service" id="service">
        <div className="section__container service__container">
         <div className="service__content">
            <p className="section__subheader">SERVICES</p>
            <h2 className="section__header">Strive Only For The Best.</h2>
            <ul className="service__list">
              <li>
                <span><GrShieldSecurity /></span>
                High Class Security
              </li>
              <li>
                <span><Ri24HoursFill /></span>
                24 Hours Room Service
              </li>
              <li>
                <span><IoMdRestaurant /></span>
                Restaurant
              </li>
              <li>
                <span><FcOnlineSupport /></span>
                Tourist Guide Support
              </li>
            </ul>
         </div>
        </div>
    </section>
    );
};
export default Services;