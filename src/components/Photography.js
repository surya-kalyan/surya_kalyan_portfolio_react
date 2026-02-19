import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Photography.css';

const Photography = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const photos = [
    { id: 1, title: 'Portrait', media: '/photography/photo_1.jpg', type: 'image', category: 'Portrait' },
    { id: 2, title: 'Landscape', media: '/photography/photo_2.jpg', type: 'image', category: 'Landscape' },
    { id: 3, title: 'Nature', media: '/photography/photo_3.jpg', type: 'image', category: 'Nature' },
    { id: 4, title: 'Architecture', media: '/photography/photo_4.jpg', type: 'image', category: 'Architecture' },
    { id: 5, title: 'Moment', media: '/photography/20250907_155832.jpg', type: 'image', category: 'Candid' },
    { id: 6, title: 'Scene', media: '/photography/20250907_164053.jpg', type: 'image', category: 'Scene' },
    { id: 7, title: 'Sunset', media: '/photography/20250919_064806.jpg', type: 'image', category: 'Landscape' },
    { id: 8, title: 'Perspective', media: '/photography/20250919_085329.jpg', type: 'image', category: 'Perspective' },
    { id: 9, title: 'Golden Hour', media: '/photography/20251120_135913.jpg', type: 'image', category: 'Golden Hour' },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedPhoto) return;
      if (e.key === 'Escape') setSelectedPhoto(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, currentIndex]);

  const openPhoto = (photo, index) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    setSelectedPhoto(photos[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setSelectedPhoto(photos[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const getMediaThumbnail = (photo) => {
    if (photo.type === 'video') {
      return photo.media.replace(/\.[^/.]+$/, '.jpg');
    }
    return photo.media;
  };

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
          A collection of my photography and videography work across various genres.
        </motion.p>

        <motion.div 
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="gallery-item"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              onClick={() => openPhoto(photo, index)}
            >
              <img src={getMediaThumbnail(photo)} alt={photo.title} />
              {photo.type === 'video' && <div className="video-badge">▶</div>}
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
              {selectedPhoto.type === 'image' ? (
                <img src={selectedPhoto.media} alt={selectedPhoto.title} />
              ) : (
                <video controls autoPlay className="lightbox-video">
                  <source src={selectedPhoto.media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <button className="close-btn" onClick={() => setSelectedPhoto(null)}>×</button>
              <button className="nav-btn prev-btn" onClick={handlePrev}>❮</button>
              <button className="nav-btn next-btn" onClick={handleNext}>❯</button>
              <div className="photo-info">
                <h3>{selectedPhoto.title}</h3>
                <p>{selectedPhoto.category}</p>
                <span className="photo-counter">{currentIndex + 1} / {photos.length}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Photography;
