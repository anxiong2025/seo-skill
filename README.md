<h1 align="center">SEO专家.skill</h1>

<blockquote align="center">
  「让你的网站被搜索引擎看见，被用户找到，被 AI 引用」
</blockquote>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
  <img src="https://img.shields.io/badge/Claude_Code-Skill-blueviolet?logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48L3N2Zz4=" alt="Claude Code Skill">
  <img src="https://img.shields.io/badge/20_模块-150+_检查项-blue.svg" alt="150+ Checks">
  <img src="https://img.shields.io/badge/评分-0--100_A--F-orange.svg" alt="Scoring System">
</p>

<br>

<p align="center">
  <strong>搜索排名上不去？流量涨不动？AI 搜索找不到你？</strong><br>
  <strong>一个 Skill，把 SEO + GEO 专家的完整知识体系交给 Claude。</strong>
</p>

<p align="center">
  SEO 决定了用户能不能找到你，GEO 决定了 AI 会不会引用你。<br>
  20 大模块、150+ 项检查、量化评分（0-100 / A-F），<br>
  覆盖从 Google 排名到 ChatGPT 引用、从关键词研究到安全审计的每一个细节。<br>
  不只是告诉你哪里有问题，而是直接帮你修好，让流量真正涨起来。
</p>

<p align="center">
  <a href="#效果示例">看效果</a> ·
  <a href="#安装">安装</a> ·
  <a href="#检查了什么">检查了什么</a> ·
  <a href="#仓库结构">仓库结构</a>
</p>

<br>

---

<br>

## 效果示例

```
用户      ❯ /seo

Claude    ❯ 检测到 Astro 项目，开始审计...

            ## SEO Audit Report — agentskillsdev.com
            ## Score: 62/100 (D)

            📊 Score Breakdown
            ┌─────────────────┬───────┬────────┬──────────┐
            │ Category        │ Score │ Weight │ Weighted │
            ├─────────────────┼───────┼────────┼──────────┤
            │ Technical SEO   │ 85    │ 15%    │ 12.8     │
            │ On-Page SEO     │ 70    │ 15%    │ 10.5     │
            │ GEO (AI 优化)   │ 30    │ 12%    │ 3.6      │
            │ Keyword Research│ 40    │ 10%    │ 4.0      │
            │ Structured Data │ 55    │ 8%     │ 4.4      │
            │ ...             │ ...   │ ...    │ ...      │
            └─────────────────┴───────┴────────┴──────────┘

            ### 🔴 Critical (2)
            1. OG 图不存在 — public/og-default.png 被引用但文件缺失
               → 生成 1200×630 品牌图
            2. GEO: 缺少 llms.txt — AI 爬虫无法理解站点结构
               → 创建 public/llms.txt

            ### 🟠 High (4)
            1. 课程页缺少 Article JSON-LD — src/layouts/DocsLayout.astro
            2. 12 张图片缺少 alt 属性 — src/pages/courses/*.md
            3. 页面关键词未对齐 — 6 个页面 title 不含目标关键词
            4. AI 引用结构弱 — 缺少量化数据和来源引用

            ### ✅ Passing (12)
            - robots.txt 配置正确，AI 爬虫已放行
            - Sitemap 已生成，优先级设置合理
            - HTTPS 已配置，无混合内容
            - HTML 结构有效，无重复标签

            要修复哪些？输入"修复全部"或选择类别。
```

```
用户      ❯ 修复所有 Critical 和 High

Claude    ❯ ✓ 生成 og-default.png (1200×630)
            ✓ 创建 favicon.svg + favicon.ico
            ✓ 9 个课程页添加 Article JSON-LD
            ✓ 12 张图片补充 alt 属性
            ✓ Organization sameAs 填入社交链接
            ✓ npm run build — 37 pages built, 0 errors

            5 个问题已修复。剩余 2 个 Medium 级别问题。
```

