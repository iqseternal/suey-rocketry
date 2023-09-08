import i18SidebarsJson from './sidebars.json';
import type { DefaultTheme, UserConfig } from 'vitepress';
import type { I18Key } from './types.d';

import { I18Arr } from '../constants';

const i18Sidebars: Record<I18Key, DefaultTheme.SidebarItem> = { } as any;

for (const key in I18Arr) {
  i18Sidebars[key] = {};

  for (const url in i18SidebarsJson) {
    i18Sidebars[key][`/${key}${url}`] = chunk(i18SidebarsJson[url], key);
  }
}


function chunk(sidebars: (DefaultTheme.SidebarItem & { lang?: Record<I18Key, string> })[], lang: string) {
  return sidebars.map(sidebar => {
    const newSidebar = { ...sidebar };

    if (newSidebar.link) newSidebar.link = `/${lang}${newSidebar.link}`;
    if (newSidebar.lang) newSidebar.text = newSidebar.lang[lang];
    delete newSidebar.lang;

    if (newSidebar.items && newSidebar.items.length) newSidebar.items = chunk(newSidebar.items as any, lang);
    return newSidebar;
  });
}

export default i18Sidebars;
