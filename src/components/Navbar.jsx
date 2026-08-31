import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <h2>Art Gallery</h2>
      </div>

      {/* Меню для ПК и мобилок */}
      <nav className={`navbar__menu ${isOpen ? 'active' : ''}`}>
        <a href="#gallery">Галерея</a>
        <a href="#about">Обо мне</a>
        <a href="#contacts">Контакты</a>
      </nav>

      {/* Кнопка бургера для мобильных устройств */}
      <button 
        className="navbar__burger" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
