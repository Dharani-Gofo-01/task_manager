// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import tailwindcss from 'tailwindcss';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, '../backend/client'), // default is fine
    emptyOutDir: true,
  },
});
