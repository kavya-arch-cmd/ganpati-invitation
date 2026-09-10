import React from 'react';

const DiyaIcon = ({ size = 64, className = '', showGlow = true }) => {
  return (
    <div
      className={`diya-container ${className}`}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: size,
        height: size * 0.7,
      }}
    >
      {/* Warm Ambient Radial Halo */}
      {showGlow && (
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: size * 1.4,
            height: size * 1.4,
            background: 'radial-gradient(circle, rgba(255, 170, 40, 0.35) 0%, rgba(200, 90, 23, 0.1) 45%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
      )}

      <svg
        width={size}
        height={size * 0.7}
        viewBox="0 0 100 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'relative', zIndex: 2 }}
      >
        {/* Flame with gentle animated flicker */}
        <g className="flame-animated">
          {/* Outer Flame Glow */}
          <path
            d="M50 4 C44 14 40 22 40 32 C40 40 44 44 50 44 C56 44 60 40 60 32 C60 22 56 14 50 4 Z"
            fill="url(#outerFlameGradient)"
            opacity="0.9"
          />
          {/* Core Bright Flame */}
          <path
            d="M50 12 C46 19 44 25 44 32 C44 37 46 40 50 40 C54 40 56 37 56 32 C56 25 54 19 50 12 Z"
            fill="url(#innerFlameGradient)"
          />
        </g>

        {/* Diya Clay Base */}
        <path
          d="M10 40 C15 58 35 66 50 66 C65 66 85 58 90 40 C75 46 62 48 50 48 C38 48 25 46 10 40 Z"
          fill="url(#diyaBaseGradient)"
          stroke="#8C651C"
          strokeWidth="1.5"
        />

        {/* Diya Rim Highlight */}
        <ellipse cx="50" cy="42" rx="38" ry="4" fill="#D4A843" fillOpacity="0.4" stroke="#8C651C" strokeWidth="0.8" />

        {/* Traditional Ornamental Base Pedestal */}
        <path
          d="M38 64 C38 67 32 69 30 70 L70 70 C68 69 62 67 62 64 Z"
          fill="#8C651C"
          stroke="#5A3A18"
          strokeWidth="0.8"
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="outerFlameGradient" x1="50" y1="4" x2="50" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF275" />
            <stop offset="35%" stopColor="#FF9800" />
            <stop offset="85%" stopColor="#D84315" />
            <stop offset="100%" stopColor="#B71C1C" />
          </linearGradient>

          <linearGradient id="innerFlameGradient" x1="50" y1="12" x2="50" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#FFF9C4" />
            <stop offset="100%" stopColor="#FFB74D" />
          </linearGradient>

          <linearGradient id="diyaBaseGradient" x1="10" y1="40" x2="90" y2="66" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#B88624" />
            <stop offset="30%" stopColor="#E5C36E" />
            <stop offset="70%" stopColor="#A0721E" />
            <stop offset="100%" stopColor="#5A3A18" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default DiyaIcon;
