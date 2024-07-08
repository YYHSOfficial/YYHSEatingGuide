// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';

import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'

export default {
  extends: DefaultTheme,

  enhanceApp({ app , router }) {
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
  },
  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();
        
    // giscus配置
    giscusTalk({
      repo: 'YYHSOfficial/YYHSEatingGuide', //仓库
      repoId: 'R_kgDOMSZ-Og', //仓库ID
      category: 'Announcements', // 讨论分类
      categoryId: 'DIC_kwDOMSZ-Os4CgpKC', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'bottom',
      lang: 'zh-CN',
      }, 
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );
}
}