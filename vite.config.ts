import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set VITE_BASE_URL when deploying to GitHub Pages project site, e.g. /mf-portal/
const base = process.env.VITE_BASE_URL || '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
