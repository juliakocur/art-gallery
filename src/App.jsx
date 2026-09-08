import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Philosophy from './components/Philosophy';
import HowToOrder from './components/HowToOrder';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import LegalModals from './components/LegalModals';
import './App.css';

export default function App() {
  const [currentLang, setCurrentLang] = useState('pl');

  // Состояние для управления модалками юридических документов ('polityka', 'regulamin' или null)
  const [activeLegalModal, setActiveLegalModal] = useState(null);

  return (
    <div className="app">
      <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} />
      
      <main className="main-content">
        <Hero currentLang={currentLang} />
        <Collection currentLang={currentLang} />
        <Philosophy currentLang={currentLang} />
        <About currentLang={currentLang} />
        <HowToOrder currentLang={currentLang} />
        <ContactForm currentLang={currentLang} />
      </main>
      
      {/* Передаем функцию открытия модалок в футер */}
      <Footer 
        currentLang={currentLang} 
        openModal={(modalType) => setActiveLegalModal(modalType)} 
      />

      {/* Баннер согласия на cookies (появляется при первом визите снизу) */}
      <CookieBanner currentLang={currentLang} />

      {/* Светлое модальное окно для Политики и Регламента */}
      <LegalModals 
        activeModal={activeLegalModal} 
        onClose={() => setActiveLegalModal(null)} 
        currentLang={currentLang} 
      />
    </div>
  );
}