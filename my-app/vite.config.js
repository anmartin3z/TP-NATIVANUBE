// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Primer backend (autenticación, usuarios, etc.)
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
      // Segundo backend (servicios, testigos, etc.)
      '/api2': {
        target: 'http://localhost:5001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api2/, '/api'), // opcional si el segundo backend también usa /api
      },
    },
  },
});

/*
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // Proxy para redirigir API al backend
    },
  },
})*/
