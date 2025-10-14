import React, { useState, useEffect } from 'react';
import heroImage from '/Gemini_Generated_Image_ioo3spioo3spioo3.png';

interface HeroProps {
  onCtaClick: () => void;
}

const CtaButton: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="relative inline-block px-8 py-4 font-black text-lg text-white bg-[#FF0033] rounded-md transition-all duration-300 ease-in-out overflow-hidden group btn-glow hover:scale-105"
  >
    <span className="relative z-10 tracking-widest">{children}</span>
    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
  </button>
);

const Typewriter: React.FC<{ text: string }> = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [text]);

  return <>{displayText}<span className="opacity-0 animate-pulse">|</span></>;
};

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const fullText = "INICIE SEU BLOG DO ZERO E COMECE A LUCRAR EM MENOS DE UM MÊS!";
  
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center text-center lg:text-left py-24">
      <div className="lg:w-1/2 relative z-10 space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-wider leading-tight">
            <Typewriter text={fullText} />
        </h1>
        <p className="text-lg md:text-xl text-[#B3B3B3] max-w-lg mx-auto lg:mx-0 font-regular">
            Aprenda o passo a passo completo para criar um blog profissional que gera tráfego e receita, mesmo que você não entenda nada de tecnologia.
        </p>
        <div className="pt-4">
          <CtaButton onClick={onCtaClick}>QUERO MEU ACESSO IMEDIATO</CtaButton>
        </div>
      </div>
      <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center items-center">
        <div className="relative w-[500px] h-[500px] flex items-center justify-center">
            {/* Animated Rings */}
            <div className="absolute w-full h-full rounded-full border border-red-500/20 animate-spin-slow"></div>
            <div className="absolute w-[80%] h-[80%] rounded-full border border-red-500/20 animate-spin-medium"></div>
            <div className="absolute w-[60%] h-[60%] rounded-full border-2 border-red-500/50 animate-pulse"></div>
            
            {/* User Image in the Center */}
            <div className="relative w-[55%] h-[55%] rounded-full overflow-hidden">
                <img 
                    src={heroImage} 
                    alt="Blog Professional Hub" 
                    className="w-full h-full object-cover animate-float"
                />
                {/* Glow behind the image */}
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-3xl -z-10"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;