import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    entries: ['index.html']
  },
  server: {
    port: 3000,
    proxy: {
      '/contact': 'http://localhost:3001'
    }
  }
})
