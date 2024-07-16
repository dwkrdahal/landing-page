import React from "react";
import Navbar from "./components/navbar1/Navbar";
// import Header from './components/Header';
import AboutUs from "./components/AboutUs";
import Slider from "./components/Slider";
import Services from "./components/Service";
import HeroSection from "./components/HeroSection";
// import Services from "./components/Services";

import "./index.css";
import About from "./About";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      {/* <Header /> */}

      {/* <Slider /> */}
      <HeroSection/>
      <Services />
      <About/>
      <AboutUs />

    </div>
  );
}

export default App;
