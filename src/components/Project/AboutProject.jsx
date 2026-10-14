// src/components/Project/AboutProject.jsx
import React from 'react';
import ScrollReveal from '../ScrollReveal';
import './AboutProject.css';

const AboutProject = ({ 
  aboutTitle,
  aboutDesc,
  image,
  features = []
}) => {
  return (
    <section className="about-project">
      <div className="about-project-container">
        
        {/* LEFT: Image */}
        <ScrollReveal animation="fade-right" delay={100}>
          <div className="about-project-left">
            <div className="about-project-image-wrap">
              <img 
                src={image} 
                alt={aboutTitle}
                className="about-project-image"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* RIGHT: Content */}
        <div className="about-project-right">
          
          <ScrollReveal animation="fade-left" delay={0}>
            <span className="about-project-tag">About Our Services</span>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-left" delay={100}>
            <h2 className="about-project-title">
              {aboutTitle}
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-right" delay={200}>
            <p className="about-project-desc">
              {aboutDesc}
            </p>
          </ScrollReveal>

          {/* Features from Data */}
          {features && features.length > 0 && (
            <ul className="about-project-features">
              {features.map((feat, i) => (
                <ScrollReveal 
                  key={i} 
                  animation="fade-up" 
                  delay={300 + i * 80}
                  as="li"
                >
                  <span className="about-check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  {feat}
                </ScrollReveal>
              ))}
            </ul>
          )}

        </div>

      </div>
    </section>
  );
};

export default AboutProject;