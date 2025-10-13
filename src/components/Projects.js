import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const projects = [
    {
      title: 'Titan Career Mate',
      tag: 'AI Chatbot',
      description: 'AI-Powered Career Guidance Chatbot developed using Microsoft Copilot Studio for Titan\'s organizational ecosystem with personalized career development guidance and skill recommendations.',
      tech: ['Microsoft Copilot Studio', 'AI Development', 'Enterprise Chatbot'],
      link: '#',
      linkText: 'Proprietary Project'
    },
    {
      title: 'Alpha Django',
      tag: 'Web App',
      description: 'Django web application with advanced backend functionality, user management system, and learning agents architecture for intelligent system behaviors with full-stack deployment.',
      tech: ['Django', 'Python', 'Google Gemini'],
      link: 'https://github.com/Mantissagithub/learning_agents/tree/main/alphadjango',
      linkText: 'View on GitHub'
    },
    {
      title: 'EvalAI',
      tag: 'NLP System',
      description: 'Intelligent NLP-powered evaluation system that automatically assesses student answers using semantic similarity, keyword coverage, and clarity metrics. Features multi-format support (JSON, Word, text), real-time analysis with Sentence Transformers, automated PDF report generation, and a modern web interface with comprehensive performance analytics.',
      tech: ['NLP', 'Sentence Transformers', 'Flask', 'NLTK', 'ReportLab'],
      link: 'https://github.com/surya-kalyan/EvalAI',
      linkText: 'View on GitHub'
    },
    {
      title: 'Fun Studio',
      tag: 'ML Platform',
      description: 'Movie recommendation & gaming platform with sophisticated recommendation system using 5,000+ movies dataset, TMDB APIs, interactive games, and cricket prediction analyzer.',
      tech: ['Machine Learning', 'TMDB API', 'Predictive Analytics'],
      link: '#',
      linkText: 'Unavailable right now'
    },
    {
      title: 'Data Sage',
      tag: 'AutoML',
      description: 'Interactive AutoML platform enabling automated dataset preprocessing and model evaluation with multiple ML algorithms including Logistic Regression, SVM, Random Forest, XGBoost, and Neural Networks.',
      tech: ['AutoML', 'Multiple Algorithms', 'Data Preprocessing'],
      link: 'https://github.com/surya-kalyan/Data_sage',
      linkText: 'View on GitHub'
    },
    {
      title: 'NeuroNote',
      tag: 'AI Insight',
      description: 'NeuroNote is an intelligent Flask-based web application that transcribes recorded meeting audio and generates structured insights using Google\'s Gemini API. It leverages OpenAI\'s Whisper model for accurate speech-to-text transcription and prompts Gemini to extract key meeting details, including summaries, action items, sentiment analysis, decisions, participant estimates, and follow-up topics.',
      tech: ['Flask', 'OpenAI Whisper', 'Google Gemini', 'REST API'],
      link: 'https://github.com/surya-kalyan/neuro_note',
      linkText: 'View on GitHub'
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={cardVariants}>
            Featured Projects
          </motion.h2>
          <motion.p className="about-text" variants={cardVariants}>
            A showcase of my key projects in AI development and data science.
          </motion.p>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="project-card"
                variants={cardVariants}
                whileHover={{ 
                  y: -12,
                  scale: 1.03,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(255, 0, 89, 0.2)",
                  borderColor: "rgba(255, 0, 89, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  rotateX: [0, 1, 0],
                }}
                transition={{ 
                  hover: { duration: 0.4 },
                  rotateX: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="project-image">
                  {project.title.toUpperCase()}
                  <div className="project-tag">{project.tag}</div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  {project.link.startsWith('http') ? (
                    <motion.a 
                      href={project.link} 
                      className="secondary-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {project.linkText}
                    </motion.a>
                  ) : (
                    <motion.button 
                      className="secondary-btn disabled"
                      disabled
                      whileHover={{ scale: 1.02 }}
                    >
                      {project.linkText}
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>        
    </section>
  );
};

export default Projects;