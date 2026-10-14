
import React, { useState } from 'react';
import './QuickEnquiry.css';
import ScrollReveal from './ScrollReveal';

const QuickEnquiry = () => {
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({
    show: false,
    success: false,
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const form = e.currentTarget;
    setLoading(true);

    try {
      const formData = new FormData(form);

      const response = await fetch(
        'https://formsubmit.co/ajax/atulchauhann125@gmail.com',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json'
          },
          body: formData
        }
      );

      const result = await response.json();

      if (!response.ok || result.success !== 'true') {
        throw new Error('Enquiry could not be submitted.');
      }

      form.reset();

      setPopup({
        show: true,
        success: true,
        message: 'Thank you! Your enquiry has been submitted successfully.'
      });
    } catch (error) {
      console.error('Enquiry error:', error);

      setPopup({
        show: true,
        success: false,
        message: 'Something went wrong. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="qe-section" id="enquiry">
      <div className="qe-container">

        <div className="qe-header">
          <ScrollReveal animation="fade-up">
            <p className="qe-eyebrow">QUICK ENQUIRY.</p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="qe-title">Want more information?</h2>
          </ScrollReveal>
        </div>

        <form className="qe-form" onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="_subject"
            value="New Enquiry - Sudharshan Infra"
          />

          <input
            type="hidden"
            name="_template"
            value="table"
          />

          <div className="qe-grid">
            <ScrollReveal animation="fade-right" delay={100}>
              <input
                type="text"
                name="name"
                className="qe-input"
                placeholder="Your full name"
                autoComplete="name"
                maxLength={100}
                required
              />
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={100}>
              <input
                type="email"
                name="email"
                className="qe-input"
                placeholder="your@email.com"
                autoComplete="email"
                maxLength={254}
                required
              />
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={200}>
              <input
                type="tel"
                name="phone"
                className="qe-input"
                placeholder="Your phone number"
                autoComplete="tel"
                maxLength={20}
                required
              />
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <select
                className="qe-select"
                name="project_type"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a project type
                </option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Interior Fit-out">Interior Fit-out</option>
                <option value="Renovation">Renovation</option>
              </select>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-up" delay={300}>
            <div className="qe-full-width">
              <textarea
                className="qe-textarea"
                name="message"
                placeholder="Project Details"
                rows={5}
                maxLength={3000}
                required
              />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={400}>
            <button
              type="submit"
              className="qe-btn"
              disabled={loading}
            >
              {loading ? 'SENDING...' : (
                <>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  GET A CALL BACK
                </>
              )}
            </button>
          </ScrollReveal>
        </form>
      </div>

      {popup.show && (
        <div
          className="qe-popup-overlay"
          onClick={() => setPopup({ ...popup, show: false })}
        >
          <div
            className="qe-popup"
            role="alertdialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={popup.success ? 'qe-popup-icon success' : 'qe-popup-icon error'}>
              {popup.success ? '✓' : '✕'}
            </div>

            <h3>{popup.success ? 'Thank You!' : 'Oops!'}</h3>
            <p>{popup.message}</p>

            <button
              type="button"
              className="qe-popup-btn"
              onClick={() => setPopup({ ...popup, show: false })}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default QuickEnquiry;
