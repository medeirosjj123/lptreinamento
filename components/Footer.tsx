
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/20 border-t border-white/10 py-8">
      <div className="container mx-auto px-6 lg:px-8 text-center text-[#B3B3B3] font-regular">
        <p>&copy; {new Date().getFullYear()} Lorem Ipsum. Todos os direitos reservados.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-white transition-colors">Termos de Serviço</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
