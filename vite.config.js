import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // Optional: Helps with cleaner imports like "@/components/MyComponent"
    },
  },
  css: {
    preprocessorOptions: {
      css: {
        charset: false, // Avoid issues with BOM in CSS files
      },
    },
  },
  server: {
    port: 3000, // Optional: Customize your local development port
  },
  build: {
    outDir: "dist", // Output directory for build files
    emptyOutDir: true, // Clear the output directory before building
  },
});
