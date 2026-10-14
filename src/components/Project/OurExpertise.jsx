// src/components/Project/OurExpertise.jsx
import React from 'react';
import Icon from '../Icon';
import ScrollReveal from '../ScrollReveal';
import './OurExpertise.css';

const OurExpertise = ({ tag, title, description, items = [] }) => {
  return (
    <section className="our-expertise">
      <div className="our-expertise-container">

        <div className="our-expertise-header">
          <ScrollReveal animation="fade-up">
            <span className="oe-tag">{tag}</span>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="oe-title">{title}</h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="oe-desc">{description}</p>
          </ScrollReveal>
        </div>

        <div className="oe-grid">
          {items.map((item, i) => (
            <ScrollReveal
              key={i}
              animation="fade-up"
              delay={i * 100}
            >
              <div className="oe-card">
                <div className="oe-icon-wrap">
                  <div className="oe-icon">
                    <Icon name={item.iconName} size={26} />
                  </div>
                </div>

                <div className="oe-content">
                  <h3 className="oe-card-title">{item.title}</h3>
                  <p className="oe-card-desc">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurExpertise;