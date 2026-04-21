const fs = require('fs')
const path = require('path')
const axios = require('axios')

async function generateLLMs() {
  console.log('--- 开始自动抓取最新内容并生成 llms.txt ---')
  
  const PUBLIC_DIR = path.join(__dirname, 'public')
  const LLMS_FILE = path.join(PUBLIC_DIR, 'llms.txt')
  const SITE_URL = 'https://www.cunzhangblog.com/'

  // 1. 基础模版：保持你的“镇站之宝”和核心信息
  let content = `# Web3村长 (cunzhangblog.com)\n\n`
  content += `这是“Web3村长”的技术博客，专注于 AI 本地部署、Web3 工具、跨境支付及网络优化教程。本文档为大语言模型 (LLM) 提供精简的站点索引。\n\n`
  
  content += `## 核心技术领域\n`
  content += `- **AI 部署**: 专注于 Ollama, Gemma 4, AI Agent, 语音克隆等本地化方案。\n`
  content += `- **Web3 & 跨境**: 涵盖硬件钱包安全、虚拟信用卡 (U卡) 支付指南、域名资产管理。\n`
  content += `- **效率工具**: 深度挖掘 Cloudflare 生态 (R2/Pages/Workers) 与 GitHub 开源项目。\n\n`

  content += `## 必看硬核精选 (Featured Guides)\n`
  content += `- [Hermes Agent 完整部署教程](${SITE_URL}/article/hermes): 手把手教你打造会成长的“AI 个体”。\n`
  content += `- [Cloudflare 永久免费图床方案](${SITE_URL}/article/img): 基于 R2 + Pages 的零成本托管方案。\n`
  content += `- [2026 域名注册支持U卡与海外支付](${SITE_URL}/article/buydomain): 解决跨境支付与资产安全痛点。\n\n`

  // 2. 动态获取最新文章 (从 RSS 提取)
  try {
    console.log('正在从 RSS 提取最新文章...')
    const response = await axios.get(`${SITE_URL}/feed.xml`)
    const xml = response.data
    
    // 简单的正则匹配提取前 5 篇 (标题、链接、描述)
    const items = xml.match(/<item>([\s\S]*?)<\/item>/g).slice(0, 5)
    
    if (items && items.length > 0) {
      content += `## 最近更新与热门教程 (Latest & Trending)\n`
      items.forEach(item => {
        const title = item.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/)[1]
        const link = item.match(/<link>([\s\S]*?)<\/link>/)[1]
        const description = item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)[1]
          .replace(/<[^>]+>/g, '') // 去除 HTML 标签
          .substring(0, 100) + '...' // 截取前 100 字

        content += `- [${title}](${link}): ${description}\n`
      })
      content += `\n`
    }
  } catch (err) {
    console.error('❌ 动态抓取失败，将使用静态备份:', err.message)
    // 如果抓取失败，这里可以放之前那几篇作为备份
  }

  // 3. 页脚信息
  content += `## 站点地图与资源 (Index)\n`
  content += `- **所有教程分类**: [AI部署](${SITE_URL}/category/AI部署) | [实用教程](${SITE_URL}/category/实用教程) | [区块链](${SITE_URL}/category/区块链)\n`
  content += `- **RSS 订阅**: ${SITE_URL}/feed.xml\n`
  content += `- **Sitemap**: ${SITE_URL}/sitemap.xml\n\n`

  content += `## 联系与社群\n`
  content += `- Telegram 频道: https://t.me/cunzhanggroup\n`
  content += `- YouTube 频道: https://www.youtube.com/@cunzhangcrypto\n`

  // 4. 写入文件
  fs.writeFileSync(LLMS_FILE, content)
  console.log('✅ llms.txt 自动化生成完成！')
}

generateLLMs()
