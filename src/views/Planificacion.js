import React, { useState, useEffect } from 'react';

function Planificacion() {
  const [actividad, setActividad] = useState([]);
  const [nombre, setNombre] = useState('');
  const [inicio, setInicio] = useState('');
  const [termino, setTermino] = useState('');

  const agregarActividad = () => {
    if (nombre && inicio && termino) {
      const nuevaActividad = { nombre, inicio, termino };
      setActividad([...actividad, nuevaActividad]);
      setNombre('');
      setInicio('');
      setTermino('');
    }
  };

  useEffect(() => {
    setNombre(localStorage.getItem('nombre') || '');
    setInicio(localStorage.getItem('inicio') || '');
    setTermino(localStorage.getItem('termino') || '');
  }, []);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
    localStorage.setItem('nombre', event.target.value);
  };

  const handleInicioChange = (event) => {
    setInicio(event.target.value);
    localStorage.setItem('inicio', event.target.value);
  };

  const handleTerminoChange = (event) => {
    setTermino(event.target.value);
    localStorage.setItem('termino', event.target.value);
  };

  return (
    <div className="Planificacion">
      <div className="row">
        <div className="column">
          <div className="Texto-bloque-entrada">
            <br />
            <label htmlFor="nombre" style={{ display: 'block', textAlign: 'center' }}>
              Nombre Actividad:
              <br />
              <br />
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={handleNombreChange}
                className="Input-text"
              />
            </label>
          </div>
          <div className="Texto-bloque-entrada">
            <label htmlFor="inicio" style={{ display: 'block', textAlign: 'center' }}>
              Fecha inicio:
              <br />
              <br />
              <input
                type="date"
                id="inicio"
                value={inicio}
                onChange={handleInicioChange}
                className="Input-text"
              />
            </label>
          </div>
          <div className="Texto-bloque-entrada">
            <label htmlFor="termino" style={{ display: 'block', textAlign: 'center' }}>
              Fecha término:
              <br />
              <br />
              <input
                type="date"
                id="termino"
                value={termino}
                onChange={handleTerminoChange}
                className="Input-text"
              />
            </label>
          </div>
          <div className="Texto-bloque-entrada" style={{ textAlign: 'center' }}>
            <br />
            <button
              type="button"
              onClick={agregarActividad}
              style={{ marginLeft: '40%', textAlign: 'center', width: '20%', justifyContent: 'center', display: 'flex' }}
            >
              Agregar
            </button>
          </div>
        </div>
        <div className="column">
          <br />
          <strong>{'Actividades'}</strong>
          <br />
          <ul style={{ listStyle: 'none' }}>
            {actividad.map((actividad, index) => (
              <li key={index} className="Actividad-lista">
                <div style={{ textAlign: 'center' }}>
                  <strong>Nombre: {actividad.nombre}</strong>
                </div>
                <div style={{ textAlign: 'center' }}>
                  Inicio: {actividad.inicio}
                </div>
                <div style={{ textAlign: 'center' }}>
                  Término: {actividad.termino}
                </div>
                <br />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Planificacion;