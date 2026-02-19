import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Photography.css';

const Photography = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [showGallery, setShowGallery] = useState(false);

  const photos = [
    { id: 1, title: 'Portrait', media: '/photography/photo_1.jpg', type: 'image', category: 'Portrait' },
    { id: 2, title: 'Landscape', media: '/photography/photo_2.jpg', type: 'image', category: 'Landscape' },
    { id: 3, title: 'Nature', media: '/photography/photo_3.jpg', type: 'image', category: 'Nature' },
    { id: 4, title: 'Architecture', media: '/photography/photo_4.jpg', type: 'image', category: 'Architecture' },
    { id: 5, title: 'Moment', media: '/photography/20250907_155832.jpg', type: 'image', category: 'Candid' },
    { id: 6, title: 'Scene', media: '/photography/20250907_164053.jpg', type: 'image', category: 'Scene' },
    { id: 7, title: 'Sunset', media: '/photography/20250919_064806.jpg', type: 'image', category: 'Landscape' },
    { id: 8, title: 'Detail', media: '/photography/20250919_064818.jpg', type: 'image', category: 'Detail' },
    { id: 9, title: 'Perspective', media: '/photography/20250919_085329.jpg', type: 'image', category: 'Perspective' },
    { id: 10, title: 'Golden Hour', media: '/photography/20251120_135913.jpg', type: 'image', category: 'Golden Hour' },
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

  useEffect(() => {
    const element = document.getElementById('photography');
    if (element) {
      if (showGallery) {
        element.classList.add('show');
      } else {
        element.classList.remove('show');
      }
    }
  }, [showGallery]);

  const closeGallery = () => {
    setShowGallery(false);
  };

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
    <section id="photography" className="photography" ref={null}>
      <div className="container">
        <div className="gallery-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={showGallery ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Photography Gallery
          </motion.h2>
          <button className="gallery-close-btn" onClick={closeGallery}>×</button>
        </div>
        <motion.p 
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          animate={showGallery ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A collection of my photography and videography work across various genres.
        </motion.p>

        <motion.div 
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          animate={showGallery ? "visible" : "hidden"}
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
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Photography;
