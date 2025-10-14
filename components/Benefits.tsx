import React, { useRef } from 'react';
import { NoSymbolIcon, UsersIcon, ServerStackIcon, CpuChipIcon, LinkIcon } from './icons';
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

interface GlassCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ icon, title, description }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    cardRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
    }
  };
  
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });


  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center space-y-4 transition-transform duration-300 ease-out h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="inline-block text-[#FF0033] drop-shadow-[0_0_8px_#FF0033]">{icon}</div>
        <h3 className="text-2xl font-black">{title}</h3>
        <p className="text-[#B3B3B3] font-regular">{description}</p>
      </div>
    </div>
  );
};

const Benefits: React.FC = () => {
  const errors = [
    {
      icon: <NoSymbolIcon className="w-12 h-12" />,
      title: 'ERRO #01: Monetizar com Adsense',
      description: 'Acreditar na forma mais popular (e menos lucrativa) de monetização é o caminho mais lento para o fracasso. Existe uma alternativa 10x mais poderosa.',
    },
    {
      icon: <UsersIcon className="w-12 h-12" />,
      title: 'ERRO #02: Focar em Mídias Sociais',
      description: 'Ficar refém de postagens diárias é uma armadilha. Aprenda o método para que seu blog receba visitas todos os dias no piloto automático, direto do Google.',
    },
    {
      icon: <ServerStackIcon className="w-12 h-12" />,
      title: 'ERRO #03: Usar Hospedagem Compartilhada',
      description: 'Hospedagens baratas colocam seu projeto em risco e limitam seu crescimento. Entenda por que uma VPS é o segredo dos blogs profissionais.',
    },
  ];

  return (
    <section className="py-24">
      <SectionTitle>OS 3 ERROS FATAIS QUE IMPEDEM SEU BLOG DE LUCRAR</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {errors.map((error, index) => (
          <GlassCard key={index} {...error} />
        ))}
      </div>
    </section>
  );
};

export default Benefits;