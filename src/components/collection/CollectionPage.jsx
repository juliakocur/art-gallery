import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CollectionPage.css';

export default function CollectionPage({ currentLang }) {
  const navigate = useNavigate();
  const { category } = useParams(); 
  
  const pathToId = {
    'zegary': 'clocks',
    'clocks': 'clocks',
    'obrazy': 'paintings',
    'paintings': 'paintings',
    'dekoracje': 'decor',
    'decor': 'decor'
  };

  const currentId = category ? pathToId[category] || 'all' : 'all';
  const [activeTab, setActiveTab] = useState(currentId);
  const sectionRef = useRef(null);

  useEffect(() => {
    setActiveTab(category ? pathToId[category] || 'all' : 'all');
    window.scrollTo(0, 0); 
  }, [category]);

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

  const categoryBanners = {
    all: {
      image: '/images/clock.jpg',
      titlePl: 'Wyjątkowe dzieła w trzech odsłonach',
      titleEn: 'Exceptional works in three dimensions',
      descPl: 'Zegary, obrazy i obiekty dekoracyjne tworzone ręcznie z pasją, aby wnieść piękno do Twojego wnętrza.',
      descEn: 'Clocks, paintings, and decorative objects crafted by hand with passion to bring beauty into your interior.',
      breadcrumbPl: 'Kolekcja',
      breadcrumbEn: 'Collection'
    },
    clocks: {
      image: '/images/interior-clock.jpg',
      titlePl: 'Zegary',
      titleEn: 'Clocks',
      descPl: 'Ręcznie tworzone zegary reliefowe, które łączą sztukę z funkcjonalnością.',
      descEn: 'Handmade relief clocks that combine art with functionality.',
      breadcrumbPl: 'Kolekcja / Zegary',
      breadcrumbEn: 'Collection / Clocks'
    },
    paintings: {
      image: '/images/relief.jpg',
      titlePl: 'Obrazy',
      titleEn: 'Paintings',
      descPl: 'Unikalne obrazy reliefowe, pełne faktur, światła i harmonii.',
      descEn: 'Unique relief paintings, full of textures, light, and harmony.',
      breadcrumbPl: 'Kolekcja / Obrazy',
      breadcrumbEn: 'Collection / Paintings'
    },
    decor: {
      image: '/images/interior-flower.jpg',
      titlePl: 'Dekoracje',
      titleEn: 'Decor',
      descPl: 'Formy rzeźbiarskie, które stanowią wyjątkowy akcent we wnętrzu.',
      descEn: 'Sculptural forms that make a unique accent in the interior.',
      breadcrumbPl: 'Kolekcja / Dekoracje',
      breadcrumbEn: 'Collection / Decor'
    }
  };

  const currentBanner = categoryBanners[activeTab] || categoryBanners.all;

  const allProducts = [
    {
      id: 'zegar-01',
      category: 'clocks',
      image: '/images/clock.jpg',
      titlePl: 'Zegar No. 01',
      titleEn: 'Clock No. 01',
      linkPl: 'Zobacz szczegóły',
      linkEn: 'View details'
    },
    {
      id: 'zegar-02',
      category: 'clocks',
      image: '/images/clock.jpg',
      titlePl: 'Zegar No. 02',
      titleEn: 'Clock No. 02',
      linkPl: 'Zobacz szczegóły',
      linkEn: 'View details'
    },
    {
      id: 'obraz-01',
      category: 'paintings',
      image: '/images/relief.jpg',
      titlePl: 'Obraz No. 01',
      titleEn: 'Painting No. 01',
      linkPl: 'Zobacz szczegóły',
      linkEn: 'View details'
    },
    {
      id: 'obraz-02',
      category: 'paintings',
      image: '/images/relief.jpg',
      titlePl: 'Obraz No. 02',
      titleEn: 'Painting No. 02',
      linkPl: 'Zobacz szczegóły',
      linkEn: 'View details'
    },
    {
      id: 'obiekt-01',
      category: 'decor',
      image: '/images/decor.jpg',
      titlePl: 'Obiekt dekoracyjny No. 01',
      titleEn: 'Decorative Object No. 01',
      linkPl: 'Zobacz szczegóły',
      linkEn: 'View details'
    }
  ];

  const filteredProducts = activeTab === 'all' 
    ? allProducts 
    : allProducts.filter(item => item.category === activeTab);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
    if (tabId === 'all') {
      navigate(`/${currentLang}/kolekcja`);
    } else {
      const slugMap = {
        clocks: { pl: 'zegary', en: 'clocks' },
        paintings: { pl: 'obrazy', en: 'paintings' },
        decor: { pl: 'dekoracje', en: 'decor' }
      };
      const slug = slugMap[tabId][currentLang];
      navigate(`/${currentLang}/kolekcja/${slug}`);
    }
  };

  return (
    <div className="collection-page" ref={sectionRef}>
      
      {/* Верхний баннер */}
      <div className="collection-hero-banner" key={activeTab}>
        <div 
          className="collection-hero-bg" 
          style={{ backgroundImage: `url(${currentBanner.image})` }}
        ></div>
        <div className="collection-hero-overlay"></div>
        <div className="collection-hero-content">
          <span className="collection-hero-tag">
            {currentLang === 'pl' ? currentBanner.breadcrumbPl : currentBanner.breadcrumbEn}
          </span>
          <h1 className="collection-hero-title">
            {currentLang === 'pl' ? currentBanner.titlePl : currentBanner.titleEn}
          </h1>
          <p className="collection-hero-subtitle">
            {currentLang === 'pl' ? currentBanner.descPl : currentBanner.descEn}
          </p>
        </div>
      </div>

      {/* Навигация по категориям */}
      <div className="collection-tabs-container">
        <div className="collection-tabs">
          <button 
            className={`collection-tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => handleTabClick('all')}
          >
            {currentLang === 'pl' ? 'Wszystkie' : 'All'}
          </button>
          <button 
            className={`collection-tab ${activeTab === 'clocks' ? 'active' : ''}`}
            onClick={() => handleTabClick('clocks')}
          >
            {currentLang === 'pl' ? 'Zegary' : 'Clocks'}
          </button>
          <button 
            className={`collection-tab ${activeTab === 'paintings' ? 'active' : ''}`}
            onClick={() => handleTabClick('paintings')}
          >
            {currentLang === 'pl' ? 'Obrazy' : 'Paintings'}
          </button>
          <button 
            className={`collection-tab ${activeTab === 'decor' ? 'active' : ''}`}
            onClick={() => handleTabClick('decor')}
          >
            {currentLang === 'pl' ? 'Dekoracje' : 'Decor'}
          </button>
        </div>
      </div>

      {/* Сетка товаров */}
      <div className="collection-products-container">
        {filteredProducts.length > 0 ? (
          <div className="collection-products-grid">
            {filteredProducts.map((product, index) => (
              <div 
                className="product-card" 
                key={product.id}
                style={{ transitionDelay: `${index * 0.15}s` }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate(`/${currentLang}/produkt/${product.id}`);
                }}
              >
                <div className="product-image-box">
                  <img 
                    src={product.image} 
                    alt={currentLang === 'pl' ? product.titlePl : product.titleEn} 
                    className="product-img" 
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">
                    {currentLang === 'pl' ? product.titlePl : product.titleEn}
                  </h3>
                  <button 
                    type="button" 
                    className="product-detail-link"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.scrollTo(0, 0);
                      navigate(`/${currentLang}/produkt/${product.id}`);
                    }}
                  >
                    <span>{currentLang === 'pl' ? product.linkPl : product.linkEn}</span>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="coming-soon-box">
            <p>{currentLang === 'pl' ? 'Wszystkie prace wkrótce' : 'All works coming soon'}</p>
          </div>
        )}
      </div>

    </div>
  );
}