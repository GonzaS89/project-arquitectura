import React from 'react';
import '../Estilos/Nosotros.css';

export const Nosotros = () => {
  return (
    <div className='nosotros-container'>
        <div className='nosotros'>
        <div className="nosotros-text">
            <span className='viñeta'></span>
            <h1 className='nosotros-title'>Sobre nuestra compañia</h1>
            <p className='nosotros-parraph'>Tu sueño: hacer cosas bellas que hagan la vida más bella. Captar y reflejar el mundo de una manera significativa y única. Nuestros ingenieros facilitan la implementación del proyecto desde el diseño hasta la construcción, para una ejecución y resultados impecables.
</p>
            <button className='btn'>Comenzar ahora</button>
        </div>
        <div className="nosotros-img"></div>
        </div>
    </div>
  )
}
