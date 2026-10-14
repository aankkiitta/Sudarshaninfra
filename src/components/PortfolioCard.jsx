// src/components/PortfolioCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PortfolioCard.css';

const PortfolioCard = ({ id, tag, title, description, image, buttonText = "View Project" }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (id) {
      navigate(`/project/${id}`);
      // 👇 Page top pe scroll
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <div className="pc-card" onClick={handleClick}>
      
      {/* Background Image */}
      <div className="pc-bg" style={{ backgroundImage: `url(${image})` }}></div>
      
      {/* Dark Overlay */}
      <div className="pc-overlay"></div>

      {/* Top Left Tag */}
      <span className="pc-tag">{tag}</span>

      {/* Bottom Content */}
      <div className="pc-content">
        
        <h3 className="pc-title">{title}</h3>
        
        <div className="pc-hidden">
          <p className="pc-desc">{description}</p>
          <button className="pc-btn">
            {buttonText}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default PortfolioCard;