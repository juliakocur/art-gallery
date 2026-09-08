import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Philosophy from './components/Philosophy';
import HowToOrder from './components/HowToOrder';
import About from './components/About';
import ContactForm from './components/ContactForm';
import './App.css';

export default function App() {
  const [currentLang, setCurrentLang] = useState('pl');

  return (
    <div className="app">
      <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} />
      
      <main className="main-content">
        <Hero currentLang={currentLang} />
        <Collection currentLang={currentLang} />
        <Philosophy currentLang={currentLang} />
        <About currentLang={currentLang} />
        <HowToOrder currentLang={currentLang} />
        <ContactForm currentLang={currentLang} />
      </main>
    </div>
  );
}