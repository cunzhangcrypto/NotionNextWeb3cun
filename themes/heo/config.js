const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2026-03-7', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '欢迎来到村长的博客', url: '/about' },
    { title: '喜欢我的内容就收藏一下吧！', url: '' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '分享资源',
  HEO_HERO_TITLE_2: '干货知识教程',
  HEO_HERO_TITLE_3: '带你探索互联网新机会',
  HEO_HERO_TITLE_4: '战略合作 / Geonix',
  HEO_HERO_TITLE_5: '全球顶级机房与住宅IP|出海首选',
  HEO_HERO_TITLE_LINK: 'https://geonix.com/?partner_link=hr7qyBUuqy',
  HEO_HERO_COVER: '/geonix-proxy-bg.png',
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: '看看村长都有些啥',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '必看精选', url: '/tag/Featured' },
  HEO_HERO_CATEGORY_2: { title: '热门文章', url: '/tag/Hot' },
  HEO_HERO_CATEGORY_3: { title: '实用教程', url: '/tag/Tutorial' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  // HERO_RECOMMEND_COVER: '/geonix-proxy-bg.png', // 英雄区右侧图片

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: '/about',
  HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL2: 'https://github.com/cunzhangcrypto',
  HEO_INFO_CARD_ICON2: 'fab fa-github',
  HEO_INFO_CARD_URL3: 'https://www.youtube.com/@cunzhangcrypto',
  HEO_INFO_CARD_TEXT3: 'Youtube',

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'TG',
      img_1: '/images/heo/tg.png',
      color_1: '#ffffff',
      title_2: 'wbnb',
      img_2: '/images/heo/wbnb.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'wallet',
      img_1: '/images/heo/wallet.png',
      color_1: '#ffffff',
      title_2: 'vpn',
      img_2: '/images/heo/vpn.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'visa',
      img_1: '/images/heo/visa.png',
      color_1: '#ffffff',
      title_2: 'usdc',
      img_2: '/images/heo/usdc.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'pdf',
      img_1: '/images/heo/PDF.png',
      color_1: '#ffffff',
      title_2: 'pass',
      img_2: '/images/heo/pass.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'mastercard',
      img_1: '/images/heo/mastercard.png',
      color_1: '#ffffff',
      title_2: 'kraken',
      img_2: '/images/heo/kraken.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'geonix',
      img_1: '/images/heo/geonix.png',
      color_1: '#ffffff',
      title_2: 'HTML',
      img_2: '/images/heo/usdc.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/visa.png',
      color_1: '#ffffff',
      title_2: 'AI',
      img_2: '/images/heo/Ai.png',
      color_2: '#ffffff'
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '加入电报社群讨论分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  HEO_SOCIAL_CARD_URL: 'https://t.me/cunzhanggroup',

  // 底部统计面板文案
  HEO_POST_COUNT_TITLE: '文章数:',
  HEO_SITE_TIME_TITLE: '建站天数:',
  HEO_SITE_VISIT_TITLE: '访问量:',
  HEO_SITE_VISITOR_TITLE: '访客数:',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_NOT_BY_AI: true, // 显示非AI写作
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
