import type { DefaultTheme } from 'vitepress';
import type { I18Key, I18Locales } from './types.d';

export const i18Navs: Record<I18Key, DefaultTheme.NavItem[]> = {
  zh: [
    {
      text: '指引',
      link: '/zh/guide/basic/Navigation'
    },
    { text: '组件', link: '/zh/components/docker/RMacDocker' },
    {
      text: '链接',
      items: [
        { text: 'vitepress', link: 'https://vitepress.dev/reference/default-theme-config', target: '_blank' }
      ]
    }
  ],
  en: [
    {
      text: 'Guide',
      items: [
        { text: 'index', link: '/en/guide/index' },
        { text: 'Button', link: '/en/guide/Button' },
        { text: 'Card', link: '/en/guide/Card' }
      ]
    },
    {
      text: 'Link',
      items: [
        { text: 'vitepress', link: 'https://vitepress.dev/reference/default-theme-config', target: '_blank' }
      ]
    }
  ]
}
