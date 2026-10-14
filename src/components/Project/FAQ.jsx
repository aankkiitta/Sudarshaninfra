// src/components/Project/FAQ.jsx
import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal';
import './FAQ.css';

const FAQ = ({ faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">

        {/* LEFT: Sticky wrapper */}
        <div className="faq-left">
          <div className="faq-left-inner">
            <h2 className="faq-title">
              Any questions?<br />
              We got you.
            </h2>

            <p className="faq-desc">
              Find answer to common question about our office Furniture solutions.
            </p>

            <a href="#contact" className="faq-link">
              More FAQs
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT: Accordion */}
        <div className="faq-right">
          {faqs.map((item, i) => (
            <ScrollReveal
              key={i}
              animation="fade-up"
              delay={i * 100}
            >
              <div className={`faq-item ${openIndex === i ? 'open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(i)}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon">
                    {openIndex === i ? '−' : '+'}
                  </span>
                </button>

                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;