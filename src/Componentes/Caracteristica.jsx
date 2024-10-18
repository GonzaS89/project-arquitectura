import React from 'react';
import { FaBuilding } from "react-icons/fa";
import { IoConstruct } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";

export const Caracteristica = ({title}) => {

  const retonarIcono = ref => {
    if(ref === 'construcción'){return <FaBuilding className='caracteristica-icon'/>}
    else if(ref === 'planificación') {return <IoConstruct className='caracteristica-icon'/>}
    else if(ref === 'atención') {return <FaUserAlt className='caracteristica-icon'/>}
  }

  return (

    <div className='caracteristica-container'>
      {retonarIcono(title)}
        <p className='caracteristica-title'>{title}</p>
        <p className='caracteristica-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id pariatur nulla ipsa ipsam eaque commodi officiis</p>
    </div>
  )
}
