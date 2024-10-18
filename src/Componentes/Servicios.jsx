import React from 'react';
import '../Estilos/Servicios.css';

export const Servicios = () => {
  return (
    <section className="servicios-container">
      <div className="servicios-bloque1-container">
      <div className="servicios-bloque1">
            <div className="bloque1-texto">
                <p className="bloque1-pretitle">Nuestra visión</p>
                <h1 className="bloque1-title">Servicios de contrucción</h1>
                <p className="bloque1-text">Hemos adquirido experiencia en la mayoría de los principales segmentos del mercado, incluidos:</p>
                <ul>
                    <li>Centro de datos</li>
                    <li>Interiores comerciales</li>
                    <li>Centro de finanzas</li>
                    <li>Minorista</li>
                    <li>Hospitalidad</li>
                    <li>Deportes</li>
                    <li>Fabricación</li>
                </ul>
            </div>
            <div className="bloque1-imgs">
              <div className="bloque1-imgs1">
              </div>
               <div className="bloque1-imgs2">
                <span className='img1'></span>
                <span className='img2'></span>
               </div>
            </div>
        </div>
      </div>
        <div className="servicios-bloque2-container">
        <div className="servicios-bloque2">
          <div className="bloque2-texto">
            <p className="bloque2-pretitle">Creá tu</p>
            <h1 className="bloque2-title">Casa de ensueño</h1>
            <p className="bloque2-text">Nos fundamos en la creencia de que nuestra naturaleza colaborativa y el viaje que realizamos con nuestros clientes se refleja en cada proyecto mediante la creación de espacios emocionantes, funcionales y modernos.</p>
            <button className="btn">Empezar ahora</button>
          </div>
          <span className="bloque2-img"></span>
        </div>
        </div>
        
    </section>
  )
}
