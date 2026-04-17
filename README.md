<h1 align="center">SEO专家.skill</h1>

<blockquote align="center">
  「让你的网站被搜索引擎看见，被用户找到，被 AI 引用」
</blockquote>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
  <img src="https://img.shields.io/badge/Claude_Code-Skill-blueviolet?logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48L3N2Zz4=" alt="Claude Code Skill">
  <img src="https://img.shields.io/badge/9_模块-50+_检查项-blue.svg" alt="50+ Checks">
</p>

<br>

<p align="center">
  <strong>搜索排名上不去？流量涨不动？社交分享没预览？</strong><br>
  <strong>一个 Skill，把 SEO 专家的完整知识体系交给 Claude。</strong>
</p>

<p align="center">
  SEO 决定了用户能不能找到你。<br>
  技术 SEO、结构化数据、OG 社交卡片、Core Web Vitals、国际化、AI 爬虫优化<br>
  ——9 大类 50+ 项检查，覆盖从 Google 排名到 ChatGPT 引用的每一个细节。<br>
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

            ## SEO Audit Report

            ### 🔴 Critical (2)
            1. OG 图不存在 — public/og-default.png 被引用但文件缺失
               → 生成 1200×630 品牌图
            2. favicon.ico 缺失 — <link rel="icon"> 指向空文件
               → 创建 SVG + ICO favicon

            ### 🟠 High (3)
            1. 课程页缺少 Article JSON-LD — src/layouts/DocsLayout.astro
               → 添加 datePublished、author、publisher 结构化数据
            2. 12 张图片缺少 alt 属性 — src/pages/courses/*.md
               → 补充描述性 alt 文本
            3. Organization schema sameAs 为空数组
               → 填入 GitHub、Twitter 等社交链接

            ### ✅ Passing
            - robots.txt 配置正确，AI 爬虫已放行
            - Sitemap 已生成，优先级设置合理
            - Canonical URL 全覆盖
            - HTTPS 已配置

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

> 不是给你一份 checklist 让你自己搞。是 Claude 直接帮你诊断问题、修复代码、提升排名。

<br>

## 安装

```bash
npx skills add anxiong2025/seo-skill
```

然后在 Claude Code 里直接调用：

```
> /seo
> 审计一下这个网站的 SEO
> 帮我修复 meta 标签
> 给所有课程页加上结构化数据
> 生成一个 OG 社交分享图
```

<br>

## 检查了什么

完整 SEO 审计覆盖 9 大类：

| 类别 | 检查项 | 级别 |
|:------|:--------|:------:|
| **技术 SEO** | robots.txt、sitemap、canonical、HTTPS、404/重定向链、重复内容 | 🔴 |
| **On-Page SEO** | title（50-60字符）、description（120-155字符）、H1 层级、图片 alt、内链、URL 结构 | 🔴 |
| **结构化数据** | Article、Organization、BreadcrumbList、Course、FAQ、HowTo、Product 等 12 种 JSON-LD | 🟠 |
| **OG / 社交** | og:image（1200×630）、Twitter Card、社交预览验证 | 🟠 |
| **Favicon** | favicon.ico、favicon.svg、apple-touch-icon | 🟡 |
| **性能 SEO** | LCP < 2.5s、INP < 200ms、CLS < 0.1、字体加载、图片优化 | 🟡 |
| **内容 SEO** | E-E-A-T 信号、语义化 HTML、发布日期、作者信息 | 🟡 |
| **国际化** | hreflang 双向链接、x-default、lang 属性、ISO 语言代码 | 🟡 |
| **GEO（AI 优化）** | GPTBot/ClaudeBot 爬虫放行、引用友好结构、语义化标记 | 🟢 |

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
├── SKILL.md                          # SEO 审计操作系统（9 模块 50+ 检查项）
├── README.md                         # 你正在看的这个
├── LICENSE                           # MIT
├── references/
│   ├── schema-templates.md           # 12 种 JSON-LD 模板
│   ├── meta-tag-spec.md              # Meta 标签完整规范
│   └── og-image-guide.md             # OG 图生成指南
└── examples/
    ├── README.md                     # 示例使用说明
    ├── astro-site/                   # Astro 完整示例
    └── nextjs-site/                  # Next.js 完整示例
```

<br>

## 为什么做这个

你写了很好的内容，但搜索引擎不知道。你做了很好的产品，但用户找不到你。

SEO 不是可选项——它是你的内容和用户之间的桥梁。做好了，自然流量持续增长，获客成本趋近于零。做不好，再好的内容也只是自娱自乐。

问题是：SEO 的知识太零散了。meta 标签、结构化数据、Core Web Vitals、AI 爬虫适配……每个都有讲究，每个都容易遗漏。

这个 Skill 把资深 SEO 专家的完整知识体系交给 Claude。一句 `/seo`，从诊断到修复，让你的网站真正被看见。

> 不用装任何 npm 包，不用配置任何东西。一个 SKILL.md 文件，就是一个 SEO 专家。

<br>

## 贡献

欢迎 PR。添加新检查项时：

1. 在 `SKILL.md` 对应章节添加检查项
2. 包含：查什么、正确值是什么、常见错误
3. 如果需要模板，加到 `references/`

## 许可证

MIT — 随便用，随便改。

---

<p align="center"><em>让每一个好产品都能被搜索引擎看见，被用户找到。</em></p>
