import React, { useState } from "react";
import { motion } from "framer-motion";
import "../App.css";
import hero from "../assets/hero.jpg";



import Services from "./Services";
import Contact from "./Contact";

const Home = () => {
  const [trainerSearch, setTrainerSearch] = useState(""); 
  const [planSearch, setPlanSearch] = useState(""); 


  const membershipPlans = [
  {
    name: "Basic",
    price: "$20/month",
    features: ["Gym access", "1 group class/week", "Basic support"],
    duration: "Monthly",
    perks: ["Locker access", "Free water bottle"]
  },
  {
    name: "Standard",
    price: "$40/month",
    badge: "Most Popular",
    features: ["Gym & pool access", "3 group classes/week", "Priority support"],
    duration: "Monthly",
    perks: ["Locker access", "Towel service", "Free consultation"]
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
    duration: "Monthly",
    perks: ["Locker access", "Towel & spa service", "Nutrition guidance"]
  },
  {
    name: "Gold",
    price: "$80/month",
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
    image: "/images/john.jpg",
    experience: "10 years",
    specialty: "Weight training, muscle building",
    certifications: ["ACE Certified", "CSCS"]
  },
  {
    name: "Lisa",
    role: "Fitness Trainer",
    image: "/images/lisa.jpg",
    experience: "7 years",
    specialty: "HIIT, group fitness classes",
    certifications: ["NASM Certified", "Yoga Instructor"]
  },
  {
    name: "Mike",
    role: "Cardio Expert",
    image: "/images/mike.jpg",
    experience: "5 years",
    specialty: "Running, cycling, endurance training",
    certifications: ["ACE Certified", "Spinning Instructor"]
  },
  {
    name: "Sophia",
    role: "Yoga & Wellness Coach",
    image: "/images/sophia.jpg",
    experience: "8 years",
    specialty: "Yoga, mindfulness, flexibility",
    certifications: ["RYT-200 Yoga Instructor", "Meditation Coach"]
  },
  {
    name: "Daniel",
    role: "Nutrition & Fitness Coach",
    image: "/images/daniel.jpg",
    experience: "6 years",
    specialty: "Diet planning, weight management",
    certifications: ["Certified Nutritionist", "ACE Certified"]
  },
  {
    name: "Emma",
    role: "Functional Training Specialist",
    image: "/images/emma.jpg",
    experience: "9 years",
    specialty: "CrossFit, functional fitness, mobility",
    certifications: ["CrossFit Level 1", "Functional Training Specialist"]
  }
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

        {/* 🔍 Membership search */}
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

        {/* 🔍 Trainer search */}
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
    </>
  );
};

export default Home;