import React from 'react';
import Large from '../../assets/large.jpg';
import { FcLikePlaceholder } from "react-icons/fc";
import { FcMms } from "react-icons/fc";
import { FcStart } from "react-icons/fc";
import Room from '../../assets/small.jpg';
import Rooms from '../../assets/room1.jpg';
import './Content.css';

function Content(){
 
  return (
        <section class="section__container room__container" id="rooms">
      <p class="section__subheader">OUR LIVING ROOM</p>
      <h2 class="section__header">The Most Memorable Rest Time Starts Here.</h2>
      <div class="room__grid">
        <div class="room__card">
          <div class="room__card__image">
            <img src={Large} alt="room" />
            <div class="room__card__icons">
              <span><FcLikePlaceholder /></span>
              <span><FcMms /></span>
              <span><FcStart /></span>
            </div>
          </div>
          <div class="room__card__details">
            <h4>Cozy Haven Room</h4>
            <p>
              Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.
            </p>
            <h5>Starting from <span>Rs. 1000/night</span></h5>
            <a href="https://wa.link/at5ion">
              <button class="btn">BOOK NOW</button>
            </a>
          </div>
        </div>
        <div class="room__card">
          <div class="room__card__image">
            <img src={Room} alt="room" />
            <div class="room__card__icons">
              <span><FcLikePlaceholder /></span>
              <span><FcMms /></span>
              <span><FcStart /></span>
            </div>
          </div>
          <div class="room__card__details">
            <h4>Spacious Serenity Suite</h4>
            <p>
              Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.
            </p>
            <h5>Starting from <span>Rs. 1500/night</span></h5>
            <a href="#">
              <button class="btn">BOOK NOW</button>
            </a>
          </div>
        </div>
        <div class="room__card">
          <div class="room__card__image">
            <img src={Rooms} alt="room" />
            <div class="room__card__icons">
              <span><FcLikePlaceholder /></span>
              <span><FcMms /></span>
              <span><FcStart /></span>
            </div>
          </div>
          <div class="room__card__details">
            <h4>Spacious Serenity Suite</h4>
            <p>
              Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.
            </p>
            <h5>Starting from <span>Rs. 1500/night</span></h5>
            <a href="https://wa.link/at5ion">
              <button class="btn">BOOK NOW</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
