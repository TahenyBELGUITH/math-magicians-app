import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calculator">
            <Calculatrice />
          </Route>
          <Route path="/quotes">
            <Quotes />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  </>,
);
