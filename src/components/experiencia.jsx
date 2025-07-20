// src/components/experiencia.jsx
import React from 'react';
import { experience } from '../data/portfolioData'; // Importa los datos de experiencia

const Experiencia = () => {
  return (
    <section>
      <h2>Experiencia Profesional</h2>
      <ul>
        {experience.map((item) => ( // Mapea sobre el array de experiencia
          <li key={item.id}> {/* Añadido 'key' para la lista */}
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experiencia;
