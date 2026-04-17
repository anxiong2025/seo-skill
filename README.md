<h1 align="center">seo-skill</h1>

<p align="center">
  <em>「一行命令，让 Claude 帮你把 SEO 从审计到修复全搞定」</em>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
  <a href="https://claude.ai"><img src="https://img.shields.io/badge/Claude_Code-Skill-blueviolet.svg" alt="Claude Code"></a>
</p>

<p align="center"><strong>把 SEO 专家的完整知识体系变成 Claude Code 的 Skill。</strong></p>

<p align="center">
  SEO 不难，难的是记住所有该检查的东西。<br>
  这个 Skill 把技术 SEO、结构化数据、OG 社交卡片、Core Web Vitals、国际化、AI 爬虫优化<br>
  ——9 大类 50+ 项检查——全部装进一个 SKILL.md，让 Claude 像一个资深 SEO 顾问一样审计你的网站。
</p>

<p align="center">
  <a href="#效果示例">看效果</a> · <a href="#安装">安装</a> · <a href="#检查了什么">检查了什么</a> · <a href="#仓库结构">仓库结构</a>
</p>

---

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

这不是在列清单让你自己去查。是 Claude 直接帮你查完、告诉你哪里有问题、然后帮你修。

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

## 检查了什么

完整 SEO 审计覆盖 9 大类：

| 类别 | 检查项 | 严重级别 |
|------|--------|---------|
| 技术 SEO | robots.txt、sitemap、canonical、HTTPS、404/重定向链、重复内容 | 🔴 Critical |
| On-Page SEO | title（50-60字符）、description（120-155字符）、H1 层级、图片 alt、内链、URL 结构 | 🔴 Critical |
| 结构化数据 | Article、Organization、BreadcrumbList、Course、FAQ、HowTo、Product 等 12 种 JSON-LD | 🟠 High |
| OG / 社交 | og:image（1200×630）、Twitter Card、社交预览验证 | 🟠 High |
| Favicon | favicon.ico、favicon.svg、apple-touch-icon | 🟡 Medium |
| 性能 SEO | LCP < 2.5s、INP < 200ms、CLS < 0.1、字体加载、图片优化 | 🟡 Medium |
| 内容 SEO | E-E-A-T 信号、语义化 HTML、发布日期、作者信息 | 🟡 Medium |
| 国际化 | hreflang 双向链接、x-default、lang 属性、ISO 语言代码 | 🟡 Medium |
| GEO（AI 优化） | GPTBot/ClaudeBot 爬虫放行、引用友好结构、语义化标记 | 🟢 Low |

## 支持的框架

自动检测，不需要手动配置：

| Framework | 检测方式 |
|-----------|---------|
| Astro | `astro.config.*` |
| Next.js (App Router) | `next.config.*` |
| Nuxt | `nuxt.config.*` |
| SvelteKit | `svelte.config.*` |
| Gatsby | `gatsby-config.*` |
| 静态 HTML | `index.html` |

## 参考资料

Skill 内置了完整的参考文档，Claude 审计时会自动调用：

| 文件 | 内容 |
|------|------|
| `references/schema-templates.md` | 12 种 Schema.org JSON-LD 模板，复制即用 |
| `references/meta-tag-spec.md` | Meta 标签完整规范——长度限制、格式、常见错误 |
| `references/og-image-guide.md` | OG 图生成 4 种方案（SVG、Puppeteer、Satori、@vercel/og） |

## 使用示例

`examples/` 目录包含两个完整的项目示例：

| 示例 | 框架 | 演示内容 |
|------|------|---------|
| [`astro-site/`](examples/astro-site/) | Astro | Layout 驱动的 meta 标签、JSON-LD、sitemap 插件、robots.txt |
| [`nextjs-site/`](examples/nextjs-site/) | Next.js App Router | Metadata API、generateMetadata、程序化 sitemap.ts / robots.ts |

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

## 为什么做这个

SEO 的知识不少，但大部分都是零散的——这篇博客讲 meta 标签，那个教程讲结构化数据，另一个工具查 Core Web Vitals。

每次做新项目都要重新想一遍：OG 图尺寸多大？description 多长会被截断？JSON-LD 的 Article 和 LearningResource 该用哪个？hreflang 的 x-default 放了没有？

这个 Skill 把所有这些知识打包成一次审计。Claude 帮你查，帮你修，你只需要说一句 `/seo`。

不用装任何 npm 包，不用配置任何东西。一个 SKILL.md 文件，就是一个 SEO 专家。

## 贡献

欢迎 PR。添加新检查项时：

1. 在 `SKILL.md` 对应章节添加检查项
2. 包含：查什么、正确值是什么、常见错误
3. 如果需要模板，加到 `references/`

## 许可证

MIT — 随便用，随便改。

---

<p align="center"><em>一行命令装好，一句话启动，审计 + 修复全自动。</em></p>
