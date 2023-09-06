import { UserConfig, defineConfig } from 'vitepress';
import * as CONSTANTS from './constants';
import { i18Locales, i18SearchLocales } from "./i18";

import { mdPlugin } from './plugin';
import { demoblockVitePlugin, demoblockPlugin } from 'vitepress-theme-demoblock';
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin';

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(containerPreview);
      md.use(componentPreview);
    }
  },
  title: CONSTANTS.TITLE,
  description: 'Provide Vue with rocket propulsion',
  lang: 'zh',
  base: CONSTANTS.BASE_URL,
  themeConfig: {
    logo: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.bTTn1-D9WG6TCaI-9t9iDQAAAA?w=149&h=150&c=7&r=0&o=5&pid=1.7',
    siteTitle: CONSTANTS.TITLE, // 会显示在页面左上角
    i18nRouting: true,
    aside: true,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/iqseternal/suey-rokcetry' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Return to top',
    langMenuLabel: 'Change language',
    search: { provider: 'local', options: { locales: i18SearchLocales } }
  },
  locales: i18Locales
});
