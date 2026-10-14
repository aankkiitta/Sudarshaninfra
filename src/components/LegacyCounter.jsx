import React, { useState, useEffect, useRef } from 'react';
import './LegacyCounter.css';

// Custom Hook: Count-up Animation
const useCountUp = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    let animationFrame;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, start]);

  return count;
};

const LegacyCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const legacyYears = useCountUp(22, 2000, isVisible);
  const projects = useCountUp(26, 2200, isVisible);
  const families = useCountUp(4000, 2500, isVisible);
  const sqft = useCountUp(4, 1800, isVisible);

  return (
    <section className="legacy-section" ref={sectionRef}>
      <div className="legacy-container">
        
        {/* TOP HEADING */}
        <h2 className="legacy-heading">
          Delivering excellence with continued growth
        </h2>

        {/* MAIN CONTENT */}
        <div className="legacy-main">
          
          {/* LEFT: 22+ Years of Legacy */}
          <div className="legacy-left">
            <div className="legacy-number">
              <span>{legacyYears}+</span>
            </div>
            <p className="legacy-label">years of legacy</p>
          </div>

          {/* RIGHT: Stats with Top/Bottom Lines */}
          <div className="legacy-right">
            
            <div className="legacy-stat">
              <span className="stat-number">{projects}+</span>
              <span className="stat-label">
                Projects<br />Delivered
              </span>
            </div>

            <div className="legacy-stat">
              <span className="stat-number">{families}+</span>
              <span className="stat-label">
                Happy<br />Families
              </span>
            </div>

            <div className="legacy-stat">
              <span className="stat-number">{sqft}+</span>
              <span className="stat-label">
                Million<br />Sqft
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default LegacyCounter;