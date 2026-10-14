// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css';
import heroBg from '../image/hero-bg3.jpg';
import ScrollReveal from './ScrollReveal';

const HeroSection = () => {
  return (
    <section className="jmh-hero" id="top">
      <ScrollReveal animation="zoom-in" duration={1400} className="jmh-hero__bg-wrap">
        <img src={heroBg} alt="Hero Background" className="jmh-hero__bg-img" />
      </ScrollReveal>

      <div className="jmh-hero__overlay"></div>

      <div className="jmh-hero__content">
        <ScrollReveal animation="fade-left" delay={0}>
          <p className="jmh-hero__eyebrow">Trusted Infrastructure & Interior Solutions</p>
        </ScrollReveal>

        <ScrollReveal animation="fade-left" delay={150}>
          <h1 className="jmh-hero__title">
            Building Excellence.<br />
            Delivering Quality Every Step.
          </h1>
        </ScrollReveal>

        <ScrollReveal animation="fade-right" delay={300}>
          <p className="jmh-hero__sub">
            Sudharshan Infra provides complete turnkey infrastructure and interior solutions including civil construction, electrical works, plumbing, office interiors, false ceilings, painting, renovations, maintenance, and customized furniture for residential and commercial projects.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={500}>
          <div className="hero-buttons">
            <button className="hero-btn btn-red">Get Free Consultation</button>
            <button className="hero-btn btn-cream">View Projects</button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;