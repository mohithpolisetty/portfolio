import React from 'react';
import './Experience.css';
import { educationData, trainingData, certificatesData } from '../data';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        
        {/* Education Section */}
        <h2 className="section-title">Education & Training</h2>
        <div className="timeline-container">
          
          <div className="timeline-column">
            <h3 className="timeline-title">
              <GraduationCap className="timeline-icon" /> Education Background
            </h3>
            <div className="timeline">
              {educationData.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="timeline-item glass-panel"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="timeline-dot"></div>
                  <h4 className="item-title">{item.degree}</h4>
                  <p className="item-subtitle">{item.institution} — {item.location}</p>
                  <span className="item-date">{item.date}</span>
                  <p className="item-score">{item.score}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="timeline-column">
            <h3 className="timeline-title">
              <BookOpen className="timeline-icon" /> Specialized Training
            </h3>
            <div className="timeline">
              {trainingData.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="timeline-item glass-panel"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="timeline-dot"></div>
                  <h4 className="item-title">{item.title}</h4>
                  <p className="item-subtitle">{item.institution}</p>
                  <span className="item-date">{item.date}</span>
                  <ul className="item-points">
                    {item.points.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Certificates Section */}
        <h3 className="timeline-title" style={{ marginTop: '5rem', justifyContent: 'center' }}>
          <Award className="timeline-icon" /> Certifications
        </h3>
        <div className="certificates-grid">
          {certificatesData.map((cert, index) => (
            <motion.div 
              key={index}
              className="certificate-card glass-panel"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Award className="cert-icon" />
              <div className="cert-content">
                <h4 className="cert-title">{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
              <span className="cert-date">{cert.date}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
