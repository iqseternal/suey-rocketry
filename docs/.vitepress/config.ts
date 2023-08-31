import { defineConfig } from "vitepress";

export default defineConfig({
  title: 'Rocketry',
  description: 'Provide Vue with rocket propulsion',
  lang: 'zh',
  base: '/docs/',
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Rocketry', // 会显示在页面左上角
    i18nRouting: true,
    nav: [
      {
        text: 'Guide',
        items: [
          { text: 'index', link: '/zh/guide/index' },
          { text: 'Button', link: '/zh/guide/Button' },
          { text: 'Card', link: '/zh/guide/Card' }
        ]
      },
      {
        text: '链接',
        items: [
          { text: 'vitepress', link: 'https://vitepress.dev/reference/default-theme-config', target: '_blank' }
        ]
      },
      {
        text: 'Lang',
        items: [
          { text: '中文', link: '/zh/' },
          { text: 'English', link: '/en/' }
        ]
      }
    ],
    sidebar: {
      zh: [
        {
          text: 'Guide',
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/introduction' },
            { text: 'Getting Started', link: '/getting-started' },

          ]
        }
      ]
    },
    aside: true,
    outline: {
      level: [1, 6],
      label: '在此页面上'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      // {
      //   icon: {
      //     svg: ``
      //   },
      //   link: '...'
      // },
      // { icon: 'mastodon', link: '' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'asdada'
    // },
    docFooter: {
      prev: 'prev',
      next: 'next'
    },
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Return to top',
    langMenuLabel: 'Change language',
    search: {
      provider: 'local',
      options: {
        locales: {
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
          }
        }
      }
    },
  },
  locales: {
    '/': { label: '简体中文', lang: 'zh', },
    zh: {
      label: '简体中文',
      lang: 'zh',
      title: '简体中文',
      description: '点击切换到中文文档',

      themeConfig: {
        nav: [
          {
            text: '指导',
            items: [
              { text: 'index', link: '/zh/guide/index' },
              { text: 'Button', link: '/zh/guide/Button' },
              { text: 'Card', link: '/zh/guide/Card' }
            ]
          },
          {
            text: '链接',
            items: [
              { text: 'vitepress', link: 'https://vitepress.dev/reference/default-theme-config', target: '_blank' }
            ]
          },
          {
            text: 'Lang',
            items: [
              { text: '中文', link: '/zh/' },
              { text: 'English', link: '/en/' }
            ]
          }
        ],
        sidebar: [
          {
            text: 'Guide',
            collapsed: false,
            items: [
              { text: 'Introduction', link: '/introduction' },
              { text: 'Getting Started', link: '/getting-started' },

            ]
          }
        ]
      }
    },
    en: {
      label: '简体中文',
      lang: 'en',
      link: '/en/',
      title: 'English',
      description: 'click to english doc.',

      themeConfig: {
        nav: [
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
          },
          {
            text: 'Lang',
            items: [
              { text: '中文', link: '/zh/' },
              { text: 'English', link: '/en/' }
            ]
          }
        ],
        sidebar: [
          {
            text: 'Guide',
            collapsed: false,
            items: [
              { text: 'Introduction', link: '/introduction' },
              { text: 'Getting Started', link: '/getting-started' },

            ]
          }
        ]

      }
    }
  }
});
