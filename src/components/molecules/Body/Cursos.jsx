import React, { useState } from 'react';
import './Cursos.css';

const Cursos = () => {
  const [expandLeft, setExpandLeft] = useState(false);
  const [expandRight, setExpandRight] = useState(false);

  const cursosIzquierda = [
    "Gestión de Proyectos", "Calidad", "Contabilidad y Costos",
    "Formación de Instructores", 
   "Inteligencia Artificial", "Robótica"," Algoritmos y Programación",  "Informática y Diseño",
   "Dibujo Mecánico", 
 
  ];
  const cursosDerecha = [
   " Higiene y Seguridad Industrial ", " Mantenimiento ", " Metrologia y Normalizacion ", 

    " Sistemas e Instalaciones Hidraulicas ",   " SolidWorks ", " CATIA ", " MATLAB ", 
  ];

  return (
    <section id="cursos" className="cursos-container">
      <div className="cursos-wrapper">
        <div className={`curso-bloque ${expandLeft ? 'expandido' : ''}`}>
          <div className="cuadro" onClick={() => {
            setExpandLeft(!expandLeft);
            setExpandRight(false);
          }}>
            {!expandLeft ? (
              <>
                <h2>FORMACIÓN<br />INTEGRAL</h2>
                <p>IMPULSA TU CARRERA</p>
                <button className="boton-toggle">Ver cursos</button>
              </>
            ) : (
              <>
                <ul className="lista-cursos">
                  {cursosIzquierda.map((curso, index) => (
                    <li key={index}>{curso}</li>
                  ))}
                </ul>
                <button className="boton-toggle">Cerrar</button>
              </>
            )}
          </div>
        </div>

        <div className={`curso-bloque ${expandRight ? 'expandido' : ''}`}>
          <div className="cuadro" onClick={() => {
            setExpandRight(!expandRight);
            setExpandLeft(false);
          }}>
            {!expandRight ? (
              <>
                <h2>INGENIERÍA<br />DE<br />VANGUARDIA</h2>
                <p>POTENCIA TU FUTURO</p>
                <button className="boton-toggle">Ver cursos</button>
              </>
            ) : (
              <>
                <ul className="lista-cursos">
                  {cursosDerecha.map((curso, index) => (
                    <li key={index}>{curso}</li>
                  ))}
                </ul>
                <button className="boton-toggle">Cerrar</button>
              </>
            )}
          </div>
        </div>
      </div>

      <p className="frase-dc3">
        Todos nuestros cursos incluyen constancia de habilidades DC-3 avalada por la Secretaría del Trabajo y Previsión Social, conforme a la normatividad vigente.
      </p>
    </section>
  );
};

export default Cursos;
