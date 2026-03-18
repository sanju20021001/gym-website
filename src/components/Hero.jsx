import React from "react";
import "../App.css"; 
import hero from "../assets/hero.jpg"; // import the image

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Transform Your Body. <br /> Transform Your Life.
        </h1>
        <p>
          Train harder. Get stronger. <br /> Achieve your goals!
        </p>
        <div className="hero-buttons">
          <button className="hero-btn">Get Started</button>
          <button className="hero-btn1">Watch Reviews</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;