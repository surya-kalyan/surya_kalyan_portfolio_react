import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Photography.css';

const Photography = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    { id: 1, title: 'Portrait', image: '/photography/photo1.jpg', category: 'Portrait' },
    { id: 2, title: 'Landscape', image: '/photography/photo2.jpg', category: 'Landscape' },
    { id: 3, title: 'Event', image: '/photography/photo3.jpg', category: 'Event' },
    { id: 4, title: 'Nature', image: '/photography/photo4.jpg', category: 'Nature' },
    { id: 5, title: 'Street', image: '/photography/photo5.jpg', category: 'Street' },
    { id: 6, title: 'Architecture', image: '/photography/photo6.jpg', category: 'Architecture' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="photography" className="photography" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Photography Gallery
        </motion.h2>
        <motion.p 
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A collection of my photography work across various genres.
        </motion.p>

        <motion.div 
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              className="gallery-item"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <img src={photo.image} alt={photo.title} />
              <div className="photo-overlay">
                <h3>{photo.title}</h3>
                <p>{photo.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {selectedPhoto && (
          <motion.div 
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedPhoto.image} alt={selectedPhoto.title} />
              <button className="close-btn" onClick={() => setSelectedPhoto(null)}>×</button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Photography;
