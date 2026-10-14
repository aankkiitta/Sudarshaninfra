// src/components/Services.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { servicesData } from '../data/services-data';
import ScrollReveal from './ScrollReveal';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();

  const handleKnowMore = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <section className="services-section" id="services">
      <div className="services-container">

        <div className="services-header">
          <ScrollReveal animation="fade-up">
            <p className="services-eyebrow">Our Services</p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="services-title">Complete Project Solutions</h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="services-desc">
              From planning and execution to maintenance, we provide reliable, high-quality infrastructure and interior solutions tailored to your needs.
            </p>
          </ScrollReveal>
        </div>

        <div className="services-grid">
          {servicesData.map((item, i) => (
            <ScrollReveal
              key={item.id}
              animation="fade-up"
              delay={i * 100}
            >
              <div
                className="service-card"
                onClick={() => handleKnowMore(item.id)}
              >
                <div
                  className="service-card-bg"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="service-card-overlay"></div>

                <div className="service-card-inner">
                  <span className="service-num">{item.number}</span>
                  <h3 className="service-card-title">{item.title}</h3>
                  <p className="service-card-desc">{item.shortDesc}</p>

                  <button
                    className="service-know-more"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleKnowMore(item.id);
                    }}
                  >
                    KNOW MORE →
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;