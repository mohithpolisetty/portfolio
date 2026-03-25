import React from 'react';
import './Hero.css';
import { personalData } from '../data';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import profilePic from '../assets/profilePic.jpg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Decorative Elements */}
      <div className="hero-bg-glow glow-1"></div>
      <div className="hero-bg-glow glow-2"></div>

      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="hero-greeting">
            Hello, I'm
          </motion.p>
          
          <motion.h1 variants={itemVariants} className="hero-title text-gradient">
            {personalData.name}
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="hero-subtitle">
            Crafting Digital Experiences
          </motion.h2>
          
          <motion.p variants={itemVariants} className="hero-description">
            A passionate Full-Stack Developer specialzing in scalable web applications, 
            interactive user interfaces, and robust backend architectures.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-buttons">
            <a href="/resume.pdf" download="Mohith_Resume.pdf" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Download CV <Download size={18} />
            </a>
            <a href="#projects" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              View My Work <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-socials">
            <a href={personalData.github} target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/mohith-polisetty-9247652a3/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a href={`mailto:${personalData.email}`} className="social-icon" aria-label="Email">
              <Mail />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-image-wrapper">
            <img src={profilePic} alt={personalData.name} className="hero-image" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
