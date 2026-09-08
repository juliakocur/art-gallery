import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({ currentLang, setCurrentLang }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* Логотип */}
        <a href="#" className="logo" onClick={closeMenu}>
          <span className="logo-title">JULIA KOCUR</span>

          <span className="logo-subtitle">
            {"SCULPTURAL ART".split("").map((char, index) => (
              <span
                key={index}
                className="char"
                style={{
                  animationDelay: `${0.8 + index * 0.05}s`
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </a>

        {/* Десктопная навигация */}
        <nav className="nav-desktop">
          <a href="#kolekcja" className="nav-link">
            {currentLang === 'pl' ? 'Kolekcja' : 'Collection'}
          </a>

          <a href="#o-sztuce" className="nav-link">
            {currentLang === 'pl' ? 'O sztuce' : 'About'}
          </a>

          <a href="#jak-zamowic" className="nav-link">
            {currentLang === 'pl' ? 'Jak zamówić' : 'How to order'}
          </a>
        </nav>

        {/* Правая часть */}
        <div className="header-right">

          {/* Переключатель языка */}
          <div className="lang-switcher">
            <button
              className={`lang-btn ${
                currentLang === 'pl' ? 'active' : ''
              }`}
              onClick={() => setCurrentLang('pl')}
            >
              PL
            </button>

            <span className="lang-divider">|</span>

            <button
              className={`lang-btn ${
                currentLang === 'en' ? 'active' : ''
              }`}
              onClick={() => setCurrentLang('en')}
            >
              EN
            </button>
          </div>

          {/* Бургер */}
          <button
            className={`burger-btn ${
              isMenuOpen ? 'active' : ''
            }`}
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </div>

      {/* Мобильное меню */}
      <div
        className={`mobile-menu ${
          isMenuOpen ? 'active' : ''
        }`}
      >
        <nav className="nav-mobile">

          <a
            href="#kolekcja"
            className="mobile-link"
            onClick={closeMenu}
          >
            {currentLang === 'pl'
              ? 'Kolekcja'
              : 'Collection'}
          </a>

          <a
            href="#jak-zamowic"
            className="mobile-link"
            onClick={closeMenu}
          >
            {currentLang === 'pl'
              ? 'Jak zamówić'
              : 'How to order'}
          </a>

          <a
            href="#o-sztuce"
            className="mobile-link"
            onClick={closeMenu}
          >
            {currentLang === 'pl'
              ? 'O sztuce'
              : 'About'}
          </a>

        </nav>
      </div>
    </header>
  );
}