import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
console.log(394839);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/json': {
        target: 'http://106.52.175.84/',
        changeOrigin: true,
      },
    },
    port: 3000,
    host: 'localhost',
  }
})
