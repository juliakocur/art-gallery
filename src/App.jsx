import React from 'react';
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
import LegalPages from './components/LegalPages';
import NotFound from './components/NotFound';
import CollectionPage from './components/collection/CollectionPage';
import ProductPage from './components/product/ProductPage';
import './App.css';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentLang = location.pathname.startsWith('/en') ? 'en' : 'pl';

  const handleLangChange = (newLang) => {
    const currentPath = location.pathname;
    
    if (currentLang === newLang) return;

    let newPath = currentPath;

    if (newLang === 'en') {
      newPath = newPath
        .replace('/pl', '/en')
        .replace('/polityka', '/privacy')
        .replace('/regulamin', '/terms')
        .replace('/kolekcja', '/collection')
        .replace('/obrazy', '/paintings')
        .replace('/zegary', '/clocks')
        .replace('/dekoracje', '/decor');
    } else {
      newPath = newPath
        .replace('/en', '/pl')
        .replace('/privacy', '/polityka')
        .replace('/terms', '/regulamin')
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
          <Route path="/" element={<Navigate to="/pl" replace />} />

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

          {/* Отдельные страницы документов */}
          <Route path="/pl/polityka" element={<LegalPages currentLang="pl" />} />
          <Route path="/en/privacy" element={<LegalPages currentLang="en" />} />
          <Route path="/pl/regulamin" element={<LegalPages currentLang="pl" />} />
          <Route path="/en/terms" element={<LegalPages currentLang="en" />} />

          {/* Страница всей коллекции */}
          <Route path="/:lang/kolekcja" element={<CollectionPage currentLang={currentLang} />} />
          <Route path="/:lang/collection" element={<CollectionPage currentLang={currentLang} />} />

          {/* Страница коллекции с категорией */}
          <Route path="/:lang/kolekcja/:category" element={<CollectionPage currentLang={currentLang} />} />
          <Route path="/:lang/collection/:category" element={<CollectionPage currentLang={currentLang} />} />

          {/* Страница отдельного товара */}
          <Route path="/:lang/produkt/:id" element={<ProductPage currentLang={currentLang} />} />
          <Route path="/:lang/product/:id" element={<ProductPage currentLang={currentLang} />} />

          <Route path="/:lang/*" element={<NotFound currentLang={currentLang} />} />
          <Route path="*" element={<NotFound currentLang={currentLang} />} />
        </Routes>
      </main>
      
      <Footer currentLang={currentLang} />

      <CookieBanner currentLang={currentLang} />
    </div>
  );
}