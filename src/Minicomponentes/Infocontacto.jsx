import React from 'react'

export const Infocontacto = (props) => {
  return (
    <div className='infocontacto-container'>
        {props.icon && <props.icon className='icon-contacto'/>}
        <p className='parraph-contacto'>{props.texto}</p>
    </div>
  )
}
