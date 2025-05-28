import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/foods" className={`nav-link ${location.pathname === '/foods' ? 'active' : ''}`}>
            Foods
          </Link>
        </li>
        <li>
          <Link to="/about_us" className={`nav-link ${location.pathname === '/about_us' ? 'active' : ''}`}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;