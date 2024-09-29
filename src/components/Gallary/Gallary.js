import React from 'react';
import './Gallary.css';
import Img1 from '../../assets/out.jpg';
import Img2 from '../../assets/ayodhya.webp';
import Img3 from '../../assets/large.jpg';
import Img4 from '../../assets/palash.webp';
import Img5 from '../../assets/small.jpg';
import Img6 from '../../assets/baranti.webp';
import Img7 from '../../assets/recep.jpg';
import Img8 from '../../assets/flower.jpg';
import Img9 from '../../assets/room1.jpg';
import Img10 from '../../assets/mithonDam.webp';
import Img11 from '../../assets/header.jpg';

function Gallary() {
  return (
    <section id="gallary">
      <div className="about__content">
        <p className="section__subheader">GALLERY</p>
      </div>
      <br />
      <div className="container11">
        <div className="box11 a"><img src={Img1} alt="Outside view" /></div>
        <div className="box11 b"><img src={Img2} alt="Ayodhya scenery" /></div>
        <div className="box11 c"><img src={Img3} alt="Large area view" /></div>
        <div className="box11 d"><img src={Img4} alt="tree  view" /></div>
        <div className="box11 e"><img src={Img5} alt="Small house view" /></div>
        <div className="box11 f"><img src={Img6} alt="Baranti" /></div>
        <div className="box11 g"><img src={Img7} alt="Reception area" /></div>
        <div className="box11 h"><img src={Img8} alt="Flower garden" /></div>
        <div className="box11 j"><img src={Img9} alt="Room " /></div>
        <div className="box11 i"><img src={Img10} alt="Mithon Dam view" /></div>
        <div className="box11 k"><img src={Img11} alt="view" /></div>
      </div>
    </section>
  );
}

export default Gallary;
