import React from 'react';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <h1 style={{ textAlign: 'center', marginTop: '100px' }}>
          Добро пожаловать в мою галерею!
        </h1>
      </main>
    </div>
  );
}