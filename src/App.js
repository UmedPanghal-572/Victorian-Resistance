import Header from "./components/Header";
import React from 'react'
import './App.css';
import About from "./components/About";
import Slider from "./components/SliderComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import Resistance from "./components/Resistance";
import CustomFaq from "./components/CustomFaq";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Slider />
      <CustomFaq/>
      <Resistance />
      <Footer />
    </div>
  )
}

export default App
