import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-stem">STEM</span>
        <span className="logo-sub">INSTITUTO MÉXICO</span>
      </div>
      <nav className="nav">
        <a href="#inicio">Inicio</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#cursos">Cursos</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
