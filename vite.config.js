// vite.config.js
import { defineConfig } from 'vite'
import postcss from 'rollup-plugin-postcss'

export default defineConfig({
  plugins: [
    postcss({
      extract: true,
      minimize: true,
    }),
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html',
    },
  },
  server: {
    open: true,
  },
})
