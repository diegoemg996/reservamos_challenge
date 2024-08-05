import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "http://diegoemg996.github.io/reservamos_challenge", 
})