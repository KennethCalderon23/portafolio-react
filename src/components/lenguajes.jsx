// src/components/lenguajes.jsx
import React from 'react';
import { programmingLanguages } from '../data/portfolioData'; // Importa los lenguajes de programación

const Lenguajes = () => {
  return (
    <section>
      <h2>Lenguajes de Programación Preferidos</h2>
      <ul>
        {programmingLanguages.map((lang) => (
          <li key={lang.id}> {/* Añadido 'key' para la lista */}
            {lang.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Lenguajes;
