import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/images/logo.png';

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const navItems = [
    { title: 'ទំព័រដើម', link: '/' },
    { title: 'ព័ត៌មាន', link: '/information' },
    { title: 'វីដេអូ', link: '/video' },
    { title: 'សម្លេង', link: '/audio' },
    { title: 'ទំនាក់ទំនង', link: '/contact' },
  ];

  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Dental Health" className="logo" />
          
        </Link>
        {/* Hamburger Toggler for Mobile */}
        <button className="navbar-toggler" onClick={toggleDrawer} aria-label="Toggle drawer">
          <span className="toggler-icon"></span>
        </button>

        {/* Desktop Menu */}
        <ul className="nav-desktop">
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <Link to={item.link} className="nav-link">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Drawer Menu for Mobile */}
      <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <button className="drawer-close" onClick={toggleDrawer} aria-label="Close drawer">
            <span className="close-icon">✕</span>
          </button>
        </div>
        <div className="drawer-content">
          <div className="list-group">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="list-group-item"
                onClick={() => setIsDrawerOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;