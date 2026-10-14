import React, { useState } from 'react';
import './ReviewModal.css';

const ReviewModal = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ rating, name, email, review });
    setRating(0);
    setName('');
    setEmail('');
    setReview('');
    onClose();
  };

  return (
    <div className="rm-overlay" onClick={onClose}>
      <div className="rm-modal" onClick={(e) => e.stopPropagation()}>
        
        <button type="button" className="rm-close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <h2 className="rm-title">SHARE REVIEWS</h2>

        <form className="rm-form" onSubmit={handleSubmit}>
          <label className="rm-label">Your Rating*</label>
          <div className="rm-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                className={`rm-star ${(hoverRating || rating) >= star ? 'filled' : ''}`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              >
                ★
              </button>
            ))}
          </div>

          <input
            type="text"
            className="rm-input"
            placeholder="Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            className="rm-input"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            className="rm-textarea"
            placeholder="Share your review*"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />

          <button type="submit" className="rm-submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;