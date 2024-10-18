import React from 'react';
import '../Estilos/Caracteristicas.css';
import { Caracteristica } from './Caracteristica';


export const Caracteristicas = () => {
  return (
    <div className='caracteristicas-container'>
        <div className="img-container"></div>
        <div className='listacracteristicas-container'>
        <div className="listacaracteristicas">
            <Caracteristica title = {'construcción'}/>
            <Caracteristica title = {'planificación'}/>
            <Caracteristica title = {'atención'}/>
        </div>
        </div>
        
    </div>
  )
}
