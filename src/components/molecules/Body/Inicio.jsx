import './Inicio.css';
import logo from '../assets/stem.png'; 
import cursoImg from '../assets/ruta-del-curso.png';

const Inicio = () => {
  return (
    <section id="inicio" className="inicio-container">
      <div className="contenido">
        <div className="lado">
          <img src={logo} alt="Logo STEM" className="imagen" />
        </div>
        <div className="lado">
          <img src={cursoImg} alt="Cursos" className="imagen" />
        </div>
      </div>

      {/* Agrupamos subtítulo e introducción */}
      <div className="bloque-texto">
        <h4 className="subtitulo">CAPACITACIÓN A TU ALCANCE</h4>
        <p className="intro-inicio">
          En STEM Instituto México ofrecemos programas de capacitación práctica y accesible en áreas clave.
          Nuestros cursos están pensados para ayudarte a crecer personal y profesionalmente,
          sin importar tu nivel previo de experiencia.
        </p>
      </div>
    </section>
  );
};

export default Inicio;
