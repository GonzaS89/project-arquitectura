import React from 'react';
import '../Estilos/Caracteristicas.css';
import { FaBuilding } from "react-icons/fa";
import { IoConstruct } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { Caracteristica } from './Caracteristica';





export const Caracteristicas = () => {
  return (
    <div className='caracteristicas-container'>
        <div className="img-container"></div>
        <div className='listacracteristicas-container'>
        <div className="listacaracteristicas">
            <Caracteristica icon = {FaBuilding} title = {'construcción'}/>
            <Caracteristica icon = {IoConstruct} title = {'planificación'}/>
            <Caracteristica icon = {FaUserAlt} title = {'atención'}/>
        </div>
        </div>
        
    </div>
  )
}
