import React from 'react';
import { FaCircle } from "react-icons/fa";

export const Infocontacto = (props) => {

  return (
    <div className='infocontacto-container'>
        <FaCircle className='icon-contacto'/>
        <p className='parraph-contacto'>{props.texto}</p>
        <p>{props.ref}</p>
    </div>
  )
}
