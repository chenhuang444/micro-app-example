import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

const microAppAbsPath = path.resolve(__dirname, '../micro-app')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  define: {
    MICROAPP_PATH: `'${microAppAbsPath}'`
  },
})
