import React from 'react';
import './App.css';

import Datos from './components/datos';
import Experiencia from './components/experiencia';
import Habilidades from './components/habilidades';
import Lenguajes from './components/lenguajes';
import Proyectos from './components/proyectos';

function App() {
  return (
    <div>
      <nav>
        <a href="#datos">Datos</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#lenguajes">Lenguajes</a>
        <a href="#proyectos">Proyectos</a>
      </nav>

      <section id="datos"><Datos /></section>
      <section id="experiencia"><Experiencia /></section>
      <section id="habilidades"><Habilidades /></section>
      <section id="lenguajes"><Lenguajes /></section>
      <section id="proyectos"><Proyectos /></section>
    </div>
    
  );
}

export default App;
