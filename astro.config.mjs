import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Configura el sitio web
  site: 'https://harkai.com.pe',
  
  // Configuración de optimización de imágenes
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop',
    },
  },
  
  // Configuración de manejo de archivos
  vite: {
    build: {
      // Mejora el rendimiento de la construcción
      assetsInlineLimit: 0,
    },
    // Mejora el desarrollo en local
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});