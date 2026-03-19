import React from "react";
import { motion } from "framer-motion";
import { 
  FaDumbbell, 
  FaHeart, 
  FaFire, 
  FaClock, 
  FaUserFriends,
  FaChartLine 
} from "react-icons/fa";
import "../App.css";

const services = [
  { 
    id: 1,
    title: "Personal Training", 
    desc: "One-on-one training for best results.",
    icon: <FaUserFriends />,
  },
  { 
    id: 2,
    title: "Weight Loss", 
    desc: "Burn fat and stay fit with expert plans.",
    icon: <FaHeart />,
  },
  { 
    id: 3,
    title: "Body Building", 
    desc: "Build muscle and gain strength.",
    icon: <FaDumbbell />,
  },
  {
    id: 4,
    title: "HIIT Classes",
    desc: "High-intensity interval training for maximum results.",
    icon: <FaFire />,
  },
  {
    id: 5,
    title: "Recovery & Wellness",
    desc: "Essential recovery techniques for optimal performance.",
    icon: <FaClock />,
  },
  {
    id: 6,
    title: "Performance Coaching",
    desc: "Advanced training for athletic performance.",
    icon: <FaChartLine />,
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Services = () => {
  return (
    <section className="services-simple">
      <div className="services-header-simple">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title-simple"
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-subtitle-simple"
        >
          Choose from our range of fitness services designed to help you achieve your goals
        </motion.p>
      </div>

      <motion.div
        className="service-cards-simple service-cards-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="service-card-simple service-card-grid"
            variants={item}
            whileHover={{ 
              y: -3,
              transition: { duration: 0.2 }
            }}
          >
            <div className="service-icon-simple">
              <span>{service.icon}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;