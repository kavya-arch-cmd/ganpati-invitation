import React from 'react';

const TempleBell = ({ className = '', style = {} }) => {
  return (
    <svg
      className={`hanging-bell ${className}`}
      style={style}
      width="44"
      height="120"
      viewBox="0 0 44 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hanging Chain Links */}
      <line x1="22" y1="0" x2="22" y2="70" stroke="#B88624" strokeWidth="1.5" strokeDasharray="3 3" />
      
      {/* Chain Rings */}
      <circle cx="22" cy="15" r="3.5" stroke="#B88624" strokeWidth="1.2" fill="#EFE3C8" />
      <circle cx="22" cy="35" r="3.5" stroke="#B88624" strokeWidth="1.2" fill="#EFE3C8" />
      <circle cx="22" cy="55" r="3.5" stroke="#B88624" strokeWidth="1.2" fill="#EFE3C8" />

      {/* Bell Top Loop */}
      <circle cx="22" cy="72" r="4.5" stroke="#8C651C" strokeWidth="1.5" fill="#D4A843" />

      {/* Bell Body */}
      <path
        d="M22 76 C16 76 10 82 8 96 C7 101 4 104 2 106 C2 107 4 108 22 108 C40 108 42 107 42 106 C40 104 37 101 36 96 C34 82 28 76 22 76 Z"
        fill="url(#bellGradient)"
        stroke="#8C651C"
        strokeWidth="1.2"
      />

      {/* Bell Rim Detail */}
      <ellipse cx="22" cy="107" rx="19" ry="2.5" fill="#8C651C" stroke="#D4A843" strokeWidth="0.8" />

      {/* Bell Clapper / Tong */}
      <circle cx="22" cy="112" r="3.5" fill="#8C651C" stroke="#D4A843" strokeWidth="1" />

      {/* Gradients */}
      <defs>
        <linearGradient id="bellGradient" x1="2" y1="76" x2="42" y2="108" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8C651C" />
          <stop offset="35%" stopColor="#E5C36E" />
          <stop offset="65%" stopColor="#B88624" />
          <stop offset="100%" stopColor="#5A3A18" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default TempleBell;
