import React from 'react';
import NavBar from './components/Nav/NavBar';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import Content from './components/Content/Content';
import Services from './components/Services/Service';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection/>
      <About/>
      <Content/>
      <Services/>
    </div>
  );
}

export default App;
