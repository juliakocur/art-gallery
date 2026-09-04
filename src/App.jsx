import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import './App.css';

export default function App() {
  const [currentLang, setCurrentLang] = useState('pl');

  return (
    <div className="app">
      <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} />
      <Hero currentLang={currentLang} />
      <Collection currentLang={currentLang} />
      
      <main>
      </main>
    </div>
  );
}