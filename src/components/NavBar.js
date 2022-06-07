import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
// import Home from "../pages/Home";

export default function NavBar() {
  return (
    <div className="container-Nav">
      <h1>Math Magicians</h1>
      <nav className="navBar">
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="/calculator">Calculator</Link>
        <Link className="links" to="/quotes">Quotes</Link>
      </nav>
    </div>
  );
}
