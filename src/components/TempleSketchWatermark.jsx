import React from 'react';

const TempleSketchWatermark = ({ className = '', opacity = 0.12 }) => {
  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '680px',
        pointerEvents: 'none',
        opacity: opacity,
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 600 320"
        fill="none"
        stroke="#8C651C"
        strokeWidth="1.2"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        {/* Central Shikhar / Temple Spire */}
        <path d="M300 15 L292 60 L308 60 Z" fill="#EFE3C8" />
        <line x1="300" y1="5" x2="300" y2="15" strokeWidth="2" />
        <circle cx="300" cy="5" r="3" fill="#8C651C" />
        
        {/* Tiered Main Dome */}
        <path d="M275 90 C280 65 290 60 300 60 C310 60 320 65 325 90 Z" />
        <path d="M260 130 C268 95 285 90 300 90 C315 90 332 95 340 130 Z" />
        <path d="M240 180 C250 135 275 130 300 130 C325 130 350 135 360 180 Z" />

        {/* Side Spires (Left & Right) */}
        <path d="M190 120 L185 150 L195 150 Z" />
        <path d="M175 180 C180 155 188 150 190 150 C192 150 200 155 205 180 Z" />
        
        <path d="M410 120 L405 150 L415 150 Z" />
        <path d="M395 180 C400 155 408 150 410 150 C412 150 420 155 425 180 Z" />

        {/* Pillars & Archways Base */}
        <line x1="120" y1="230" x2="480" y2="230" strokeWidth="1.5" />
        <line x1="100" y1="270" x2="500" y2="270" strokeWidth="2" />
        <line x1="80" y1="310" x2="520" y2="310" strokeWidth="2.5" />

        {/* Arches */}
        <path d="M260 270 C260 235 300 230 300 230 C300 230 340 235 340 270" strokeWidth="1.5" />
        <path d="M200 270 C200 245 230 240 230 240 C230 240 260 245 260 270" />
        <path d="M340 270 C340 245 370 240 370 240 C370 240 400 245 400 270" />

        {/* Traditional Steps */}
        <path d="M140 270 L130 310 M460 270 L470 310" strokeWidth="1.2" />
        <line x1="220" y1="280" x2="380" y2="280" strokeDasharray="3 2" />
        <line x1="200" y1="295" x2="400" y2="295" strokeDasharray="3 2" />
      </svg>
    </div>
  );
};

export default TempleSketchWatermark;
