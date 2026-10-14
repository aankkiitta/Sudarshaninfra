// src/components/Icon.jsx
import React from 'react';

const Icon = ({ name, size = 24, color = "currentColor" }) => {
  const icons = {
    
    // =========================================
    // HERO ICONS (Service Categories)
    // =========================================
    sofa: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 11V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v4" />
        <path d="M2 11a2 2 0 0 1 2 2v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a2 2 0 0 1 4 0v4" />
        <path d="M4 11v4M20 11v4" />
      </svg>
    ),
    building: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="1" />
        <path d="M9 22V12h6v10M8 6h.01M12 6h.01M16 6h.01M8 10h.01M16 10h.01" />
      </svg>
    ),
    home: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12L12 3l9 9M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10" />
      </svg>
    ),
    bolt: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    droplet: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    layers: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),

    // =========================================
    // EXPERTISE ICONS (8 cards)
    // =========================================
    workstation: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="12" rx="1" />
        <path d="M8 20h8M12 16v4" />
      </svg>
    ),
    desk: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 10h20M4 10v10M20 10v10M6 10V6h12v4" />
      </svg>
    ),
    chair: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4M6 18h12M9 18v3M15 18v3M8 12V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" />
      </svg>
    ),
    reception: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="10" width="18" height="10" rx="1" />
        <path d="M3 14h18M7 10V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
      </svg>
    ),
    storage: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="1" />
        <path d="M4 12h16M12 12v10M9 7h6M9 17h6" />
      </svg>
    ),
    conference: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="10" rx="9" ry="4" />
        <path d="M3 10v8c0 2 4 4 9 4s9-2 9-4v-8" />
      </svg>
    ),
    partition: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="7" height="16" />
        <rect x="14" y="4" width="7" height="16" />
      </svg>
    ),
    installation: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),

    // =========================================
    // MATERIAL CATEGORY ICONS (12 categories)
    // =========================================
    
    // 01 - Electrical Materials (FaBolt)
    electrical: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),

    // 02 - Carpentry & Furniture (FaHammer)
    carpentry: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 8l-4 4M10 12l-8 8 4 4 8-8M12 6l6 6M20 4l-4 4M14 8l6-6" />
      </svg>
    ),

    // 03 - Plumbing Materials (FaFaucet)
    plumbing: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v6M8 8h8a2 2 0 0 1 2 2v2M6 12h12M6 12v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6" />
        <circle cx="12" cy="8" r="1" />
        <path d="M9 16h6" />
      </svg>
    ),

    // 04 - Civil & Flooring Materials (FaBuilding)
    civil: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="1" />
        <path d="M9 22V12h6v10M8 6h.01M12 6h.01M16 6h.01M8 10h.01M16 10h.01" />
      </svg>
    ),

    // 05 - Interior & Finishing Materials (FaPaintRoller)
    paint: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="16" height="6" rx="1" />
        <path d="M18 6h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-6" />
        <rect x="10" y="13" width="4" height="8" rx="1" />
        <path d="M12 13v-2" />
      </svg>
    ),

    // 06 - HVAC & AC Materials (FaFan)
    hvac: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2a10 10 0 0 1 10 10" />
        <path d="M12 2a10 10 0 0 0-10 10" />
        <path d="M22 12a10 10 0 0 1-10 10" />
        <path d="M2 12a10 10 0 0 0 10 10" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),

    // 07 - Glass & Aluminium Works (FaDoorOpen)
    glass: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="2" width="18" height="20" rx="1" />
        <path d="M3 12h18M12 2v20" />
        <circle cx="9" cy="8" r="1" />
        <path d="M16 16l-2-2M14 16l2-2" />
      </svg>
    ),

    // 08 - Waterproofing Materials (FaTint)
    waterproofing: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        <path d="M9 14a3 3 0 0 0 3 3" />
      </svg>
    ),

    // 09 - Fire Safety Materials (FaFireExtinguisher)
    fire: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v2M10 4h4" />
        <rect x="8" y="6" width="8" height="16" rx="2" />
        <path d="M12 6V4" />
        <path d="M6 8h2M16 8h2" />
        <path d="M12 10v8" />
        <path d="M10 14h4" />
      </svg>
    ),

    // 10 - Security & Access Control (FaShieldAlt)
    security: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),

    // 11 - Ceiling & Acoustic Materials (FaLayerGroup)
    ceiling: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),

    // 12 - Flooring Materials (FaTh / Grid)
    flooring: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),

    // =========================================
    // OTHER ICONS
    // =========================================
    hammer: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 8l-4 4M10 12l-8 8 4 4 8-8M12 6l6 6M20 4l-4 4M14 8l6-6" />
      </svg>
    ),
    tools: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    )
  };

  return icons[name] || null;
};

export default Icon;