
import type { UserConfig } from 'vitepress';
import fs from 'fs';
import path from 'path';

export const config: UserConfig = {
  // app level config options
  lang: 'en-US',

  title: 'Rocketry',
  titleTemplate: 'for custom.', // 副标题
  description: 'Vite & Vue powered static site generator.',
  lastUpdated: true,

  base: '/rokcetry/',
  cleanUrls: true, // 删除尾随的 html url, 生成干净的 URL

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // [
    //   'script',
    //   { id: 'register-sw' },
    //   `;(() => {
    //     if ('serviceWorker' in navigator) {
    //       navigator.serviceWorker.register('/sw.js')
    //     }
    //   })()`
    // ]
  ],
  rewrites: { // 自定义 URL映射
    ['source/:page']: 'destination/:page'
  },

  themeConfig: {
    // selectText: '选择语言', // 页面右上角选择语言label
    // lebel: '简体中文', // 页面右上角选择语言下拉框 value
    langMenuLabel: '?',
    sidebarMenuLabel: 's',
    search: {
      provider: 'local',
      options: {
        detailedView: false,
        disableDetailedView: false
      }
    },
    nav: [
      { text: '指南', link: '/guide/' }
    ],
    sidebar: {
      ['guide']: [
        {
          text: 'guide',
          collapsed: true,
          items: [
            { text: 'Introduction', link: '/introduction' },
            { text: 'Get Start', link: '../guide/Card.md' }
          ]
        },
        {
          text: 'guide',
          items: [
            { text: 'Introduction', link: '/introduction' },
            { text: 'Get Start', link: '../guide/Card.md' }
          ]
        },
        {
          text: 'guide',
          items: [
            { text: 'Introduction', link: '/introduction' },
            { text: 'Get Start', link: '../guide/Card.md' },
            {
              text: 'guide',
              items: [
                { text: 'Introduction', link: '/introduction' },
                { text: 'Get Start', link: '../guide/Card.md' }
              ]
            }
          ]
        }
      ]
    },
    sidebarDepth: 2
  },
};


export default config;
