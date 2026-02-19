import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const contactInfo = [
    { icon: '📱', text: '+91 95667 30611', link: 'tel:+919566730611' },
    { icon: '✉️', text: 'suryakalyan54@gmail.com', link: 'mailto:suryakalyan54@gmail.com' },
    { icon: '🌐', text: 'LinkedIn', link: 'https://www.linkedin.com/in/surya-kalyan-b-dsa' },
    { icon: '📍', text: 'Sargunaveethi Street, Nagercoil, Tamil Nadu, India, 629001', link: null }
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Contact Me
          </motion.h2>
          <motion.p className="about-text" variants={itemVariants}>
            Let's connect! Reach out for collaborations, project discussions, or just to say hello.
          </motion.p>
          
          <motion.div 
            className="contact-form-container"
            variants={itemVariants}
          >
            <div className="contact-info">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  className="contact-item"
                  variants={itemVariants}
                  whileHover={{ 
                    backgroundColor: "rgba(255, 0, 89, 0.15)",
                    scale: 1.05,
                    x: 10,
                    borderRadius: "15px"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  <div className="contact-icon">{item.icon}</div>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      target={item.link.startsWith('http') ? '_blank' : '_self'}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      style={{ color: 'inherit' }}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;