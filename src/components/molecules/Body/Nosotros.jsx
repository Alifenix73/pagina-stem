import React from 'react';
import './Nosotros.css';
import background from '../assets/background.jpg';

const Nosotros = () => {
  const heroStyle = {
    backgroundImage: `url(${background})`,
  };

  return (
    <div id="nosotros">
    <div className="hero" style={heroStyle}>
      <div className="cards-container">
        <div className="info-card">
          <h3>Quiénes Somos</h3>
          <p>
          Somos una empresa dedicada a la formación integral, mediante cursos diseñados para ofrecer aprendizaje dinámico, práctico y accesible. Creemos en el poder de la educación como herramienta de crecimiento y desarrollo, por lo que trabajamos para brindar capacitación de calidad a precios competitivos. Con el lema "Capacitación a tu alcance", nos esforzamos por acercar el conocimiento a todas las personas que desean superarse, facilitando su acceso a nuevas oportunidades laborales y personales.
          </p>
        </div>
        <div className="info-card">
          <h3>Nuestra Misión</h3>
          <p>
          Brindar capacitación accesible y de calidad a personas que buscan adquirir o reforzar conocimientos teóricos y prácticos en diversas áreas, a través de cursos con enfoque dinámico y aplicado, permitiéndoles mejorar sus habilidades y ampliar sus oportunidades personales y profesionales.
        </p>

        </div>
        <div className="info-card">
          <h3>Nuestra Visión</h3>
          <p>
          Ser la empresa líder en formación accesible e integral, reconocida por su compromiso con la educación práctica y efectiva, ofreciendo programas innovadores que se adapten a las necesidades del mercado y de nuestros estudiantes, asegurando siempre precios competitivos y excelencia en la enseñanza.
        </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
