// src/components/ScrollReveal.jsx
import React, { useEffect, useRef, useState } from 'react';
import './ScrollReveal.css';

const ScrollReveal = ({
  children,
  animation = 'fade-up',      // 'fade-up' | 'fade-left' | 'fade-right' | 'fade-down' | 'zoom-in'
  delay = 0,                  // in ms
  duration = 700,             // in ms
  threshold = 0.15,           // 0 - 1
  once = true,                // animate only once
  className = '',
  as: Tag = 'div',
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) setHasAnimated(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  const shouldAnimate = once ? hasAnimated : isVisible;

  return (
    <Tag
      ref={ref}
      className={[
        'sr',
        `sr-${animation}`,
        shouldAnimate ? 'sr-visible' : '',
        className,
      ].join(' ')}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </Tag>
  );
};

export default ScrollReveal;