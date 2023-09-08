import { join } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@suey/rocketry': join(__dirname, '../packages'),
      'pack-utils': join(__dirname, '../packages/pack-utils')
    }
  },
  clearScreen: true,
  plugins: [
    {
      ...vue(),
      apply: (config) => {
        return config.mode === 'test';
      }
    }, vueJsx()
  ],
  server: {
    port: 9000,
    strictPort: true
  }
})
