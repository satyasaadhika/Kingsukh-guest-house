import React from 'react';
import './Contact.css';
import Location from '../../assets/location.png';
import Email from '../../assets/mail.png';
import Phone from '../../assets/call.png';
import Facebook from '../../assets/f.png';
import Insta from '../../assets/3.png';
import Twitter from '../../assets/2.png';
import Link from '../../assets/5.png';

function Contact(){
    return(
    <section id="contact" className="section1">
        <div className="container1">
            <div className="contactInfo1"> 
                <div>
                    <h2>Contact Info</h2>
                    <ul className="info">
                        <li>
                            <span><img src={Location} alt="Address icon" /></span>
                            <span>Beside Barshal Water Tank,<br/>
                              Manpur, Barhanti,<br/>
                              West Bengal 723156</span>
                        </li>
                        <li>
                            <span><img src={Email} alt="Email icon" /></span>
                            <span><a href = "#">kkghosh0099@gmail.com</a></span>
                        </li>
                        <li>
                            <span><img src={Phone} alt="Phone icon" /></span>
                            <span><a href="#"> +91 9007062180 </a></span>
                        </li>
                    </ul>
                </div>
                <ul className="sci">
                    <li><a href="#"><img src={Facebook} alt="Social icon 1" /></a></li>
                    <li><a href="#" target="_blank"><img src={Insta} alt="Social icon 2" /></a></li>
                    <li><a href="#"><img src={Twitter} alt="Social icon 3" /></a></li>
                    <li><a href="#"><img src={Link} alt="Social icon 4" /></a></li>
                </ul>
            </div>
            <div className="contactForm1">
                <h2>Send a Message</h2>
                <div className="formBox1">
                    <div className="inputBox1 w50">
                        <input type="text" name="firstName" required />
                        <span>First Name</span>
                    </div>
                    <div className="inputBox1 w50">
                        <input type="text" name="lastName" required />
                        <span>Last Name</span>
                    </div>
                    <div className="inputBox1 w50">
                        <input type="email" name="email" required />
                        <span>Email Address</span>
                    </div>
                    <div className="inputBox1 w50">
                        <input type="text" name="mobileNumber" required />
                        <span>Mobile Number</span>
                    </div>
                    <div className="inputBox1 w100">
                        <textarea name="message" required></textarea>
                        <span>Write your message here...</span>
                    </div>
                    <div className="inputBox1 w100">
                        <input type="submit" value="Send" />
                    </div>
                </div>
            </div> 
        </div>
    </section>
    );
};
export default Contact;
