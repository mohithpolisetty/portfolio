import React from 'react';
import './Projects.css';
import { projectsData } from '../data';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.title}
              className="project-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-date">{project.date}</span>
              </div>
              
              <ul className="project-points">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              
              <div className="project-footer">
                <div className="project-tech">
                  {project.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href="#" className="project-link" aria-label="Github Repo">
                    <Github size={20} />
                  </a>
                  <a href="#" className="project-link" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
