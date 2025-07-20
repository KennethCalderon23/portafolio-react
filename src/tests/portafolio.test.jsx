import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../App';

describe('Validaciones Portafolio (Basado en el renderizado de App)', () => {

  beforeEach(() => {
    render(<App />);
  });

  test('Datos personales contienen foto, teléfono y nombre completo', () => {
    // Foto
    const img = screen.getByRole('img', { name: /foto de kenneth calderón/i });
    expect(img).toBeInTheDocument();
    expect(img.src).toMatch(/\.(jpg|jpeg|png|gif|svg)$/i);

    // Teléfono
    const telefono = screen.getByText(/0963304700/);
    expect(telefono).toBeInTheDocument();

    // Nombre completo
    const nombre = screen.getByTestId('personal-name');
    expect(nombre).toBeInTheDocument();
    expect(nombre).toHaveTextContent(/kenneth calderón/i);
  });

  test('Listado de habilidades tiene al menos 5 elementos', () => {
    const habilidades = screen.getAllByTestId('habilidad-item');
    expect(habilidades.length).toBeGreaterThanOrEqual(5);
  });

  test('Listado de proyectos tiene al menos 3 elementos', () => {
    const proyectos = screen.getAllByTestId('proyecto-item');
    expect(proyectos.length).toBeGreaterThanOrEqual(3);
  });
});