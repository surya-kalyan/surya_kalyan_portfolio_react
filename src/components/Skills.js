import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const skills = [
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      ), 
      title: 'Programming', 
      list: 'Python, JavaScript, HTML',
      color: '#3776ab'
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ), 
      title: 'AI & ML', 
      list: 'Deep Learning, Neural Networks, NLP, LLM, Predictive Modeling',
      color: '#ff6b35'
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
        </svg>
      ), 
      title: 'Frameworks', 
      list: 'TensorFlow, Pandas, NumPy, Matplotlib',
      color: '#ff9500'
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ), 
      title: 'AI Platforms', 
      list: 'Microsoft Copilot Studio, Google Gemini, OpenAI GPT, Prompt Engineering',
      color: '#00d4ff'
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ), 
      title: 'Data Tools', 
      list: 'Power BI, Data Visualization, AutoML, Statistical Analysis',
      color: '#f7df1e'
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
          <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
        </svg>
      ), 
      title: 'Databases', 
      list: 'MongoDB, Database Design, Data Management',
      color: '#4db33d'
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
          <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z"/>
        </svg>
      ), 
      title: 'Web Development', 
      list: 'Django, Full-Stack Development, APIs',
      color: '#61dafb'
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01 1l-2.41 3.19c-.32.42-.48.92-.48 1.43V20h2v-5.5h1.5V20H20zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-6H10l-2.54-7.63A1.5 1.5 0 0 0 6.04 8H3.5c-.8 0-1.54.37-2.01 1L-.92 12.19c-.32.42-.48.92-.48 1.43V22h2v-5.5H2V22h5.5z"/>
        </svg>
      ), 
      title: 'Soft Skills', 
      list: 'Team Leadership, Communication, Problem Solving',
      color: '#e91e63'
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
        </svg>
      ), 
      title: 'Photography', 
      list: 'Portrait, Landscape, Event Photography',
      color: '#ff1744',
      hasButton: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        delay: 0.2,
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={cardVariants}>
            Skills
          </motion.h2>
          <motion.p className="about-text" variants={cardVariants}>
            A comprehensive overview of my technical skills and competencies.
          </motion.p>
        
          <div className="skills-container">
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="skill-category"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -20,
                    scale: 1.08,
                    rotateY: 5,
                    boxShadow: `0 20px 40px ${skill.color}40`,
                    borderColor: skill.color
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                  style={{
                    '--skill-color': skill.color
                  }}
                >
                  <motion.div 
                    className="skill-icon"
                    variants={iconVariants}
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </motion.div>
                  <motion.h3 
                    className="skill-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  >
                    {skill.title}
                  </motion.h3>
                  <motion.p 
                    className="skill-list"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  >
                    {skill.list}
                  </motion.p>
                  {skill.hasButton && (
                    <motion.a
                      href="https://www.instagram.com/surya_kalyan_photography/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-photos-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ marginTop: '12px', display: 'inline-block' }}
                    >
                      View Photos
                    </motion.a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
