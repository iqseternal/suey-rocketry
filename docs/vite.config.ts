import { join } from 'path';
import { defineConfig } from 'vite';
// import './.vitepress/auto';
import vueJsx from '@vitejs/plugin-vue-jsx';

import { demoblockVitePlugin } from 'vitepress-theme-demoblock';

export default defineConfig({
  resolve: {
    alias: {
      '@suey/rocketry': join(__dirname, '../packages'),
      'pack-utils': join(__dirname, '../packages/pack-utils')
    }
  },
  plugins: [
    demoblockVitePlugin(), vueJsx()
  ],
  server: {
    port: 9000,
    strictPort: true,
  }
})
