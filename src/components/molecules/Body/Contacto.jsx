import './Contacto.css';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Contacto = () => {
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("https://formsubmit.co/ajax/contacto@steminstitutomexico.com", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nombre: form.nombre.value,
        email: form.email.value,
        mensaje: form.mensaje.value
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success === "true") {
        setEnviado(true);
        form.reset();
      }
    })
    .catch(error => {
      console.error("Error al enviar:", error);
    });
  };

  return (
    <section id="contacto" className="contacto-container">
      <h2 className="titulo-contacto">Contáctanos</h2>
      <div className="contacto-contenido">
        {enviado ? (
          <p className="mensaje-confirmacion">Gracias por tu mensaje. Te responderemos pronto.</p>
        ) : (
          <form className="formulario-contacto" onSubmit={manejarEnvio}>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre completo" />

            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" required placeholder="correo@ejemplo.com" />

            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows="5" required placeholder="Escribe tu mensaje aquí..."></textarea>

            <button type="submit">Enviar</button>
          </form>
        )}

        <div className="info-contacto">
          <p>También puedes escribirnos por WhatsApp:</p>
          <a
            href="https://wa.me/522293731604?text=Hola%2C%20me%20gustaría%20más%20información%20sobre%20los%20cursos"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-boton"
          >
            <FaWhatsapp size={20} /> Escríbenos por WhatsApp
          </a>

          <div className="datos-contacto">
            <p><strong>Dirección:</strong> Veracruz, México</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