```
用户      ❯ 帮我生成一个 OG 图，要有品牌色和中文标语

Claude    ❯ ✓ 创建 HTML 模板 → Puppeteer 截图 → public/og-default.png
            [预览图: Agent Skills Dev — 吴恩达 × Anthropic 课程中文深度解读]
            1200×630px, 370KB, 已配置到所有页面的 og:image
```

```
用户      ❯ 帮我做关键词研究，我们卖手工蜡烛的

Claude    ❯ ## 关键词研究报告

            ### 种子关键词 → 长尾扩展
            手工蜡烛 → 手工蜡烛制作套件、手工大豆蜡烛、手工蜡烛品牌推荐
            香薰蜡烛 → 助眠香薰蜡烛、香薰蜡烛哪个牌子好、天然香薰蜡烛
            蜡烛DIY → 蜡烛DIY材料包、蜡烛DIY教程、新手蜡烛DIY

            ### 搜索意图分类
            📖 信息型: "蜡烛怎么做" → 博客教程
            🔍 商业型: "手工蜡烛推荐" → 产品合集页
            🛒 交易型: "买手工蜡烛" → 产品页
            📍 导航型: "XX蜡烛官网" → 首页

            ### 内容缺口
            ✗ 缺少 "蜡烛DIY教程" 博客文章
            ✗ 缺少 "送礼蜡烛推荐" 合集页
            ✗ 产品页未包含长尾关键词

            要我帮你把这些关键词落地到网站吗？
```

> 不是给你一份 checklist 让你自己搞。是 Claude 直接帮你诊断问题、修复代码、提升排名。

<br>

## 安装

```bash
npx skills add anxiong2025/seo-skill
```

## 使用

三种调用方式，按需选择：

| 方式 | 示例 | 说明 |
|:------|:------|:------|
| **全量审计** | `/seo` | 跑完 20 个模块 150+ 检查，输出总分 + 完整报告 |
| **按模块审计** | `/seo GEO`、`/seo 关键词`、`/seo 安全` | 只跑指定模块，快速定位单项问题 |
| **自然语言** | `帮我做关键词研究`、`分析竞品`、`优化 AI 引用` | 直接说你想做的事，Claude 自动匹配模块 |

支持的模块关键词：

> `技术SEO` · `页面优化` · `结构化数据` · `OG` · `favicon` · `性能` · `内容` · `国际化` · `关键词` · `竞品` · `链接` · `本地` · `电商` · `高级` · `安全` · `无障碍` · `HTML` · `SSR` · `GEO`

**推荐用法**：第一次用 `/seo` 跑一次全量，拿到完整评分和问题清单。之后按模块按需审计，省 token 也更高效。

<br>

## 检查了什么

完整 SEO + GEO 审计覆盖 20 大模块，每次审计输出 **0-100 分 + A-F 等级**：

| 模块 | 检查项 | 权重 |
|:------|:--------|:------:|
| **技术 SEO** | robots.txt、sitemap、canonical、HTTPS、重定向、移动端、导航 | 15% |
| **On-Page SEO** | title、description、H1 层级、图片 alt、内链、URL 结构 | 15% |
| **GEO（AI 引用优化）** | llms.txt、AI 爬虫放行、引用友好结构、实体优化、语义标记、多引擎适配 | 12% |
| **关键词研究** | 种子词扩展、长尾词、搜索意图、页面对齐、蚕食检测、内容缺口 | 10% |
| **结构化数据** | 12 种 JSON-LD（Article、Product、FAQ、HowTo 等） | 8% |
| **内容 SEO** | E-E-A-T 信号、内容结构、FAQ、目录跳转、落地页 | 8% |
| **竞品分析** | 页面抓取对比、SERP 特征、精选摘要、内容差异化 | 7% |
| **链接建设** | 内链架构、主题集群、锚文本、站外研究 | 5% |
| **性能 SEO** | LCP、INP、CLS、字体、图片、压缩 | 5% |
| **OG / 社交** | og:image（1200×630）、Twitter Card、预览验证 | 4% |
| **电商 SEO** | 产品描述、Product Schema、分类页、分面导航 | 3% |
| **安全 SEO** | HTTPS/HSTS、CSP、密钥泄露、混合内容 | 2% |
| **无障碍** | ARIA、颜色对比、表单标签、键盘导航、触摸目标 | 2% |
| **HTML 验证** | DOCTYPE、charset、head 结构、重复标签、占位文本 | 1% |
| **JS 渲染 / SSR** | 服务端渲染检查、hydration、SPA 回退、noscript | 1% |
| **Favicon** | favicon.ico、favicon.svg、apple-touch-icon | 1% |
| **国际化** | hreflang、x-default、lang 属性、ISO 语言代码 | 1% |
| **基础设置** | GA4 代码、验证文件、noindex 检查 | — |
| **本地 SEO** | NAP、LocalBusiness JSON-LD、联系页、城市页 | — |
| **高级 SEO** | 零点击优化、精选摘要、内容时效性、UX 检查 | — |

