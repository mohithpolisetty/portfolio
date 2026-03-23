import React from 'react';
import './Contact.css';
import { personalData } from '../data';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-wrapper">
          <motion.div 
            className="contact-info glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="contact-heading">Let's Connect</h3>
            <p className="contact-desc">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Mail size={24} />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${personalData.email}`}>{personalData.email}</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Phone size={24} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href={`tel:${personalData.mobile}`}>{personalData.mobile}</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4>Location</h4>
                  <span>Andhra Pradesh, India</span>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href={personalData.github} target="_blank" rel="noreferrer" className="social-btn">
                <Github /> <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/mohith-polisetty-9247652a3/" target="_blank" rel="noreferrer" className="social-btn">
                <Linkedin /> <span>LinkedIn</span>
              </a>
            </div>
            
            <div className="contact-footer-text">
              <p>Designed & Built by {personalData.name}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
