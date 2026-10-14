// src/components/Project/HeroProject.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HeroProject.css';

const HeroProject = ({ title, subtitle }) => {
  return (
    <section className="hp-hero">
      <div className="hp-content">

        {/* Title */}
        <h1 className="hp-title">{title}</h1>

        {/* Subtitle */}
        {subtitle && <p className="hp-sub">{subtitle}</p>}

        {/* Breadcrumb */}
        <div className="hp-breadcrumb">
          <Link to="/">Home</Link>
          <span className="hp-sep">›</span>
          <Link to="/#services">Services</Link>
          <span className="hp-sep">›</span>
          <span className="hp-current">{title}</span>
        </div>

      </div>
    </section>
  );
};

export default HeroProject;