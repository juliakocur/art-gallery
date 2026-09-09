import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductPage.css';

export default function ProductPage({ currentLang }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const sectionRef = useRef(null);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // База данных всех товаров с точными названиями категорий для крошек
  const productsData = {
    // --- ЗЕГАРЫ ---
    'zegar-01': {
      categoryKey: 'clock',
      categorySlugPl: 'zegary',
      categorySlugEn: 'clocks',
      nameOnlyPl: 'Granaty',
      nameOnlyEn: 'Pomegranates',
      subtitlePl: 'Organiczna harmonia i płatkowe złoto',
      subtitleEn: 'Organic harmony and gold leaf',
      categoryNamePl: 'Zegary',
      categoryNameEn: 'Clocks',
      defaultSize: '60 cm',
      defaultColor: 'gold',
      images: [
        '/images/clock.jpg',
        '/images/relief.jpg',
        '/images/interior-clock.jpg'
      ],
      descPl: 'Ręcznie rzeźbiony zegar ścienny łączący motywy organiczne z precyzyjnym mechanizmem kwarcowym.',
      descEn: 'Hand-sculpted wall clock combining organic motifs with a precise quartz movement.',
      detailsPl: ['Średnica: 60 cm', 'Masa: ok. 3.2 kg', 'Wykończenie: Ręczne złocenie płatkowe', 'Mechanizm: Cichy, płynący'],
      detailsEn: ['Diameter: 60 cm', 'Weight: approx. 3.2 kg', 'Finish: Hand-gilded with metal leaf', 'Mechanism: Silent, sweep movement']
    },
    'zegar-02': {
      categoryKey: 'clock',
      categorySlugPl: 'zegary',
      categorySlugEn: 'clocks',
      nameOnlyPl: 'Faktura',
      nameOnlyEn: 'Texture',
      subtitlePl: 'Subtelna faktura i światło',
      subtitleEn: 'Subtle texture and light',
      categoryNamePl: 'Zegary',
      categoryNameEn: 'Clocks',
      defaultSize: '60 cm',
      defaultColor: 'gold',
      images: ['/images/clock.jpg', '/images/relief.jpg'],
      descPl: 'Subtelna kompozycja inspirowana naturą.',
      descEn: 'Subtle composition inspired by nature.',
      detailsPl: ['Średnica: 60 cm'],
      detailsEn: ['Diameter: 60 cm']
    },

    // --- ОБРАЗЫ (КАРТИНЫ) ---
    'obraz-01': {
      categoryKey: 'painting',
      categorySlugPl: 'obrazy',
      categorySlugEn: 'paintings',
      nameOnlyPl: 'Pomegranates',
      nameOnlyEn: 'Pomegranates',
      subtitlePl: 'Strukturalny obraz pełen głębi',
      subtitleEn: 'Textural painting full of depth',
      categoryNamePl: 'Obrazy',
      categoryNameEn: 'Paintings',
      defaultSize: '70x70 cm',
      defaultColor: 'gold',
      images: ['/images/relief.jpg', '/images/clock.jpg'],
      descPl: 'Unikalny obraz strukturalny stworzony przy użyciu autorskiej techniki reliefowej.',
      descEn: 'A unique structural painting created using an original relief technique.',
      detailsPl: ['Wymiary: 70x70 cm', 'Technika: Mixed media / Relief'],
      detailsEn: ['Dimensions: 70x70 cm', 'Technique: Mixed media / Relief']
    },

    // --- ДЕКОРАТИВНЫЕ ОБЪЕКТЫ (включая obiekt-01 из твоего URL) ---
    'dekor-01': {
      categoryKey: 'decor',
      categorySlugPl: 'dekoracje',
      categorySlugEn: 'decor',
      nameOnlyPl: 'Organiczna Forma',
      nameOnlyEn: 'Organic Form',
      subtitlePl: 'Rzeźbiarski obiekt do wnętrz',
      subtitleEn: 'Sculptural interior object',
      categoryNamePl: 'Dekoracje',
      categoryNameEn: 'Decor',
      defaultSize: '50 cm',
      defaultColor: 'gold',
      images: ['/images/interior-clock.jpg', '/images/relief.jpg'],
      descPl: 'Trójwymiarowy obiekt dekoracyjny o płynnych, organicznych liniach.',
      descEn: 'Three-dimensional decorative object with fluid, organic lines.',
      detailsPl: ['Średnica: 50 cm', 'Materiał: Kompozyt rzeźbiarski'],
      detailsEn: ['Diameter: 50 cm', 'Material: Sculptural composite']
    },
    'obiekt-01': {
      categoryKey: 'decor',
      categorySlugPl: 'dekoracje',
      categorySlugEn: 'decor',
      nameOnlyPl: 'Organiczny Obiekt',
      nameOnlyEn: 'Organic Object',
      subtitlePl: 'Rzeźbiarski obiekt dekoracyjny',
      subtitleEn: 'Sculptural decorative object',
      categoryNamePl: 'Dekoracje',
      categoryNameEn: 'Decor',
      defaultSize: '50 cm',
      defaultColor: 'gold',
      images: ['/images/interior-clock.jpg', '/images/relief.jpg'],
      descPl: 'Wyjątkowy obiekt rzeźbiarski wzbogacający nowoczesne wnętrza.',
      descEn: 'An exceptional sculptural object enhancing modern interiors.',
      detailsPl: ['Wymiary: 50 cm', 'Wykończenie: Ręczne złocenie'],
      detailsEn: ['Dimensions: 50 cm', 'Finish: Hand gilding']
    }
  };

  const product = productsData[id] || productsData['zegar-01'];

  const handleBackToCategory = () => {
    const catSlug = currentLang === 'pl' ? product.categorySlugPl : product.categorySlugEn;
    navigate(`/${currentLang}/kolekcja/${catSlug}`);
  };

  const handleOrderClick = () => {
    navigate(`/${currentLang}#kontakt`, {
      state: {
        category: product.categoryKey,
        workName: currentLang === 'pl' ? product.nameOnlyPl : product.nameOnlyEn,
        size: product.defaultSize,
        color: product.defaultColor
      }
    });
  };

  return (
    <div className="product-page" ref={sectionRef}>
      
      <div className="product-hero-banner">
        <div 
          className="product-hero-bg" 
          style={{ backgroundImage: `url(${product.images[0]})` }}
        ></div>
        <div className="product-hero-overlay"></div>
        <div className="product-hero-content-centered">
          <h1 className="product-hero-title">
            {currentLang === 'pl' ? product.nameOnlyPl : product.nameOnlyEn}
          </h1>
          <p className="product-hero-subtitle">
            {currentLang === 'pl' ? product.subtitlePl : product.subtitleEn}
          </p>
        </div>
      </div>

      <div className="product-breadcrumbs-container">
        <div className="product-breadcrumbs">
          <span onClick={() => navigate(`/${currentLang}/kolekcja`)} className="breadcrumb-link">
            {currentLang === 'pl' ? 'Kolekcja' : 'Collection'}
          </span>
          <span className="breadcrumb-separator">/</span>
          <span onClick={handleBackToCategory} className="breadcrumb-link">
            {currentLang === 'pl' ? product.categoryNamePl : product.categoryNameEn}
          </span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">
            {currentLang === 'pl' ? product.nameOnlyPl : product.nameOnlyEn}
          </span>
        </div>
      </div>

      <div className="product-detail-container">
        
        <div className="product-gallery-side">
          <div 
            className="product-main-image-wrapper"
            onClick={() => setIsLightboxOpen(true)}
            title={currentLang === 'pl' ? 'Kliknij, aby powiększyć' : 'Click to zoom'}
          >
            <div 
              className="product-main-img" 
              style={{ backgroundImage: `url(${product.images[activeImageIndex]})` }}
            ></div>
            <div className="zoom-hint">
              <span>{currentLang === 'pl' ? 'Powiększ' : 'Zoom'}</span>
            </div>
          </div>

          {product.images.length > 1 && (
            <div className="product-thumbs-grid">
              {product.images.map((img, idx) => (
                <div 
                  key={idx}
                  className={`product-thumb ${activeImageIndex === idx ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${img})` }}
                  onClick={() => setActiveImageIndex(idx)}
                ></div>
              ))}
            </div>
          )}
        </div>

        <div className="product-info-side">
          <h2 className="product-detail-title">
            {currentLang === 'pl' ? product.nameOnlyPl : product.nameOnlyEn}
          </h2>

          <p className="product-detail-desc">
            {currentLang === 'pl' ? product.descPl : product.descEn}
          </p>

          <div className="product-specs-box">
            <h3 className="specs-title">
              {currentLang === 'pl' ? 'Specyfikacja dzieła' : 'Artwork specifications'}
            </h3>
            <ul className="specs-list">
              {(currentLang === 'pl' ? product.detailsPl : product.detailsEn).map((detail, index) => (
                <li key={index} className="spec-item">
                  <span className="spec-bullet"></span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <div className="product-actions">
            <button type="button" className="product-order-btn" onClick={handleOrderClick}>
              <span>{currentLang === 'pl' ? 'Zamów / Zapytaj o dzieło' : 'Order / Inquire about piece'}</span>
            </button>
            
            <button type="button" className="product-back-btn" onClick={handleBackToCategory}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>{currentLang === 'pl' ? 'Powrót do galerii' : 'Back to gallery'}</span>
            </button>
          </div>
        </div>
      </div>

      {isLightboxOpen && (
        <div className="lightbox-overlay" onClick={() => setIsLightboxOpen(false)}>
          <button className="lightbox-close" onClick={() => setIsLightboxOpen(false)}>&times;</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={product.images[activeImageIndex]} alt="Enlarged artwork" />
            <div className="lightbox-nav">
              {product.images.map((_, idx) => (
                <button 
                  key={idx} 
                  className={`lightbox-dot ${activeImageIndex === idx ? 'active' : ''}`}
                  onClick={() => setActiveImageIndex(idx)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}