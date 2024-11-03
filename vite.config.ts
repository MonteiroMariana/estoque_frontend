import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@themes': path.resolve(__dirname, './src/shared/themes')
    }
  },
  plugins: [react()]
})
