import React, {useState, useEffect} from 'react';


function AnexosYVideo() {

  const [linkVideo, setLinkVideo] = useState('');
  const [linkDrive, setLinkDrive] = useState('');

  const handleLinkVideo = (event) => {
    setLinkVideo(event.target.value);
    localStorage.setItem('linkVideo', event.target.value);
  };
  
  const handleLinkDrive = (event) => {
    setLinkDrive(event.target.value);
    localStorage.setItem('linkDrive', event.target.value);
  };

  useEffect(() => {
    setLinkVideo(localStorage.getItem('linkVideo') || '');
    setLinkDrive(localStorage.getItem('linkDrive') || '');

  }, []);

  return (

    <div class="row">
        <div class="column">
          <div>
            <h2>En está sección debes agregar todo documento que creas pertinente para complementar tu proyecto. a través de un google drive con acceso abierto.</h2>
            <div className="Texto-bloque-entrada">
                <textarea
                  className="Input-text-caja"
                  id="linkDrive"
                  onChange={handleLinkDrive}
                  value={linkDrive}
                />
              </div>
          </div>
        </div>
            <div class="column">
              <div>
                <h2>En está sección debes agregar el link de Youtube del vídeo solicitado. Recuerde revisar el acceso a este y el mismo enlace a enviar</h2>
                <div className="Texto-bloque-entrada">
                <textarea
                  className="Input-text-caja"
                  id="linkVideo"
                  onChange={handleLinkVideo}
                  value={linkVideo}
                />
              </div>
            </div>
        </div>
    </div>
  );
}

export default AnexosYVideo;