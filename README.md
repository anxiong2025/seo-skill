<h1 align="center">SEO专家.skill</h1>

<p align="center">
  <strong>你的网站为什么 Google 不收录、ChatGPT 不引用？</strong><br>
  /seo 一条命令，Claude 读懂你的代码，直接修复问题。<br>
  <em>好产品不该输在技术细节上。</em>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
  <img src="https://img.shields.io/badge/Claude_Code-Skill-blueviolet?logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48L3N2Zz4=" alt="Claude Code Skill">
  <img src="https://img.shields.io/badge/37_模块-700+_检查项-blue.svg" alt="700+ Checks">
  <img src="https://img.shields.io/badge/评分-0--100_A--F-orange.svg" alt="Scoring System">
  <img src="https://img.shields.io/badge/适用-博客_·_SaaS_·_电商_·_文档_·_跨境-green.svg" alt="Use Cases">
</p>

<p align="center">
  <a href="README.md">🇨🇳 中文</a> ·
  <a href="README.en.md">🇺🇸 English</a> ·
  <a href="README.es.md">🇪🇸 Español</a> ·
  <a href="README.ar.md">🇸🇦 العربية</a>
</p>

<br>

<p align="center">
  <a href="#适用场景">谁适合用</a> ·
  <a href="#效果示例">看效果</a> ·
  <a href="#安装">安装</a> ·
  <a href="#使用">使用</a> ·
  <a href="#检查了什么">检查什么</a> ·
  <a href="#支持的框架">框架支持</a>
</p>

<br>

---

## 适用场景

| 场景 | 你的问题 | Skill 解决方案 |
|:------|:---------|:---------------|
| 📝 **个人博客 / 独立开发者** | 写了好内容，Google 不收录，ChatGPT 不引用 | 技术 SEO 全扫描 + GEO 优化 + 内容时效性审计 |
| 💼 **SaaS / 产品官网** | 竞品在 `/vs/xxx` 霸屏，feature 页完全不排名 | 竞品对比页 + 集成页 + Pricing SSR + 免费工具链接资产 |
| 🛒 **独立站 / 电商** | 变体页重复、Merchant Center 不通过、季节性流量抓不住 | 产品 Schema + variants 去重 + Shopping Feed + 大促日历 |
| 📖 **开发者文档站** | API 文档是 SPA 被 Googlebot 忽略，llms.txt 没写 | 版本化策略 + 代码片段 SEO + llms.txt + Cookbook |
| 📍 **本地生意 / 实体店** | Google Maps 搜不到，NAP 信息散乱 | LocalBusiness Schema + NAP 一致性 + 多地点页 |
| 🌏 **跨境 / 全球市场** | 进入新市场没排名，E-E-A-T 不达标，AI 搜索没曝光 | 跨境 SEO 全栈 + 域名策略 + hreflang + 多市场 GEO |
| 🎬 **内容 / 自媒体 / Video** | 视频站、新闻站、课程站需要特化 Schema 和 freshness | Video SEO + NewsArticle + Course Schema + 内容更新策略 |

**代码里跑得通的站点，这个 Skill 都能审。**

<br>

---

## 效果示例

```
用户   ❯ /seo

Claude ❯ 检测到 Astro 项目 + SaaS 站点（/features/、/pricing/、/integrations/）
         应用 SaaS 权重配置，开始审计...

         ## SEO Audit Report — yoursaas.com
         ## Score: 62/100 (D) — Site Type: SaaS / Product

         📊 Score Breakdown（SaaS 加权）
         ┌─────────────────────┬───────┬────────┬──────────┐
         │ Category            │ Score │ Weight │ Weighted │
         ├─────────────────────┼───────┼────────┼──────────┤
         │ SaaS Product SEO    │ 45    │ 10%    │ 4.5      │
         │ Technical SEO       │ 85    │ 12%    │ 10.2     │
         │ On-Page SEO         │ 70    │ 12%    │ 8.4      │
         │ GEO (AI 引用优化)    │ 30    │ 16%    │ 4.8      │
         │ Topical Authority   │ 55    │  8%    │ 4.4      │
         │ Structured Data     │ 55    │  6%    │ 3.3      │
         │ ...                 │ ...   │  ...   │ ...      │
         └─────────────────────┴───────┴────────┴──────────┘

         ### 🔴 Critical (3)
         1. Pricing 页完全 JS 渲染 — Googlebot 看到 "Loading..."
            → 改为 SSR 或 generateStaticParams
         2. 无 /vs/competitor/ 页面 — 竞品在所有对比 SERP 霸屏
            → 创建前 5 个竞品对比页（含 Migration Guide）
         3. llms.txt 缺失 — AI 爬虫无法理解产品结构
            → 生成 public/llms.txt

         ### 🟠 High (5)
         1. 缺少 /integrations/ 目录 — 错失 "product + tool" 长尾
         2. 无免费工具作为链接资产 — SaaS 最强外链渠道未利用
         3. 12 个 feature 页共用同一 og:image — 生成每页独立 OG
         4. Changelog 页 lastmod 为 2025-08 — Freshness 信号衰减
         5. 5 个 feature 页 title 不含目标关键词

         要修复哪些？输入"修复全部"或选择类别。
```

