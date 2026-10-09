import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        photography: resolve(__dirname, 'photography.html'),
        contact: resolve(__dirname, 'contact.html'),
        courses: resolve(__dirname, 'courses.html'),
        leadership: resolve(__dirname, 'leadership.html'),
        awards: resolve(__dirname, 'awards.html'),
      },
    },
  },
});