> **评分规则**：每项检查 Pass/Partial/Fail → 加权求和 → 0-100 总分。<br>
> **Critical Fail Cap**：标题缺失、sitemap 缺失、robots 屏蔽等关键问题直接封顶 60 分。

<br>

<details>
<summary><strong>完整 SEO 优化清单（150+ 项）</strong></summary>

<br>

### 基础设置清单

1. GA4 分析代码已安装在 `<head>` 中
2. Google Search Console 验证文件/标签已部署
3. Bing Webmaster 验证已部署
4. 无误加的 `noindex` 阻止重要页面被收录
5. Sitemap 插件已配置并可正常生成

### 技术 SEO 清单

6. `robots.txt` 存在且未屏蔽重要页面
7. Sitemap 包含所有可索引页面，`<lastmod>` 准确
8. 每个页面有 `<link rel="canonical">` 且为 HTTPS 绝对路径
9. 站点使用 HTTPS，无混合内容
10. 无死链（404）、无重定向链（A→B→C）
11. URL 无重复变体（www/非www、末尾斜杠统一）
12. 移动端适配：viewport 标签、文字可读、触摸目标 ≥ 48px
13. 全局导航菜单存在，关键页面可达
14. 面包屑导航存在
15. Footer 包含重要链接（隐私、联系、sitemap）

### On-Page SEO 清单

16. 每页有唯一 `<title>`，50-60 字符，含关键词
17. 每页有唯一 `<meta description>`，120-155 字符
18. 每页恰好一个 `<h1>`，标题层级无跳级
19. 所有图片有描述性 `alt` 属性
20. 内链 3-5 个/千字，锚文本描述性强
21. URL 小写、连字符、含关键词、层级 ≤ 3

### 关键词研究清单

22. 3-5 个种子关键词已识别并扩展为长尾词
23. 每个关键词已分类搜索意图（信息/商业/交易/导航）
24. 每个可索引页面有明确的主关键词
25. 主关键词出现在：title、H1、URL、description、首段
26. 无关键词蚕食（多页面争同一词）
27. 内容缺口已识别（有搜索量但无对应页面的关键词）

### 竞品分析清单

28. 已识别 3-5 个 SEO 竞品
29. 竞品页面 title/description/heading/schema 已对比分析
30. SERP 特征机会已识别（精选摘要、FAQ、HowTo）
31. 内容差异化策略已明确（深度/时效/原创性）

### 结构化数据清单

32. Organization JSON-LD：name、url、logo、sameAs
33. BreadcrumbList JSON-LD 匹配可见面包屑
34. 首页有 WebSite JSON-LD + SearchAction
35. 文章页有 Article JSON-LD：headline、datePublished、author、publisher
36. FAQ 页有 FAQPage JSON-LD
37. 产品页有 Product JSON-LD：name、price、availability
38. 所有 JSON-LD 语法正确、内容与页面一致

### OG / 社交清单

39. `og:title`、`og:description`、`og:image`（1200×630）齐全
40. `og:url` 与 canonical 一致
41. Twitter Card 标签完整
42. OG 图片文件真实存在且清晰可读

