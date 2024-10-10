import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cesium from 'vite-plugin-cesium';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cesium()],
  server: {
    hmr: false,
    port: 3000
  },
  base: './',
  build: {
    assetsInlineLimit: 0
  },
});
