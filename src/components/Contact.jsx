import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";
import emailjs from "emailjs-com";
import "../App.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);

      try {
        await emailjs.send(
          "service_h315ggs",     
          "template_xceya6g",   
          formData,
          "HoUWQ_IU4Yxy347tP"      
        );

        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setSubmitted(false), 3000);
      } catch (error) {
        alert("Failed to send message. Try again.");
      }

      setLoading(false);
    } else {
      setErrors(newErrors);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      className="simple-contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* HEADER */}
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Contact Us
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Have questions? We'd love to hear from you.
        </motion.p>
      </motion.div>

      {/* SUCCESS MESSAGE */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            className="success-message"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            ✅ Thank you! Your message has been sent.
          </motion.div>
        )}
      </AnimatePresence>

      {/* FORM */}
      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* NAME */}
        <motion.div className="form-group" variants={fadeInUp}>
          <label>
            <FaUser className="form-icon" /> Name
          </label>

          <motion.input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error" : ""}
            whileFocus={{ scale: 1.02 }}
          />

          <AnimatePresence>
            {errors.name && (
              <motion.span
                className="error-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {errors.name}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {/* EMAIL */}
        <motion.div className="form-group" variants={fadeInUp}>
          <label>
            <FaEnvelope className="form-icon" /> Email
          </label>

          <motion.input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
            whileFocus={{ scale: 1.02 }}
          />

          <AnimatePresence>
            {errors.email && (
              <motion.span className="error-text">
                {errors.email}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {/* MESSAGE */}
        <motion.div className="form-group" variants={fadeInUp}>
          <label>
            <FaComment className="form-icon" /> Message
          </label>

          <motion.textarea
            name="message"
            rows="5"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "error" : ""}
            whileFocus={{ scale: 1.02 }}
          />

          <AnimatePresence>
            {errors.message && (
              <motion.span className="error-text">
                {errors.message}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {/* BUTTON */}
        <motion.button
          type="submit"
          className="submit-btn"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;