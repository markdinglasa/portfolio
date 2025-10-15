import { defineConfig } from 'vite'
import { resolve, dirname } from 'path'
import { visualizer } from 'rollup-plugin-visualizer';
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  assetsInclude: ['src/assets/**'],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  plugins: [react(), visualizer(),],
  build: {
    rollupOptions: {
      external: ['bcrypt', ],
      output: {
        experimentalMinChunkSize: 80000,
        manualChunks: {
          lodash: ['lodash'],
          react: ['react-router-dom', 'react-to-print', ],
          
          mui: [
            '@mui/material',
            '@mui/icons-material',
            '@emotion/react',
            '@emotion/styled',
            '@emotion/is-prop-valid',
          ],
          uuid: ['uuid'],
          cache: ['localforage'],
          validator: ['yup'],
          reactQuery: ['@tanstack/react-query'],
          mdi: ['@mdi/js', '@mdi/react'],
          echarts: ['echarts'],
          htmlPdf: ['html2pdf'],
          forms: ['formik'],
          styles: ['postcss', 'tailwind-merge', 'styled-components'],
          
        },
      },
    },
  },
})
