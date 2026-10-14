// src/components/Project/WorkingProcess.jsx
import React from 'react';
import ScrollReveal from '../ScrollReveal';
import './WorkingProcess.css';

const processData = [
  {
    number: "01",
    title: "Site Inspection & Consultation",
    desc: "We assess your site requirements, understand your needs, and identify the right maintenance or infrastructure solutions.",
    icon: (
      <svg className="card-icon" viewBox="0 0 50 50">
        <circle cx="20" cy="19" r="12"/>
        <path d="M29 28 L42 43"/>
        <path d="M27 28 L31 32"/>
      </svg>
    )
  },
  {
    number: "02",
    title: "Planning & Coordination",
    desc: "We plan the scope of work, coordinate resources, and prepare for efficient execution with minimal disruption.",
    icon: (
      <svg className="card-icon" viewBox="0 0 50 50">
        <path d="M17 30 Q9 23 14 15 Q17 9 25 10 Q34 10 36 19 Q38 26 32 30 L32 36 H19 V30"/>
        <path d="M20 40 H31 M23 44 H28"/>
        <path d="M25 2 V6 M8 10 L12 14 M42 10 L38 14 M7 25 H11 M39 25 H43"/>
        <path d="M22 18 L25 22 L29 17 L29 27"/>
      </svg>
    )
  },
  {
    number: "03",
    title: "Execution & Maintenance",
    desc: "Our team carries out electrical, carpentry, plumbing, civil, and interior works according to the project requirements.",
    icon: (
      <svg className="card-icon" viewBox="0 0 50 50">
        <path d="M8 29 L21 16 Q31 7 40 9 Q42 19 33 29 L20 41 L17 31 Z"/>
        <circle cx="31" cy="19" r="4"/>
        <path d="M17 31 L10 33 L8 40 L18 36"/>
        <path d="M25 36 L29 42 L36 32"/>
      </svg>
    )
  },
  {
    number: "04",
    title: "Quality Check & Support",
    desc: "We inspect completed work, conduct preventive maintenance, and provide ongoing support to keep facilities running smoothly.",
    icon: (
      <svg className="card-icon" viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="17"/>
        <circle cx="25" cy="25" r="11"/>
        <circle cx="25" cy="25" r="5"/>
        <path d="M25 25 L39 10 M32 10 H39 V17"/>
        <path d="M25 8 V12 M8 25 H12 M25 38 V42 M38 25 H42"/>
      </svg>
    )
  }
];

const CircuitSVG = () => (
  <svg className="circuit" viewBox="0 0 250 260" preserveAspectRatio="none">
    <path d="M95 4 H213 Q225 4 225 19 V139"/>
    <circle cx="95" cy="4" r="4"/>
    <circle cx="225" cy="139" r="4"/>
    <path d="M95 4 l-7 -7 M95 4 l-7 7 M88 4 l-7 -7 M88 4 l-7 7"/>
    <path d="M8 122 V238 Q8 254 24 254 H176"/>
    <circle cx="8" cy="122" r="5"/>
    <path d="M176 254 l-7 -7 M176 254 l-7 7 M184 254 l-7 -7 M184 254 l-7 7"/>
  </svg>
);

const WorkingProcess = () => {
  return (
    <section className="infographic-section">
      {/* Header */}
      <div className="wp-header">
        <ScrollReveal animation="fade-up">
          <span className="wp-tag">Our Process</span>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={100}>
          <h2 className="wp-title">Working Process</h2>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={200}>
          <p className="wp-desc">
            A streamlined process ensuring quality, efficiency, and timely project delivery.
          </p>
        </ScrollReveal>
      </div>

      <div className="cards-container">
        {processData.map((item, i) => (
          <ScrollReveal
            key={i}
            animation="fade-up"
            delay={i * 120}
          >
            <article className="info-card" tabIndex="0">
              <CircuitSVG />

              <div className="card-box">
                <h2 className="card-heading">{item.title}</h2>
                <p className="card-description">{item.desc}</p>
                {item.icon}
              </div>

              <span className="card-number">{item.number}</span>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default WorkingProcess;