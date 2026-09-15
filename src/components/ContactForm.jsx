import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useLocation, Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

export default function ContactForm({ currentLang }) {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const [category, setCategory] = useState('clock');
  const [size, setSize] = useState('50 cm'); // Дефолтный минимальный размер для часов теперь 50 cm
  const [color, setColor] = useState('');
  const [workName, setWorkName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');
  const [message, setMessage] = useState('');

  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [termsConsent, setTermsConsent] = useState(false);
  const [clientIp, setClientIp] = useState('Nieznany / Unknown');

  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [openSelect, setOpenSelect] = useState(null);

  const isPl = currentLang === 'pl';
  const privacyLink = isPl ? '/pl/polityka' : '/en/privacy';
  const termsLink = isPl ? '/pl/regulamin' : '/en/terms';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.ip) {
          setClientIp(data.ip);
        }
      })
      .catch((err) => {
        console.error('Nie udało się pobrać IP:', err);
      });
  }, []);

  useEffect(() => {
    if (location.state) {
      if (location.state.category) setCategory(location.state.category);
      if (location.state.workName) setWorkName(location.state.workName);
      
      const incomingSize = location.state.size || location.state.wymiar;
      if (incomingSize) setSize(incomingSize);

      const incomingColor = location.state.color || location.state.finish;
      if (incomingColor) setColor(incomingColor);
    }
  }, [location.state]);

  useEffect(() => {
    if (location.state && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.state]);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isModalOpen) {
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
  }, [isModalOpen]);

  const sizesOptions = {
    clock: [
      { value: '50 cm', label: '50 cm' },
      { value: '60 cm', label: '60 cm' },
      { value: '70 cm', label: '70 cm' },
      { value: '80 cm', label: '80 cm' },
      { value: '90 cm', label: '90 cm' },
      { value: '100 cm', label: '100 cm' },
      { value: 'inny', label: isPl ? 'Inny rozmiar' : 'Other size' }
    ],
    painting: [
      { value: '50x70 cm', label: '50x70 cm' },
      { value: '70x70 cm', label: '70x70 cm' },
      { value: '70x100 cm', label: '70x100 cm' },
      { value: '100x100 cm', label: '100x100 cm' },
      { value: 'inny', label: isPl ? 'Inny rozmiar' : 'Other size' }
    ],
    decor: [
      { value: '30 cm', label: '30 cm' },
      { value: '50 cm', label: '50 cm' },
      { value: '70 cm', label: '70 cm' },
      { value: 'inny', label: isPl ? 'Inny rozmiar' : 'Other size' }
    ]
  };

  const finishOptions = [
    { value: 'gold', label: isPl ? 'Złoto' : 'Gold' },
    { value: 'silver', label: isPl ? 'Srebro' : 'Silver' },
    { value: 'red', label: isPl ? 'Czerwień' : 'Red' },
    { value: 'none', label: isPl ? 'Bez wykończenia' : 'No finish' }
  ];

  const validateEmail = (emailStr) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(emailStr).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!workName.trim()) newErrors.workName = true;
    if (!name.trim()) newErrors.name = true;
    if (!email.trim() || !validateEmail(email)) newErrors.email = true;
    if (!message.trim()) newErrors.message = true;
    if (!privacyConsent) newErrors.privacyConsent = true;
    if (!termsConsent) newErrors.termsConsent = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      const templateParams = {
        category,
        workName,
        size: size || 'Nie wybrano / Not selected',
        color: color || 'Nie wybrano / Not selected',
        name,
        email,
        instagram: instagram || 'Brak / None',
        message,
        clientIp,
        timestamp: new Date().toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' })
      };

      try {
        await emailjs.send(
          'service_oli5s5h', 
          'template_1dp1snj', 
          templateParams, 
          'kSE3to3FNWUG-DWS1'
        );

        setIsClosing(false);
        setIsModalOpen(true);
        
        // Сброс формы в исходное состояние (с минимальным размером 50 cm для часов)
        setCategory('clock');
        setSize('50 cm');
        setColor('');
        setWorkName('');
        setName('');
        setEmail('');
        setInstagram('');
        setMessage('');
        setPrivacyConsent(false);
        setTermsConsent(false);
      } catch (error) {
        console.error('Błąd wysyłania emaila:', error);
        alert(isPl ? 'Wystąpił błąd podczas wysyłania. Spróbuj ponownie.' : 'An error occurred while sending. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 350);
  };

  const modal = isModalOpen
    ? createPortal(
        <div className={`modal-overlay ${isClosing ? 'closing' : 'active'}`} onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">
              {isPl ? 'Dziękujemy!' : 'Thank You!'}
            </h3>
            <p className="modal-text">
              {isPl
                ? 'Twoje zapytanie zostało wysłane pomyślnie. Wkrótce się z Tobą skontaktuję.'
                : 'Your inquiry has been successfully sent. I will get in touch with you shortly.'}
            </p>
            <button className="modal-close-btn" onClick={closeModal}>
              {isPl ? 'Zamknij' : 'Close'}
            </button>
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <section
      ref={sectionRef}
      id="kontakt"
      className={`contact-section ${isVisible ? 'fade-in-active' : ''}`}
    >
      <div className="contact-container">
        <div className="section-header-line">
          <span className="line left-line"></span>
          <h2 className="section-title">
            {isPl ? 'Zapytaj o cenę' : 'Ask for price'}
          </h2>
          <span className="line right-line"></span>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                {isPl ? 'Co Cię interesuje?' : 'What are you interested in?'}
              </label>
              <select
                className={`form-select ${openSelect === 'category' ? 'is-open' : ''}`}
                value={category}
                onMouseDown={() => setOpenSelect('category')}
                onBlur={() => setOpenSelect(null)}
                onChange={(e) => {
                  const newCat = e.target.value;
                  setCategory(newCat);
                  setOpenSelect(null);
                  
                  // Установка минимального размера для каждой категории
                  if (newCat === 'clock') setSize('50 cm');
                  else if (newCat === 'painting') setSize('50x70 cm');
                  else if (newCat === 'decor') setSize('30 cm');
                }}
              >
                <option value="clock">{isPl ? 'Zegar' : 'Clock'}</option>
                <option value="painting">{isPl ? 'Obraz' : 'Painting'}</option>
                <option value="decor">{isPl ? 'Dekoracja' : 'Decorative Object'}</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                {isPl ? 'Nazwa pracy' : 'Artwork name'}
              </label>
              <input
                type="text"
                className={`form-input ${errors.workName ? 'error' : ''}`}
                placeholder={isPl ? 'np. Zegar Granaty' : 'e.g. Clock Pomegranates'}
                value={workName}
                onChange={(e) => {
                  setWorkName(e.target.value);
                  if (errors.workName) setErrors({ ...errors, workName: false });
                }}
              />
              {errors.workName && (
                <span className="error-text">
                  {isPl ? 'Proszę wpisać nazwę pracy' : 'Please enter artwork name'}
                </span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                {isPl ? 'Wybrany rozmiar' : 'Selected size'}
              </label>
              <select
                className={`form-select ${openSelect === 'size' ? 'is-open' : ''}`}
                value={size}
                onMouseDown={() => setOpenSelect('size')}
                onBlur={() => setOpenSelect(null)}
                onChange={(e) => {
                  setSize(e.target.value);
                  setOpenSelect(null);
                }}
              >
                {sizesOptions[category]?.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                {isPl ? 'Kolor / Wykończenie' : 'Color / Finish'}
              </label>
              <select
                className={`form-select ${openSelect === 'color' ? 'is-open' : ''}`}
                value={color}
                onMouseDown={() => setOpenSelect('color')}
                onBlur={() => setOpenSelect(null)}
                onChange={(e) => {
                  setColor(e.target.value);
                  setOpenSelect(null);
                }}
              >
                <option value="" disabled>
                  {isPl ? 'Wybierz wykończenie' : 'Select finish'}
                </option>
                {finishOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                {isPl ? 'Twoje imię' : 'Your name'}
              </label>
              <input
                type="text"
                className={`form-input ${errors.name ? 'error' : ''}`}
                placeholder={isPl ? 'Imię' : 'Name'}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors({ ...errors, name: false });
                }}
              />
              {errors.name && (
                <span className="error-text">
                  {isPl ? 'Proszę wpisać imię' : 'Please enter your name'}
                </span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">E-mail</label>
              <input
                type="email"
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="E-mail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: false });
                }}
              />
              {errors.email && (
                <span className="error-text">
                  {isPl ? 'Wprowadź poprawny adres e-mail' : 'Please enter a valid email'}
                </span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                {isPl ? 'Instagram (opcjonalnie)' : 'Instagram (optional)'}
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="@instagram"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label className="form-label">
              {isPl ? 'Opowiedz mi o swoim projekcie...' : 'Tell me about your project...'}
            </label>
            <textarea
              className={`form-textarea ${errors.message ? 'error' : ''}`}
              rows="4"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (errors.message) setErrors({ ...errors, message: false });
              }}
            ></textarea>
            {errors.message && (
              <span className="error-text">
                {isPl ? 'Proszę opisać swój projekt' : 'Please describe your project'}
              </span>
            )}
          </div>

          <div className="form-consents-wrapper">
            <div className="consent-item">
              <label className="consent-label">
                <input
                  type="checkbox"
                  className="consent-checkbox"
                  checked={privacyConsent}
                  onChange={(e) => {
                    setPrivacyConsent(e.target.checked);
                    if (errors.privacyConsent) setErrors({ ...errors, privacyConsent: false });
                  }}
                />
                <span className="consent-text">
                  {isPl ? (
                    <>
                      Oświadczam, że zapoznałam/em się z <Link to={privacyLink} onClick={scrollToTop}>Polityką Prywatności</Link>.
                    </>
                  ) : (
                    <>
                      I declare that I have read the <Link to={privacyLink} onClick={scrollToTop}>Privacy Policy</Link>.
                    </>
                  )}
                </span>
              </label>
              {errors.privacyConsent && (
                <span className="error-text">
                  {isPl ? 'Musisz zaakceptować Politykę Prywatności' : 'You must accept the Privacy Policy'}
                </span>
              )}
            </div>

            <div className="consent-item">
              <label className="consent-label">
                <input
                  type="checkbox"
                  className="consent-checkbox"
                  checked={termsConsent}
                  onChange={(e) => {
                    setTermsConsent(e.target.checked);
                    if (errors.termsConsent) setErrors({ ...errors, termsConsent: false });
                  }}
                />
                <span className="consent-text">
                  {isPl ? (
                    <>
                      Oświadczam, że zapoznałam/em się z <Link to={termsLink} onClick={scrollToTop}>Regulaminem</Link>.
                    </>
                  ) : (
                    <>
                      I declare that I have read the <Link to={termsLink} onClick={scrollToTop}>Terms</Link>.
                    </>
                  )}
                </span>
              </label>
              {errors.termsConsent && (
                <span className="error-text">
                  {isPl ? 'Musisz zaakceptować Regulamin' : 'You must accept the Terms'}
                </span>
              )}
            </div>
          </div>

          <div className="form-submit-wrapper">
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting 
                ? (isPl ? 'Wysyłanie...' : 'Sending...') 
                : (isPl ? 'Wyślij zapytanie' : 'Send inquiry')}
            </button>
          </div>
        </form>
      </div>

      {modal}
    </section>
  );
}