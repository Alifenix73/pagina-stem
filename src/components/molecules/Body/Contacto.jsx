import './Contacto.css';
import { FaWhatsapp } from 'react-icons/fa';

const Contacto = () => {
  return (
    <section id="contacto" className="contacto-container">
      <h2 className="titulo-contacto">Contáctanos</h2>
      <div className="contacto-contenido">
        {/* Formulario con Formsubmit */}
        <form
          className="formulario-contacto"
          action="https://formsubmit.co/contacto@steminstitutomexico.com"
          method="POST"
        >
          {/* Campos ocultos para redirección y desactivar captcha */}
          <input type="hidden" name="_next" value="https://steminstitutomexico.com/gracias" />
          <input type="hidden" name="_captcha" value="false" />

          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Tu nombre completo"
            required
          />

          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="correo@ejemplo.com"
            required
          />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="5"
            placeholder="Escribe tu mensaje aquí..."
            required
          ></textarea>

          <button type="submit">Enviar</button>
        </form>

        {/* Información y WhatsApp */}
        <div className="info-contacto">
          <p>También puedes escribirnos por WhatsApp:</p>
          <a
            href="https://wa.me/522293241413?text=Hola%2C%20me%20gustaría%20más%20información%20sobre%20los%20cursos"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-boton"
          >
            <FaWhatsapp size={20} /> Escríbenos por WhatsApp
          </a>

          <div className="datos-contacto">
            <p>
              <strong>Correo:</strong>{' '}
              <a
                href="mailto:contacto@steminstitutomexico.com"
                style={{ color: '#FFA860', textDecoration: 'underline' }}
              >
                contacto@steminstitutomexico.com
              </a>
            </p>
            <p><strong>Teléfono:</strong> +52 2293 241413</p>
            <p><strong>Dirección:</strong> Veracruz, México</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;



