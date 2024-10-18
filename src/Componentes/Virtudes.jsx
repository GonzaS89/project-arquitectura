import React from "react";
import '../Estilos/Virtudes.css'
import { Virtud } from "./Virtud";

export const Virtudes = () => {
  const valoresVirtudes = [
    {
        "id": 1,
        "titulo" : 'Diseño esquemático',
        "fondo" : 'fondoNaranjaClaro',
        "color" : 'naranjaClaro'
    },
    {
        "id" : 2,
        "titulo" : 'Documentos',
        "fondo" : 'fondoNaranjaOscuro',
        "color" : 'naranjaOscuro'
    },
    {
        "id" : 3,
        "titulo" : 'Construcción',
        "fondo" : 'fondoGrisOscuro',
        "color" : 'grisOscuro'
    },
    {
        "id" : 4,
        "titulo" : 'Construir construcción',
        "fondo" : 'fondoGrisIntermedio',
        "color" : 'grisIntermedio'
    },
  ];

  return (
    <section className="virtudes-container">
        <div className="virtudes">
        {valoresVirtudes.map((virtud, index) => (
        <Virtud fondo={virtud.fondo} id={virtud.id} titulo={virtud.titulo} color = {virtud.color}/>
      ))}
        </div>
        <div className="virtudes-texto_container">
            <div className="virtudes-texto">
                <h1 className="virtudes-title">Nosotros somos construccion sostenible</h1>
                <p className="virtudes-text">Somos la autoridad para realizar proyectos de construcción en entornos ambientalmente sensibles. Nuestro equipo se centra en encontrar soluciones innovadoras para los proyectos de construcción más complejos y, al mismo tiempo, garantizar que limitemos nuestra huella e impacto medioambiental.</p>
                <button className="btn">Leer más</button>
            </div>
        </div>
    </section>
  );
};
