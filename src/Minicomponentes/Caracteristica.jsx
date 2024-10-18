import React from 'react'

export const Caracteristica = (props) => {
  return (
    <div className='caracteristica-container'>
        {props.icon && <props.icon className='caracteristica-icon'/>}
        <p className='caracteristica-title'>{props.title}</p>
        <p className='caracteristica-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id pariatur nulla ipsa ipsam eaque commodi officiis</p>
    </div>
  )
}
