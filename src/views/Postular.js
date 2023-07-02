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
import FinalizarProcesos from './FinalizarProcesos';

function Postular() {
  const [activeSection, setActiveSection] = useState('antecedentes'); // Estado para mantener la sección activa

  
  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  
  const goToNextSection = () => {
    if (activeSection === 'antecedentes') {
      setActiveSection('anexos');
    } else if (activeSection === 'anexos') {
      setActiveSection('equipo');
    } else if (activeSection === 'equipo') {
      setActiveSection('planificacion');
    } else if (activeSection === 'planificacion') {
      setActiveSection('presupuesto');
    } else if (activeSection === 'presupuesto') {
      setActiveSection('finalizarprocesos');
    } else if (activeSection === 'finalizarprocesos') {
      // en la última sección
    }
  };

  const goToPreviousSection = () => {
    if (activeSection === 'antecedentes') {
      // ya está en la primera sección
    } else if (activeSection === 'anexos') {
      setActiveSection('antecedentes');
    } else if (activeSection === 'equipo') {
      setActiveSection('anexos');
    } else if (activeSection === 'planificacion') {
      setActiveSection('equipo');
    } else if (activeSection === 'presupuesto') {
      setActiveSection('planificacion');
    } else if (activeSection === 'finalizarprocesos') {
      setActiveSection('presupuesto');
    }
  };

  return (

    <div>
          <header className="logo-usm-head">
            <Link className="BotonPostular" to="/"><img src={logo_usm} className="Logo-USM" alt="logo_usm" /></Link>
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
      <button
        className={`Boton-seccion ${activeSection === 'finalizarprocesos' ? 'active' : ''}`}
        onClick={() => handleButtonClick('finalizarprocesos')}
      >
        Finalizar procesos
      </button>
    </nav>

      {activeSection === 'antecedentes' && <AntecedentesGenerales />}
      {activeSection === 'anexos' && <AnexosYVideo />}
      {activeSection === 'equipo' && <Equipo />}
      {activeSection === 'planificacion' && <Planificacion />}
      {activeSection === 'presupuesto' && <Presupuesto />}
      {activeSection === 'finalizarprocesos' && <FinalizarProcesos />}


      <button className= "moveButtons" onClick={goToPreviousSection}>Retroceder</button>
      <button className="moveButtons" onClick={goToNextSection}>Siguiente</button>
      

    </div>
  );
}

export default Postular;