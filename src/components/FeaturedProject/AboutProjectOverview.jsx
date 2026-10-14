// src/components/FeaturedProject/AboutProjectOverview.jsx
import React from 'react';
import Icon from '../Icon';
import ScrollReveal from '../ScrollReveal';
import './AboutProjectOverview.css';

const AboutProjectOverview = ({ project }) => {
  if (!project) return null;

  const features = project.features || [];
  const stats = project.stats || [];
  const paragraphs = project.aboutParagraphs || [
    project.aboutDesc || "Welcome to Sudharshan Infra..."
  ];

  return (
    <section className="apo-section">
      <div className="apo-container">

        <div className="apo-left">
          <ScrollReveal animation="fade-left">
            <h2 className="apo-title">
              {project.aboutTitle || "A Sculptural Urban Sanctuary"}
            </h2>
          </ScrollReveal>

          {paragraphs.map((para, i) => (
            <ScrollReveal key={i} animation="fade-right" delay={100 + i * 80}>
              <p className="apo-desc">{para}</p>
            </ScrollReveal>
          ))}

          {features.length > 0 && (
            <ul className="apo-features">
              {features.map((feature, i) => (
                <ScrollReveal
                  key={i}
                  animation="fade-up"
                  delay={300 + i * 100}
                  as="li"
                >
                  <span className="apo-feature-icon">
                    <Icon name={feature.icon} size={45} color="#1e293b" />
                  </span>
                  <span className="apo-feature-text">
                    <strong>{feature.title}</strong> {feature.desc}
                  </span>
                </ScrollReveal>
              ))}
            </ul>
          )}
        </div>

        <ScrollReveal animation="zoom-in" delay={200}>
          <div className="apo-right">
            <div className="apo-stats-card">
              {stats.map((stat, i) => (
                <div className="apo-stat" key={i}>
                  <span className="apo-stat-value">{stat.value}</span>
                  <span className="apo-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default AboutProjectOverview;