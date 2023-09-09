import { defineConfig, type DefaultTheme, type UserConfig, type LocaleConfig, type ThemeOptions, type defineConfigWithTheme } from 'vitepress';

export const BASE_URL = '/suey-rocketry/';

export const TITLE = 'Rocketry';

export const I18Arr = {
  zh: '简体中文',
  en: '英文'
};

// 路径上的词典, 路径会被转换为左侧的导航, 在这里声明语言的转换
// 文件夹上的单词会通过这里进行转义
// ENGLISH => i18
export const DICTIONARY: Record<string, { [key in keyof typeof I18Arr]: string; }> = {
  ['guide']: { zh: '指引', en: 'Guide' },
  ['docs']: { zh: '文档', en: 'Docs' },
  ['components']: { zh: '组件', en: 'Components' },
  ['card']: { zh: '卡片', en: 'Card' },
  ['button']: { zh: '按钮', en: 'Button' },

  ['awhat-is-rocketry']: { zh: '什么是Rocketry', en: 'what is rocketry' },


  ['index']: { zh: '', en: '' },
  ['en']: { zh: '》', en: 'en' },

};