<br>

---

## 安装

### 方式一：npx skills（通用，支持 Cursor / Cline 等）

```bash
npx skills add anxiong2025/seo-skill
```

> 安装后文件在 `.agents/skills/seo/`。如果 `/seo` 无法识别，用方式二。

### 方式二：手动安装（Claude Code 推荐）

```bash
mkdir -p .claude/skills/seo
curl -sL https://raw.githubusercontent.com/anxiong2025/seo-skill/main/SKILL.md \
  -o .claude/skills/seo/SKILL.md
```

```bash
# 可选：下载参考文档（关键词研究、竞品分析、Schema 模板等）
mkdir -p .claude/skills/seo/references
for f in keyword-research-guide competitor-analysis-guide schema-templates meta-tag-spec og-image-guide; do
  curl -sL "https://raw.githubusercontent.com/anxiong2025/seo-skill/main/references/${f}.md" \
    -o ".claude/skills/seo/references/${f}.md"
done
```

<br>

---

## 使用

### 三种调用方式

| 方式 | 示例 | 说明 |
|:------|:------|:------|
| **全量审计** | `/seo` | 跑全部模块，输出总分 + 完整报告（按站点类型自动加权） |
| **按模块** | `/seo 跨境`、`/seo SaaS`、`/seo 电商`、`/seo GEO` | 只跑指定模块，快速定位单项问题 |
| **自然语言** | `帮我做关键词研究`、`分析 pricing 页竞品`、`优化 AI 引用` | 直接说需求，Claude 自动匹配模块 |

### 三种审计模式

| 模式 | 需要什么 | 覆盖率 | 适用 |
|:------|:----------|:------:|:------|
| **Offline（无登录）** | 什么都不用 | ~60-70% | 第一次尝试 |
| **Standard（标准）** | Google Search Console + GA4（免费） | ~90% | **推荐** |
| **Full（完整）** | + Bing WMT + Keyword Planner + MCP | ~100% | 专业 SEO 运营 |

> 第一次用 `/seo` 跑全量，拿到评分和问题清单。之后按模块按需审计，省 token 也更高效。

<br>

---

## 检查了什么

**37 大模块 · 700+ 检查项 · 0-100 分 + A-F 等级 · 按站点类型动态加权**

<details open>
<summary><strong>📋 展开完整模块列表</strong></summary>

<br>

#### 基础 & 技术层（所有站点）

| 模块 | 主要检查内容 |
|:------|:--------|
| **基础设置** | GA4、GSC 验证、noindex、sitemap 配置 |
| **技术 SEO** | robots.txt、canonical、HTTPS、重定向、移动端适配 |
| **On-Page SEO** | title、description、H1 层级、图片 alt、内链、URL 结构 |
| **结构化数据** | 12 种 JSON-LD（Article / Product / FAQ / HowTo / LocalBusiness 等） |
| **性能 SEO / CWV** | LCP、INP、CLS、字体、图片压缩、CrUX 真实数据 |
| **JS 渲染 / SSR** | 服务端渲染、hydration、SPA 回退、noscript |
| **HTML 验证** | DOCTYPE、charset、head 结构、重复标签 |
| **安全 SEO** | HTTPS/HSTS、CSP、密钥泄露、混合内容 |
| **无障碍** | ARIA、颜色对比、表单标签、键盘导航 |
| **Favicon** | favicon.ico / .svg、apple-touch-icon |

#### AI 时代（GEO + 内容）

| 模块 | 主要检查内容 |
|:------|:--------|
| **GEO（AI 引用优化）** | llms.txt、AI 爬虫放行、实体优化、语义标记、多引擎适配 |
| **内容 SEO** | E-E-A-T 信号、内容结构、FAQ、落地页质量 |
| **主题权威** | Hub-Spoke 集群、内容缺口、主题完整度 |
| **内容时效性** | dateModified 更新、内容衰退检测、刷新策略 |
| **关键词研究** | 种子词扩展、长尾、搜索意图、蚕食检测 |

