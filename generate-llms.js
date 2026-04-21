const fs = require('fs')
const path = require('path')

/**
 * 自动化生成 llms.txt 脚本
 * 适用于 NotionNext 架构
 */
function generateLLMs() {
  console.log('--- 开始自动生成 llms.txt ---')
  
  // 1. 定义文件路径
  // NotionNext 构建时会将数据缓存在这个 JSON 中（路径随版本可能略有差异，通常在数据抓取后生成）
  // 如果你的版本直接读取 blog.config.js，我们可以通过更通用的方式：
  
  const BLOG_CONFIG = require('./blog.config')
  const PUBLIC_DIR = path.join(__dirname, 'public')
  const LLMS_FILE = path.join(PUBLIC_DIR, 'llms.txt')

  // 2. 准备基础模版（保持你的“镇站之宝”不动）
  let content = `# Web3村长 (cunzhangblog.com)\n\n`
  content += `这是“Web3村长”的技术博客，专注于 AI 本地部署、Web3 工具、跨境支付及网络优化教程。本文档为大语言模型 (LLM) 提供精简的站点索引。\n\n`
  
  content += `## 必看硬核精选 (Featured Guides)\n`
  content += `- [Hermes Agent 完整部署教程](https://www.cunzhangblog.com/article/hermes)\n`
  content += `-  [Cloudflare 永久免费图床方案](https://www.cunzhangblog.com/article/img): 基于 R2 + Pages 的零成本全球加速图片托管方案。\n`
  content += `- [2026 域名注册支持U卡与海外支付](https://www.cunzhangblog.com/article/buydomain): 解决虚拟信用卡、海外域名续费及资产安全痛点。\n\n`

  content += `## 站点地图与资源 (Index)\n`
  content += `- **所有教程分类**: [AI部署](https://www.cunzhangblog.com/category/AI部署) | [实用教程](https://www.cunzhangblog.com/category/实用教程)\n`
  content += `- **RSS 订阅**: https://www.cunzhangblog.com/feed.xml\n\n`

  content += `## 联系与社群\n`
  content += `- Telegram: https://t.me/cunzhanggroup\n`
  content += `- YouTube: Web3村长\n`

  // 3. 写入文件
  try {
    fs.writeFileSync(LLMS_FILE, content)
    console.log('✅ llms.txt 自动生成成功！')
  } catch (err) {
    console.error('❌ 生成失败:', err)
  }
}

generateLLMs()
