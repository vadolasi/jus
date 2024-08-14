import MillionLint from '@million/lint';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Pages from 'vite-plugin-pages'

export default defineConfig(async () => ({
  plugins: [
    MillionLint.vite(),
    react(),
    Pages()
  ],
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
    watch: {
      ignored: ["**/src-tauri/**"]
    }
  }
}));