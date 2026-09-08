import React, { useEffect, useRef, useState } from 'react';
import './Footer.css';
import instagramIcon from '../assets/ig.svg';
import tiktokIcon from '../assets/tik-tok.svg';
import pinterestIcon from '../assets/pinterest.svg';

export default function Footer({ currentLang, openModal }) {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer 
      ref={footerRef} 
      className={`site-footer ${isVisible ? 'fade-in-active' : ''}`}
    >
      <div className="footer-container">
        
        {/* Логотип */}
        <div href="#" className="logo">
          <span className="logo-title">JULIA KOCUR</span>

          <span className="logo-subtitle">
            {"SCULPTURAL ART".split("").map((char, index) => (
              <span
                key={index}
                className="char"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </div>

        {/* По центру: копирайт, политика, регулямин с точками */}
        <div className="footer-center-content">
          <span className="footer-item">&copy; {new Date().getFullYear()} Julia Kocur</span>
          
          <span className="footer-item">
            <a 
              href="#polityka" 
              onClick={(e) => { 
                e.preventDefault(); 
                openModal('polityka'); 
              }}
            >
              {currentLang === 'pl' ? 'Polityka prywatności' : 'Privacy Policy'}
            </a>
          </span>

          <span className="footer-item">
            <a 
              href="#regulamin" 
              onClick={(e) => { 
                e.preventDefault(); 
                openModal('regulamin'); 
              }}
            >
              {currentLang === 'pl' ? 'Regulamin' : 'Terms & Conditions'}
            </a>
          </span>
        </div>

        {/* Справа: иконки соцсетей */}
        <div className="footer-social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <img src={tiktokIcon} alt="TikTok" />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
            <img src={pinterestIcon} alt="Pinterest" />
          </a>
        </div>

      </div>
    </footer>
  );
}