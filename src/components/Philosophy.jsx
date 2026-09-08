import React, { useEffect, useRef } from 'react';
import './Philosophy.css';
import fakturaIcon from '../assets/faktura.svg';
import rekaIcon from '../assets/reka.svg';
import indywidualnoscIcon from '../assets/indywidualnosc.svg';
import heartIcon from '../assets/heart.svg';

export default function Philosophy({ currentLang }) {
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

  const content = {
    pl: {
      title: 'Sztuka tworzona ręcznie',
      subtitle: 'Nie tylko dekoracja. Wyjątkowy akcent, który nadaje przestrzeni charakter.',
      steps: [
        {
          title: 'Faktura',
          desc: 'Relief tworzy subtelną grę światła i cienia, dzięki czemu praca zmienia się w zależności od pory dnia i oświetlenia.',
          icon: fakturaIcon
        },
        {
          title: 'Ręczne wykonanie',
          desc: 'Każda praca powstaje ręcznie — od pierwszej warstwy aż po najdrobniejsze detale.',
          icon: rekaIcon
        },
        {
          title: 'Indywidualność',
          desc: 'Rozmiar, kolor i wybrane detale mogą zostać dopasowane do charakteru Twojego wnętrza.',
          icon: indywidualnoscIcon
        },
        {
          title: 'Miłość do detali',
          desc: 'Tworzę prace, które przyciągają uwagę, zachęcają do bliższego spojrzenia i z czasem stają się częścią wnętrza.',
          icon: heartIcon
        }
      ]
    },
    en: {
      title: 'Handcrafted Art',
      subtitle: 'Not just decor. A distinctive accent that gives a space its character.',
      steps: [
        {
          title: 'Texture',
          desc: 'Relief creates a subtle interplay of light and shadow, allowing each piece to change with the light throughout the day.',
          icon: fakturaIcon
        },
        {
          title: 'Handmade',
          desc: 'Every piece is created by hand — from the first layer to the finest details.',
          icon: rekaIcon
        },
        {
          title: 'Individuality',
          desc: 'Size, color, and selected details can be adapted to complement the character of your interior.',
          icon: indywidualnoscIcon
        },
        {
          title: 'Love for details',
          desc: 'I create pieces that draw attention, invite a closer look, and gradually become part of the interior.',
          icon: heartIcon
        }
      ]
    }
  };

  const t = currentLang === 'pl' ? content.pl : content.en;

  return (
    <section className="philosophy-section" ref={sectionRef}>
      <div className="philosophy-container">
        
        {/* Шапка с линиями по бокам */}
        <div className="philosophy-top">
          <div className="philosophy-header-line">
            <span className="line left-line"></span>
            <h2 className="philosophy-section-title">{t.title}</h2>
            <span className="line right-line"></span>
          </div>
          <p className="philosophy-subtitle">{t.subtitle}</p>
        </div>

        {/* Сетка преимуществ */}
        <div className="philosophy-grid">
          {t.steps.map((step, index) => (
            <div 
              className="philosophy-card" 
              key={index}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="philosophy-icon-wrapper">
                <img src={step.icon} alt={step.title} className="philosophy-icon" />
              </div>
              <h3 className="philosophy-card-title">{step.title}</h3>
              <p className="philosophy-card-desc">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}