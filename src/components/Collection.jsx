import React, { useEffect, useRef } from 'react';
import './Collection.css';

export default function Collection({ currentLang }) {
  const items = [
    {
      id: 1,
      image: '/images/clock.jpg',
      titlePl: 'Zegary',
      titleEn: 'Clocks',
      descPl: 'Ręcznie tworzone zegary rzeźbiarskie łączące funkcjonalność ze sztuką.',
      descEn: 'Handmade sculptural clocks combining functionality with art.',
      linkTextPl: 'Zobacz zegary',
      linkTextEn: 'View clocks'
    },
    {
      id: 2,
      image: '/images/relief.jpg',
      titlePl: 'Obrazy',
      titleEn: 'Artworks',
      descPl: 'Obrazy reliefowe tworzone z pasją, grą światła i unikalną fakturą.',
      descEn: 'Relief artworks created with passion, play of light, and unique texture.',
      linkTextPl: 'Zobacz obrazy',
      linkTextEn: 'View artworks'
    },
    {
      id: 3,
      image: '/images/decor.jpg',
      titlePl: 'Obiekty dekoracyjne',
      titleEn: 'Decorative Objects',
      descPl: 'Formy rzeźbiarskie stanowiące wyjątkowy akcent we wnętrzu.',
      descEn: 'Sculptural forms making a unique statement in the interior.',
      linkTextPl: 'Zobacz obiekty',
      linkTextEn: 'View objects'
    }
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="collection-section" id="kolekcja" ref={sectionRef}>
      <div className="collection-container">
        
        <div className="collection-top">
          <div className="section-header-line">
            <span className="line left-line"></span>
            <h2 className="section-title">
              {currentLang === 'pl' ? 'Kolekcja' : 'Collection'}
            </h2>
            <span className="line right-line"></span>
          </div>

          <p className="collection-subtitle-text">
            {currentLang === 'pl' 
              ? 'Każde dzieło zostało zaprojektowane tak, aby stać się centralnym punktem wnętrza — unikalną wizualną dominantą.' 
              : 'Each piece is designed to become the centrepiece of an interior — a unique visual anchor that elevates the space.'}
          </p>
        </div>

        <div className="collection-grid">
          {items.map((item, index) => (
            <div 
              className="collection-card" 
              key={item.id}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="card-image-wrapper">
                <div className="card-bg-placeholder" style={{ backgroundColor: '#F0ECE4' }}></div>
                
                <div className="card-overlay">
                  <h3 className="card-title">
                    {currentLang === 'pl' ? item.titlePl : item.titleEn}
                  </h3>
                  <p className="card-desc">
                    {currentLang === 'pl' ? item.descPl : item.descEn}
                  </p>
                  <a href="#kontakt" className="card-link">
                    {currentLang === 'pl' ? item.linkTextPl : item.linkTextEn} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}