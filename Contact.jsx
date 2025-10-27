import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Contact Me</h2>
        <p>Email: garudapro@example.com</p>
      </motion.div>
    </section>
  );
};

export default Contact;
