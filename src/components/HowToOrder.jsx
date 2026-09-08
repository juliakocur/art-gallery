import React, { useEffect, useRef, useState } from 'react';
import './HowToOrder.css';

// Импорт SVG-иконок из папки assets
import lupaSvg from '../assets/lupa.svg';
import envelopSvg from '../assets/envelop.svg';
import akceptacjaSvg from '../assets/akceptacja.svg';
import cardSvg from '../assets/card.svg';
import photoSvg from '../assets/photo.svg';
import boxSvg from '../assets/box.svg';
import arrowSvg from '../assets/arrow.svg';

export default function HowToOrder({ currentLang }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Анимация плавного всплытия при скролле
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const content = {
    pl: {
      sectionTitle: "Jak zamówić",
      steps: [
        {
          title: "Wybierz",
          text: "Wybierz interesującą Cię pracę, rozmiar i wykończenie.",
          icon: lupaSvg
        },
        {
          title: "Napisz do mnie",
          text: "Omówimy szczegóły, pomogę w wyborze i podam ostateczną cenę. W razie potrzeby wspólnie dopracujemy koncepcję lub przygotuję szkic projektu.",
          icon: envelopSvg
        },
        {
          title: "Akceptacja projektu",
          text: "Po uzgodnieniu wszystkich szczegółów akceptujemy ostateczną wersję projektu.",
          icon: akceptacjaSvg
        },
        {
          title: "Zaliczka",
          text: "Do rozpoczęcia realizacji wymagana jest zaliczka w wysokości 30% wartości zamówienia.",
          icon: cardSvg
        },
        {
          title: "Realizacja",
          text: "Rozpoczynam tworzenie Twojej pracy. Po zakończeniu wysyłam Ci zdjęcia gotowego dzieła.",
          icon: photoSvg
        },
        {
          title: "Płatność i wysyłka",
          text: "Po otrzymaniu pozostałej kwoty starannie przygotowuję i pakuję gotową pracę do wysyłki.",
          icon: boxSvg
        }
      ]
    },
    en: {
      sectionTitle: "How to order",
      steps: [
        {
          title: "Choose",
          text: "Choose the artwork, size and finish that interest you.",
          icon: lupaSvg
        },
        {
          title: "Get in touch",
          text: "We’ll discuss the details, help you choose, and provide the final price. If needed, we can work out the concept together or I can prepare a sketch.",
          icon: envelopSvg
        },
        {
          title: "Project approval",
          text: "Once all the details have been agreed upon, we approve the final version of the project.",
          icon: akceptacjaSvg
        },
        {
          title: "Deposit",
          text: "A 30% deposit is required to begin the work.",
          icon: cardSvg
        },
        {
          title: "Creation",
          text: "I begin creating your artwork. Once it is finished, I’ll send you photos of the completed piece.",
          icon: photoSvg
        },
        {
          title: "Final payment & shipping",
          text: "Once the remaining balance has been received, I carefully prepare and package your finished artwork for shipping.",
          icon: boxSvg
        }
      ]
    }
  };

  const t = content[currentLang] || content.pl;

  return (
    <section 
      ref={sectionRef} 
      id="jak-zamowic"
      className={`how-to-order-section ${isVisible ? 'fade-in-active' : ''}`}
    >
      <div className="how-to-order-container">
        
        {/* Заголовок с золотыми линиями */}
        <div className="section-header-line">
          <span className="line left-line"></span>
          <h2 className="section-title">{t.sectionTitle}</h2>
          <span className="line right-line"></span>
        </div>

        {/* Цепочка шагов со стрелочками */}
        <div className="steps-wrapper">
          {t.steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="step-card">
                <div className="step-icon-box">
                  <img src={step.icon} alt={step.title} className="step-icon" />
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-text">{step.text}</p>
              </div>

              {/* Стрелочка между шагами */}
              {index < t.steps.length - 1 && (
                <div className="step-arrow-wrapper">
                  <img src={arrowSvg} alt="arrow" className="step-arrow" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}