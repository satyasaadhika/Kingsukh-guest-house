import React from 'react';
import { GrShieldSecurity } from "react-icons/gr";
import { Ri24HoursFill } from "react-icons/ri";
import { IoMdRestaurant } from "react-icons/io";
import { FcOnlineSupport } from "react-icons/fc";
import './Service.css';

function Services(){
    return(
    <section class="service" id="service">
        <div class="section__container service__container">
         <div class="service__content">
            <p class="section__subheader">SERVICES</p>
            <h2 class="section__header">Strive Only For The Best.</h2>
            <ul class="service__list">
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