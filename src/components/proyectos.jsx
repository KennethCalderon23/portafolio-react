// src/components/proyectos.jsx
import React from 'react';
import { projects } from '../data/portfolioData'; // Importa los datos de proyectos

const Proyectos = () => {
  return (
    <section>
      <h2>Proyectos Académicos o Profesionales</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id} data-testid="proyecto-item"> {/* ¡AÑADIDO data-testid para la prueba! */}
            <strong>{project.title}</strong>
            <p>{project.description}</p>
            {/* Si tus proyectos tienen URL, puedes añadir un enlace aquí: */}
            {/* {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>} */}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Proyectos;
