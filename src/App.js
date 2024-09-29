import React from 'react';
import NavBar from './components/Nav/NavBar';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import Content from './components/Content/Content';
import Services from './components/Services/Service';
import Booking from './components/Booking/Booking';
import Gallary from './components/Gallary/Gallary';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection/>
      <About/>
      <Content/>
      <Services/>
      <Booking/>
      <Gallary/>
      <Contact/>
    </div>
  );
}

export default App;
