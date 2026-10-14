// src/components/Project/GetInTouch.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../ScrollReveal';
import './GetInTouch.css';

const GetInTouch = () => {
  return (
    <section className="git-section">
      <div className="git-container">

        {/* Tag */}
        <ScrollReveal animation="fade-up">
          <span className="git-tag">GET IN TOUCH</span>
        </ScrollReveal>

        {/* Title */}
        <ScrollReveal animation="fade-up" delay={100}>
          <h2 className="git-title">Want more information?</h2>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal animation="fade-up" delay={200}>
          <p className="git-desc">
            Have a project in mind? Reach out to us and our team will get back to you within 24 hours. We're here to help bring your vision to life.
          </p>
        </ScrollReveal>

        {/* Button */}
        <ScrollReveal animation="fade-up" delay={300}>
          <Link to="/#contact" className="git-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            GET A CALL BACK
          </Link>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default GetInTouch;