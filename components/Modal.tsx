
import React, { useState, useEffect } from 'react';
import { Instagram, Youtube } from './icons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const WEBHOOK_URL_PROD = 'https://n8n.smarthat.com.br/webhook/46047ca3-9fe2-4969-a4e8-d29d596d91ca';
  const WEBHOOK_URL_TEST = 'https://n8n.smarthat.com.br/webhook-test/46047ca3-9fe2-4969-a4e8-d29d596d91ca';
  const WEBHOOK_URL_CRM = 'https://crm.prbn.dev.br/webhooks/workflows/45827b74-e4dd-4d19-a0ec-7f25af53566c/b5304b42-4ae9-41a4-a066-d1fab9d20806';

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const payload = { name, email, whatsapp };

    const sendWebhook = (url: string) => {
        return fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });
    };

    try {
      const responses = await Promise.all([
          sendWebhook(WEBHOOK_URL_PROD),
          sendWebhook(WEBHOOK_URL_CRM)
      ]);

      if (responses.every(res => res.ok)) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  const handleClose = () => {
    if (status === 'submitting') return;
    onClose();
    setTimeout(() => {
        setStatus('idle');
        setName('');
        setEmail('');
        setWhatsapp('');
    }, 300);
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 transition-opacity duration-300 animate-fade-in"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={handleClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">&times;</button>
        
        {status !== 'success' && status !== 'error' && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-black tracking-widest text-center">
              <span className="text-[#FF0033] neon-glow">//</span> REQUISIÇÃO DE CREDENCIAIS
            </h2>
            <div className="space-y-4">
              <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-white/10 border border-white/20 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#FF0033] transition-all" />
              <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-white/10 border border-white/20 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#FF0033] transition-all" />
              <input type="tel" placeholder="WhatsApp" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} required className="w-full bg-white/10 border border-white/20 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#FF0033] transition-all" />
            </div>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full px-8 py-3 font-black text-lg text-white bg-[#FF0033] rounded-md transition-all duration-300 ease-in-out btn-glow hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'PROCESSANDO...' : '// EXECUTAR ACESSO'}
            </button>
          </form>
        )}

        {status === 'success' && (
            <div className="text-center space-y-4">
                <h2 className="text-2xl font-black tracking-widest text-green-400">[TRANSMISSÃO CONCLUÍDA]</h2>
        <p className="mb-4">Sua inscrição foi confirmada.</p>
        <p className="mb-4">O link para a aula será enviado para o seu e-mail.</p>
                <p className="text-[#B3B3B3]">Siga-nos no Instagram e YouTube:</p>
                <div className="flex justify-center space-x-4">
                    <a href="https://www.instagram.com/brunomedeiroseo/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF0033] transition-colors">
                        <Instagram className="w-8 h-8" />
                    </a>
                    <a href="https://www.youtube.com/@BrunoMedeirosJJ" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF0033] transition-colors">
                        <Youtube className="w-8 h-8" />
                    </a>
                </div>
                <p className="text-[#B3B3B3]">E entre no nosso grupo do WhatsApp:</p>
                <a href="https://chat.whatsapp.com/G7BwJdQWK8VDwTPVFGu1QP" target="_blank" rel="noopener noreferrer" className="w-full block px-8 py-3 font-black text-lg text-white bg-green-500 rounded-md transition-colors hover:bg-green-600">ENTRAR NO GRUPO</a>
                <button onClick={handleClose} className="w-full mt-4 px-8 py-3 font-black text-lg text-white bg-[#FF0033]/80 rounded-md transition-colors hover:bg-[#FF0033]">FECHAR</button>
            </div>
        )}

        {status === 'error' && (
            <div className="text-center space-y-4">
                <h2 className="text-2xl font-black tracking-widest text-yellow-400">[ERRO NA TRANSMISSÃO]</h2>
                <p className="text-[#B3B3B3]">Não foi possível completar a requisição. Por favor, tente novamente.</p>
                <button onClick={() => setStatus('idle')} className="w-full px-8 py-3 font-black text-lg text-white bg-[#FF0033]/80 rounded-md transition-colors hover:bg-[#FF0033]">TENTAR NOVAMENTE</button>
            </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
