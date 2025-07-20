// src/components/habilidades.jsx
import React from 'react';
import { professionalSkills } from '../data/portfolioData'; // Importa las habilidades profesionales

const Habilidades = () => {
  return (
    <section>
      <h2>Habilidades</h2>
      <h3>Profesionales</h3>
      <ul className="habilidades-list">
        {professionalSkills.map((skill) => (
          <li key={skill.id} data-testid="habilidad-item"> {/* ¡AÑADIDO data-testid para la prueba! */}
            <span className="icon">{skill.icon}</span> {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Habilidades;
