import React from 'react';

export const Caracteristica = ({icon , title}) => {
  return (
    <div className='caracteristica-container'>
        {icon && <icon className='caracteristica-icon'/>}
        <p className='caracteristica-title'>{title}</p>
        <p className='caracteristica-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id pariatur nulla ipsa ipsam eaque commodi officiis</p>
    </div>
  )
}
