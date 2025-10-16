import React, { useRef } from 'react';
import useInView from '../hooks/useInView';

interface CtaProps {
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

const Cta: React.FC<CtaProps> = ({ onCtaClick }) => {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { threshold: 0.3 });
  return (
    <section ref={ref} className="py-24 text-center">
      <div className={`space-y-8 transition-all duration-700 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <h2 className="text-4xl md:text-5xl font-black max-w-4xl mx-auto leading-tight">Pronto Para Construir o Blog Profissional Que Gera Receita no Piloto Automático?</h2>
        <CtaButton onClick={onCtaClick}>QUERO COMEÇAR AGORA</CtaButton>
      </div>
    </section>
  );
};

export default Cta;