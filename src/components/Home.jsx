import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import hero from "../assets/hero.jpg";

import Services from "./Services";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
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

      {/* SERVICES */}
      <Services />

        {/* MEMBERSHIP PLANS */}
<section className="home-section dark membership-section">
  <motion.h2
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    Membership Plans
  </motion.h2>

  <div className="cards">
    {[
      {
        name: "Basic",
        price: "$20/month",
        features: ["Gym access", "1 group class/week", "Basic support"],
      },
      {
        name: "Standard",
        price: "$40/month",
        badge: "Most Popular",
        features: ["Gym & pool access", "3 group classes/week", "Priority support"],
      },
      {
        name: "Premium",
        price: "$60/month",
        badge: "Best Value",
        features: [
          "All-access pass",
          "Unlimited classes",
          "Personal trainer included",
          "Pool & spa access",
        ],
      },
    ].map((plan, index) => (
      <motion.div
        key={index}
        className={`card ${plan.badge ? "highlight" : ""}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
        transition={{ delay: index * 0.2 }}
      >
        {plan.badge && <div className="badge">{plan.badge}</div>}
        <h3>{plan.name}</h3>
        <p className="price">{plan.price}</p>
        <ul>
          {plan.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </motion.div>
    ))}
  </div>
</section>

{/* TRAINERS */}
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
      { name: "John", role: "Strength Coach", image: "/images/john.jpg" },
      { name: "Lisa", role: "Fitness Trainer", image: "/images/lisa.jpg" },
      { name: "Mike", role: "Cardio Expert", image: "/images/mike.jpg" },
    ].map((trainer, index) => (
      <motion.div
        key={index}
        className="card trainer-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
        transition={{ delay: index * 0.2 }}
      >
        <img src={trainer.image} alt={trainer.name} />
        <h3>{trainer.name}</h3>
        <p>{trainer.role}</p>
      </motion.div>
    ))}
  </div>
</section>

      {/* CONTACT */}
      <Contact />
    </>
  );
};

export default Home;