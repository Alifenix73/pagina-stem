import logo from './logo.svg';
import './App.css';

import BasicLayout from './components/templates/BasicLayout/BasicLayout';
import Inicio from './components/molecules/Body/Inicio'; 
import Nosotros from './components/molecules/Body/Nosotros';
import Cursos from './components/molecules/Body/Cursos';
import Contacto from './components/molecules/Body/Contacto';
import PieDePagina from './components/molecules/Body/PieDePagina';

function App() {
  return (
    <div className="App">
      <BasicLayout logoUrl={logo} />
      <Inicio />
      <Nosotros />
      <Cursos />
      <Contacto />
      <PieDePagina />
    </div>
  );
}

export default App;
