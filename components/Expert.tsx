import React, { useRef } from 'react';
import useInView from '../hooks/useInView';
import { Instagram, Youtube } from './icons';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  
  return (
    <h2
      ref={ref}
      className={`text-3xl md:text-4xl font-black tracking-widest text-center mb-16 transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <span className="text-[#FF0033] neon-glow">//</span> {children}
    </h2>
  );
};


const Expert: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <section className="py-24">
      <SectionTitle>QUEM VAI GUIAR VOCÊ</SectionTitle>
      <div ref={ref} className="grid lg:grid-cols-5 gap-12 items-center">
        <div className={`lg:col-span-2 transition-all duration-700 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="aspect-square bg-gray-700 rounded-lg p-2 border border-red-500/20 shadow-[0_0_20px_rgba(255,0,51,0.2)]">
            <div 
                className="w-full h-full bg-cover bg-center rounded" 
                style={{backgroundImage: `url('/Captura de Tela 2025-10-13 às 20.57.34.png')`}}
            >
            </div>
          </div>
        </div>
        <div className={`lg:col-span-3 space-y-6 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <h3 className="text-4xl font-black text-white">Bruno Medeiros</h3>
          <p className="text-xl font-semibold text-[#FF0033] tracking-wider">Fundador da 8links & Especialista em SEO</p>
          <div className="space-y-4 text-[#B3B3B3] font-regular">
            <p>Eu vivo de blogs e sites desde 2008, transformando paixões em negócios digitais que geram receita e liberdade. Minha jornada me permitiu entender profundamente o que funciona (e o que não funciona) no universo do marketing de conteúdo.</p>
            <p>Fundei a 8links, que hoje é a maior rede de blogs de autoridade do Brasil, com mais de 400 projetos em crescimento constante. Agora, meu objetivo é usar toda essa experiência para ensinar você a construir seu próprio ativo digital e alcançar a independência financeira.</p>
          </div>
          <div className="flex space-x-4 pt-4">
            <a href="https://www.instagram.com/brunomedeiroseo/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF0033] transition-colors"><Instagram className="w-8 h-8" /></a>
            <a href="https://www.youtube.com/@BrunoMedeirosJJ" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF0033] transition-colors"><Youtube className="w-8 h-8" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expert;