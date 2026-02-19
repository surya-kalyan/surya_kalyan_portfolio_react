import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TypingAnimation from './TypingAnimation';
import './Hero.css';

const Hero = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="container">
        <motion.div 
          className="hero-container"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="hero-content" variants={itemVariants}>
            <motion.h4 
              className="hero-subtitle"
              variants={itemVariants}
            >
              Welcome to my portfolio
            </motion.h4>
            <motion.h1 
              className="hero-title"
              variants={itemVariants}
            >
              Hi, I'm <span>Surya Kalyan B</span><br />
              <TypingAnimation 
                texts={['AI Developer', 'Data analyst']}
                speed={50}
                deleteSpeed={30}
                pauseTime={1500}
              />
            </motion.h1>
            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              An enthusiastic and engaging Data Science fresher with expertise in machine learning, 
              statistical analysis, and data visualization. Proven ability to lead teams and deliver 
              high-impact AI solutions with strong problem-solving capabilities.
            </motion.p>
            <motion.div 
              className="hero-buttons"
              variants={itemVariants}
            >
              <motion.button 
                className="primary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </motion.button>
              <motion.a 
                href="https://drive.google.com/file/d/1R3XXVNVeviWJrIBgQ_XG_ut1iEm8_jNo/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Resume
              </motion.a>
              <motion.button 
                className="secondary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            variants={itemVariants}
          >
            <motion.img 
              src="/image/surya pfp.jpg" 
              alt="Surya Kalyan B"
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                boxShadow: "0 25px 60px rgba(255, 0, 89, 0.4)"
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                hover: { duration: 0.3 }
              }}
            />
            <motion.div 
              className="hero-name-tag"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <h3>SURYA KALYAN B</h3>
              <p>AI Developer & Data analyst</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;