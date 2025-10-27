import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>My Projects</motion.h2>
      <motion.div
        className="projects-grid"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="project-card">Project 1</div>
        <div className="project-card">Project 2</div>
        <div className="project-card">Project 3</div>
      </motion.div>
    </section>
  );
};

export default Projects;
