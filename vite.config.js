import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // ضيفي اسم الريبو هنا
  plugins: [react()],
    base: '/portfolio-maker',
})
