import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Calculatrice from './pages/Calculatrice';
import Quotes from './pages/Quotes';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {' '}
    <React.StrictMode>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculatrice />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </>,
);
