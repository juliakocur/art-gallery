import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Hero.css';

const slides = [
  {
    id: 1,
    image: '/images/interior-clock.jpg',
    titlePl: 'Rzeźba i Czas',
    titleEn: 'Sculpture & Time',
    subtitlePl: 'Kolekcja zegarów ściennych z motywem granatu',
    subtitleEn: 'Pomegranate wall clock collection'
  },
  {
    id: 2,
    image: '/images/interior-flower.jpg',
    titlePl: 'Subtelna Materia',
    titleEn: 'Subtle Matter',
    subtitlePl: 'Ręcznie formowane kompozycje z porcelany',
    subtitleEn: 'Hand-formed porcelain compositions'
  },
  {
    id: 3,
    image: '/images/interior-clock.jpg',
    titlePl: 'Kompozycja Przestrzeni',
    titleEn: 'Spatial Composition',
    subtitlePl: 'Nowa seria obiektów galeryjnych',
    subtitleEn: 'New gallery object series'
  },
  {
    id: 4,
    image: '/images/interior-flower.jpg',
    titlePl: 'Forma i Światło',
    titleEn: 'Form & Light',
    subtitlePl: 'Eksperymenty z porcelaną i fakturą',
    subtitleEn: 'Experiments with porcelain and texture'
  },
  {
    id: 5,
    image: '/images/interior-clock.jpg',
    titlePl: 'Elegancja Detalu',
    titleEn: 'Detail Elegance',
    subtitlePl: 'Ręczne zdobienia i złocenia',
    subtitleEn: 'Hand decorations and gilding'
  },
  {
    id: 6,
    image: '/images/interior-flower.jpg',
    titlePl: 'Harmonia Natury',
    titleEn: 'Nature Harmony',
    subtitlePl: 'Inspiracje organiczne w sztuce',
    subtitleEn: 'Organic inspirations in art'
  },
  {
    id: 7,
    image: '/images/interior-clock.jpg',
    titlePl: 'Wieczność',
    titleEn: 'Eternity',
    subtitlePl: 'Kolekcja limitowana',
    subtitleEn: 'Limited collection'
  }
];

export default function Hero({ currentLang }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    resetTimer();
  }, [resetTimer]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    resetTimer();
  }, [resetTimer]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
    resetTimer();
  }, [resetTimer]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
        >
          <div 
            className="hero-bg" 
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <h1 className="hero-title">
              {currentLang === 'pl' ? slide.titlePl : slide.titleEn}
            </h1>
            <p className="hero-subtitle">
              {currentLang === 'pl' ? slide.subtitlePl : slide.subtitleEn}
            </p>

            <div className="hero-controls">
              {/* Левая стрелка SVG */}
              <button className="hero-arrow-box" onClick={prevSlide} aria-label="Previous slide">
                <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="hero-dots">
                {slides.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    className={`hero-dot ${dotIndex === currentIndex ? 'active' : ''}`}
                    onClick={() => goToSlide(dotIndex)}
                    aria-label={`Go to slide ${dotIndex + 1}`}
                  />
                ))}
              </div>

              {/* Правая стрелка SVG */}
              <button className="hero-arrow-box" onClick={nextSlide} aria-label="Next slide">
                <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}