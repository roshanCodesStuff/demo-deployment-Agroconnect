import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // Or just '@vitejs/plugin-react' if you're not using SWC

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
})
