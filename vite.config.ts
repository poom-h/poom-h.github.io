import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "./", // Use relative paths for GitHub Pages compatibility
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          helmet: ["react-helmet-async"],
        },
      },
    },
    sourcemap: false,
    minify: "terser",
  },
  server: {
    port: 5173,
    open: true,
    hmr: {
      overlay: false,
    },
  },
  preview: {
    port: 4173,
    open: true,
  },
});
