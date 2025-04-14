import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true, // Activa las variables globales como describe o it
    environment: 'jsdom', // Usa jsdom como entorno para simular el navegador
    setupFiles: './src/test/setup.js', // Archivo de configuración de los tests 
  },
})
