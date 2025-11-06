import { defineConfig } from "vite";
import { resolve, dirname } from "path";
import { visualizer } from "rollup-plugin-visualizer";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  assetsInclude: ["src/assets/**"],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  plugins: [react(), visualizer()],
  build: {
    rollupOptions: {
      output: {
        experimentalMinChunkSize: 80000,
        manualChunks: {
          react: ["react-router-dom"],
          mui: [
            "@mui/material",
            "@mui/icons-material",
            "@emotion/react",
            "@emotion/styled",
            "@emotion/is-prop-valid",
          ],
          //cache: ["localforage"],
          reactQuery: ["@tanstack/react-query"],
          mdi: ["@mdi/js", "@mdi/react"],
          styles: ["postcss", "tailwind-merge", "styled-components"],
          uitls: ["roman-numerals-converter-lib"],
        },
      },
    },
  },
});
