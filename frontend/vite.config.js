// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    path.resolve(__dirname, '../backend/client'), // default is fine
    emptyOutDir: true,
  },
});
