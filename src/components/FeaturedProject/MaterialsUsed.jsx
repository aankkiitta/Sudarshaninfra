// src/components/FeaturedProject/MaterialsUsed.jsx
import React, { useRef, useState, useEffect, useCallback } from 'react';
import Icon from '../Icon';
import ScrollReveal from '../ScrollReveal';
import './MaterialsUsed.css';

const CATEGORY_ICON_MAP = {
  "Flooring": "flooring",
  "Furniture": "carpentry",
  "False Ceiling": "ceiling",
  "Painting": "paint",
  "Windows": "glass",
  "Glass": "glass",
  "Partitions": "glass",
  "Bathroom": "plumbing",
  "Plumbing": "plumbing",
  "Electrical": "electrical",
  "Lighting": "electrical",
  "Security": "security",
  "Waterproofing": "waterproofing",
  "HVAC": "hvac",
  "Fire": "fire",
  "Kitchen": "kitchen",
  "Kitchen Counter": "civil",
  "Wardrobes": "carpentry",
  "TV Unit": "carpentry",
  "Fittings": "civil",
  "Sofa": "carpentry",
  "Wall Finish": "paint",
  "Center Table": "carpentry",
  "Elevators": "civil",
};

const MaterialsUsed = ({ project }) => {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const materials = project?.materials || [];
  const getCategoryIcon = (label) => CATEGORY_ICON_MAP[label] || 'layers';

  const looped = [...materials, ...materials];

  const scrollToCard = useCallback((index) => {
    const track = trackRef.current;
    if (!track || !track.children[index]) return;
    const card = track.children[index];
    track.scrollTo({
      left: card.offsetLeft - track.offsetLeft,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    if (isPaused || materials.length === 0) return;
    const id = setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
      const cardWidth = track.children[0]?.offsetWidth + 20 || 200;
      const nextIndex = (activeIndex + 1) % materials.length;

      if (nextIndex === 0) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
      setActiveIndex(nextIndex);
    }, 3000);
    return () => clearInterval(id);
  }, [isPaused, activeIndex, materials.length]);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.children[0]?.offsetWidth + 20 || 200;
    const idx = Math.round(track.scrollLeft / cardWidth);
    setActiveIndex(idx % materials.length);
  };

  if (!project || materials.length === 0) return null;

  return (
    <section className="mu-section">
      <div className="mu-container">

        <div className="mu-header">
          <ScrollReveal animation="fade-up">
            <h2 className="mu-title">Materials Used</h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100}>
            <p className="mu-desc">
              Premium quality materials used in this project.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fade-up" delay={200}>
          <div
            className="mu-slider"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div
              className="mu-track"
              ref={trackRef}
              onScroll={handleScroll}
            >
              {looped.map((item, i) => (
                <div className="mu-card" key={i}>
                  <div className="mu-icon">
                    <Icon name={getCategoryIcon(item.category)} size={36} />
                  </div>
                  <span className="mu-category">{item.category}</span>
                  <span className="mu-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={300}>
          <div className="mu-controls">
            <button
              className="mu-arrow"
              onClick={() => scrollToCard(Math.max(0, activeIndex - 1))}
              aria-label="Previous"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              className="mu-arrow"
              onClick={() => scrollToCard(Math.min(materials.length - 1, activeIndex + 1))}
              aria-label="Next"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default MaterialsUsed;