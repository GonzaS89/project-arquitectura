import React from "react";
import "../Estilos/Portada.css";

export const Portada = () => {
  return (
    <section className="portada-container">
        <div className="portada-container_texto">
        <h1 className="portada-title">¿Pensando en construir tu casa?</h1>
      <p className="portada-description">
        Podrás personalizar los detalles de tu casa cuando la construyas desde
        cero: desde el diseño.
      </p>
        </div>
    </section>
  );
};
