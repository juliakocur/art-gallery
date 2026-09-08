import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
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

// Компонент страницы 404 прямо здесь (либо можешь вынести в отдельный файл src/components/NotFound.jsx)
function NotFound({ currentLang }) {
  const isPl = currentLang === 'pl';

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '70vh',
      width: '100%',
      backgroundColor: '#F7F5F0',
      padding: '40px 20px',
      boxSizing: 'border-box',
    }}>
      <div style={{ textAlign: 'center', maxWidth: '600px', width: '100%' }}>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(80px, 15vw, 140px)',
          fontWeight: 300,
          color: '#C5A880',
          lineHeight: 1,
          margin: '0 0 10px',
          letterSpacing: '4px'
        }}>404</h1>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(24px, 3.5vw, 36px)',
          fontWeight: 400,
          textTransform: 'uppercase',
          letterSpacing: '2px',
          color: '#2C2A29',
          margin: '0 0 20px'
        }}>
          {isPl ? 'Strona nie znaleziona' : 'Page Not Found'}
        </h2>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '15px',
          lineHeight: 1.6,
          color: '#6E6863',
          margin: '0 0 40px'
        }}>
          {isPl
            ? 'Przepraszamy, ale strona, której szukasz, nie istnieje lub została przeniesiona.'
            : 'We are sorry, but the page you are looking for does not exist or has been moved.'}
        </p>
        <Link to="/" style={{
          display: 'inline-block',
          backgroundColor: '#C5A880',
          color: '#F4F1EA',
          padding: '16px 40px',
          fontFamily: "'Inter', sans-serif",
          fontSize: '13px',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          textDecoration: 'none',
          borderRadius: '4px',
          transition: 'background-color 0.3s ease'
        }}>
          {isPl ? 'Strona Główna' : 'Back to Home'}
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  const [currentLang, setCurrentLang] = useState('pl');

  // Состояние для управления модалками юридических документов ('polityka', 'regulamin' или null)
  const [activeLegalModal, setActiveLegalModal] = useState(null);

  return (
    <div className="app">
      <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} />
      
      <main className="main-content">
        <Routes>
          {/* Главная страница со всеми секциями */}
          <Route path="/" element={
            <>
              <Hero currentLang={currentLang} />
              <Collection currentLang={currentLang} />
              <Philosophy currentLang={currentLang} />
              <About currentLang={currentLang} />
              <HowToOrder currentLang={currentLang} />
              <ContactForm currentLang={currentLang} />
            </>
          } />

          {/* Страница 404 для любых несуществующих путей */}
          <Route path="*" element={<NotFound currentLang={currentLang} />} />
        </Routes>
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