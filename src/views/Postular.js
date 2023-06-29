import React from 'react';
import { Link } from 'react-router-dom';
import logo_usm from "./long-usm-icon.png"
import './Postular.css'
import { useState } from 'react';
import AntecedentesGenerales from './AntecedentesGenerales';
import Equipo from './Equipo';
import AnexosYVideo from './AnexosYVideo';
import Presupuesto from './Presupuesto';
import Planificacion from './Planificacion';

function Postular() {
  const [activeSection, setActiveSection] = useState(''); // Estado para mantener la sección activa

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };
  return (

    <div>
          <header className="logo-usm-head">
            <img src={logo_usm} className="Logo-USM" alt="logo_usm" />
          </header>
          <nav className='Nav-bar-post'>
      <button
        className={`Boton-seccion ${activeSection === 'antecedentes' ? 'active' : ''}`}
        onClick={() => handleButtonClick('antecedentes')}
      >
        Antecedentes Generales
      </button>
      <button
        className={`Boton-seccion ${activeSection === 'anexos' ? 'active' : ''}`}
        onClick={() => handleButtonClick('anexos')}
      >
        Anexos y video
      </button>
      <button
        className={`Boton-seccion ${activeSection === 'equipo' ? 'active' : ''}`}
        onClick={() => handleButtonClick('equipo')}
      >
        Equipo
      </button>
      <button
        className={`Boton-seccion ${activeSection === 'planificacion' ? 'active' : ''}`}
        onClick={() => handleButtonClick('planificacion')}
      >
        Planificación
      </button>
      <button
        className={`Boton-seccion ${activeSection === 'presupuesto' ? 'active' : ''}`}
        onClick={() => handleButtonClick('presupuesto')}
      >
        Presupuesto
      </button>
    </nav>

      {activeSection === 'antecedentes' && <AntecedentesGenerales />}
      {activeSection === 'anexos' && <AnexosYVideo />}
      {activeSection === 'equipo' && <Equipo />}
      {activeSection === 'planificacion' && <Planificacion />}
      {activeSection === 'presupuesto' && <Presupuesto />}
      <Link className="BotonPostular" to="/">Home</Link>

    </div>
  );
}

export default Postular;