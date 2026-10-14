import React from 'react';
import './Button.css';

const Button = ({ variant = 'primary', children, onClick, href }) => {
  // Agar href diya hai toh <a> tag use karo, warna <button>
  const Component = href ? 'a' : 'button';
  
  return (
    <Component 
      className={`custom-btn ${variant}`} 
      onClick={onClick}
      href={href}
    >
      {children}
    </Component>
  );
};

export default Button;