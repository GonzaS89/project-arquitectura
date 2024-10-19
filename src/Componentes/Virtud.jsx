import React from 'react';
import '../Estilos/Virtudes.css';
import { IoIosArrowForward } from "react-icons/io";


export const Virtud = (props) => {
  return (
    <div key={props.id} className={`virtud-container ${props.fondo}`}>
        <h2 className="id-virtud">0{props.id}</h2>
        <h4 className="titulo-virtud">{props.titulo}</h4>
        <p className="descripcion-virtud">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat praesentium, doloribus vero vel est repellendus laboriosam, voluptatum consequuntu</p>
        <IoIosArrowForward className={`arrow-container ${props.color}`}/>
    </div>
  )
}
