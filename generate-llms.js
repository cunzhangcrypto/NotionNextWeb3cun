const fs = require('fs')
const path = require('path')

function generateLLMs() {
  console.log('--- 开始生成 llms.txt ---')
  
  const PUBLIC_DIR = path.join(__dirname, 'public')
  const LLMS_FILE = path.join(PUBLIC_DIR, 'llms.txt')
  
  // 探测两个可能的路径：根目录或 rss 子目录
  const RSS_PATHS = [
    path.join(PUBLIC_DIR, 'rss', 'feed.xml'),
    path.join(PUBLIC_DIR, 'feed.xml')
  ]
  
  const SITE_URL = 'https://www.cunzhangblog.com'

  let content = `# Web3村长 (cunzhangblog.com)\n\n`
  content += `这是“Web3村长”的技术博客，专注于 AI 本地部署、Web3 工具、跨境支付及网络优化教程。\n\n`
  
  content += `## 核心技术领域\n`
  content += `- **AI 部署**: 专注于 Ollama, Gemma 4, AI Agent, 语音克隆等本地化方案。\n`
  content += `- **Web3 & 跨境**: 涵盖硬件钱包安全、虚拟信用卡 (U卡) 支付指南。\n\n`

  content += `## 必看硬核精选 (Featured Guides)\n`
  content += `- [Hermes Agent 完整部署教程](${SITE_URL}/article/hermes)\n`
  content += `- [Cloudflare 永久免费图床方案](${SITE_URL}/article/img)\n`
  content += `- [2026 域名注册支持U卡与海外支付](${SITE_URL}/article/buydomain)\n\n`

  // --- 动态抓取逻辑 ---
  let rssFound = false
  for (const rssPath of RSS_PATHS) {
    if (fs.existsSync(rssPath)) {
      console.log(`✅ 成功定位到 RSS 文件: ${rssPath}`)
      try {
        const xml = fs.readFileSync(rssPath, 'utf-8')
        const items = xml.match(/<item>([\s\S]*?)<\/item>/g)
        
        if (items && items.length > 0) {
          content += `## 最近更新与热门教程 (Latest Articles)\n`
          // 仅取前 5 篇
          items.slice(0, 5).forEach(item => {
            const titleMatch = item.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) || item.match(/<title>([\s\S]*?)<\/title>/)
            const linkMatch = item.match(/<link>([\s\S]*?)<\/link>/)
            const descMatch = item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) || item.match(/<description>([\s\S]*?)<\/description>/)
            
            if (titleMatch && linkMatch) {
              const title = titleMatch[1]
              const link = linkMatch[1]
              let desc = descMatch ? descMatch[1] : ''
              desc = desc.replace(/<[^>]+>/g, '').substring(0, 80).trim() + '...'
              
              content += `- [${title}](${link}): ${desc}\n`
            }
          })
          content += `\n`
          rssFound = true
        }
      } catch (e) {
        console.error('解析 RSS 出错:', e)
      }
      break // 找到一个就不再找了
    }
  }

  if (!rssFound) {
    console.log('❌ 警告：未能在任何预设路径找到 RSS 文件。')
  }

  content += `## 站点地图\n- Sitemap: ${SITE_URL}/sitemap.xml\n- RSS: ${SITE_URL}/rss/feed.xml\n\n`
  content += `## 联系与社群\n- Telegram: https://t.me/cunzhanggroup\n- YouTube: Web3村长`

  fs.writeFileSync(LLMS_FILE, content)
  console.log('🚀 llms.txt 生成任务结束')
}

generateLLMs()
