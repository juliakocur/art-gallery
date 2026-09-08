import React, { useState, useEffect } from 'react';
import './CookieBanner.css';

export default function CookieBanner({ currentLang }) {
  const [showBanner, setShowBanner] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('julia_kocur_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Жесткая блокировка скролла страницы с сохранением позиции
  useEffect(() => {
    if (showBanner) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }
  }, [showBanner]);

  const handleCloseWithAnimation = (consentType) => {
    localStorage.setItem('julia_kocur_cookie_consent', consentType);
    setIsClosing(true);
    setTimeout(() => {
      setShowBanner(false);
      setIsClosing(false);
    }, 350); // Время анимации закрытия
  };

  if (!showBanner) return null;

  const isPl = currentLang === 'pl';

  return (
    <div className={`cookie-banner-overlay ${isClosing ? 'closing' : 'active'}`}>
      <div className="cookie-banner-modal">
        <div className="cookie-content">
          <span className="cookie-title">
            {isPl ? 'Pliki Cookies & Prywatność' : 'Cookies & Privacy'}
          </span>
          <p className="cookie-text">
            {isPl 
              ? 'Ta strona używa plików cookies w celach technicznych oraz analitycznych, aby zapewnić najwyższą jakość usług. Korzystając ze strony, wyrażasz zgodę na ich użycie zgodnie z Polityką prywatności.' 
              : 'This site uses cookies for technical and analytical purposes to ensure the best experience. By using our site, you agree to their use in accordance with our Privacy Policy.'}
          </p>
        </div>
        <div className="cookie-buttons">
          <button className="cookie-btn cookie-btn-secondary" onClick={() => handleCloseWithAnimation('necessary')}>
            {isPl ? 'Tylko niezbędne' : 'Necessary only'}
          </button>
          <button className="cookie-btn cookie-btn-primary" onClick={() => handleCloseWithAnimation('all')}>
            {isPl ? 'Akceptuję wszystkie' : 'Accept all'}
          </button>
        </div>
      </div>
    </div>
  );
}