import React from "react";
import { motion } from "framer-motion";
import "../App.css";

export default function About() {
  return (
    <section className="about">
      <div className="overlay"></div>

      <motion.div
        className="content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Main Heading */}
        <motion.h1
          className="main-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          About Us
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          className="sub-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Who We Are
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Welcome to our brand new local fitness center! Our gym is designed to
          provide a modern and welcoming environment for anyone looking to
          improve their health and achieve their fitness goals.
          
        </motion.p>
      </motion.div>
    </section>
  );
}