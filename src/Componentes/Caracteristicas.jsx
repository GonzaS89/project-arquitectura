import React from 'react';
import '../Estilos/Caracteristicas.css';
// import { FaBuilding } from "react-icons/fa";
// import { IoConstruct } from "react-icons/io5";
// import { FaUserAlt } from "react-icons/fa";
import { Caracteristica } from '../Minicomponentes/Caracteristica';





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
