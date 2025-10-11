import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Education.css';

const Education = () => {
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
    <section id="education" className="education" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={cardVariants}>
            Education
          </motion.h2>
          <motion.p className="about-text" variants={cardVariants}>
            My academic foundation in computer science and data science.
          </motion.p>
          
          <motion.div 
            className="education-card"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(255, 0, 89, 0.2)"
            }}
          >
            <span className="education-period">2023 - 2026</span>
            <h3 className="education-degree">B.Sc. Computer Science - Data Science & Analytics</h3>
            <p className="education-school">Subbalakshmi Lakshmipathy College of Science, Madurai, Tamil Nadu</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;