import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Certifications.css';

const Certifications = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    { title: 'AI Tools Certification', issuer: 'BE10x', year: '2025' },
    { title: 'Microsoft Power BI Certification', issuer: 'Certify TN', year: '2025' },
    { title: 'MongoDB Atlas', issuer: 'MongoDB', year: '2024' },
    { title: 'Database Workloads', issuer: 'MongoDB', year: '2024' },
    { title: 'MongoDB Basics for Students', issuer: 'MongoDB', year: '2025' },
    { title: 'Python Programming Fundamentals', issuer: 'Infosys Springboard', year: '2024' },
    { title: 'Introduction to Data Science', issuer: 'Infosys Springboard', year: '2026' },
    { title: 'Introduction to Natural Language Processing', issuer: 'Infosys Springboard', year: '2026' },
    { title: 'Introduction to Artificial Intelligence', issuer: 'Infosys Springboard', year: '2026' },
    { title: 'Introduction to Deep Learning', issuer: 'Infosys Springboard', year: '2026' },
    { title: 'Computer Vision 101', issuer: 'Infosys Springboard', year: '2026' },
    { title: 'Introduction to Robotic Process Automation', issuer: 'Infosys Springboard', year: '2026' },
    { title: 'Introduction to OpenAI GPT Models', issuer: 'Infosys Springboard', year: '2026' },
    { title: 'OpenAI Generative Pre-trained Transformer 3 (GPT-3) for Developers', issuer: 'Infosys Springboard', year: '2026' }
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
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
                  boxShadow: "0 10px 25px rgba(255, 0, 89, 0.2)",
                  cursor: "pointer"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCert(cert)}
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

      <AnimatePresence>
        {selectedCert && (
          <>
            <motion.div
              className="modal-backdrop"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setSelectedCert(null)}
            />
            <motion.div
              className="cert-modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button 
                className="modal-close"
                onClick={() => setSelectedCert(null)}
              >
                ✕
              </button>
              <div className="cert-modal-content">
                <h2>{selectedCert.title}</h2>
                <div className="cert-details">
                  <div className="cert-detail-item">
                    <span className="cert-label">Issuer:</span>
                    <span className="cert-value">{selectedCert.issuer}</span>
                  </div>
                  <div className="cert-detail-item">
                    <span className="cert-label">Year:</span>
                    <span className="cert-value">{selectedCert.year}</span>
                  </div>
                </div>
                {selectedCert.pdf && (
                  <div className="cert-pdf-viewer">
                    <iframe
                      src={`/certificates/${selectedCert.pdf}`}
                      title={selectedCert.title}
                      className="pdf-iframe"
                    />
                  </div>
                )}
                {selectedCert.pdf && (
                  <a 
                    href={`/certificates/${selectedCert.pdf}`}
                    download
                    className="cert-download-btn"
                  >
                    Download Certificate
                  </a>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
