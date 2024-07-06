import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "郧阳中学食用指南",
  description: "郧中学子的校园内外百科书",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '初入校园',
        items: [
          { text: '入校指南', link: '/freshman/when-u-start-ur-yyhs-journey' }
        ]
      },
      {
        text: '日常生活',
        items: [
          { text: 'Coming Soon', link: '/dailylife/comingsoon' }
        ]
      },
      {
        text: '学习生活',
        items: [
          { text: 'Coming Soon', link: '/study/comingsoon' }
        ]
      },
      {
        text: '良师益友',
        items: [
          { text: 'Coming Soon', link: '/sensei/comingsoon' }
        ]
      },
      {
        text: '友情链接',
        items: [
          { text: 'Coming Soon', link: '/link/comingsoon' }
        ]
      },
      {
        text: '留言板',
        items: [
          { text: 'Coming Soon', link: '/comment/comingsoon' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
