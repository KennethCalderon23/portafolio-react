// src/__tests__/portafolio.test.jsx
import { render, screen } from "@testing-library/react";
import Datos from "../components/datos";
import Habilidades from "../components/habilidades";
import Proyectos from "../components/proyectos";

describe("Validaciones del Portafolio", () => {
  test("Debe mostrar una fotografía de perfil", () => {
    render(<Datos />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img.src).toMatch(/foto1\.jpg/);
  });

  test("Debe mostrar el número de teléfono", () => {
    render(<Datos />);
    const telefono = screen.getByText(/09/i);
    expect(telefono).toBeInTheDocument();
  });

  test("Debe mostrar nombres y apellidos", () => {
    render(<Datos />);
    expect(screen.getByText(/nombre/i)).toBeInTheDocument();
    expect(screen.getByText(/apellido/i)).toBeInTheDocument();
  });

  test("Debe tener al menos 5 habilidades", () => {
    render(<Habilidades />);
    const items = screen.getAllByRole("listitem");
    expect(items.length).toBeGreaterThanOrEqual(5);
  });

  test("Debe tener al menos 3 proyectos", () => {
    render(<Proyectos />);
    const proyectos = screen.getAllByText(/proyecto/i);
    expect(proyectos.length).toBeGreaterThanOrEqual(3);
  });
});
