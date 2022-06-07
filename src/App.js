import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Calculatrice from './pages/Calculatrice';
import Quotes from './pages/Quotes';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculatrice />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
