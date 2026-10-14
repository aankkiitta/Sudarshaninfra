// src/components/FeaturedProject/FeaturedProjectOverview.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProjectOverview.css';

const FeaturedProjectOverview = ({ project }) => {
  if (!project) return null;

  return (
    <section className="fp-hero">
      
      {/* Background Image */}
      <img 
        src={project.heroImage || project.image} 
        alt={project.title}
        className="fp-hero-bg"
      />
      
      {/* Dark Overlay */}
      <div className="fp-hero-overlay"></div>

      {/* Content */}
      <div className="fp-hero-content">
        
        {/* Breadcrumb */}
        <div className="fp-breadcrumb">
          <Link to="/">HOME</Link>
          <span className="fp-sep">/</span>
          <Link to="/#projects">PROJECTS</Link>
          <span className="fp-sep">/</span>
          <span className="fp-current">{project.title.toUpperCase()}</span>
        </div>

 
        {/* Title */}
        <h1 className="fp-hero-title">{project.title}</h1>

        {/* Meta Info Row */}
        <div className="fp-hero-meta">
          
          <div className="fp-meta-item">
            <span className="fp-meta-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <span>{project.location}</span>
          </div>

          <div className="fp-meta-item">
            <span className="fp-meta-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </span>
            <span>{project.year}</span>
          </div>

          <div className="fp-meta-item">
            <span className="fp-meta-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
              </svg>
            </span>
            <span>{project.type}</span>
          </div>

          <div className="fp-meta-item">
            <span className="fp-meta-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            </span>
            <span>{project.size}</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectOverview;