import { defineConfig } from 'vitepress'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-cn',
  vite: {
    plugins: [pagefindPlugin({
      btnPlaceholder: '搜索',
      placeholder: '搜索文档',
      emptyText: '空空如也',
      heading: '共: {{searchResult}} 条结果',
    })],
  },
  title: "郧阳中学食用指南",
  description: "郧中学子的校园内外百科书",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '概览', link: '/intro' }
    ],

    sidebar: [
      {
        text: '初入校园',
        items: [
          { text: '交通', link: '/freshman/traffic' },
          { text: '通用入学指南', link: '/freshman/normal-starter' },
          { text: '住校生入学', link: '/freshman/boarding-starter' }
        ]
      },
      {
        text: '日常生活',
        items: [
          { text: '公交卡办理', link: '/dailylife/transportpass' },
          { text: '食堂指南', link: '/dailylife/dininghall'},
          { text: '食堂指南(Written By Kitasan Black,主要为3-5层', link: '/dailylife/dininghall2'},
          { text: '宿舍指南', link: '/dailylife/boarding-advance'},
          { text: '社团', link: '/dailylife/club'},
          { text: '学校作息', link: '/dailylife/routine'},
          { text: '校内购物', link: '/dailylife/bookandstore'},
          { text: '校纪校规', link: '/dailylife/schoolrules'}
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
          { text: '免责声明', link: '/sensei/duty-free' },
          { text: '语文老师', link: '/sensei/chinese' },
          { text: '数学老师', link: '/sensei/math' },
          { text: '英语老师', link: '/sensei/english' },
          { text: '物理老师', link: '/sensei/physics' },
          { text: '化学老师', link: '/sensei/chemistry' },
          { text: '生物老师', link: '/sensei/biology' },
          { text: '历史老师', link: '/sensei/history' },
          { text: '政治老师', link: '/sensei/politics' },
          { text: '地理老师', link: '/sensei/geography' },
        ]
      },
      {
        text: '友情链接',
        items: [
          { text: '其它郧阳中学公共信息账号', link: '/links/link' },
          { text: '郧阳中学官方网站', link: 'http://yyzx.shiyan.gov.cn/' },
          { text: '真·友情链接', link: '/links/unofficial-link' }
        ]
      },
      {
        text: '留言板',
        items: [
          { text: '留言板', link: '/comment' }
        ]
      },
      {
        text: '创意园地',
        items: [
          { text: 'Coming Soon', link: '/tron/comingsoon' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YYHSOfficial/YYHSEatingGuide' }
    ]
  }
})
