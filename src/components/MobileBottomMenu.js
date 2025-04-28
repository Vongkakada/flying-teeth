import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MobileBottomMenu.css';

function MobileBottomMenu() {
  return (
    <div id="mobile-bottom-menu" className="mobile-bottom-menu">
      <div className="menu-container">
        <Link to="/" className="menu-item">
          <span>🏠</span>
          <small>ទំព័រដើម</small>
        </Link>
        <Link to="/information" className="menu-item">
          <span>🔍</span>
          <small>ព័ត៌មាន</small>
        </Link>
        <Link to="/contact" className="menu-item">
          <span>👤</span>
          <small>ទំនាក់ទំនង</small>
        </Link>
      </div>
    </div>
  );
}

export default MobileBottomMenu;