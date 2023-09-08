
import type { DefaultTheme } from 'vitepress';
import type { I18Key } from './types';

export const i18SearchLocales: Record<I18Key, Omit<DefaultTheme.LocalSearchOptions, 'locales'>> = {
  zh: {
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭'
        },
      }
    }
  },
  en: {
    translations: {
      button: {
        buttonText: 'Search for Documents',
        buttonAriaLabel: 'Search for Documents'
      },
      modal: {
        footer: {
          selectText: 'Select',
          navigateText: 'Switch',
          closeText: 'Off'
        },
      }
    }
  }
}
