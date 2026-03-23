import React from 'react';
import './Skills.css';
import { skillsData } from '../data';
import { motion } from 'framer-motion';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="skills-grid">
          {/* Languages */}
          <motion.div 
            className="skill-category glass-panel"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="category-title">Languages</h3>
            <div className="skill-tags">
              {skillsData.languages.map(skill => (
                <motion.span key={skill} variants={itemVariants} className="skill-tag">
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Frameworks */}
          <motion.div 
            className="skill-category glass-panel"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="category-title">Frameworks & Libraries</h3>
            <div className="skill-tags">
              {skillsData.frameworks.map(skill => (
                <motion.span key={skill} variants={itemVariants} className="skill-tag">
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div 
            className="skill-category glass-panel"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="category-title">Tools & Databases</h3>
            <div className="skill-tags">
              {skillsData.tools.map(skill => (
                <motion.span key={skill} variants={itemVariants} className="skill-tag">
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div 
            className="skill-category glass-panel"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="category-title">Soft Skills</h3>
            <div className="skill-tags">
              {skillsData.softSkills.map(skill => (
                <motion.span key={skill} variants={itemVariants} className="skill-tag">
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
