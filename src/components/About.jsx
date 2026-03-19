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
          We are a modern fitness center built for people who want real results.
          Our expert trainers, high-quality equipment, and focused programs help
          you train smarter, get stronger, and stay consistent.
        </motion.p>
      </motion.div>
    </section>
  );
}