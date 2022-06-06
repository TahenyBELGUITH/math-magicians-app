import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const links = [
    {
      id: 1,
      path: '/',
      title: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      title: 'Calculator',
    },
    {
      id: 3,
      path: '/quotes',
      title: 'Quotes',
    },
  ];
  return (
    <div className="container-Nav">
      <h1>Math Magicians</h1>
      <nav className="navBar">
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} exact className="active-link">
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
