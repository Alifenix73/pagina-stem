import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BasicLayout from './components/templates/BasicLayout/BasicLayout';
import Inicio from './components/molecules/Body/Inicio';
import Nosotros from './components/molecules/Body/Nosotros';
import Cursos from './components/molecules/Body/Cursos';
import Contacto from './components/molecules/Body/Contacto';
import PieDePagina from './components/molecules/Body/PieDePagina';
import Gracias from './components/molecules/Body/Gracias'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta principal (página completa) */}
          <Route
            path="/"
            element={
              <>
                <BasicLayout logoUrl={logo} />
                <Inicio />
                <Nosotros />
                <Cursos />
                <Contacto />
                <PieDePagina />
              </>
            }
          />
          
          {/* Ruta de gracias después de enviar formulario */}
          <Route path="/gracias" element={<Gracias />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
