// src/components/datos.jsx
import React from 'react';
import { personalData } from '../data/portfolioData'; // Importa los datos centrales

const Datos = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={personalData.photo}
        alt={`Foto de ${personalData.name}`}
        className="avatar"
      />
      <h1 data-testid="personal-name">{personalData.name}</h1> {/* ¡AÑADIDO data-testid! */}
      <p>Edad: {personalData.age} años</p>
      <p>Email: {personalData.email}</p>
      <p>Numero: {personalData.phone}</p>
    </div>
  );
};

export default Datos;
