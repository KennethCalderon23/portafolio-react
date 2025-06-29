import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portafolio-react/',  // << agrega esta línea
  plugins: [react()],
})
