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
              Any questions?  We got you.
            </h2>

            <p className="faq-desc">
              Find answer to common question about our office Furniture solutions.
            </p>

         
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