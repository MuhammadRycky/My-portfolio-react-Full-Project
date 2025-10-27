import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>About Me</h2>
        <p>I’m Garuda Pro, a creative Youtuber and passionate developer who loves combining design and technology to tell stories online.</p>
      </motion.div>
    </section>
  );
};

export default About;
