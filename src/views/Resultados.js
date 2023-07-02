import React from 'react';
import { Link } from 'react-router-dom';
import logo_usm from "./long-usm-icon.png"

function Resultados() {

  return (
    <div className='tabla-container'>
      <div>
      <header className="logo-usm-head">
          <Link className="BotonPostular" to="/"><img src={logo_usm} className="Logo-USM" alt="logo_usm" /></Link>
        </header>
      </div>
      <table className="tabla-datos">
        <thead>
          <tr>
            <th>Proyecto</th>
            <th>Fondo</th>
            <th>Línea</th>
            <th>Solicitado</th>
            <th>Asignado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Proyecto A</td>
            <td>Fondo X</td>
            <td>Línea 1</td>
            <td>$10,000</td>
            <td>$8,000</td>
          </tr>
          <tr>
            <td>Proyecto B</td>
            <td>Fondo Y</td>
            <td>Línea 2</td>
            <td>$15,000</td>
            <td>$12,000</td>
          </tr>
          {/* Puedes agregar más filas con más datos aquí */}
        </tbody>
      </table>
        <Link className="BotonPostular" to="/">Home</Link>

    </div>
  );
}

export default Resultados;