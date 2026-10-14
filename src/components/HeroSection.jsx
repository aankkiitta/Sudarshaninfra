import React from 'react';
import './HeroSection.css';
import heroBg from '../image/hero-bg3.jpg';
import ScrollReveal from './ScrollReveal';

const offers = [
  "1 & 2 BHK RESIDENCES",
  "JODI FLATS AVAILABLE",
  "WELL-CONNECTED LOCATION IN KALYAN EAST",
  "NEAR ARYA GURUKUL SCHOOL",
  "JARI MARI HOSPITAL — APPROX. 2 MINS",
  "SHREE PATIL HOSPITAL — APPROX. 4 MINS",
  "VITTHALWADI RAILWAY STATION — APPROX. 10 MINS",
  "SCHOOLS & DAILY CONVENIENCES NEARBY"
];

const HeroSection = () => {
  const duplicatedOffers = [...offers, ...offers];

  return (
    <section className="jmh-hero" id="top">
      <ScrollReveal animation="zoom-in" duration={1400} className="jmh-hero__bg-wrap">
        <img src={heroBg} alt="Hero Background" className="jmh-hero__bg-img" />
      </ScrollReveal>

      <div className="jmh-hero__overlay"></div>

      <div className="jmh-hero__content">
        <ScrollReveal animation="fade-left" delay={0}>
          <p className="jmh-hero__eyebrow">Trusted Infrastructure & Interior Solutions</p>
        </ScrollReveal>

        <ScrollReveal animation="fade-left" delay={150}>
          <h1 className="jmh-hero__title">
            Building Excellence.<br />
            Delivering Quality Every Step.
          </h1>
        </ScrollReveal>

        <ScrollReveal animation="fade-right" delay={300}>
          <p className="jmh-hero__sub">
            Sudharshan Infra provides complete turnkey infrastructure and interior solutions including civil construction, electrical works, plumbing, office interiors, false ceilings, painting, renovations, maintenance, and customized furniture for residential and commercial projects.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={500}>
          <div className="hero-buttons">
            <button className="hero-btn btn-red">Get Free Consultation</button>
            <button className="hero-btn btn-cream">View Projects</button>
          </div>
        </ScrollReveal>
      </div>

      <div className="jmh-offer">
        <div className="jmh-offer__scallop" aria-hidden="true">
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 L0,20 Q30,0 60,20 Q90,0 120,20 Q150,0 180,20 Q210,0 240,20 Q270,0 300,20 Q330,0 360,20 Q390,0 420,20 Q450,0 480,20 Q510,0 540,20 Q570,0 600,20 Q630,0 660,20 Q690,0 720,20 Q750,0 780,20 Q810,0 840,20 Q870,0 900,20 Q930,0 960,20 Q990,0 1020,20 Q1050,0 1080,20 Q1110,0 1140,20 Q1170,0 1200,20 Q1230,0 1260,20 Q1290,0 1320,20 Q1350,0 1380,20 Q1410,0 1440,20 L1440,40 Z" fill="#7a1f1f"/>
          </svg>
        </div>
        <div className="jmh-offer__strip">
          <div className="jmh-offer__track">
            {duplicatedOffers.map((offer, index) => (
              <span className="jmh-offer__item" key={index}>◆ {offer}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;