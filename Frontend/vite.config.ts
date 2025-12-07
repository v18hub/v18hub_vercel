import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['motion/react', 'framer-motion'],  // Pre-bundle these
    force: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Added for better production builds
  build: {
    outDir: 'dist',
    sourcemap: true, // Helps with debugging
  },
  // Ensures global object works correctly in production
  define: {
    global: 'globalThis',
  },
  // Base path for deployment (Vercel usually works with '/')
  base: '/',
})