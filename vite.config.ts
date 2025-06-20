import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
  ],

  server: {
    proxy: {
      '/monthapi': {
        target: 'http://openapi.molit.go.kr:8081',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/monthapi/, '')
      }
    },
  },
  preview: {
    port: 8080,
  },

  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0];
          }
        }
      }
    }
  }
});
