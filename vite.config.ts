import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  publicDir: false, // publicディレクトリを指定（デフォルト）
  base: '/React.js-kiso-4',
  plugins: [react()],
})
