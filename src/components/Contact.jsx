import React from 'react';
import './Contact.css';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <ScrollReveal animation="fade-up">
          <div className="contact-header">
            <h2 className="contact-title">
              <span className="title-text">Contact Us</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="contact-grid">

          <ScrollReveal animation="fade-up" delay={100}>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="contact-text">
                <h4>Phone</h4>
                <p><a href="tel:+919867474721">+91 98674 74721</a></p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <p><a href="mailto:chauhan.ramvilas@gmail.com">chauhan.ramvilas@gmail.com</a></p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-text">
                <h4>Address</h4>
                <p> Dombivli, Maharashtra</p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Contact;