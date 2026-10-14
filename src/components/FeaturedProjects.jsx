// src/components/FeaturedProjects.jsx
import React, { useState } from 'react';
import './FeaturedProjects.css';
import PortfolioCard from './PortfolioCard';
import ScrollReveal from './ScrollReveal';
import { featuredProjects } from '../data/featured-project-data';

const FeaturedProjects = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const handleViewMore = () => setVisibleCount((prev) => prev + 3);

  const visibleProjects = featuredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < featuredProjects.length;

  return (
    <section className="fp-section" id="projects">
      <div className="fp-container">

        <div className="fp-header">
          <div className="fp-header-left">
            <ScrollReveal animation="fade-left">
              <p className="fp-eyebrow">FEATURED PROJECTS.</p>
            </ScrollReveal>
            <ScrollReveal animation="fade-left" delay={100}>
              <h2 className="fp-title">Where happiness lives</h2>
            </ScrollReveal>
          </div>
          <ScrollReveal animation="fade-right" delay={200}>
            <div className="fp-header-right">
              <a href="#all-projects" className="fp-view-all">
                <span className="fp-arrow">→</span> VIEW ALL PROJECTS
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="fp-grid">
          {visibleProjects.map((project, i) => (
            <ScrollReveal key={project.id} animation="fade-up" delay={i * 100}>
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

        {hasMore && (
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="fp-view-more-wrap">
              <button className="fp-view-more-btn" onClick={handleViewMore}>
                View More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </button>
            </div>
          </ScrollReveal>
        )}

      </div>
    </section>
  );
};

export default FeaturedProjects;