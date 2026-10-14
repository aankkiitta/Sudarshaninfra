// src/components/PortfolioCard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PortfolioCard.css';

const PortfolioCard = ({ id, tag, title, description, image, buttonText = "View Project" }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    // Mobile: pehla tap = desc open, dusra tap = navigate
    if (window.innerWidth <= 768) {
      if (!isOpen) {
        setIsOpen(true);
        return;
      }
    }
    if (id) {
      navigate(`/project/${id}`);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    if (id) {
      navigate(`/project/${id}`);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <div
      className={`pc-card ${isOpen ? 'pc-card-open' : ''}`}
      onClick={handleCardClick}
    >
      {/* Background Image */}
      <div className="pc-bg" style={{ backgroundImage: `url(${image})` }}></div>

      {/* Dark Overlay */}
      <div className="pc-overlay"></div>

      {/* Top Left Tag */}
      <span className="pc-tag">{tag}</span>

      {/* Bottom Content */}
      <div className="pc-content">
        {/* Title — always visible */}
        <h3 className="pc-title">{title}</h3>

        {/* Description — hover (desktop) / tap (mobile) pe */}
        <div className="pc-desc-wrap">
          <p className="pc-desc">{description}</p>
        </div>

        {/* Button — hover (desktop) / always (mobile) */}
        <button className="pc-btn" onClick={handleButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;