import React, { useState } from "react";
import { motion } from "framer-motion";
import "../App.css";
import hero from "../assets/hero.jpg";
import john from "../assets/john.jpg";
import lisa from "../assets/lisa.jpg";
import mike from "../assets/mike.jpg";
import sophia from "../assets/sophia.jpg";


import Services from "./Services";
import Contact from "./Contact";
import About from "./About";

const Home = () => {
  const [trainerSearch, setTrainerSearch] = useState(""); 
  const [planSearch, setPlanSearch] = useState(""); 


  const membershipPlans = [
  {
    name: "Basic",
    price: "Rs 2000/= per month",
    features: ["Gym access", "1 group class/week", "Basic support"],
    duration: "Monthly",
    perks: ["Locker access", "Free water bottle"]
  },
  {
    name: "Standard",
    price: "Rs 4000/= per month",
    badge: "Most Popular",
    features: ["Gym & pool access", "3 group classes/week", "Priority support"],
    duration: "Monthly",
    perks: ["Locker access", "Towel service", "Free consultation"]
  },
  {
    name: "Premium",
    price: "Rs 6000/= per month",
    badge: "Best Value",
    features: [
      "All-access pass",
      "Unlimited classes",
      "Personal trainer included",
      "Pool & spa access",
    ],
    duration: "Monthly",
    perks: ["Locker access", "Towel & spa service", "Nutrition guidance"]
  },
  {
    name: "Gold",
    price: "Rs 8000/= per month",
    badge: "Elite Plan",
    features: ["All-access pass", "Unlimited classes", "2 personal training sessions/week", "Spa access", "Sauna access"],
    duration: "Monthly",
    perks: ["Priority support", "Custom diet plan", "Exclusive events"]
  },

];


  const trainers = [
  {
    name: "John",
    role: "Strength Coach",
    image: john,
  },
  {
    name: "Lisa",
    role: "Fitness Trainer",
    image: lisa,
  },
  {
    name: "Mike",
    role: "Cardio Expert",
    image: mike,
  },
  {
    name: "Sophia",
    role: "Yoga & Wellness Coach",
    image: sophia,
  },

  ];

  // Filter logic
  const filteredPlans = membershipPlans.filter(
    (plan) =>
      plan.name.toLowerCase().includes(planSearch.toLowerCase()) ||
      plan.price.toLowerCase().includes(planSearch.toLowerCase()) ||
      plan.features.some((feature) =>
        feature.toLowerCase().includes(planSearch.toLowerCase())
      )
  );

  const filteredTrainers = trainers.filter(
    (trainer) =>
      trainer.name.toLowerCase().includes(trainerSearch.toLowerCase()) ||
      trainer.role.toLowerCase().includes(trainerSearch.toLowerCase())
  );

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
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

       
        <input
          type="text"
          placeholder="Search Membership Plans..."
          value={planSearch}
          onChange={(e) => setPlanSearch(e.target.value)}
          className="search-input"
        />

        <div className="cards">
          {filteredPlans.length > 0 ? (
            filteredPlans.map((plan, index) => (
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
            ))
          ) : (
            <p>No membership plans found.</p>
          )}
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

        <input
          type="text"
          placeholder="Search Trainers..."
          value={trainerSearch}
          onChange={(e) => setTrainerSearch(e.target.value)}
          className="search-input"
        />

        <div className="cards">
          {filteredTrainers.length > 0 ? (
            filteredTrainers.map((trainer, index) => (
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
            ))
          ) : (
            <p>No trainers found.</p>
          )}
        </div>
      </section>

      {/* CONTACT */}
      <Contact />
       <About />
    </>
  );
};

export default Home;