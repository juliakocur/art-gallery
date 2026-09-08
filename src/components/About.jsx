import React, { useEffect, useRef } from 'react';
import './About.css';
import flowerImg from '../assets/flower.jpg';
import signatureImg from '../assets/signature1.svg';

export default function About({ currentLang }) {
  const content = {
    pl: {
      sectionTitle: "O sztuce",
      subtitle: "Sztuka, która nadaje przestrzeni duszę",
      text1: "Moje prace wykraczają poza ramy płaskiej powierzchni. Łączę fakturę, światło, kolor i wyrazistą formę, tworząc kompozycje pełne głębi. Każda z nich powstaje ręcznie, z dbałością o najmniejszy detal, stając się w pełni niepowtarzalna.",
      text2: "To więcej niż dekoracja — to forma, która przyciąga spojrzenie, budzi emocje i sprawia, że przestrzeń zaczyna opowiadać własną historię.",
      role: "Artystka & Twórca Sztuki Rzeźbiarskiej"
    },
    en: {
      sectionTitle: "About",
      subtitle: "Art that gives a soul to space",
      text1: "My works go beyond the boundaries of a flat surface. I combine texture, light, color, and expressive form, creating compositions full of depth. Each piece is handcrafted with attention to the smallest detail, making it entirely unique.",
      text2: "It is more than just decoration — it is a form that draws the gaze, awakens emotions, and allows the space to begin telling its own story.",
      role: "Artist & Sculptural Art Creator"
    }
  };

  const t = content[currentLang] || content.pl;
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
    <section className="about-section" id="o-sztuce" ref={sectionRef}>
      <div className="about-container">
        
        {/* Заголовок секции по центру с линиями */}
        <div className="section-header-line">
          <span className="line left-line"></span>
          <h2 className="section-title">{t.sectionTitle}</h2>
          <span className="line right-line"></span>
        </div>

        {/* Две колонки: слева картинка целиком, справа текст */}
        <div className="about-content-grid">
          
          {/* Левая колонка с изображением (полная, без обрезок) */}
          <div className="about-image-wrapper">
            <img src={flowerImg} alt="Sculptural flower art" className="about-flower-img" />
            <div className="about-image-overlay"></div>
          </div>

          {/* Правая колонка с текстом */}
          <div className="about-text-content">
            <h3 className="about-subtitle">{t.subtitle}</h3>
            
            <p className="about-text">{t.text1}</p>
            <p className="about-text">{t.text2}</p>

            <div className="about-signature-wrapper">
              <img src={signatureImg} alt="Julia Kocur Signature" className="about-signature" />
              <span className="about-role">{t.role}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}