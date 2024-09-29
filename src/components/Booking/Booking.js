import React from 'react';
import './Booking.css';

function Booking(){
    return(
        <section className="section__container banner__container">
        <div className="banner__content">
          <div className="banner__card">
            <h4>100+</h4>
            <p>Bookings Completed</p>
          </div>
          <div className="banner__card">
            <h4>150+</h4>
            <p>Happy Customers</p>
          </div>
        </div>
      </section>
    );
};
export default Booking;