import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={cardVariants}>
            Experience
          </motion.h2>
          <motion.p className="about-text" variants={cardVariants}>
            My journey in AI development and data science.
          </motion.p>
          
          <motion.div 
            className="experience-card"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(255, 0, 89, 0.2)"
            }}
          >
            <span className="experience-period">May 2025 - June 2025</span>
            <h3 className="experience-role">AI Developer Intern</h3>
            <p className="experience-company">Titan Company Limited, Bengaluru, Karnataka</p>
            <ul className="experience-list">
              <li>Developed intelligent AI solutions and chatbots using Microsoft Copilot Studio for enterprise applications</li>
              <li>Worked on Titan Career Mate project to assist employees in exploring organizational ecosystem and career development</li>
              <li>Implemented personalized career guidance systems and skill recommendation algorithms</li>
              <li>Developed Alpha Django, a tool that automates the creation of complete Django projects orchestrating Google Gemini 2.5 models (flash and pro)</li>
              <li>Gained hands-on experience in low-code/no-code AI development platforms and enterprise chatbot deployment</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;