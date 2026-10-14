// src/components/FeaturedProject/ProjectInfo.jsx
import React from 'react';
import ScrollReveal from '../ScrollReveal';
import './ProjectInfo.css';

const ProjectInfo = ({ project }) => {
  if (!project) return null;

  const details = project.details || [];

  return (
    <section className="pi-section">
      <div className="pi-container">

        <div className="pi-left">
          <ScrollReveal animation="fade-left">
            <span className="pi-tag">Details</span>
          </ScrollReveal>
          <ScrollReveal animation="fade-left" delay={100}>
            <h2 className="pi-title">Project Information</h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-right" delay={200}>
            <p className="pi-desc">
              Complete specifications and key data for this project.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fade-up" delay={200}>
          <div className="pi-right">
            <div className="pi-table">
              {details.map((item, i) => (
                <div className="pi-row" key={i}>
                  <div className="pi-label">{item.label}</div>
                  <div className="pi-value">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default ProjectInfo;