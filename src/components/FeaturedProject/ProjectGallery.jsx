// src/components/FeaturedProject/ProjectGallery.jsx
import React, { useState, useEffect } from 'react';
import ScrollReveal from '../ScrollReveal';
import './ProjectGallery.css';

const ProjectGallery = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const cardsPerView = 3;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - cardsPerView : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => prev >= images.length - cardsPerView ? 0 : prev + 1);
  };

  const visibleImages = images.slice(currentIndex, currentIndex + cardsPerView);

  const openLightbox = (index) => { setLightboxIndex(index); setLightboxOpen(true); };
  const closeLightbox = () => setLightboxOpen(false);
  const lightboxPrev = () => setLightboxIndex((p) => (p === 0 ? images.length - 1 : p - 1));
  const lightboxNext = () => setLightboxIndex((p) => (p === images.length - 1 ? 0 : p + 1));

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') lightboxPrev();
      if (e.key === 'ArrowRight') lightboxNext();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen, lightboxIndex]);

  return (
    <>
      <section className="pg-section">
        <div className="pg-container">

          <ScrollReveal animation="fade-up">
            <h2 className="pg-title">Project Gallery</h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <div className="pg-slider">
              <button className="pg-arrow pg-arrow-left" onClick={handlePrev} aria-label="Previous">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <div className="pg-grid">
                {visibleImages.map((image, i) => (
                  <div className="pg-card" key={`${currentIndex}-${i}`} onClick={() => openLightbox(currentIndex + i)}>
                    <img src={image.src || image} alt={image.label || `Gallery ${i + 1}`} />
                    {image.label && <div className="pg-label">{image.label}</div>}
                    {i === 0 && <span className="pg-dot"></span>}
                  </div>
                ))}
              </div>

              <button className="pg-arrow pg-arrow-right" onClick={handleNext} aria-label="Next">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {lightboxOpen && (
        <div className="pg-lightbox" onClick={closeLightbox}>
          <button className="pg-lightbox-close" onClick={closeLightbox} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="pg-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="pg-lightbox-arrow pg-lightbox-arrow-left" onClick={lightboxPrev} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <img
              key={lightboxIndex}
              src={images[lightboxIndex].src || images[lightboxIndex]}
              alt={images[lightboxIndex].label || 'Gallery'}
              className="pg-lightbox-img"
            />

            <button className="pg-lightbox-arrow pg-lightbox-arrow-right" onClick={lightboxNext} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          <div className="pg-thumbnails" onClick={(e) => e.stopPropagation()}>
            {images.map((img, i) => (
              <button
                key={i}
                className={`pg-thumb ${i === lightboxIndex ? 'active' : ''}`}
                onClick={() => setLightboxIndex(i)}
                aria-label={`View ${img.label || i + 1}`}
              >
                <img src={img.src || img} alt={img.label || `Thumb ${i + 1}`} />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectGallery;