import React, {useState, useEffect} from 'react';

function AntecedentesGenerales() {
    const [nombreProyecto, setNombreProyecto] = useState('');
    const [resumenEjecutivo, setResumenEjecutivo] = useState('');
    const [objetivoGeneral, setObjetivoGeneral] = useState('');
    const [objetivoEspecifico1, setObjetivoEspecifico1] = useState('');
    const [objetivoEspecifico2, setObjetivoEspecifico2] = useState('');
    const [objetivoEspecifico3, setObjetivoEspecifico3] = useState('');

    // Funciones para actualizar los valores de los campos de entrada de texto
    //-----------------------------
    const handleNombreProyecto = (event) => {
      setNombreProyecto(event.target.value);
      localStorage.setItem('nombreProyecto', event.target.value);
    };
  
    const handleResumenEjecutivoChange = (event) => {
      setResumenEjecutivo(event.target.value);
      localStorage.setItem('resumenEjecutivo', event.target.value);
    };
  
    const handleObjetivoGeneralChange = (event) => {
      setObjetivoGeneral(event.target.value);
      localStorage.setItem('objetivoGeneral', event.target.value);
    };
  
    const handleObjetivoEspecifico1Change = (event) => {
      setObjetivoEspecifico1(event.target.value);
      localStorage.setItem('objetivoEspecifico1', event.target.value);
    };
  
    const handleObjetivoEspecifico2Change = (event) => {
      setObjetivoEspecifico2(event.target.value);
      localStorage.setItem('objetivoEspecifico2', event.target.value);
    };
  
    const handleObjetivoEspecifico3Change = (event) => {
      setObjetivoEspecifico3(event.target.value);
      localStorage.setItem('objetivoEspecifico3', event.target.value);
    };

    const [problematica, setProblematica] = useState('');
    const [solucion, setSolucion] = useState('');
    const [impactoComunidad, setImpactoComunidad] = useState('');
    const [equipoMasculino, setEquipoMasculino] = useState(0);
    const [equipoFemenino, setEquipoFemenino] = useState(0);
    const [equipoNoBinario, setEquipoNoBinario] = useState(0);
  

    const handleProblematicaChange = (event) => {
      setProblematica(event.target.value);
      localStorage.setItem('problematica', event.target.value);
    };
    
    const handleSolucionChange = (event) => {
      setSolucion(event.target.value);
      localStorage.setItem('solucion', event.target.value);
    };
    
    const handleImpactoComunidadChange = (event) => {
      setImpactoComunidad(event.target.value);
      localStorage.setItem('impactoComunidad', event.target.value);
    };
    
    const handleEquipoMasculinoChange = (event) => {
      setEquipoMasculino(event.target.value);
      localStorage.setItem('equipoMasculino', event.target.value);
    };
    
    const handleEquipoFemeninoChange = (event) => {
      setEquipoFemenino(event.target.value);
      localStorage.setItem('equipoFemenino', event.target.value);
    };
    
    const handleEquipoNoBinarioChange = (event) => {
      setEquipoNoBinario(event.target.value.replace(/\D/g,""));
      localStorage.setItem('equipoNoBinario', event.target.value.replace(/\D/g,""));
    };

    useEffect(() => {
      setResumenEjecutivo(localStorage.getItem('resumenEjecutivo') || '');
      setObjetivoGeneral(localStorage.getItem('objetivoGeneral') || '');
      setObjetivoEspecifico1(localStorage.getItem('objetivoEspecifico1') || '');
      setObjetivoEspecifico2(localStorage.getItem('objetivoEspecifico2') || '');
      setObjetivoEspecifico3(localStorage.getItem('objetivoEspecifico3') || '');
      setNombreProyecto(localStorage.getItem('nombreProyecto') || '');
      setProblematica(localStorage.getItem('problematica') || '');
      setSolucion(localStorage.getItem('solucion') || '');
      setImpactoComunidad(localStorage.getItem('impactoComunidad') || '');
      setEquipoMasculino(parseInt(localStorage.getItem('equipoMasculino')) || 0);
      setEquipoFemenino(parseInt(localStorage.getItem('equipoFemenino')) || 0);
      setEquipoNoBinario(parseInt(localStorage.getItem('equipoNoBinario')) || 0);
    }, []);

    const handleKeyPress = (event) => {
      const keyCode = event.keyCode || event.which;
      const keyValue = String.fromCharCode(keyCode);
      const regex = /[0-9]/;
  
      if (!regex.test(keyValue)) {
        event.preventDefault();
      }
    };


  return (
    <div className="Antecedentes">
    <div class="row">
        <div class="column">
        <div>
                <div className="Texto-bloque-entrada">
                   <label htmlFor="nombreProyecto">Nombre proyecto<span style={{ color: 'red' }}> (*)</span>:</label>
                   <input
                     type="text"
                     id="nombreProyecto"
                     onChange={handleNombreProyecto}
                     value={nombreProyecto}
                     className='Input-text'
                   />
                </div>
                <div className="Texto-bloque-entrada">
                   <label htmlFor="resumenEjecutivo">Resumen Ejecutivo<span style={{ color: 'red' }}> (*)</span>:</label>
                   <input
                     type="text"
                     id="resumenEjecutivo"
                     onChange={handleResumenEjecutivoChange}
                     value={resumenEjecutivo}
                     className='Input-text'
                   />
                 </div>

                 <div className="Texto-bloque-entrada">
                   <label htmlFor="objetivoGeneral">Objetivo General<span style={{ color: 'red' }}> (*)</span>:</label>
                   <input
                     type="text"
                     id="objetivoGeneral"
                     value={objetivoGeneral}
                     onChange={handleObjetivoGeneralChange}
                     className='Input-text'
                   />
                 </div>

                 <div className="Texto-bloque-entrada">
                   <label htmlFor="objetivoEspecifico1">Objetivo Específico 1<span style={{ color: 'red' }}> (*)</span>:</label>
                   <input
                     type="text"
                     id="objetivoEspecifico1"
                     value={objetivoEspecifico1}
                     onChange={handleObjetivoEspecifico1Change}
                     className='Input-text'
                   />
                 </div>

                 <div className="Texto-bloque-entrada">
                   <label htmlFor="objetivoEspecifico2">Objetivo Específico 2<span style={{ color: 'red' }}> (*)</span>:</label>
                   <input
                     type="text"
                     id="objetivoEspecifico2"
                     value={objetivoEspecifico2}
                     onChange={handleObjetivoEspecifico2Change}
                     className='Input-text'
                   />
                 </div>

                 <div className="Texto-bloque-entrada">
                   <label htmlFor="objetivoEspecifico3">Objetivo Específico 3<span style={{ color: 'red' }}> (*)</span>:</label>
                   <input
                     type="text"
                     id="objetivoEspecifico3"
                     value={objetivoEspecifico3}
                     onChange={handleObjetivoEspecifico3Change}
                     className='Input-text'
                   />
                </div>
        </div>
            </div>
            <div class="column">
                <div className="align-blocks">
                    <div className="Texto-bloque-entrada">
                    <label htmlFor="problematica">¿Cuál es la problemática que ayudará a resolver tu proyecto?</label>
                    <textarea
                      id="problematica"
                      value={problematica}
                      onChange={handleProblematicaChange}
                      className="Input-text-caja"
                    />
                  </div>

                  <div className="Texto-bloque-entrada">
                    <label htmlFor="solucion">Explica en qué forma tu proyecto dará solución a la problemática planteada.</label>
                    <textarea
                      id="solucion"
                      value={solucion}
                      onChange={handleSolucionChange}
                      className="Input-text-caja"
                    />
                  </div>
              </div>
              <div className="titulo-checkbox">
                ¿A qué tipo de comunidad impacta tu proyecto?
                <div className="checkbox-impact">
                    <label>
                      <input type="checkbox" name="impact" value="Interno" />
                      Interno USM.
                    </label>
                    <label>
                      <input type="checkbox" name="impact" value="IntraCampus" />
                      Intra Campus y Sedes.
                    </label>
                    <label>
                      <input type="checkbox" name="impact" value="Vinculación" />
                      Vinculación de la USM con otras organizaciones o instituciones.
                    </label>
                </div>
              </div>

              <div className="Texto-bloque-entrada">
                <label htmlFor="impactoComunidad">Especifique de qué manera y forma su proyecto va a impactar a la comunidad.</label>
                <textarea
                  id="impactoComunidad"
                  value={impactoComunidad}
                  onChange={handleImpactoComunidadChange}
                  className="Input-text-caja"
                />
              </div>

              <div className="Texto-bloque-entrada">
                <label htmlFor="equipoMasculino">Identificación del equipo:</label>
                <div>
                  <label htmlFor="equipoMasculino">Masculino:</label>
                  <input
                    type="number"
                    pattern="[0-9]*"
                    min="0"
                    id="equipoMasculino"
                    value={equipoMasculino}
                    onChange={handleEquipoMasculinoChange}
                    onKeyDown={handleKeyPress}
                    className="Input-number"
                  />
                </div>
                <div>
                  <label htmlFor="equipoFemenino">Femenino:</label>
                  <input
                    type="number"
                    pattern="[0-9]*"
                    min="0"
                    id="equipoFemenino"
                    value={equipoFemenino}
                    onChange={handleEquipoFemeninoChange}
                    onKeyDown={handleKeyPress}
                    className="Input-number"
                  />

                </div>
                <div>
                  <label htmlFor="equipoNoBinario">No binario:</label>
                  <input
                    type="number"
                    min="0"
                    pattern='[0-9]*/g'
                    id="equipoNoBinario"
                    value={equipoNoBinario}
                    onChange={handleEquipoNoBinarioChange}
                    onKeyDown={handleKeyPress}
                    className="Input-number"
                    
                    />
                </div>
                </div>
            </div>
        </div> 
    </div>
  );
}

export default AntecedentesGenerales;