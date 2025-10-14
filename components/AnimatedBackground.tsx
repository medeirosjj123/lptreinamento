
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 animated-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A]"></div>
    </div>
  );
};

export default AnimatedBackground;
