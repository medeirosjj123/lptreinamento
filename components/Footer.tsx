
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/20 border-t border-white/10 py-8">
      <div className="container mx-auto px-6 lg:px-8 text-center text-[#B3B3B3] font-regular">
        <p>&copy; {new Date().getFullYear()} Bruno Medeiros. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
