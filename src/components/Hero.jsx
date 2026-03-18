import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="overlay"></div>

      <div className="hero-content">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          TRANSFORM YOUR BODY. <br /> TRANSFORM YOUR LIFE.
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Train harder. Get stronger. <br /> Achieve your goals!
        </motion.h2>

        {/* Buttons */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="hero-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            GET STARTED
          </motion.button>

          <motion.button
            className="hero-btn1"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            WATCH REVIEWS
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;