import React from 'react';
import logo from '../assets/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './NavBar.css'; 

function NavBar() {

  return (
    <nav className="navbar">
      <div className="navbar-logo">
       <a href="#"><img src={logo} alt="Logo" /><span>ingsukh Guest House</span></a>
      </div>

      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">Rooms</a></li>
        <li><a href="#about">Gallary</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button class="btn"><a href='#'>Book Now</a></button>
    </nav>
  );
}

export default NavBar;
