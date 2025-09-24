import { defineConfig } from 'cypress'
import { startDevServer } from '@cypress/vite-dev-server'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
      viteConfig: {
        plugins: [vue()],
      },
    },
  },
})
