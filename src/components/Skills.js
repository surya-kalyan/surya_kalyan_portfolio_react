import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const skills = [
    { icon: '💻', title: 'Programming', list: 'Python, JavaScript, HTML' },
    { icon: '🤖', title: 'AI & ML', list: 'Deep Learning, Neural Networks, NLP, LLM, Predictive Modeling' },
    { icon: '🔧', title: 'Frameworks', list: 'TensorFlow, Pandas, NumPy, Matplotlib' },
    { icon: '🚀', title: 'AI Platforms', list: 'Microsoft Copilot Studio, Google Gemini, OpenAI GPT, Prompt Engineering' },
    { icon: '📊', title: 'Data Tools', list: 'Power BI, Data Visualization, AutoML, Statistical Analysis' },
    { icon: '🗄️', title: 'Databases', list: 'MongoDB, Database Design, Data Management' },
    { icon: '🌐', title: 'Web Development', list: 'Django, Full-Stack Development, APIs' },
    { icon: '💼', title: 'Soft Skills', list: 'Team Leadership, Communication, Problem Solving' }
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
                    y: -15,
                    scale: 1.05,
                    rotate: [0, -2, 2, 0],
                    boxShadow: "0 15px 35px rgba(255, 0, 89, 0.3)",
                    borderColor: "rgba(255, 0, 89, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    duration: 0.3,
                    rotate: { duration: 0.6 }
                  }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <h3 className="skill-title">{skill.title}</h3>
                  <p className="skill-list">{skill.list}</p>
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