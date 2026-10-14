import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';
import ReviewModal from './ReviewModal'; // ⚠️ Ensure this file exists

const testimonials = [
  {
    review: `“ Working with the team was an amazing experience. They understood exactly what I wanted and turned the idea into something even better than I imagined. ”`,
    name: "JUSTIN BURCH",
    role: "BRAND CLIENT"
  },
  {
    review: `“ From the first conversation to the final delivery, everything was smooth and professional. The attention to detail was genuinely impressive. ”`,
    name: "SARAH WILLIAMS",
    role: "BUSINESS OWNER"
  },
  {
    review: `“ They didn't just build what I asked for. They understood the vision behind it and created something that actually felt like my brand. ”`,
    name: "MICHAEL JOHNSON",
    role: "FOUNDER"
  },
  {
    review: `“ Creative ideas, quick communication and beautiful execution. The entire process felt simple and enjoyable from beginning to end. ”`,
    name: "EMILY CARTER",
    role: "CREATIVE DIRECTOR"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  const changeReview = (index) => {
    if (index === currentIndex) return;
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsVisible(true);
    }, 250);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % testimonials.length;
      changeReview(nextIndex);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const currentReview = testimonials[currentIndex];

  // Button JSX
  const ReviewButton = () => (
    <button
      type="button"
      className="drop-review-btn"
      onClick={() => setShowModal(true)}
    >
      Drop a Review
      <svg 
        width="18" 
        height="18" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </button>
  );

  return (
    <>
       <section className="testimonial-section" id="testimonials" ref={sectionRef}>
        {/* LEFT SIDE */}
        <div className="testimonial-header">
          {/* 👇 Naya Chhota Title */}
          <p className={`testimonial-eyebrow ${inView ? 'anim-title' : ''}`}>
            TESTIMONIALS.
          </p>
          
          <h2 className={`testimonial-title ${inView ? 'anim-title' : ''}`}>
            What Our Clients Say
          </h2>
          <p className={`testimonial-subtitle ${inView ? 'anim-subtitle' : ''}`}>
            Real stories from real people who trusted us with their vision.
          </p>

          {/* Desktop Button */}
          <div className={`btn-wrapper desktop-btn-wrapper ${inView ? 'anim-btn' : ''}`}>
            <ReviewButton />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={`testimonial-wrapper ${inView ? 'anim-card' : ''}`}>
          <div className="testimonial-card">
            <div className="quote quote-top">“</div>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <p className={`review ${isVisible ? 'visible' : 'hidden'}`}>
              {currentReview.review}
            </p>
            <div className="customer">
              <div className="customer-name">{currentReview.name}</div>
              <span className="customer-role">{currentReview.role}</span>
            </div>
            <div className="quote quote-bottom">“</div>
          </div>

          <div className="controls">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => changeReview(index)}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Button */}
          <div className={`btn-wrapper mobile-btn-wrapper ${inView ? 'anim-btn' : ''}`}>
            <ReviewButton />
          </div>
        </div>
      </section>

      {/* Modal */}
      <ReviewModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}