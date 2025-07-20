// src/App.jsx
import React from 'react';
import Datos from './components/datos';
import Experiencia from './components/experiencia';
import Habilidades from './components/habilidades';
import Lenguajes from './components/lenguajes';
import Proyectos from './components/proyectos';
import './App.css'; // Si tienes estilos globales

function App() {
  return (
    <div className="App">
      <header>
        <h1>Mi Portafolio Web de Kenneth Calderón</h1>
      </header>
      <main>
        <Datos />
        <Experiencia />
        <Habilidades />
        <Lenguajes />
        <Proyectos />
        {/* Puedes añadir más secciones o un pie de página aquí */}
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Kenneth Calderón</p>
      </footer>
    </div>
  );
}

export default App;
