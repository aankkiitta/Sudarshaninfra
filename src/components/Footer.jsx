// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import logo from '../image/logo.png';

const Footer = () => {
  // 👇 WhatsApp auto message (FloatingContact jaisa)
  const whatsappNumber = "919867474721";
  const whatsappMessage = encodeURIComponent(
    "Hi Sudharshan Infra! I'm interested in your services. Can you please share more details?"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* TOP: Logo */}
        <div className="footer-logo">
          <img src={logo} alt="Sudarshan Infra" />
        </div>

        {/* BRAND TEXT */}
        <div className="footer-brand">
          SUDARSHAN <span>INFRA</span>
        </div>

        {/* DESCRIPTION */}
        <p className="footer-desc">
          Sudarshan Infra is a trusted infrastructure and turnkey contracting company 
          delivering innovative solutions for commercial and residential projects.
        </p>

        {/* SOCIAL ICONS */}
        <div className="footer-socials">
          <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* 👇 WhatsApp with auto message */}
          <a
            href={whatsappLink}
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>

          <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
            </svg>
          </a>
        </div>

        {/* DIVIDER */}
        <div className="footer-divider"></div>

        {/* BOTTOM ROW */}
        <div className="footer-bottom">
          <div className="footer-links">
            <a href="#">Terms & Conditions</a>
            <span>|</span>
            <a href="#">Privacy Policy</a>
          </div>
          <p className="footer-copy">
            © Copyright Sudarshan Infra, LLC 2026
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;