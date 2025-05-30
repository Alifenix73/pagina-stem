import React from 'react';
import './PieDePagina.css';
import logo from '../assets/stem.png'; 

import ModalPrivacidad from '../ModalPrivacidad/ModalPrivacidad';

const PieDePagina = () => {
  return (
    <footer className="pie-container">
      <div className="pie-logo">
        <img src={logo} alt="Logo Energy Consulting and Services" />
      </div>

      <div className="pie-info">
        <p className="pie-text">© 2025 STEM Instituto México. Todos los derechos reservados.</p>
        <ModalPrivacidad />
      </div>

    </footer>
  );
};

export default PieDePagina;
