import React from 'react';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import youtube from '../../assets/youtube.png';
import twitter from '../../assets/twitter.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <div className="logo">
            <a href="#">
              <h4>Kingsukh Guest House</h4>
            </a>
          </div>
          <p className="section__description">
            Discover a world of comfort, luxury, and adventure as you explore
            our curated selection of hotels, making every moment of your getaway
            truly extraordinary.
          </p>
          <a href="#">
            <button className="btn">BOOK NOW</button>
          </a>
        </div>
        <div className="footer__col">
          <h4>QUICK LINKS</h4>
          <ul className="footer__links">
            <li><a href="#">Browse Destinations</a></li>
            <li><a href="#">Special Offers & Packages</a></li>
            <li><a href="#">Room Types & Amenities</a></li>
            <li><a href="#">Customer Reviews & Ratings</a></li>
            <li><a href="#">Travel Tips & Guides</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>OUR SERVICES</h4>
          <ul className="footer__links">
            <li><a href="#">Concierge Assistance</a></li>
            <li><a href="#">Flexible Booking Options</a></li>
            <li><a href="#">Airport Transfers</a></li>
            <li><a href="#">Wellness & Recreation</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>CONTACT US</h4>
          <ul className="footer__links">
            <li>
              <a href="#">
                Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
              </a>
            </li>
            <li><a href="#">kkghosh0099@gmail.com</a></li>
            <li><a href="#">+91 9007062180</a></li>
          </ul>
          <div className="footer__socials">
            <a href="#"><img src={facebook} alt="facebook" /></a>
            <a href="#"><img src={instagram} alt="instagram" /></a>
            <a href="#"><img src={youtube} alt="youtube" /></a>
            <a href="#"><img src={twitter} alt="twitter" /></a>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2024 Priyanshu Maurya. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
