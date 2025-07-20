// vitest.config.js
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Usa el entorno de JSDOM para renderizar componentes de React
    globals: true,       // ¡ESTA ES LA LÍNEA CLAVE! Habilita las APIs globales como describe, test, expect
    setupFiles: './src/setupTests.js', // Asegúrate de que esta ruta sea correcta
    include: ['src/**/*.test.{js,jsx}'], // Asegúrate de que Vitest encuentre tus archivos de prueba
  },
});
