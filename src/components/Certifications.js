import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Certifications.css';

const Certifications = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const certifications = [
    { title: 'AI Tools Certification', issuer: 'BE10x', year: '2025' },
    { title: 'Microsoft Power BI Certification', issuer: 'Certify TN', year: '2025' },
    { title: 'MongoDB Atlas', issuer: 'MongoDB', year: '2024' },
    { title: 'Database Workloads', issuer: 'MongoDB', year: '2024' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="certifications" className="certifications" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={cardVariants}>
            Certifications
          </motion.h2>
          <motion.p className="about-text" variants={cardVariants}>
            Professional certifications that enhance my expertise in data science and AI.
          </motion.p>
          
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                className="certification-card"
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 10px 25px rgba(255, 0, 89, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="certification-title">{cert.title}</h3>
                <div className="certification-issuer">
                  <span>{cert.issuer}</span>
                  <span>{cert.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;