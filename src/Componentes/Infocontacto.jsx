import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa";

export const Infocontacto = (props) => {

  const retonarIconoContacto = ref => {
    if(ref === 'dir'){return <IoLocationSharp className='icon-contacto'/>}
    else if(ref === 'tel') {return < FaPhoneAlt className='icon-contacto'/>}
    else if(ref === 'hora') {return <FaClock  className='icon-contacto'/>}
  }
  return (
    <div className='infocontacto-container'>
        {retonarIconoContacto(props.referencia)}
        <p className='parraph-contacto'>{props.texto}</p>
        <p>{props.ref}</p>
    </div>
  )
}
