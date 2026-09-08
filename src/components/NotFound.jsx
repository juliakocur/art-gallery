import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем хук для навигации
import './NotFound.css';

export default function NotFound({ currentLang }) {
  const navigate = useNavigate(); // Создаем функцию перехода
  const isPl = currentLang === 'pl';

  return (
    <section className="not-found-section">
      <div className="not-found-container">
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">
          {isPl ? 'Strona nie znaleziona' : 'Page Not Found'}
        </h2>
        <p className="not-found-text">
          {isPl
            ? 'Przepraszamy, ale strona, której szukasz, nie istnieje lub została przeniesiona.'
            : 'We are sorry, but the page you are looking for does not exist or has been moved.'}
        </p>
        
        {/* Чистый тег button с обработчиком клика */}
        <button 
          type="button" 
          className="not-found-btn" 
          onClick={() => navigate('/')}
        >
          {isPl ? 'Strona Główna' : 'Back to Home'}
        </button>
      </div>
    </section>
  );
}