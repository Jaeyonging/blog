import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
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

  build: {
    // 서버(app.js)가 서빙하는 blog-server/dist 로 바로 빌드한다.
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
});

