import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cesium from 'vite-plugin-cesium';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cesium()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
    },
  },
  server: {
    hmr: true,
    port: 3000
  },
  base: './',
  build: {
    assetsInlineLimit: 0
  },
});
