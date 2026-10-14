// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../image/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  // 👇 Logo click — home pe jao + top scroll
  const handleLogoClick = (e) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname !== '/') {
      navigate('/');
    }
    // Slight delay so route change ho jaye, then scroll top
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // 👇 Smooth scroll with header offset
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection(targetId);
      }, 300);
      return;
    }

    scrollToSection(targetId);
  };

  const scrollToSection = (targetId) => {
    const id = targetId.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 80;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">

        {/* LEFT SIDE */}
        <nav className="nav-left">
          <a href="#home" className="active" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
          <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Services</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Portfolio</a>
        </nav>

        {/* CENTER: Logo — Clickable */}
        <div className="logo-section">
          <a
            href="/"
            onClick={handleLogoClick}
            aria-label="Go to Home"
            style={{ display: 'inline-flex', alignItems: 'center' }}
          >
            <img src={logo} alt="Sudarshan Infra Logo" className="logo" />
          </a>
        </div>

        {/* RIGHT SIDE */}
        <nav className="nav-right">
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
          <a href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')}>Testimonials</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
        </nav>

        {/* MOBILE: Hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>HOME</a>
        <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>SERVICES</a>
        <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>PORTFOLIO</a>
        <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>ABOUT</a>
        <a href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')}>TESTIMONIALS</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>CONTACT</a>
      </div>
    </header>
  );
};

export default Header;