import type { Theme } from "vitepress";
import defaultTheme from 'vitepress/theme';

import VPApp, { NotFound, globals } from '../vitepress';
import './style.css';

const define = <T>(value: T): T => value;

export default define<Theme>({
  extends: defaultTheme,

  enhanceApp: ({ app }) => {
    globals.forEach(([name, component]) => {
      app.component(name, component);
    });
  }
});
