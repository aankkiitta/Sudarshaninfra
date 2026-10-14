// src/components/Project/WhyChooseUs.jsx
import React, { useState } from 'react';
import Icon from '../Icon';
import ScrollReveal from '../ScrollReveal';
import './WhyChooseUs.css';

const whyChooseData = [
  {
    icon: "workstation",
    title: "High Quality Products",
    desc: "The luxurious and exquisite design harmonious with the surrounding architecture provide optimal comfort, modernity and the best living conditions for every family.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200"
  },
  {
    icon: "tools",
    title: "Premium Craftsmanship",
    desc: "High-grade materials and finishes ensuring durability, comfort, and long-lasting performance for years to come in every project we deliver.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
  },
  {
    icon: "conference",
    title: "Expert Team",
    desc: "Experienced professionals delivering precision, craftsmanship, and attention to every single detail throughout the entire project journey.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200"
  },
  {
    icon: "building",
    title: "Modern Architecture",
    desc: "Functional and contemporary designs that enhance productivity, aesthetics, and overall living experience for every space we craft.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
  }
];

const WhyChooseUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? whyChooseData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === whyChooseData.length - 1 ? 0 : prev + 1));
  };

  const current = whyChooseData[currentIndex];

  return (
    <section className="wcu-section">
      <div className="wcu-wrapper">

        {/* Header */}
        <div className="wcu-header">
          <ScrollReveal animation="fade-up">
            <span className="wcu-tag">Why Choose Us</span>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="wcu-main-title">Why Choose Sudharshan Infra</h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="wcu-main-desc">
              Your trusted partner for innovative, high-quality, and turnkey office interior solutions.
            </p>
          </ScrollReveal>
        </div>

        {/* Slider */}
        <div className="wcu-slider">

          {/* LEFT: Image (20% hidden) */}
          <ScrollReveal animation="fade-right" delay={100}>
            <div className="wcu-left">
              <img 
                key={currentIndex}
                src={current.image} 
                alt={current.title}
                className="wcu-image"
              />
            </div>
          </ScrollReveal>

          {/* RIGHT: Content */}
          <div className="wcu-right">
            
            <ScrollReveal animation="fade-left" delay={100}>
              <div className="wcu-icon">
                <Icon name={current.icon} size={40} color="#7a1f1f" />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <h3 className="wcu-title">{current.title}</h3>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={300}>
              <p className="wcu-desc">{current.desc}</p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400}>
              <div className="wcu-controls">
                <button 
                  className="wcu-arrow" 
                  onClick={handlePrev}
                  aria-label="Previous"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>

                <button 
                  className="wcu-arrow" 
                  onClick={handleNext}
                  aria-label="Next"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;