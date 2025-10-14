
import React, { useState, useCallback } from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Expert from './components/Expert';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Modal from './components/Modal';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] text-white min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <main className="container mx-auto px-6 lg:px-8">
          <Hero onCtaClick={openModal} />
          <Benefits />
          <Process />
          <Expert />
          <Cta onCtaClick={openModal} />
        </main>
        <Footer />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
