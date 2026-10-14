// src/components/Project/WhatsIncluded.jsx
import React, { useState, useEffect } from 'react';
import './WhatsIncluded.css';

const WhatsIncluded = ({ items = [] }) => {
  const [itemsPerView, setItemsPerView] = useState(5);
  const [startIndex, setStartIndex] = useState(0);

  // Agar items nahi aaye toh kuch mat dikhao
  if (!items || items.length === 0) return null;

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width <= 640) setItemsPerView(2);
      else if (width <= 992) setItemsPerView(3);
      else setItemsPerView(5);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => {
      const newIndex = prev - 1;
      if (newIndex < 0) return Math.max(0, items.length - itemsPerView);
      return newIndex;
    });
  };

  const handleNext = () => {
    setStartIndex((prev) => {
      const newIndex = prev + 1;
      if (newIndex + itemsPerView > items.length) return 0;
      return newIndex;
    });
  };

  const visibleItems = items.slice(startIndex, startIndex + itemsPerView);

  return (
    <section className="wi-section">
      <div className="wi-container">

        {/* Heading */}
        <div className="wi-header">
          <span className="wi-tag">Complete Package</span>
          <h2 className="wi-title">What's Included</h2>
          <p className="wi-desc">
            Our solutions include everything required to create a modern and efficient workspace.
          </p>
        </div>

        {/* Slider */}
        <div className="wi-slider">
          
          <div className={`wi-items wi-items-${itemsPerView}`}>
            {visibleItems.map((item, i) => (
              <div className="wi-card" key={`${startIndex}-${i}`}>
                
                <span className="wi-corner wi-corner-tl"></span>
                <span className="wi-corner wi-corner-br"></span>

                <p className="wi-item-text">{item}</p>

              </div>
            ))}
          </div>

          {/* Arrows */}
          <div className="wi-controls">
            <button 
              className="wi-arrow" 
              onClick={handlePrev}
              aria-label="Previous"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <button 
              className="wi-arrow" 
              onClick={handleNext}
              aria-label="Next"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhatsIncluded;