import React from 'react';
import './OfferBar.css';

const offers = [
  "TRUSTED INFRASTRUCTURE & INTERIOR SOLUTIONS",
  "TURNKEY CIVIL CONSTRUCTION",
  "OFFICE INTERIORS & FALSE CEILINGS",
  "ELECTRICAL & PLUMBING WORKS",
  "RESIDENTIAL & COMMERCIAL PROJECTS",
  "CUSTOMIZED FURNITURE & RENOVATIONS",
  "GET FREE CONSULTATION TODAY"
];

const OfferBar = () => {
  // Humne offers array ko duplicate kiya hai taaki scroll infinite lage
  const duplicatedOffers = [...offers, ...offers];

  return (
    <div className="offer-bar">
      <div className="marquee-container">
        {duplicatedOffers.map((offer, index) => (
          <div className="marquee-item" key={index}>
            <span className="diamond">◆</span>
            <span>{offer}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferBar;