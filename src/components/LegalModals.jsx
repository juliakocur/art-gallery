import React, { useEffect } from 'react';
import './LegalModals.css';

export default function LegalModals({ activeModal, onClose, currentLang }) {
  // Жесткая блокировка скролла страницы
  useEffect(() => {
    if (activeModal) {
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
  }, [activeModal]);

  if (!activeModal) return null;

  const isPl = currentLang === 'pl';

  return (
    <div className={`legal-modal-overlay ${activeModal ? 'active' : ''}`} onClick={onClose}>
      <div className="legal-modal-content" onClick={(e) => e.stopPropagation()}>
        
        <button className="legal-close-x" onClick={onClose} aria-label="Close">
          &times;
        </button>

        {activeModal === 'polityka' && (
          <div className="legal-scroll-box">
            <h2 className="legal-modal-title">
              {isPl ? 'Polityka Prywatności i Cookies' : 'Privacy & Cookie Policy'}
            </h2>
            
            <div className="legal-text-content">
              <h3>{isPl ? '1. Administrator Danych Osobowych' : '1. Data Administrator'}</h3>
              <p>
                {isPl 
                  ? 'Administratorem Twoich danych osobowych zbieranych za pośrednictwem strony jest Julia Kocur - Sculptural Art.' 
                  : 'The administrator of your personal data collected via the website is Julia Kocur - Sculptural Art.'}
              </p>

              <h3>{isPl ? '2. Cel i podstawa przetwarzania danych' : '2. Purpose of Data Processing'}</h3>
              <p>
                {isPl 
                  ? 'Dane osobowe (imię, e-mail, Instagram, treść wiadomości) przetwarzane są w celu odpowiedzi na zapytanie i realizacji indywidualnych zamówień.' 
                  : 'Personal data (name, e-mail, Instagram, message content) is processed solely to respond to your inquiry and fulfill custom art orders.'}
              </p>

              <h3>{isPl ? '3. Pliki Cookies (Ciasteczka)' : '3. Cookies'}</h3>
              <p>
                {isPl 
                  ? 'Strona wykorzystuje pliki cookies w celach technicznych i analitycznych.' 
                  : 'The website uses cookies for technical and analytical purposes to ensure proper operation.'}
              </p>

              <h3>{isPl ? '4. Twoje Prawa (RODO)' : '4. Your Rights (GDPR)'}</h3>
              <p>
                {isPl 
                  ? 'Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia lub ograniczenia przetwarzania.' 
                  : 'You have the right to access, rectify, delete, or restrict the processing of your personal data.'}
              </p>
            </div>
          </div>
        )}

        {activeModal === 'regulamin' && (
          <div className="legal-scroll-box">
            <h2 className="legal-modal-title">
              {isPl ? 'Regulamin Serwisu' : 'Terms & Conditions'}
            </h2>
            
            <div className="legal-text-content">
              <h3>{isPl ? '1. Postanowienia ogólne' : '1. General Provisions'}</h3>
              <p>
                {isPl 
                  ? 'Niniejszy Regulamin określa zasady korzystania ze strony Julia Kocur - Sculptural Art.' 
                  : 'These Terms & Conditions define the rules for using the Julia Kocur - Sculptural Art website.'}
              </p>

              <h3>{isPl ? '2. Zamówienia indywidualne' : '2. Custom Orders'}</h3>
              <p>
                {isPl 
                  ? 'Każde dzieło tworzone jest ręcznie i jest unikatowe. Realizacja następuje po ustaleniu szczegółów i wpłacie zadatku w wysokości 30%.' 
                  : 'Each piece is handmade and unique. Orders are processed after agreeing on details and paying a 30% deposit.'}
              </p>

              <h3>{isPl ? '3. Prawa autorskie' : '3. Copyrights'}</h3>
              <p>
                {isPl 
                  ? 'Wszystkie projekty i zdjęcia są własnością artystki Julii Kocur i są chronione prawem autorskim.' 
                  : 'All designs and photographs are the property of artist Julia Kocur and are protected by copyright.'}
              </p>
            </div>
          </div>
        )}

        <div className="legal-btn-wrapper">
          <button className="legal-modal-close-btn" onClick={onClose}>
            {isPl ? 'Zamknij' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
}