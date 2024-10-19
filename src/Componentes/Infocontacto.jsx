import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { FaClock } from "react-icons/fa";

export const Infocontacto = (props) => {

  const retonarIcono = ref => {
    if(ref === 'direccion'){return <ImLocation className='icono-contacto'/>}
    else if(ref === 'telefono') {return <FaPhoneAlt  className='icono-contacto'/>}
    else if(ref === 'horario') {return <FaClock className='icono-contacto'/>}
  }

  return (
    <div className='infocontacto-container'>
      <span className="container-icono">
      {retonarIcono(props.referencia)}
      </span>
        <p className='parraph-contacto'>{props.texto}</p>
        <p>{props.ref}</p>
    </div>
  )
}
