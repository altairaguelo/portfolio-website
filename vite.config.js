import {resolve} from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        AIProjects: resolve(__dirname, 'AIProjects/index.html')
      }
    }
  },
  base: '/portfolio-website/',
})
