# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Uso de IA en el desarrollo del portafolio

Durante la implementación del archivo de pruebas unitarias, se utilizó la asistencia de una inteligencia artificial (ChatGPT) para configurar Jest y React Testing Library correctamente en un entorno Vite + React. 

Gracias a la IA se resolvieron los siguientes puntos:
- Configuración de `babel.config.cjs` para compatibilidad con Jest.
- Manejo de archivos `.jpg` usando `moduleNameMapper` en `jest.config.cjs` y creación de un mock (`fileMock.js`) para simular imágenes.
- Generación de pruebas unitarias que validan los requisitos solicitados: presencia de datos personales, al menos 5 habilidades y al menos 3 proyectos.

Las sugerencias fueron adaptadas a la estructura real del proyecto, asegurando que los componentes (`datos.jsx`, `habilidades.jsx`, `proyectos.jsx`) funcionaran correctamente dentro del entorno de pruebas.
