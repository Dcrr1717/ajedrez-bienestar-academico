import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Use sub-path base for GitHub Pages, root for Vercel and local dev
const base = process.env.GITHUB_ACTIONS ? '/ajedrez-bienestar-academico/' : '/'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base,
})
