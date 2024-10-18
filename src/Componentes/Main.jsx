import React from 'react'
import { Portada } from './Portada';
import { Virtudes } from './Virtudes';
import { Servicios } from './Servicios';
import { Caracteristicas } from './Caracteristicas';
import { Nosotros } from './Nosotros';
import { Contacto } from './Contacto';



export const Main = () => {
  return (
    <div className="main-container">
      <Portada />
      <Virtudes />
      <Servicios />
      <Caracteristicas />
      <Nosotros />
      <Contacto />
    </div>
  )
}
