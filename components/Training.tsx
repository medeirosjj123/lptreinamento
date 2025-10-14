import React, { useState, useEffect } from 'react';

const Training: React.FC = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonVisible(true);
    }, 55 * 60 * 1000); // 55 minutes

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] text-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-black tracking-widest mb-8">
          <span className="text-[#FF0033] neon-glow">//</span> AULA SECRETA: O CAMINHO PARA O BLOG DE SUCESSO
        </h1>
        <div className="aspect-w-16 aspect-h-9 mb-8 shadow-2xl shadow-red-500/20" style={{paddingTop: '56.25%', position: 'relative'}}>
          <iframe
            src="https://player.vimeo.com/video/1127273927?h=3d8b3b3b3b&autoplay=1&loop=1&title=0&byline=0&portrait=0"
            style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {isButtonVisible && (
          <a
            href="https://pay.kiwify.com.br/k6VPVdH"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-12 py-5 font-black text-xl text-white bg-[#FF0033] rounded-md transition-all duration-300 ease-in-out overflow-hidden group btn-glow hover:scale-105"
          >
            <span className="relative z-10 tracking-widest">QUERO GARANTIR MINHA VAGA</span>
            <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
          </a>
        )}
      </div>
    </div>
  );
};

export default Training;
