import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/alimadeoliveiranatalia/news_feed/",
  plugins: [react()],
})
