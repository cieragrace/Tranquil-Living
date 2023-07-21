import './Header.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='header-container'>
      <h1 className='app-name'>Tranquil Living</h1>
      <nav className='nav-container'>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`} />
          <div className={`bar ${isOpen ? 'open' : ''}`} />
          <div className={`bar ${isOpen ? 'open' : ''}`} />
        </div>

        {isOpen && (
          <ul className="menu">
            <li className='menu-items'>
              Shopping:
            </li>
            <li className='menu-items'>
              Aesthetic Home Shopping
            </li>
            <li className='menu-items'>
              Clean & Tidy Supplies
            </li>
            <li className='menu-items'>
              Home Oasis Wishlist
            </li>
            <li className='menu-items'>
              Cleaning Lists:
            </li>
            <li className='menu-items'>
              My Completed Tasks
            </li>
            <li className='menu-items'>
              My Incomplete Tasks
            </li>
            {/* Add more navigation options here */}
            <li className='menu-items'>
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className='menu-items'>
              <Link to="/services" className="nav-link">Services</Link>
            </li>
            {/* Add more navigation options as needed */}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Header;