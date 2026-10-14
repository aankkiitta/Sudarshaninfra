// src/components/FeaturedProject/SimilarProjects.jsx
import React, { useState, useEffect } from 'react';
import PortfolioCard from '../PortfolioCard';
import { featuredProjects } from '../../data/featured-project-data';
import './SimilarProjects.css';

const SimilarProjects = ({ currentProjectId }) => {
  const [itemsPerView, setItemsPerView] = useState(3);
  const [startIndex, setStartIndex] = useState(0);

  // Filter similar projects
  const projects = featuredProjects.filter(p => p.id !== currentProjectId);

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width <= 768) setItemsPerView(1);
      else if (width <= 992) setItemsPerView(2);
      else setItemsPerView(3);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, projects.length - itemsPerView);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleProjects = projects.slice(startIndex, startIndex + itemsPerView);

  if (projects.length === 0) return null;

  return (
    <section className="sp-section">
      <div className="sp-container">

        {/* Header — Desktop: Left Title + Right View More | Mobile: Stack */}
        <div className="sp-header">
          <h2 className="sp-title">Similar Projects</h2>

          <a href="#projects" className="sp-view-more desktop-only">
            View More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        {/* Slider Wrapper */}
        <div className="sp-slider">

          {/* Left Arrow (Mobile Only) */}
          <button 
            className="sp-arrow sp-arrow-left"
            onClick={handlePrev}
            disabled={startIndex === 0}
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Cards Grid */}
          <div className={`sp-grid sp-grid-${itemsPerView}`}>
            {visibleProjects.map((project) => (
              <PortfolioCard 
                key={project.id}
                id={project.id}
                image={project.image}
                tag={project.tag}
                title={project.title}
                description={project.description}
                buttonText="View Project"
              />
            ))}
          </div>

          {/* Right Arrow (Mobile Only) */}
          <button 
            className="sp-arrow sp-arrow-right"
            onClick={handleNext}
            disabled={startIndex >= maxIndex}
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

        </div>

        {/* View More — Mobile Only (Below Cards) */}
        <div className="sp-view-more-wrap mobile-only">
          <a href="#projects" className="sp-view-more">
            View More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default SimilarProjects;