const fs = require('fs') // 处理文件
const path = require('path') // 处理路径

function generateLLMs() {
  console.log('--- 启动 llms.txt 最终路径适配版 ---')
  
  const PUBLIC_DIR = path.join(__dirname, 'public')
  const LLMS_FILE = path.join(PUBLIC_DIR, 'llms.txt')
  // 关键：根据你实际的跳转路径，RSS 就在这个位置
  const RSS_FILE = path.join(PUBLIC_DIR, 'rss', 'feed.xml') 
  const SITE_URL = 'https://www.cunzhangblog.com'

  let content = `# Web3村长 (cunzhangblog.com)\n\n`
  content += `这是“Web3村长”的技术博客，专注于 AI 本地部署、Web3 工具、跨境支付及网络优化教程。\n\n`
  
  content += `## 必看硬核精选 (Featured Guides)\n`
  content += `- [Hermes Agent 完整部署教程](${SITE_URL}/article/hermes)\n`
  content += `- [Cloudflare 永久免费图床方案](${SITE_URL}/article/img)\n`
  content += `- [2026 域名注册支持U卡与海外支付](${SITE_URL}/article/buydomain)\n\n`

  try {
    // 兼容性逻辑：优先找 rss/feed.xml，找不到再找根目录
    let finalRssPath = RSS_FILE
    if (!fs.existsSync(finalRssPath)) {
        finalRssPath = path.join(PUBLIC_DIR, 'feed.xml')
    }

    if (fs.existsSync(finalRssPath)) {
      console.log(`✅ 找到 RSS 文件: ${finalRssPath}`)
      const xml = fs.readFileSync(finalRssPath, 'utf-8')
      const items = xml.match(/<item>([\s\S]*?)<\/item>/g)
      
      if (items && items.length > 0) {
        content += `## 最近更新与热门教程 (Latest & Trending)\n`
        items.slice(0, 5).forEach(item => {
          const title = (item.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) || item.match(/<title>([\s\S]*?)<\/title>/))[1]
          const link = item.match(/<link>([\s\S]*?)<\/link>/)[1]
          let desc = (item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) || item.match(/<description>([\s\S]*?)<\/description>/))[1]
          desc = desc.replace(/<[^>]+>/g, '').substring(0, 100).trim() + '...'
          
          content += `- [${title}](${link}): ${desc}\n`
        })
        content += `\n`
      }
    }
  } catch (err) {
    console.log('读取动态内容时遇到小问题，跳过动态部分')
  }

  content += `## 站点地图\n- Sitemap: ${SITE_URL}/sitemap.xml\n- RSS: ${SITE_URL}/rss/feed.xml\n\n`
  content += `## 联系与社群\n- Telegram: https://t.me/cunzhanggroup\n- YouTube: https://www.youtube.com/@cunzhangcrypto`

  fs.writeFileSync(LLMS_FILE, content)
  console.log('✅ llms.txt 成功生成！')
}

generateLLMs()
