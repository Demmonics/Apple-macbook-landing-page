import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
   server: {
    host: '127.0.0.1',
    port: 3000, // or 8080 — both clear of all your excluded ranges
  },
})
