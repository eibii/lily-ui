import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import ts2 from 'rollup-plugin-typescript2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ts2({
      check: false,
      include: ['src/components/*.vue', 'src/index.ts'],
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: true,
          declaration: true,
          declarationMap: true
        },
        exclude: ['vite.config.ts']
      }
    }),
    VueDevTools()
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: './src/index.ts',
      formats: ['es', 'cjs'],
      name: 'lilyUI',
      // the proper extensions will be added
      fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs')
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    coverage: {
      reporter: ['text', 'json', 'html']
    }
  }
})
