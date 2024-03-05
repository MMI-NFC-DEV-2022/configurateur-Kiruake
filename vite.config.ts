import { fileURLToPath, URL } from 'node:url'
import Pages from 'vite-plugin-pages'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      /* options */
    }),
    // ⚠️ Vue must be placed after VueRouter()
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
