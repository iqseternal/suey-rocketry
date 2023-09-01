import * as i18SidebarsJson from '../autoSidebars';
import type { DefaultTheme, UserConfig } from 'vitepress';
import type { I18Key } from './types.d';

const i18Sidebars: Record<I18Key, DefaultTheme.SidebarItem> = { } as any;

for (const key in i18SidebarsJson) {
  i18Sidebars[key] = {};

  for (const matchPath in i18SidebarsJson[key]) {
    // console.log(i18SidebarsJson[key][matchPath]);
    i18Sidebars[key][`/${key}${matchPath}`] = chunk(i18SidebarsJson[key][matchPath], key);
  }
}

function chunk(sidebars: DefaultTheme.SidebarItem[], lang: string) {
  return sidebars.map(sidebar => {
    if (sidebar.link) sidebar.link = `/${lang}${sidebar.link}`;
    if (sidebar.items && sidebar.items.length) {
      sidebar.items = chunk(sidebar.items, lang);
    }
    return sidebar;
  });
}

export default i18Sidebars;
