// src/components/Clients.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Clients.css';
import ScrollReveal from './ScrollReveal';

import dspMutualFund from "../image/dspMutualFund.png";

import dspfinance from "../image/dsp-finance.png";

import jioblackrock from "../image/jio-blackrock.png"

import zaubacorp from "../image/zaubacorp.png"

const Clients = () => {
  const clientsData = [
        { name: "DSP Finance Private Limited", logo: dspfinance, link: "https://www.dspim.com/" },

    { name: "DSP Asset Managers Pvt Ltd", logo: dspMutualFund, link: "https://www.dspim.com/" },
   
    { name: "Jio BlackRock Asset Management Pvt Ltd", logo: jioblackrock, link: "https://www.jioblackrock.com/" },
        { name: "Reclamation Realty (India) Pvt. Ltd.", logo: zaubacorp, link: "https://www.dspim.com/" },

     { name: "DSP Core Services Private Limited", logo:dspfinance, link: "https://www.dspim.com/" },
    { name: "Jio BlackRock Investment Advisers Pvt Ltd", logo:jioblackrock, link: "https://www.jioblackrock.com/" },
    { name: "Greenstone Fund Manager LLP", logo: zaubacorp, link: "https://www.zaubacorp.com/" },
    { name: "CompoundExpress Private Limited", logo: dspMutualFund, link: "https://www.dspim.com/" },
    { name: "Wildlife Conservation Trust", logo: null, link: "https://www.wildlifeconservationtrust.org/" },
    { name: "Scan Holidays", logo: null, link: "https://www.scanholidays.com/" },
    { name: "Future Generali India Insurance Co. Ltd", logo: null, link: "https://www.futuregenerali.in/" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 640) setSlidesPerView(1);
      else if (width <= 992) setSlidesPerView(2);
      else setSlidesPerView(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = clientsData.length;
  const maxIndex = Math.max(0, totalSlides - slidesPerView);

  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [slidesPerView, maxIndex, currentIndex]);

  const nextSlide = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  const slideWidth = 100 / slidesPerView;

  return (
    <section className="clients-section" id="clients">
      <div className="clients-container">

        <ScrollReveal animation="fade-up">
          <h2 className="clients-header">
            Our <span>Major Clients</span>
          </h2>
        </ScrollReveal>

        {/* SLIDER */}
        <div className="clients-slider">
          <div
            className="clients-track"
            style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {clientsData.map((client, index) => (
              <div
                className="client-slide"
                key={index}
                style={{ width: `${slideWidth}%` }}
              >
                <a
                  href={client.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="client-card"
                  title={`Visit ${client.name}`}
                >
                  <div className="client-logo-wrap">
                    {client.logo ? (
                      <img src={client.logo} alt={client.name} />
                    ) : (
                      <span
                        style={{
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                          fontSize: '1.4rem',
                          fontWeight: '800',
                          color: '#7a1f1f',
                          opacity: 0.3,
                        }}
                      >
                        {client.name.split(' ').map((w) => w[0]).join('').slice(0, 3)}
                      </span>
                    )}
                  </div>
                  <h3 className="client-name">{client.name}</h3>
                </a>
              </div>
            ))}
          </div>

          {/* 👇 ARROWS — Sirf ye, koi dots nahi */}
          <div className="slider-controls">
            <button
              className="slider-arrow"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              className="slider-arrow"
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Clients;