import React, { useState } from 'react';
import Switch from 'react-switch';

function Presupuesto() {
  const [fondos, setFondos] = useState([
    { nombre: 'Financiamiento externo', activado: false },
    { nombre: 'Financiamiento UTFSM', activado: false },
    { nombre: 'Financiamiento Propio', activado: false },
    { nombre: 'Relaciones Estudiantiles · PIE > A[SJ]', activado: false },
  ]);

  const toggleSwitch = (index) => {
    const updatedFondos = [...fondos];
    updatedFondos[index].activado = !updatedFondos[index].activado;
    setFondos(updatedFondos);
  };

  return (
    <div>
      <h1>Declaración de fondos iniciales</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {fondos.map((fondo, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <label style={{ marginRight: '10px' }}>{fondo.nombre}</label>
            <Switch
              onChange={() => toggleSwitch(index)}
              checked={fondo.activado}
              onColor="#86d3ff"
              onHandleColor="#2693e6"
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              height={20}
              width={48}
              className="react-switch"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Presupuesto;