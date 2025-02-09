import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://github.com/taiga1071101/React.js-kiso-4.git',
  plugins: [react()],
})
