import { defineConfig } from 'vite';
import { DefaultTheme } from 'vitepress';
import vue from '@vitejs/plugin-vue';

const FIX_PACK_NAME = '/@file-structure';

export default defineConfig({
  server: {
    port: 5173,

    strictPort: true
  },
  plugins: [
    vue(),
    {
      name: 'file-structure',
      resolveId(id) {
        if (id === FIX_PACK_NAME) return id;
      },
      load(id) {
        if (id === FIX_PACK_NAME) {
          const fs = require('fs');
          const { join } = require('path');
          const path = require('path');
          const rootDir = process.cwd();

          const DIR_PAGES = (dir) => {
            const sidebars = [];

            fs.readdirSync(dir).forEach(path => {
              const fullpath = join(dir, path);

              if (fs.statSync(fullpath).isDirectory()) {
                const pages = DIR_PAGES(fullpath);

                sidebars.push({ text: path, items: pages });
              }
              else {
                if (path.endsWith('.md')) {

                  sidebars.push({
                    text: path.replace('.md', ''),
                    link: fullpath.replace(__dirname, '').replace('\\', '/')
                  });
                }
              }
            });

            return sidebars;
          };

          console.log(DIR_PAGES(rootDir));

          return `export default {}`;
        }
      }
    }
  ]
})
