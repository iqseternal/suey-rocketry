import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import VueMacros from 'unplugin-vue-macros/vite';
import { join } from 'path';

export default defineConfig(async ({ mode }) => {
  return {
    css: {
      modules: {


      }
    },
    resolve: {
      alias: {
        '@suey/rocketry': join(__dirname, '../packages'),
        'pack-utils': join(__dirname, '../packages/pack-utils')
      }
    },
    plugins: [
      VueMacros({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vue: vue(),
          vueJsx: vueJsx(),
        },
      })
    ],
  }
})
