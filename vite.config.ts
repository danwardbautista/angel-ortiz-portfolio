import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    // Increase chunk size warning limit for image-heavy app
    chunkSizeWarningLimit: 1000,
    // Optimize image assets - inline assets smaller than 4kb
    assetsInlineLimit: 4096,
  },
})
