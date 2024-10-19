import React from 'react';
import '../Estilos/Contacto.css';
// import { FaLocationDot } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaClock } from "react-icons/fa";
import { Infocontacto } from './Infocontacto';


export const Contacto = () => {
  return (
    <div className='contacto-container'>
        <div className="contacto">
            <div className="contacto-text">
                <h1 className='contacto-title'>¡Ponte en contacto!</h1>
                <p className='contacto-subtitle'>
¡Estamos deseando empezar un proyecto contigo!</p>
                <p className='contacto-parraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam sit iure ea? Dicta eaque similique aperiam possimus. Odit, placeat laborum necessitatibus minima optio culpa officia similique.</p>
            </div>
            <div className="contacto-dire-mail">
                <div className="dire-container">
                    <Infocontacto texto = {'Av. Colon 850 - San Miguel de Tucumán - Tucumán'} referencia = {'dir'}/>
                    <Infocontacto texto = {'(0381) - 4626971'} referencia = {'tel'}/>
                    <Infocontacto texto = {'Lunes-Viernes: 09:00 a 20:00 Hrs / Sábados: 09:00 a 12:00'} referencia = {'hora'}/>
                </div>
                <form action="" className='mail-container'>
                    <input type="text" placeholder='Decinos tu nombre'/>
                    <input type="text" placeholder='Dejanos tu mail'/>
                    <textarea placeholder = 'Dejanos tu mensaje'></textarea>
                    <input type="submit" className='btn' />
                </form>
            </div>
        </div>
    </div>
  )
}
