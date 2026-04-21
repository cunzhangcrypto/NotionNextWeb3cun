const BLOG = require('./blog.config')

module.exports = {
  siteUrl: BLOG.LINK,
  changefreq: 'daily',
  priority: 0.7,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  // --- 关键修复代码开始 ---
  generateIndexSitemap: false, // 除非文章超过7000篇，否则建议设为 false，方便搜索引擎抓取
  generateRSS: true, // 必须设为 true，才会产出 feed.xml
  robotsTxtOptions: {
    additionalSitemaps: [
      `${BLOG.LINK}/sitemap.xml`,
      `${BLOG.LINK}/feed.xml` // 同时也让 robots.txt 知道 RSS 的存在
    ]
  }
  // --- 关键修复代码结束 ---
}
