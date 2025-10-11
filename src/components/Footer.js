import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Footer.css';

const Footer = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/surya-kalyan-b-dsa', icon: '/image/linkedin.png' },
    { name: 'GitHub', url: 'https://github.com/surya-kalyan', icon: '/image/github logo.png' },
    { name: 'Instagram', url: 'https://www.instagram.com/suryaa__kalyan/', icon: '/image/instagram logo.jpeg' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            className="social-links"
            variants={itemVariants}
          >
            {socialLinks.map((social, index) => (
              <motion.a 
                key={index}
                href={social.url} 
                className="social-link" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  backgroundColor: "#ff0059",
                  y: -8,
                  scale: 1.2,
                  rotate: 360,
                  boxShadow: "0 10px 25px rgba(255, 0, 89, 0.4)"
                }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{ 
                  hover: { duration: 0.6 },
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }
                }}
              >
                <img src={social.icon} alt={social.name} />
              </motion.a>
            ))}
          </motion.div>
          
          <motion.p 
            className="footer-text"
            variants={itemVariants}
          >
            &copy; 2025 Surya Kalyan B. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;