import React from 'react';
import "./Header.css";
import { useLocation, Link } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="company-logo">
        <a href="/">Madhay Construction</a>
      </div>
      <nav className="nav">
        <ul className="tabs" id="nav-tabs">
          <li className={location.pathname === '/' || location.pathname === '' ? 'active-tab' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === '/about-us' ? 'active-tab' : ''}>
            <Link to="/about-us">About Us</Link>
          </li>
          <li className={location.pathname === '/services' ? 'active-tab' : ''}>
            <Link to="/services">Services</Link>
          </li>
          <li className={location.pathname === '/projects' ? 'active-tab' : ''}>
            <Link to="/projects">Projects</Link>
          </li>
          <li className={location.pathname === '/contact-us' ? 'active-tab' : ''}>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
