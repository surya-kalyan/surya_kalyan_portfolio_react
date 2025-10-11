import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import OneTimeTyping from './OneTimeTyping';
import './About.css';

const About = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div 
          className="about-container"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            className="about-image"
            variants={imageVariants}
          >
            <motion.img 
              src="/image/surya_3.jpg" 
              alt="Surya Kalyan B"
              whileHover={{ 
                scale: 1.08,
                rotate: -2,
                filter: "brightness(1.1) contrast(1.1)"
              }}
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                hover: { duration: 0.4 },
                scale: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          </motion.div>
          
          <motion.div 
            className="about-content"
            variants={itemVariants}
          >
            <motion.h2 
              className="section-title"
              variants={itemVariants}
            >
              {inView && <OneTimeTyping text="About Me" speed={100} />}
            </motion.h2>
            <motion.p 
              className="about-text"
              variants={itemVariants}
            >
              I am a Data Science professional from Tamil Nadu, India, specializing in AI development, 
              machine learning, and data visualization. Currently pursuing B.Sc. Computer Science with 
              specialization in Data Science & Analytics.
            </motion.p>
            <motion.p 
              className="about-text"
              variants={itemVariants}
            >
              With hands-on experience in enterprise AI solutions at Titan Company Limited, I excel in 
              developing intelligent chatbots, automated systems, and personalized recommendation algorithms. 
              I'm passionate about creating AI tools that solve real-world problems and enhance user experiences.
            </motion.p>
            <motion.p 
              className="about-text"
              variants={itemVariants}
            >
              My interests extend beyond technology to creative arts including theater, acting, and dancing, 
              as well as sports like basketball and football. I enjoy hiking and travel, which fuel my 
              creativity and problem-solving approach.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;