import React from 'react';
import logoSvg from '../../src/img/logo.svg';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logoSvg} alt="Logo" />
      </div>
      <nav>
        <ul className="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
      <div>
        <p className='phone'>+7 700 000 00 00</p>
      </div>
    </header>
  );
};

export default Header;