### 链接建设清单

43. 关键页面从首页 3 次点击内可达
44. 主题集群：Hub 页链接所有相关内容
45. 无孤立页面（零内链指向）
46. 锚文本描述性强、包含关键词、有多样性
47. 无失效外链

### 内容 SEO 清单

48. 文章有作者署名、简介、资质链接
49. 发布日期和更新日期可见
50. 无薄内容页面（信息型页面 ≥ 300 字）
51. 语义化 HTML：`<article>`、`<section>`、`<nav>`
52. 长文有目录 + 跳转链接
53. FAQ 部分使用 Q&A 格式 + FAQPage Schema
54. 高价值关键词有专属落地页

### 性能 SEO 清单

55. LCP < 2.5s、INP < 200ms、CLS < 0.1
56. 关键 CSS 内联或 preload，JS 使用 defer/async
57. 图片使用 WebP/AVIF、`loading="lazy"`、有 width/height
58. 字体 `font-display: swap`，已 preload
59. 生产构建已 minify + gzip/brotli

### 电商 SEO 清单

60. 每个产品有独特描述（非制造商文案），含长尾词
61. Product + AggregateRating JSON-LD
62. 分类页有独特描述文案，定位商业关键词
63. 缺货产品保留页面、展示状态、推荐替代品
64. 分面导航不产生重复页（canonical 或 noindex）

### 本地 SEO 清单

65. NAP（名称/地址/电话）全站一致
66. LocalBusiness JSON-LD 完整（地址、经纬度、营业时间）
67. 联系页有 Google Maps 嵌入
68. 多地点有独立落地页，各自有独特内容

### 安全 SEO 清单

69. 全站 HTTPS，无 `http://` 引用
70. HSTS 头配置
71. CSP 头存在，无 `unsafe-eval`
72. 无 API 密钥/token 暴露在客户端代码中

### 无障碍清单

73. 语义化 landmark：`<nav>`、`<main>`、`<header>`、`<footer>`
74. 文字对比度达 WCAG AA（4.5:1）
75. 所有 `<input>` 有关联 `<label>`
76. 焦点指示器可见（无 `outline: none` 无替代）
77. Tab 键可达所有交互元素

### HTML 验证清单

78. `<!DOCTYPE html>` 声明存在
79. `<meta charset="utf-8">` 在 `<head>` 最前
80. 无重复 `<title>` 或 `<meta description>`
81. 无 lorem ipsum / TODO / 占位文本
82. 无废弃标签（`<font>`、`<center>`）

### JS 渲染 / SSR 清单

83. 框架配置为 SSG 或 SSR（非纯客户端 SPA）
84. title、meta、JSON-LD 服务端渲染
85. 关键内容不依赖 `useEffect` / `onMounted`
86. SPA 已用 history API（非 `/#/` hash 路由）

### 国际化清单

87. `<html lang="xx">` 匹配页面语言
88. `hreflang` 标签双向链接 + `x-default`
89. 语言代码遵循 ISO 639-1

### GEO（AI 引用优化）清单

90. `robots.txt` 允许 GPTBot、ClaudeBot、PerplexityBot
91. `llms.txt` 文件存在，描述站点主题和内容
92. 每页前 100 字直接回答核心问题
93. 数据和统计标注来源和日期
94. 定义使用 `<strong>术语</strong> 是 [定义]` 格式
95. 列表和表格用于对比数据（AI 易提取）
96. FAQ 格式：`<h3>问题？</h3> <p>直接回答...</p>`
97. 作者 Schema 含资质和社交链接
98. Organization Schema 含 `sameAs`（Wikipedia/Wikidata）
99. 品牌名全站统一写法
100. 实体关系显式表达："[产品] 由 [公司] 为 [受众] 打造"

### 高级 SEO 清单

101. 精选摘要格式：40-60 字直接回答在 H2 后
102. "People Also Ask" 问题已覆盖为内容
103. 年份引用为当前年份
104. `dateModified` 反映真实更新日期
105. 无侵入式弹窗阻挡首屏内容

