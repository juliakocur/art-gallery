import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductPage.css';

export default function ProductPage({ currentLang }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const sectionRef = useRef(null);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Состояния для выбора пользователя
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedFinish, setSelectedFinish] = useState('');
  const [showErrors, setShowErrors] = useState(false);
  const optionsRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // База данных всех товаров
  const productsData = {
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
      images: [
        '/images/clock.jpg',
        '/images/relief.jpg',
        '/images/interior-clock.jpg'
      ],
      descPl: 'Ręcznie rzeźbiony zegar ścienny łączący motywy organiczne z precyzyjnym mechanizmem kwarcowym.',
      descEn: 'Hand-sculpted wall clock combining organic motifs with a precise quartz movement.',
      detailsPl: ['Średnica: 60 cm', 'Masa: ok. 3.2 kg', 'Mechanizm: Cichy, płynący'],
      detailsEn: ['Diameter: 60 cm', 'Weight: approx. 3.2 kg', 'Mechanism: Silent, sweep movement']
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
      images: ['/images/clock.jpg', '/images/relief.jpg'],
      descPl: 'Subtelna kompozycja inspirowana naturą.',
      descEn: 'Subtle composition inspired by nature.',
      detailsPl: ['Średnica: 60 cm'],
      detailsEn: ['Diameter: 60 cm']
    },
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
      images: ['/images/relief.jpg', '/images/clock.jpg'],
      descPl: 'Unikalny obraz strukturalny stworzony przy użyciu autorskiej techniki reliefowej.',
      descEn: 'A unique structural painting created using an original relief technique.',
      detailsPl: ['Wymiary: 70x70 cm', 'Technika: Mixed media / Relief'],
      detailsEn: ['Dimensions: 70x70 cm', 'Technique: Mixed media / Relief']
    },
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
      images: ['/images/interior-clock.jpg', '/images/relief.jpg'],
      descPl: 'Wyjątkowy obiekt rzeźbiarski wzbogacający nowoczesne wnętrza.',
      descEn: 'An exceptional sculptural object enhancing modern interiors.',
      detailsPl: ['Wymiary: 50 cm'],
      detailsEn: ['Dimensions: 50 cm']
    }
  };

  const product = productsData[id] || productsData['zegar-01'];

  // Списки размеров для всех категорий
  const sizesOptions = {
    clock: [
      { value: '50 cm', label: '50 cm' },
      { value: '60 cm', label: '60 cm' },
      { value: '70 cm', label: '70 cm' },
      { value: '80 cm', label: '80 cm' },
      { value: '90 cm', label: '90 cm' },
      { value: '100 cm', label: '100 cm' },
      { value: 'inny', label: currentLang === 'pl' ? 'Inny rozmiar' : 'Other size' }
    ],
    painting: [
      { value: '50x70 cm', label: '50x70 cm' },
      { value: '70x70 cm', label: '70x70 cm' },
      { value: '70x100 cm', label: '70x100 cm' },
      { value: '100x100 cm', label: '100x100 cm' },
      { value: 'inny', label: currentLang === 'pl' ? 'Inny rozmiar' : 'Other size' }
    ],
    decor: [
      { value: '30 cm', label: '30 cm' },
      { value: '50 cm', label: '50 cm' },
      { value: '70 cm', label: '70 cm' },
      { value: 'inny', label: currentLang === 'pl' ? 'Inny rozmiar' : 'Other size' }
    ]
  };

  // Варианты отделки со стабильными системными ключами
  const finishOptions = [
    { value: 'gold', labelPl: 'Złoto', labelEn: 'Gold', colorCode: '#C5A880' },
    { value: 'silver', labelPl: 'Srebro', labelEn: 'Silver', colorCode: '#B0B0B0' },
    { value: 'red', labelPl: 'Czerwień', labelEn: 'Red', colorCode: '#A83232' },
    { value: 'none', labelPl: 'Bez wykończenia', labelEn: 'No finish', colorCode: '#E5E1DA', isPlain: true }
  ];

  const currentCategorySizes = sizesOptions[product.categoryKey] || sizesOptions.clock;

  const handleBackToCategory = () => {
    const catSlug = currentLang === 'pl' ? product.categorySlugPl : product.categorySlugEn;
    navigate(`/${currentLang}/kolekcja/${catSlug}`);
  };

  const handleOrderClick = () => {
    // Проверка валидации: выбран ли размер и отделка
    if (!selectedSize || !selectedFinish) {
      setShowErrors(true);
      if (optionsRef.current) {
        optionsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Передаем все возможные варианты названий полей для надежности
    navigate(`/${currentLang}#kontakt`, {
      state: {
        category: product.categoryKey,
        workName: currentLang === 'pl' ? product.nameOnlyPl : product.nameOnlyEn,
        size: selectedSize,
        wymiar: selectedSize,
        color: selectedFinish,
        finish: selectedFinish
      }
    });
  };

  return (
    <div className="product-page" ref={sectionRef}>
      {/* Hero Баннер */}
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

      {/* Хлебные крошки */}
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

      {/* Основной контент товара */}
      <div className="product-detail-container">
        
        {/* Галерея изображений */}
        <div className="product-gallery-side">
          <div 
            className="product-main-image-wrapper"
            onClick={() => setIsLightboxOpen(true)}
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

        {/* Информация и выбор параметров */}
        <div className="product-info-side" ref={optionsRef}>
          <h2 className="product-detail-title">
            {currentLang === 'pl' ? product.nameOnlyPl : product.nameOnlyEn}
          </h2>

          <p className="product-detail-desc">
            {currentLang === 'pl' ? product.descPl : product.descEn}
          </p>

          {/* БЛОК ВЫБОРА: ОТДЕЛКА (WYKOŃCZENIE) */}
          <div className="product-option-section">
            <h3 className={`option-heading ${showErrors && !selectedFinish ? 'error-label' : ''}`}>
              {currentLang === 'pl' ? 'Wykończenie' : 'Finish'}
              {showErrors && !selectedFinish && (
                <span className="validation-alert"> — {currentLang === 'pl' ? 'Wybierz wykończenie' : 'Select finish'}</span>
              )}
            </h3>
            <div className="finish-options-grid">
              {finishOptions.map((opt) => {
                const finishLabelText = currentLang === 'pl' ? opt.labelPl : opt.labelEn;
                const isSelected = selectedFinish === opt.value;
                return (
                  <div 
                    key={opt.value}
                    className={`finish-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedFinish(opt.value);
                      if (showErrors) setShowErrors(false);
                    }}
                  >
                    <span 
                      className="finish-dot" 
                      style={{ backgroundColor: opt.colorCode }}
                    ></span>
                    <span className="finish-label">
                      {finishLabelText}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* БЛОК ВЫБОРА: РАЗМЕР (WYMIAR) */}
          <div className="product-option-section">
            <h3 className={`option-heading ${showErrors && !selectedSize ? 'error-label' : ''}`}>
              {currentLang === 'pl' ? 'Wymiar' : 'Size'}
              {showErrors && !selectedSize && (
                <span className="validation-alert"> — {currentLang === 'pl' ? 'Wybierz rozmiar' : 'Select size'}</span>
              )}
            </h3>
            <div className="sizes-options-grid">
              {currentCategorySizes.map((sz) => {
                const isSelected = selectedSize === sz.value;
                return (
                  <button
                    type="button"
                    key={sz.value}
                    className={`size-btn ${isSelected ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedSize(sz.value);
                      if (showErrors) setShowErrors(false);
                    }}
                  >
                    {sz.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Спецификация */}
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

          {/* Кнопки действий */}
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

      {/* Лайтбокс */}
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