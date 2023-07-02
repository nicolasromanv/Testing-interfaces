import React,  {useEffect, useState } from 'react';
import banner from "./slide-home.jpg"
import logo_usm from "./long-usm-icon.png"
import { Link } from 'react-router-dom';



function Index() {
  const [botonHabilitado, setBotonHabilitado] = useState(false);
  const [nombreProyecto, setNombreProyecto] = useState('');

  useEffect(() => {
    const isBotonHabilitado = localStorage.getItem('botonHabilitado') === 'true';
    const storedNombreProyecto = localStorage.getItem('nombreProyecto') || '';
    setBotonHabilitado(isBotonHabilitado);
    setNombreProyecto(storedNombreProyecto);
  }, []);


  return (
    <div>
        <header className="App-header">
          <header className="logo-usm-head">
            <img src={logo_usm} className="Logo-USM" alt="logo_usm" />
          </header>
          <header className="Banner">
            <img src={banner} className="Banner" alt="banner" />
          </header>
          <h6 className='Text-Publicacion-Resultados'>Convocatoria en proceso</h6>
          <div className="square-container">
            <div className="square">
              <b>Testing asignatura</b>
              <p className="textBox withBorder">Inicio de postulaciones:   10/10/2020</p>
              <p className="textBox">Término postulaciones:   10/10/2020</p>
              <Link to="/postular" className="Boton-postular"><button className="Boton-postular" variant="contained" >Postular</button></Link>
              <div>
                  {/* Renderizar el botón solo si está habilitado */}
                  {botonHabilitado && (
                    <Link to="/postular"><button disabled={!botonHabilitado} className="Boton-resultados2">
                      {nombreProyecto}
                    </button></Link>
                  )}
              </div>
            </div>
            <div className="square">
            <b>Testing asignatura 2</b>
              <p className="textBox withBorder">Inicio de postulaciones:   10/10/2020</p>
              <p className="textBox">Término postulaciones:   10/10/2020</p>
              <Link to="/postular" className="Boton-postular"><button className="Boton-postular" variant="contained" >Postular</button></Link>
            </div>
          </div>
    
          <h6 className='Text-Publicacion-Resultados'>Publicación de resultados</h6>
          <div className="square-container">
            <div className="square">
              <p>Fondo concursable 2022</p>
              <Link to="/resultados" className="Boton-resultados"><button className="Boton-resultados" variant="contained" >Ver resultados</button></Link>
            </div>
            <div className="square">
              <p>Fondo concursable 2021</p>
              <Link to="/resultados" className="Boton-resultados"><button className="Boton-resultados" variant="contained" >Ver resultados</button></Link>
            </div>
          </div>

      </header>
      <footer class="main-footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <strong class="title">Fondos Concursables</strong>
                        <strong>© Universidad Técnica Federico Santa María</strong>
                        <address>Avenida España 1680, Valparaíso · +56 32 2654000 · dgc@usm.cl</address>
                    </div>
                </div>
            </div>
        </footer>


    </div>
  );
}

export default Index;