> 以上为核心检查项摘要。完整 150+ 项检查请查看 [SKILL.md](SKILL.md)。

</details>

<br>

## 支持的框架

自动检测，不需要手动配置：

| Framework | 检测信号 |
|:----------|:---------|
| **Astro** | `astro.config.*` |
| **Next.js** (App Router) | `next.config.*` |
| **Nuxt** | `nuxt.config.*` |
| **SvelteKit** | `svelte.config.*` |
| **Gatsby** | `gatsby-config.*` |
| **静态 HTML** | `index.html` |

<br>

## 内置参考文档

Claude 审计时会自动调用这些参考文件：

| 文件 | 内容 |
|:------|:------|
| `references/keyword-research-guide.md` | 关键词研究全流程——种子词扩展、意图分类、缺口分析、落地执行 |
| `references/competitor-analysis-guide.md` | 竞品分析方法论——页面对比、SERP 特征、内容差异化、反链策略 |
| `references/schema-templates.md` | 12 种 Schema.org JSON-LD 模板，复制即用 |
| `references/meta-tag-spec.md` | Meta 标签完整规范——长度限制、格式、常见错误 |
| `references/og-image-guide.md` | OG 图生成 4 种方案（SVG、Puppeteer、Satori、@vercel/og） |

<br>

## 使用示例

`examples/` 目录包含两个完整的项目示例：

| 示例 | 框架 | 演示内容 |
|:------|:------|:---------|
| [`astro-site/`](examples/astro-site/) | Astro | Layout 驱动的 meta 标签、JSON-LD、sitemap 插件、robots.txt |
| [`nextjs-site/`](examples/nextjs-site/) | Next.js | Metadata API、generateMetadata、程序化 sitemap.ts / robots.ts |

<br>

## 仓库结构

```
seo-skill/
├── SKILL.md                              # SEO + GEO 审计系统（20 模块 150+ 检查 + 评分）
├── README.md                             # 你正在看的这个
├── LICENSE                               # MIT
├── references/
│   ├── keyword-research-guide.md         # 关键词研究全流程
│   ├── competitor-analysis-guide.md      # 竞品分析方法论
│   ├── schema-templates.md               # 12 种 JSON-LD 模板
│   ├── meta-tag-spec.md                  # Meta 标签完整规范
│   └── og-image-guide.md                 # OG 图生成指南
└── examples/
    ├── README.md                         # 示例使用说明
    ├── astro-site/                       # Astro 完整示例
    └── nextjs-site/                      # Next.js 完整示例
```

<br>

## 为什么做这个

你写了很好的内容，但搜索引擎不知道。你做了很好的产品，但用户找不到你。

SEO 不是可选项——它是你的内容和用户之间的桥梁。做好了，自然流量持续增长，获客成本趋近于零。做不好，再好的内容也只是自娱自乐。

问题是：SEO 的知识太零散了。技术优化、关键词策略、结构化数据、安全审计、无障碍、AI 引用优化……每个都有讲究，每个都容易遗漏。而且 AI 搜索的崛起（ChatGPT、Perplexity、Google AI Overviews）让传统 SEO 只是一半——另一半是 GEO（让 AI 引用你的内容）。

这个 Skill 把 SEO + GEO 专家的完整知识体系交给 Claude。20 个模块、150+ 项检查、量化评分（0-100），一句 `/seo` 从诊断到修复，让你的网站被搜索引擎看见、被 AI 引用。

> 不用装任何 npm 包，不用配置任何东西。一个 SKILL.md 文件，就是一个 SEO 专家。

<br>

## 贡献

欢迎 PR。添加新检查项时：

1. 在 `SKILL.md` 对应章节添加检查项
2. 包含：查什么、正确值是什么、常见错误
3. 如果需要模板，加到 `references/`

## 许可证

MIT — 随便用，随便改，尽情去用吧！

---

<p align="center"><em>让每一个好产品都能被搜索引擎看见，被用户找到，被 AI 引用。</em></p>
