import type { I18Key, I18Locales } from './types.d';

import { i18Navs } from './navs';
import i18Sidebars from './sidebars';
import { DefaultTheme } from 'vitepress';
export { i18SearchLocales } from './search';

/** 配置语言选项, key 和 lang 属性应该一致 */
export const I18Lang: Record<I18Key, I18Locales> = {
  zh: {
    lang: 'zh',
    label: '简体中文',
    link: '/zh/',
    title: 'Rocketry',
    description: '点击切换到中文文档',
    themeConfig: {
      outline: { level: [2, 6], label: '在此页面上' },
      lastUpdated: { text: '更新于', formatOptions: { dateStyle: 'full', timeStyle: 'medium' } },
      docFooter: { prev: '前一项', next: '后一项' }
    },
  },
  en: {
    lang: 'en',
    label: 'English',
    link: '/en/',
    title: 'Rocketry',
    description: 'click to english doc.',
    themeConfig: {
      outline: { level: [2, 6], label: 'On the page' },
      lastUpdated: { text: 'Updated at', formatOptions: { dateStyle: 'full', timeStyle: 'medium' } },
      docFooter: { prev: 'prev', next: 'next' }
    }
  }
};

export const i18Locales: Record<I18Key, I18Locales> = Object.keys(I18Lang).reduce((pre, cur: I18Key) => {
  pre[cur] = {
    ...I18Lang[cur],
    themeConfig: {
      ...I18Lang[cur].themeConfig,
      nav: i18Navs[cur],
      sidebar: i18Sidebars[cur] as DefaultTheme.SidebarItem[],
    }
  };

  return pre;
}, {} as Record<I18Key, I18Locales>);

