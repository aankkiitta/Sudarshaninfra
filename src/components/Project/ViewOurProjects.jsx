// src/components/Project/ViewOurProjects.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PortfolioCard from '../PortfolioCard';
import ScrollReveal from '../ScrollReveal';
import { featuredProjects } from '../../data/featured-project-data';
import './ViewOurProjects.css';

const ViewOurProjects = () => {
  const [itemsPerView, setItemsPerView] = useState(3);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width <= 640) setItemsPerView(1);
      else if (width <= 992) setItemsPerView(2);
      else setItemsPerView(3);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, featuredProjects.length - itemsPerView);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleProjects = featuredProjects.slice(startIndex, startIndex + itemsPerView);

  return (
    <section className="vop-section">
      <div className="vop-container">

        <div className="vop-header">
          <div className="vop-header-left">
            <ScrollReveal animation="fade-left">
              <span className="vop-tag">Our Work</span>
            </ScrollReveal>
            <ScrollReveal animation="fade-left" delay={100}>
              <h2 className="vop-title">
                View Our <span className="highlight">Projects</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-right" delay={200}>
            <div className="vop-header-right">
              <Link to="/projects" className="vop-view-all">
                View All Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <div className="vop-slider">

          <div className={`vop-grid vop-grid-${itemsPerView}`}>
            {visibleProjects.map((project, i) => (
              <ScrollReveal
                key={project.id}
                animation="fade-up"
                delay={i * 100}
              >
                <PortfolioCard 
                  id={project.id}
                  image={project.image}
                  tag={project.tag}
                  title={project.title}
                  description={project.description}
                  buttonText="View Project"
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="vop-controls">
              <button 
                className="vop-arrow" 
                onClick={handlePrev}
                disabled={startIndex === 0}
                aria-label="Previous"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <button 
                className="vop-arrow" 
                onClick={handleNext}
                disabled={startIndex >= maxIndex}
                aria-label="Next"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};

export default ViewOurProjects;