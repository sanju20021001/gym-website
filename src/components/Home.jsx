import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import hero from "../assets/hero.jpg";

import Services from "./Services";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      
      <section
        className="hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="overlay"></div>

        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            TRANSFORM YOUR BODY. <br /> TRANSFORM YOUR LIFE.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Train harder. Get stronger. <br /> Achieve your goals!
          </motion.h2>

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

      <Services />

    
      <section className="home-section dark membership-section">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Membership Plans
        </motion.h2>

        <div className="cards">
          {["Basic", "Standard", "Premium"].map((plan, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3>{plan}</h3>
              <p>
                {plan === "Basic" && "$20/month"}
                {plan === "Standard" && "$40/month"}
                {plan === "Premium" && "$60/month"}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

    
      <section className="home-section trainers-section">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Trainers
        </motion.h2>

        <div className="cards">
          {[
            "John - Strength Coach",
            "Lisa - Fitness Trainer",
            "Mike - Cardio Expert",
          ].map((trainer, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {trainer}
            </motion.div>
          ))}
        </div>
      </section>

      <Contact />
    </>
  );
};

export default Home;