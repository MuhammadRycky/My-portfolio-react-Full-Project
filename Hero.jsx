import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Hello, I'm Garuda Pro 👋</h2>
        <p>Youtuber | Content Creator | Web Developer</p>
      </motion.div>
    </section>
  );
};

export default Hero;
