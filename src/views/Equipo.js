import React, { useState, useEffect } from 'react';

function Equipo() {
  const [miembros, setMiembros] = useState([]);
  const [nombre, setNombre] = useState('');
  const [rut, setRut] = useState('');
  const [correo, setCorreo] = useState('');
  const [rol, setRol] = useState('');
  const [campus, setCampus] = useState('');

  const [rolesPredefinidos] = useState([
    'Jefatura de proyecto (*)',
    'Encargado/a de finanzas (*)',
    'Subjefatura de proyecto (*)'
  ]);
  const [campusOptions] = useState(['San Joaquin', 'Casa Central']);

  const agregarMiembro = () => {
    if (nombre && rut && correo && rol && campus) {
      const nuevoMiembro = { nombre, rut, correo, rol, campus };
      setMiembros([...miembros, nuevoMiembro]);
      setNombre('');
      setRut('');
      setCorreo('');
      setRol('');
      setCampus('');
    }
  };

  useEffect(() => {
    setNombre(localStorage.getItem('nombre') || '');
    setRut(localStorage.getItem('rut') || '');
    setCorreo(localStorage.getItem('correo') || '');
    setRol(localStorage.getItem('rol') || '');
    setCampus(localStorage.getItem('campus') || '');
  }, []);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
    localStorage.setItem('nombre', event.target.value);
  };

  const handleRutChange = (event) => {
    setRut(event.target.value);
    localStorage.setItem('rut', event.target.value);
  };

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
    localStorage.setItem('correo', event.target.value);
  };

  const handleRolChange = (event) => {
    setRol(event.target.value);
    localStorage.setItem('rol', event.target.value);
  };

  const handleCampusChange = (event) => {
    setCampus(event.target.value);
    localStorage.setItem('campus', event.target.value);
  };

  // Ordenar los miembros por rol
  const miembrosOrdenados = [...miembros].sort((a, b) => {
    if (a.rol === 'Jefatura de proyecto (*)') return -1;
    if (b.rol === 'Jefatura de proyecto (*)') return 1;
    if (a.rol === 'Subjefatura de proyecto (*)') return -1;
    if (b.rol === 'Subjefatura de proyecto (*)') return 1;
    if (a.rol === 'Encargado/a de finanzas (*)') return -1;
    if (b.rol === 'Encargado/a de finanzas (*)') return 1;
    return 0;
  });

  return (
    <div className="Equipo">
      <div className="row">
        <div className="column">
          <div className="Texto-bloque-entrada">
            <br />
            <label htmlFor="nombre" style={{ display: 'block', textAlign: 'center' }}>
              Nombre:
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
            <label htmlFor="rut" style={{ display: 'block', textAlign: 'center' }}>
              RUT:
              <br />
              <br />
              <input
                type="text"
                id="rut"
                value={rut}
                onChange={handleRutChange}
                className="Input-text"
              />
            </label>
          </div>
          <div className="Texto-bloque-entrada">
            <label htmlFor="correo" style={{ display: 'block', textAlign: 'center' }}>
              Correo:
              <br />
              <br />
              <input
                type="text"
                id="correo"
                value={correo}
                onChange={handleCorreoChange}
                className="Input-text"
              />
            </label>
          </div>
          <div className="Texto-bloque-entrada">
            <label htmlFor="rol" style={{ display: 'block', textAlign: 'center' }}>
              Rol:
              <br />
              <br />
              <select
                id="rol"
                value={rol}
                onChange={handleRolChange}
                className="Input-text"
              >
                <option value="">Seleccionar rol</option>
                <option value="Participante">Participante</option>
                {rolesPredefinidos.map((rol, index) => (
                  <option key={index} value={rol}>
                    {rol}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="Texto-bloque-entrada">
            <label htmlFor="campus" style={{ display: 'block', textAlign: 'center' }}>
              Campus:
              <br />
              <br />
              <select
                id="campus"
                value={campus}
                onChange={handleCampusChange}
                className="Input-text"
              >
                <option value="">Seleccionar campus</option>
                {campusOptions.map((campus, index) => (
                  <option key={index} value={campus}>
                    {campus}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="Texto-bloque-entrada" style={{ textAlign: 'center' }}>
            <br />
            <button type="button" onClick={agregarMiembro} style={{ marginLeft: '40%', textAlign: 'center', width: '20%', justifyContent: 'center', display: 'flex' }}>
              Agregar
            </button>
          </div>
        </div>
        <div className="column">
          <br />
          <strong>{'Equipo'}</strong>
          <br />
          <ul>
            {miembrosOrdenados.map((miembro, index) => (
              <li key={index} className="Miembro-lista" style={{ listStyle: 'none' }}>
                <div style={{ textAlign: 'center' }}>
                  <strong>{miembro.rol}</strong>
                </div>
                <div style={{ textAlign: 'center' }}>
                  Nombre: {miembro.nombre}
                </div>
                <div style={{ textAlign: 'center' }}>
                  Rut: {miembro.rut}
                </div>
                <div style={{ textAlign: 'center' }}>
                  Correo: {miembro.correo}
                </div>
                <div style={{ textAlign: 'center' }}>
                  Campus: {miembro.campus}
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

export default Equipo;