import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <header className="header">
      {/* Logo alineado a la izquierda */}
      <div className="logo">
        <span className="logo-stem">STEM</span>
        <span className="logo-sub">INSTITUTO MÉXICO</span>
      </div>

      {/* Botón menú hamburguesa para móvil */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      {/* Contenedor para centrar el menú */}
      <div className="nav-wrapper">
        <nav className={`nav ${menuAbierto ? 'activo' : ''}`}>
          <a href="#inicio" onClick={() => setMenuAbierto(false)}>Inicio</a>
          <a href="#nosotros" onClick={() => setMenuAbierto(false)}>Nosotros</a>
          <a href="#cursos" onClick={() => setMenuAbierto(false)}>Cursos</a>
          <a href="#contacto" onClick={() => setMenuAbierto(false)}>Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
