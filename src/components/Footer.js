import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SocialIcons from './SocialIcons';
import './Footer.css';

const Footer = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/surya-kalyan-b-dsa', 
      icon: '/image/linkedin.png',
      fallbackIcon: '💼',
      color: '#0077B5'
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/surya-kalyan', 
      icon: '/image/github logo.png',
      fallbackIcon: '🐙',
      color: '#333'
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/suryaa__kalyan/', 
      icon: '/image/instagram-new.png',
      fallbackIcon: '📷',
      color: '#E4405F'
    }
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
                className={`social-link social-link-${social.name.toLowerCase()}`}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit my ${social.name} profile`}
                aria-label={`Visit my ${social.name} profile`}
                whileHover={{ 
                  backgroundColor: social.color,
                  y: -8,
                  scale: 1.15,
                  rotate: [0, -5, 5, 0],
                  boxShadow: `0 15px 30px ${social.color}60`,
                  borderColor: social.color
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{ 
                  hover: { duration: 0.4, ease: "easeOut" },
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }
                }}
              >
                <div className="social-icon-container">
                  <img 
                    src={social.icon} 
                    alt={social.name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="svg-fallback" style={{ display: 'none' }}>
                    {social.name === 'LinkedIn' && <SocialIcons.LinkedIn size={24} color="#ffffff" />}
                    {social.name === 'GitHub' && <SocialIcons.GitHub size={24} color="#ffffff" />}
                    {social.name === 'Instagram' && <SocialIcons.Instagram size={24} color="#ffffff" />}
                  </div>
                </div>
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