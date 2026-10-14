import React from 'react';
import './About.css';
import aboutImg from '../image/logo.png';
import ScrollReveal from './ScrollReveal';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <ScrollReveal animation="zoom-in" delay={0}>
          <div className="about-logo">
            <img src={aboutImg} alt="Sudharshan Infra Logo" />
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={100}>
          <p className="about-eyebrow">ABOUT US</p>
        </ScrollReveal>

        <ScrollReveal animation="fade-left" delay={200}>
          <h2 className="about-heading">
            WELCOME TO <br />
            <span className="about-heading-highlight">SUDHARSHAN INFRA</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-right" delay={300}>
          <h3 className="about-tagline">
            Building <span className="golden-text">Trust</span> Through Excellence
          </h3>
        </ScrollReveal>

        <ScrollReveal animation="fade-right" delay={400}>
          <p className="about-desc">
            Sudharshan Infra is a trusted infrastructure and turnkey contracting company delivering innovative solutions for commercial and residential projects. With expertise in interior fit-outs, civil works, electrical, plumbing, office furniture, maintenance, and renovation services, we are committed to quality, safety, and timely project delivery.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={500}>
          <a href="#contact" className="about-cta-btn">
            Get a Free Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default About;