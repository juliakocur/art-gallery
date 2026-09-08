import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './ContactForm.css';

export default function ContactForm({ currentLang }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Состояния для полей формы
  const [category, setCategory] = useState('clock');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('gold');
  const [workName, setWorkName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');
  const [message, setMessage] = useState('');

  // Состояния для ошибок валидации и показа попапа
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Обновляем доступные размеры при смене категории
  useEffect(() => {
    if (category === 'clock') {
      setSize('60 cm');
    } else if (category === 'painting') {
      setSize('70x70 cm');
    } else if (category === 'decor') {
      setSize('50 cm');
    }
  }, [category]);

  // Анимация появления секции при скролле
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

  // Блокируем скролл страницы, когда открыт попап
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  // Списки размеров для каждого типа
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

  // Проверка email
  const validateEmail = (emailStr) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(emailStr).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Проверяем обязательные поля
    if (!workName.trim()) newErrors.workName = true;
    if (!name.trim()) newErrors.name = true;
    if (!email.trim() || !validateEmail(email)) newErrors.email = true;
    if (!message.trim()) newErrors.message = true;

    setErrors(newErrors);

    // Если ошибок нет — открываем попап и очищаем форму
    if (Object.keys(newErrors).length === 0) {
      setIsModalOpen(true);
      setWorkName('');
      setName('');
      setEmail('');
      setInstagram('');
      setMessage('');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Модалка через Portal — рендерится в document.body
  const modal = isModalOpen
    ? createPortal(
        <div className="modal-overlay active" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">
              {currentLang === 'pl' ? 'Dziękujemy!' : 'Thank You!'}
            </h3>
            <p className="modal-text">
              {currentLang === 'pl'
                ? 'Twoje zapytanie zostało wysłane pomyślnie. Wkrótce się z Tobą skontaktuję.'
                : 'Your inquiry has been successfully sent. I will get in touch with you shortly.'}
            </p>
            <button className="modal-close-btn" onClick={closeModal}>
              {currentLang === 'pl' ? 'Zamknij' : 'Close'}
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
        {/* Заголовок с линиями */}
        <div className="section-header-line">
          <span className="line left-line"></span>
          <h2 className="section-title">
            {currentLang === 'pl' ? 'Zapytaj o cenę' : 'Ask for price'}
          </h2>
          <span className="line right-line"></span>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {/* Строка 1 */}
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                {currentLang === 'pl' ? 'Co Cię interesuje?' : 'What are you interested in?'}
              </label>
              <select
                className="form-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="clock">{currentLang === 'pl' ? 'Zegar' : 'Clock'}</option>
                <option value="painting">{currentLang === 'pl' ? 'Obraz' : 'Painting'}</option>
                <option value="decor">{currentLang === 'pl' ? 'Dekoracja' : 'Decorative Object'}</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                {currentLang === 'pl' ? 'Nazwa pracy' : 'Artwork name'}
              </label>
              <input
                type="text"
                className={`form-input ${errors.workName ? 'error' : ''}`}
                placeholder={currentLang === 'pl' ? 'np. Zegar Granat' : 'e.g. Clock Blue'}
                value={workName}
                onChange={(e) => {
                  setWorkName(e.target.value);
                  if (errors.workName) setErrors({ ...errors, workName: false });
                }}
              />
              {errors.workName && (
                <span className="error-text">
                  {currentLang === 'pl' ? 'Proszę wpisać nazwę pracy' : 'Please enter artwork name'}
                </span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                {currentLang === 'pl' ? 'Wybrany rozmiar' : 'Selected size'}
              </label>
              <select
                className="form-select"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                {sizesOptions[category].map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                {currentLang === 'pl' ? 'Kolor / Wykończenie' : 'Color / Finish'}
              </label>
              <select
                className="form-select"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              >
                <option value="gold">{currentLang === 'pl' ? 'Złoty' : 'Gold'}</option>
                <option value="silver">{currentLang === 'pl' ? 'Srebrny' : 'Silver'}</option>
                <option value="other">{currentLang === 'pl' ? 'Inny / Własny' : 'Other / Custom'}</option>
              </select>
            </div>
          </div>

          {/* Строка 2 */}
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                {currentLang === 'pl' ? 'Twoje imię' : 'Your name'}
              </label>
              <input
                type="text"
                className={`form-input ${errors.name ? 'error' : ''}`}
                placeholder={currentLang === 'pl' ? 'Imię' : 'Name'}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors({ ...errors, name: false });
                }}
              />
              {errors.name && (
                <span className="error-text">
                  {currentLang === 'pl' ? 'Proszę wpisać imię' : 'Please enter your name'}
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
                  {currentLang === 'pl' ? 'Wprowadź poprawny adres e-mail' : 'Please enter a valid email'}
                </span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                {currentLang === 'pl' ? 'Instagram (opcjonalnie)' : 'Instagram (optional)'}
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

          {/* Строка 3: Текст сообщения */}
          <div className="form-group full-width">
            <label className="form-label">
              {currentLang === 'pl' ? 'Opowiedz mi o swoim projekcie...' : 'Tell me about your project...'}
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
                {currentLang === 'pl' ? 'Proszę opisać swój projekt' : 'Please describe your project'}
              </span>
            )}
          </div>

          {/* Кнопка отправки */}
          <div className="form-submit-wrapper">
            <button type="submit" className="submit-btn">
              {currentLang === 'pl' ? 'Wyślij zapytanie' : 'Send inquiry'}
            </button>
          </div>
        </form>
      </div>

      {/* Модалка через Portal */}
      {modal}
    </section>
  );
}