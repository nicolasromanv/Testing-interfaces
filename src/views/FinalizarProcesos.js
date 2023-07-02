import React from 'react';

function FinalizarProcesos() {
  const handleSave = () => {
    // Aquí puedes implementar la lógica para guardar los valores en el lugar deseado,
    // como enviar una solicitud al servidor.
    localStorage.setItem('botonHabilitado', true);
    localStorage.setItem('nombreProyecto', nombreProyecto);
    // Luego, puedes limpiar el almacenamiento local si ya no necesitas los valores
    localStorage.removeItem('resumenEjecutivo');
    localStorage.removeItem('objetivoGeneral');
    localStorage.removeItem('objetivoEspecifico1');
    localStorage.removeItem('objetivoEspecifico2');
    localStorage.removeItem('objetivoEspecifico3');
  };
  const nombreProyecto = localStorage.getItem('nombreProyecto') || '';
  const resumenEjecutivo = localStorage.getItem('resumenEjecutivo') || '';
  const objetivoGeneral = localStorage.getItem('objetivoGeneral') || '';
  const objetivoEspecifico1 = localStorage.getItem('objetivoEspecifico1') || '';
  const objetivoEspecifico2 = localStorage.getItem('objetivoEspecifico2') || '';
  const objetivoEspecifico3 = localStorage.getItem('objetivoEspecifico3') || '';


  const mostrarBoton = nombreProyecto && resumenEjecutivo && objetivoGeneral &&
    objetivoEspecifico1 && objetivoEspecifico2 && objetivoEspecifico3;

  return (
    <div>
      {/* Mostrar mensajes de error */}
      {!nombreProyecto && <p>El campo nombre proyecto es requerido.</p>}
      {!resumenEjecutivo && <p>El campo resumen ejecutivo es requerido.</p>}
      {!objetivoGeneral && <p>El campo objetivo general es requerido.</p>}
      {!objetivoEspecifico1 && <p>El campo objetivo específico 1 es requerido.</p>}
      {!objetivoEspecifico2 && <p>El campo objetivo específico 2 es requerido.</p>}
      {!objetivoEspecifico3 && <p>El campo objetivo específico 3 es requerido.</p>}

      {/* Mostrar el botón si no hay mensajes de error */}
      {mostrarBoton && <button className="save-button" onClick={handleSave}>Guardar</button>}
    </div>
  );
}

export default FinalizarProcesos;