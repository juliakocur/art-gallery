import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieBanner.css';

export default function CookieBanner({ currentLang }) {

  return null;
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

  // Блокировка скролла, пока баннер активен
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
    }, 350);
  };

  if (!showBanner) return null;

  const isPl = currentLang === 'pl';
  const privacyPath = isPl ? '/pl/polityka' : '/en/privacy';

  return (
    <div className={`cookie-banner-overlay ${isClosing ? 'closing' : 'active'}`}>
      <div className="cookie-banner-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cookie-content">
          <span className="cookie-title">
            {isPl ? 'Prywatność' : 'Privacy'}
          </span>
          <p className="cookie-text">
            {isPl ? (
              <>
                Ta strona wykorzystuje niezbędne pliki cookies oraz dane techniczne potrzebne do jej prawidłowego działania. Szczegółowe informacje znajdziesz w{' '}
                <Link to={privacyPath} className="cookie-link" onClick={() => setShowBanner(false)}>
                  Polityce Prywatności
                </Link>.
              </>
            ) : (
              <>
                This website uses necessary cookies and technical data required for its proper operation. More information can be found in the{' '}
                <Link to={privacyPath} className="cookie-link" onClick={() => setShowBanner(false)}>
                  Privacy Policy
                </Link>.
              </>
            )}
          </p>
        </div>
        <div className="cookie-buttons">
          <button className="cookie-btn cookie-btn-primary" onClick={() => handleCloseWithAnimation('all')}>
            {isPl ? 'Akceptuję' : 'Accept'}
          </button>
        </div>
      </div>
    </div>
  );
}