import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
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
import NotFound from './components/NotFound';
import './App.css';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Определяем текущий язык на основе URL (по умолчанию 'pl', если в начале пути /en)
  const currentLang = location.pathname.startsWith('/en') ? 'en' : 'pl';

  // Состояние для управления модалками юридических документов
  const [activeLegalModal, setActiveLegalModal] = useState(null);

  // Функция переключения языка с синхронным изменением URL (с сохранением слешей и правильных категорий)
  const handleLangChange = (newLang) => {
    const currentPath = location.pathname;
    
    if (currentLang === newLang) return;

    let newPath = currentPath;

    if (newLang === 'en') {
      newPath = newPath
        .replace('/pl', '/en')
        .replace('/kolekcja', '/collection')
        .replace('/obrazy', '/paintings')
        .replace('/zegary', '/clocks')
        .replace('/dekoracje', '/decor');
    } else {
      newPath = newPath
        .replace('/en', '/pl')
        .replace('/collection', '/kolekcja')
        .replace('/paintings', '/obrazy')
        .replace('/clocks', '/zegary')
        .replace('/decor', '/dekoracje');
    }

    navigate(newPath + location.hash);
  };

  return (
    <div className="app">
      <Navbar currentLang={currentLang} setCurrentLang={handleLangChange} />
      
      <main className="main-content">
        <Routes>
          {/* Редирект с корня сайта на /pl по умолчанию */}
          <Route path="/" element={<Navigate to="/pl" replace />} />

          {/* Главная страница для конкретного языка: /pl или /en */}
          <Route path="/:lang" element={
            <>
              <Hero currentLang={currentLang} />
              <Collection currentLang={currentLang} />
              <Philosophy currentLang={currentLang} />
              <About currentLang={currentLang} />
              <HowToOrder currentLang={currentLang} />
              <ContactForm currentLang={currentLang} />
            </>
          } />

          {/* Страницы всей коллекции */}
          <Route path="/:lang/kolekcja" element={
            <div style={{ padding: '120px 40px', textAlign: 'center' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', color: '#2C2A29', fontWeight: '400', letterSpacing: '2px' }}>
                {currentLang === 'pl' ? 'Wszystkie dzieła (W przygotowaniu)' : 'All works (Coming soon)'}
              </h2>
            </div>
          } />
          <Route path="/:lang/collection" element={
            <div style={{ padding: '120px 40px', textAlign: 'center' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', color: '#2C2A29', fontWeight: '400', letterSpacing: '2px' }}>
                {currentLang === 'pl' ? 'Wszystkie dzieła (W przygotowaniu)' : 'All works (Coming soon)'}
              </h2>
            </div>
          } />

          {/* Страницы категорий (поддерживают и польские, и английские пути со слешами) */}
          <Route path="/:lang/kolekcja/:category" element={
            <div style={{ padding: '120px 40px', textAlign: 'center' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', color: '#2C2A29', fontWeight: '400', letterSpacing: '2px' }}>
                {currentLang === 'pl' ? 'Kategoria dzieł (W przygotowaniu)' : 'Category works (Coming soon)'}
              </h2>
            </div>
          } />
          <Route path="/:lang/collection/:category" element={
            <div style={{ padding: '120px 40px', textAlign: 'center' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', color: '#2C2A29', fontWeight: '400', letterSpacing: '2px' }}>
                {currentLang === 'pl' ? 'Kategoria dzieł (W przygotowaniu)' : 'Category works (Coming soon)'}
              </h2>
            </div>
          } />

          {/* Страница 404 с поддержкой префикса языка */}
          <Route path="/:lang/*" element={<NotFound currentLang={currentLang} />} />
          
          {/* Глобальный резервный 404 */}
          <Route path="*" element={<NotFound currentLang={currentLang} />} />
        </Routes>
      </main>
      
      <Footer 
        currentLang={currentLang} 
        openModal={(modalType) => setActiveLegalModal(modalType)} 
      />

      <CookieBanner currentLang={currentLang} />

      <LegalModals 
        activeModal={activeLegalModal} 
        onClose={() => setActiveLegalModal(null)} 
        currentLang={currentLang} 
      />
    </div>
  );
}