#### 运营层（数据驱动）

| 模块 | 主要检查内容 |
|:------|:--------|
| **GSC 集成** | 查询/CTR/位置分析、机会挖掘、索引状态 |
| **处罚诊断与恢复** | Manual Action、HCU 衰退、Core Update 诊断 |
| **抓取预算** | 大站（>1000 页）日志分析、重复抓取 |
| **站点迁移** | 301 映射、重定向链、迁移前后对比 |
| **排名诊断** | 为什么没排名、关键词 → URL 深度分析 |
| **竞品分析** | SERP 特征、内容差异化、精选摘要机会 |
| **链接建设** | 内链架构、锚文本、站外链接研究 |
| **链接回收** | 未链接品牌提及、失效外链 |
| **OG / 社交** | og:image（1200×630）、Twitter Card |
| **A/B 测试** | 标题 / meta / 结构实验方法论 |
| **CRO for SEO** | 落地页转化、CTA、信任信号 |

#### 行业特化（按站点类型自动激活）

| 模块 | 激活条件 |
|:------|:---------|
| 🛒 **电商 SEO**（40+ 项）| 有商品页 / 购物车 |
| 💼 **SaaS / 产品站** | 有 /features /pricing /integrations |
| 📖 **开发者文档** | 有 /docs /api，有版本化 |
| 🌏 **跨境 / 全球市场** | 多语言 / 多地区目标 |
| 📍 **本地 SEO** | LocalBusiness 站点 |
| 🌐 **国际化深入** | 多语言站点 hreflang |
| 🎬 **视频 SEO** | 视频为主的站点 |
| 👥 **UGC / 程序化** | 社区 / 聚合页站点 |

</details>

> **评分规则**：每项 Pass / Partial / Fail → 加权求和 → 0-100 总分。
> **Critical Fail Cap**：关键问题（sitemap 缺失、robots 屏蔽、≥60% 页面 title 雷同）直接封顶 60 分。

<br>

---

## 支持的框架

自动检测，无需手动配置：

| Framework | 检测信号 |
|:----------|:---------|
| **Astro** | `astro.config.*` |
| **Next.js** (App Router) | `next.config.*` |
| **Nuxt** | `nuxt.config.*` |
| **SvelteKit** | `svelte.config.*` |
| **Gatsby** | `gatsby-config.*` |
| **Vite SPA** | `vite.config.*`（无框架） |
| **静态 HTML** | `index.html` |

<br>

---

## 内置参考文档

安装时可选下载，Claude 审计时自动调用：

| 文件 | 内容 |
|:------|:------|
| `keyword-research-guide.md` | 关键词研究全流程：种子词 → 意图分类 → 缺口分析 |
| `competitor-analysis-guide.md` | 竞品分析：页面对比、SERP 特征、内容差异化 |
| `schema-templates.md` | 12 种 JSON-LD 模板，复制即用 |
| `meta-tag-spec.md` | Meta 标签规范：长度限制、格式、常见错误 |
| `og-image-guide.md` | OG 图生成 4 种方案（SVG / Puppeteer / Satori / @vercel/og） |

<br>

---

## 仓库结构

```
seo-skill/
├── SKILL.md              # 核心：37 模块 700+ 检查 + 动态加权评分系统
├── README.md             # 中文文档（你在看的这个）
├── README.en.md          # English
├── README.es.md          # Español
├── README.ar.md          # العربية
├── LICENSE               # MIT
├── references/           # 参考文档（安装时可选下载）
│   ├── keyword-research-guide.md
│   ├── competitor-analysis-guide.md
│   ├── schema-templates.md
│   ├── meta-tag-spec.md
│   └── og-image-guide.md
└── examples/             # 完整项目示例
    ├── astro-site/       # Astro：meta 标签、JSON-LD、sitemap
    └── nextjs-site/      # Next.js：Metadata API、generateMetadata
```

<br>

---

## 贡献

欢迎 PR。添加新检查项时：

1. 在 `SKILL.md` 对应章节添加
2. 包含：查什么、正确值、常见错误
3. 需要模板的加到 `references/`

## 许可证

MIT —— 随便用，随便改。

---

<p align="center"><em>让每一个好产品都能被搜索引擎看见，被用户找到，被 AI 引用。</em></p>
