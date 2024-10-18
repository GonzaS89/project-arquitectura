import React from 'react'
import { Portada } from './Portada';
import { Virtudes } from './Virtudes';
import { Servicios } from './Servicios';

export const Main = () => {
  return (
    <div className="main-container">
      <Portada />
      <Virtudes />
      <Servicios />
    </div>
  )
}
