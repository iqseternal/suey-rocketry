import * as fs from 'fs';
import path from 'path';
import type { DefaultTheme } from 'vitepress';
import f from '/@file-structure';

console.log(f);

const join = path.join;

export const BASE_URL = '/docs/';

export const TITLE = 'Rocketry';

export type I18Dir = 'en' | 'zh';

export const DIR_ROOT = join(__dirname, '../');

export const DIR_I18 = (dir: I18Dir) => join(DIR_ROOT, dir);

export const DIR_PAGES = (dir: ReturnType<typeof DIR_I18>): DefaultTheme.SidebarItem[] => {
  const sidebars: DefaultTheme.SidebarItem[] = [];

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
          link: fullpath.replace(DIR_ROOT, '').replace('\\', '/')
        });
      }
    }
  });

  return sidebars;
};

