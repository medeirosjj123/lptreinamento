import React, { useRef } from 'react';
import useInView from '../hooks/useInView';

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


const ProcessStep: React.FC<{ number: string; title: string; description: string, isLast?: boolean }> = ({ number, title, description, isLast }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.5 });

  return (
    <div ref={ref} className="flex items-start">
      <div className="flex flex-col items-center mr-8">
        <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-white/5 border-2 border-[#FF0033] flex items-center justify-center text-2xl font-black transition-all duration-500 ${isInView ? 'scale-100 shadow-[0_0_15px_#FF0033]' : 'scale-75'}`}>
          {number}
        </div>
        {!isLast && <div className={`w-1 h-48 bg-[#FF0033]/50 mt-4 transition-all duration-1000 origin-top ${isInView ? 'scale-y-100' : 'scale-y-0'}`} />}
      </div>
      <div className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex-grow transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
        <h3 className="text-xl font-black mb-2">{title}</h3>
        <p className="text-[#B3B3B3] font-regular">{description}</p>
      </div>
    </div>
  );
}


const Process: React.FC = () => {
  const steps = [
    { number: '01', title: 'NICHO', description: 'A base de todo projeto de sucesso. Descubra como escolher um nicho lucrativo e que você tenha paixão em atuar.' },
    { number: '02', title: 'DOMÍNIO', description: 'Seu endereço na internet. Aprenda a registrar o domínio perfeito ou a encontrar "atalhos" com domínios expirados.' },
    { number: '03', title: 'KEYWORDS', description: 'O mapa para o tráfego do Google. Domine a arte de encontrar as palavras-chave que seus futuros clientes estão buscando.' },
    { number: '04', title: 'CONTEÚDO', description: 'O ímã de visitantes. Crie conteúdo de alta performance que o Google ama e que transforma leitores em compradores.' },
    { number: '05', title: 'BACKLINKS', description: 'O motor do crescimento. Construa a autoridade do seu blog e saia do "bloqueio" do Google em tempo recorde.' },
  ];

  return (
    <section className="py-24">
      <SectionTitle>O PASSO A PASSO PARA SEU BLOG PROFISSIONAL</SectionTitle>
      <div className="flex justify-center">
        <div className="flex flex-col items-start space-y-4">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} isLast={index === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;