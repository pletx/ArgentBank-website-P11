import React from 'react';
import './NotFound.css'
function notFound() {
    return (
      <div className='pagetxt'>
        <h2> 404</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
       <a href='../'><p>Retourner sur la page d’accueil</p></a> 
      </div>
    );
  }
  export default notFound;