<h1 align="center">SEO专家.skill</h1>

<blockquote align="center">
  「让你的网站被搜索引擎看见，被用户找到，被 AI 引用」
</blockquote>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
  <img src="https://img.shields.io/badge/Claude_Code-Skill-blueviolet?logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48L3N2Zz4=" alt="Claude Code Skill">
  <img src="https://img.shields.io/badge/37_模块-300+_检查项-blue.svg" alt="300+ Checks">
  <img src="https://img.shields.io/badge/评分-0--100_A--F-orange.svg" alt="Scoring System">
  <img src="https://img.shields.io/badge/适用-博客_·_SaaS_·_电商_·_文档站_·_出海-green.svg" alt="Use Cases">
</p>

<br>

<p align="center">
  <strong>AI 时代，搜索不再只是 Google —— ChatGPT 会不会引用你？</strong><br>
  <strong>出海浪潮，独立站不再只靠 Baidu —— Google 能不能看见你？</strong><br>
  <strong>一个 Skill，把 SEO + GEO + 出海 专家的全部知识体系交给 Claude。</strong>
</p>

<p align="center">
  SEO 决定用户能不能找到你，GEO 决定 AI 会不会引用你，出海决定你能不能走出去。<br>
  <strong>37 大模块、300+ 项检查</strong>，按站点类型动态加权（博客 / SaaS / 电商 / 文档 / 本地 / 出海），<br>
  覆盖从 Google 排名到 ChatGPT 引用、从关键词研究到处罚恢复、<br>
  从 Core Web Vitals 诊断到排名瓶颈定位、从 SaaS 竞品对比页到 API 文档 SEO、<br>
  从 Merchant Center 商品 Feed 到季节性日历（Black Friday / 双11 / 618），<br>
  从中国品牌出海 Google 到 Western E-E-A-T 适配与 AI 搜索可见度的每一个细节。<br>
  三种模式：无需登录（60-70% 覆盖）、标准模式（GSC + GA4）、完整模式（全栈授权）。<br>
  <strong>不只是给你一份清单 —— Claude 直接帮你诊断、修复、上线。</strong>
</p>

<p align="center">
  <a href="#效果示例">看效果</a> ·
  <a href="#适用场景">谁适合用</a> ·
  <a href="#安装">安装</a> ·
  <a href="#使用">使用</a> ·
  <a href="#检查了什么">检查什么</a> ·
  <a href="#仓库结构">仓库结构</a>
</p>

<br>

---

<br>

## 适用场景

**谁适合用这个 Skill？**

| 场景 | 你的问题 | Skill 解决方案 |
|:------|:---------|:---------------|
| 📝 **个人博客 / 独立开发者** | 写了好内容，但 Google 不收录，ChatGPT 不引用 | 技术 SEO 全扫描 + GEO 优化 + 内容时效性审计 |
| 💼 **SaaS / 产品官网** | 竞品在 `/vs/xxx` 霸屏，我们的 feature 页完全不排名 | 竞品对比页 + 集成页 + Pricing SSR + 免费工具链接资产 |
| 🛒 **独立站 / 电商** | 变体页重复、Merchant Center 不通过、季节性流量抓不住 | 产品 Schema + variants 去重 + Shopping Feed + 双11/BF 日历 |
| 📖 **开发者文档站** | API 文档是 SPA 被 Googlebot 忽略，llms.txt 没写 | 版本化策略 + 代码片段 SEO + llms.txt + Cookbook |
| 📍 **本地生意 / 实体店** | Google Maps 搜不到，NAP 信息散乱 | LocalBusiness Schema + NAP 一致性 + 多地点页 |
| 🌏 **中国品牌出海** | 从 Baidu 玩法转 Google，域名、E-E-A-T、trust 信号都要重做 | 出海 SEO 全栈 + 域名策略 + Western E-E-A-T + AI 搜索可见度 |
| 🎬 **内容 / 自媒体 / Video** | 视频站、新闻站、课程站需要特化 Schema 和 freshness | Video SEO + NewsArticle + Course Schema + 内容更新策略 |

**一句话：代码里跑得通的站点，这个 Skill 都能审。**

<br>

## 效果示例

```
用户      ❯ /seo

Claude    ❯ 检测到 Astro 项目 + SaaS 站点（/features/、/pricing/、/integrations/）
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
            │ GEO (AI 优化)        │ 30    │ 16%    │ 4.8      │
            │ Topical Authority   │ 55    │ 8%     │ 4.4      │
            │ Structured Data     │ 55    │ 6%     │ 3.3      │
            │ ...                 │ ...   │ ...    │ ...      │
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

```
用户      ❯ 帮我做出海 SEO，我们是做 AI 笔记软件的，想进美国市场

Claude    ❯ ## 出海 SEO 诊断报告 — [Your Product]

            ### 🌍 目标市场策略
            主市场：US / EU（Google 90%+）
            次市场：SEA 英语圈
            AI 搜索权重高：ChatGPT / Perplexity / Claude 是 B2B 获客重要渠道

            ### 🔴 关键问题（3）
            1. 域名是 .cn — Western 用户信任度低
               → 迁移到 .com + /en/ 子目录，301 全量映射
            2. About 页无创始人英文 LinkedIn / 媒体背书
               → E-E-A-T 不达标，AI 不会引用
            3. 托管在阿里云国内节点 — 美国用户 LCP 4.2s
               → 迁移到 Vercel / Cloudflare 全球 CDN

            ### 🟠 高优先级（5）
            1. hreflang 缺失 zh-CN ↔ en-US 双向
            2. 缺少 Western 品牌背书：G2 / Capterra / Product Hunt 均未收录
            3. ChatGPT 测试查询 "best ai note taking app" — 未被提及
            4. 页面底部友情链接 → Google 视为操纵，移除
            5. Pricing 用人民币 + USD 双显示 — 主站应只显 USD

            ### 📋 Western E-E-A-T 差距
            ✗ 作者署名为 "小编" / "团队" — 改为真人 + LinkedIn
            ✗ 案例用 "客户 A" — 改为真实客户名 + 真人头像
            ✗ ICP 备案号显示在底部 — 出海站应移除

            要从哪一步开始？推荐顺序：①域名迁移 → ②E-E-A-T → ③AI 可见度
```

```
用户      ❯ /seo 电商

Claude    ❯ ## E-Commerce SEO 深度审计 — yourstore.com

            已检查 40+ 电商专项：variants / 缺货 / Merchant Center /
            长尾商业内容 / 季节性日历 / UGC / 分类去重 / marketplace

            ### 🔴 Critical
            1. 12,000 个变体页（颜色/尺寸）各自独立 URL，无 canonical
               → 合并到主 PDP + hasVariant schema，可能挽回 30% 抓取预算
            2. Black Friday 页 URL 为 /bf-2024/ — 每年 URL 变动
               → 改为 /black-friday/ 稳定 URL，保留反链和排名

            ### 🟠 High
            1. Merchant Center Feed 缺 gtin — 68% 商品无法匹配 Shopping
            2. "Best X for Y" 长尾内容为 0 — 错失最高商业意图流量
            3. 缺货商品直接 404 — 永久下架应 301 到替代品/品类页
            4. 评论 UGC 为 iframe 嵌入 — Google 看不到评论内容
            5. 双11 / 618 日历未建立 — 错失中国市场大促

            要我生成季节性内容日历并自动填到 CMS 吗？
```

> **这不是给你一份 checklist，而是 Claude 直接动手改 —— 诊断、修代码、上线一条龙。**

<br>

## 安装

### 方式一：npx skills（通用 agent 工具）

```bash
npx skills add anxiong2025/seo-skill
```

> 安装后文件在 `.agents/skills/seo/`，支持多种 AI 编程工具（Cursor、Cline 等）。
> 如果你只用 Claude Code 且 `/seo` 无法识别，请用方式二。

### 方式二：手动安装（Claude Code 推荐）

```bash
# 在你的项目根目录执行
mkdir -p .claude/skills/seo
curl -sL https://raw.githubusercontent.com/anxiong2025/seo-skill/main/SKILL.md \
  -o .claude/skills/seo/SKILL.md

# 可选：下载参考文档（关键词研究、竞品分析、Schema 模板等）
mkdir -p .claude/skills/seo/references
for f in keyword-research-guide competitor-analysis-guide schema-templates meta-tag-spec og-image-guide; do
  curl -sL "https://raw.githubusercontent.com/anxiong2025/seo-skill/main/references/${f}.md" \
    -o ".claude/skills/seo/references/${f}.md"
done
```

<br>

## 使用

三种调用方式，按需选择：

| 方式 | 示例 | 说明 |
|:------|:------|:------|
| **全量审计** | `/seo` | 跑全部适用模块，输出总分 + 完整报告（按站点类型自动加权） |
| **按模块审计** | `/seo 出海`、`/seo SaaS`、`/seo 电商`、`/seo GEO` | 只跑指定模块，快速定位单项问题 |
| **自然语言** | `帮我做关键词研究`、`分析 pricing 页竞品`、`优化 AI 引用` | 直接说你想做的事，Claude 自动匹配模块 |

**支持的模块关键词：**

> `技术SEO` · `页面优化` · `结构化数据` · `OG` · `favicon` · `性能` · `内容` · `国际化`
> `关键词` · `竞品` · `链接` · `本地` · `电商` · `视频` · `高级` · `安全` · `无障碍`
> `HTML` · `SSR` · `GEO` · `GSC` · `处罚` · `抓取预算` · `迁移` · `CWV` · `排名诊断`
> `主题权威` · `链接回收` · `时效性` · `A/B` · `UGC` / `程序化` · `CRO` · `国际化深入`
> `SaaS` · `文档` / `API docs` · `出海` / `going global`

**三种审计模式：**

| 模式 | 需要什么 | 覆盖率 | 适用 |
|:------|:----------|:------:|:------|
| **Offline（无登录）** | 什么都不用 | ~60-70% | 第一次尝试、不愿登录的用户 |
| **Standard（标准）** | Google Search Console + GA4（都免费） | ~90% | **推荐** —— 大多数场景 |
| **Full（完整）** | + Bing WMT + Keyword Planner + MCP | ~100% | 专业 SEO 运营 |

**推荐用法**：第一次用 `/seo` 跑全量，拿到完整评分和问题清单。之后按模块按需审计，省 token 也更高效。Claude 会根据你的站点类型（博客/SaaS/电商/文档/出海）自动调整权重。

<br>

## 检查了什么

完整审计覆盖 **37 大模块、300+ 检查项**，输出 **0-100 分 + A-F 等级**。按站点类型动态加权。

<details open>
<summary><strong>📋 完整模块列表</strong></summary>

<br>

### 基础 & 技术层（所有站点必过）

| 模块 | 检查项 | 默认权重 |
|:------|:--------|:------:|
| **基础设置** | GA4、GSC 验证、noindex 检查、sitemap 配置 | — |
| **技术 SEO** | robots.txt、sitemap、canonical、HTTPS、重定向、移动端、导航 | 12% |
| **On-Page SEO** | title、description、H1 层级、图片 alt、内链、URL 结构 | 12% |
| **结构化数据** | 12 种 JSON-LD（Article、Product、FAQ、HowTo、LocalBusiness 等） | 6% |
| **性能 SEO / CWV 诊断** | LCP、INP、CLS、字体、图片、压缩、CrUX 真实数据 | 6% |
| **HTML 验证** | DOCTYPE、charset、head 结构、重复标签、占位文本 | 1% |
| **JS 渲染 / SSR** | 服务端渲染检查、hydration、SPA 回退、noscript | 1% |
| **Favicon** | favicon.ico、favicon.svg、apple-touch-icon | 1% |
| **安全 SEO** | HTTPS/HSTS、CSP、密钥泄露、混合内容 | 2% |
| **无障碍** | ARIA、颜色对比、表单标签、键盘导航、触摸目标 | 2% |

### AI 时代（GEO + 内容深度）

| 模块 | 检查项 | 默认权重 |
|:------|:--------|:------:|
| **GEO（AI 引用优化）** | llms.txt、AI 爬虫放行、引用友好结构、实体优化、语义标记、多引擎适配 | **14%** |
| **内容 SEO** | E-E-A-T 信号、内容结构、FAQ、目录跳转、落地页 | 8% |
| **主题权威** | Hub-Spoke 集群、内容缺口、主题完整度 | 6% |
| **内容时效性** | 年份/dateModified 更新、衰退检测、刷新策略 | 3% |
| **关键词研究** | 种子词扩展、长尾、搜索意图、页面对齐、蚕食检测、内容缺口 | 7% |

### 运营层（基于真实数据）

| 模块 | 检查项 | 默认权重 |
|:------|:--------|:------:|
| **Google Search Console 集成** | 查询/CTR/位置分析、机会挖掘、索引状态 | 3% |
| **处罚诊断与恢复** | Manual Action、HCU 衰退、Core Update 诊断、恢复路径 | 条件启用 20% |
| **抓取预算** | 大站（>1000 页）日志分析、无限空间、重复抓取 | 条件启用 1% |
| **站点迁移** | 301 映射、重定向链、迁移前后对比 | 条件启用 15% |
| **排名诊断** | "为什么没排名" 深度分析、关键词 → URL 诊断 | 按请求 |
| **链接建设** | 内链架构、主题集群、锚文本、站外研究 | 4% |
| **链接回收** | 未链接品牌提及、失效外链、竞品反链 | 2% |
| **竞品分析** | 页面抓取对比、SERP 特征、精选摘要、内容差异化 | 4% |
| **A/B 测试** | 标题 / meta / 结构实验方法论 | 建议性 |
| **CRO for SEO** | 落地页转化、CTA、表单、信任信号 | 条件 2% |
| **OG / 社交** | og:image（1200×630）、Twitter Card、预览验证 | 2% |
| **高级 SEO** | 零点击优化、精选摘要、UX 检查 | 1% |

### 行业特化（按站点类型激活）

| 模块 | 激活条件 | 权重（激活时） |
|:------|:---------|:---------------|
| 🛒 **电商 SEO（40+ 项）** | E-Commerce 站点 | **10%** |
| 💼 **SaaS / 产品站 SEO** | 有 /features /pricing /integrations | **10%** |
| 📖 **开发者文档 SEO** | 有 /docs /api，有版本化 | **8%** |
| 🌏 **出海 / Going Global SEO** | 中文品牌出海 | **8%** |
| 📍 **本地 SEO** | LocalBusiness 站点 | **8%** |
| 🌐 **国际化 SEO / 深入** | 多语言站点 | **4% + 3%** |
| 🎬 **视频 SEO** | 视频为主 | **4%** |
| 👥 **UGC / 程序化 SEO** | 社区 / 聚合页站点 | **5%** |

</details>

<br>

<details>
<summary><strong>🎯 行业特化模块深度（点击展开）</strong></summary>

<br>

### 💼 SaaS / 产品站 SEO（§3.34）
- Feature pages 层级与关键词
- `/vs/[competitor]/` 竞品对比页（含 Migration Guide）
- `/alternatives/[competitor]/` 替代方案页
- `/integrations/[tool]/` 集成目录
- Pricing 页 SSR + Product Schema + FAQ
- 免费工具 / 计算器作为链接资产
- Use Cases / Industry / Case Study 页
- Changelog 作为 Freshness 信号
- 营销站与文档站分离策略

### 📖 开发者文档 SEO（§3.35）
- 版本化策略（`/v1/` / `/latest/` canonical）
- API Reference 避免 JS-only 渲染
- 代码片段 SEO（错误消息、方法签名）
- Cookbook / How-To 结构化数据
- 废弃与迁移页面处理
- llms.txt + llms-full.txt（文档是 AI 训练/引用第一来源）
- GitHub README ↔ Docs 站去重
- 交互式 Playground SEO

### 🛒 电商 SEO 深度（§3.13）
- 变体（颜色/尺寸）canonical 决策树
- 缺货多场景（临时/永久/季节）
- Google Merchant Center / Shopping Feed
- "Best X for Y" 长尾商业内容
- 季节性内容日历（BF / 双11 / 618 / Diwali）
- UGC 评论图片/视频 SEO
- Category / Collection / Tag 去重
- Marketplace 多卖家站 SEO

### 🌏 出海 / Going Global SEO（§3.36）
- 目标市场与搜索引擎策略（Google vs Baidu）
- 域名策略（.com + 子目录 vs ccTLD）
- hreflang zh → en/multi 过渡
- Brand 国际化（改英文名、trademark）
- Western E-E-A-T 适配（真人署名、案例、奖项）
- 内容 transcreation（不是翻译）
- AI 搜索 Western 市场可见度
- 中国出身战略披露
- 出海特有技术坑（CDN、字体、分析脚本）
- Western 多语言本地化
- 出海链接建设（HARO、PR、开源工具）

</details>

> **评分规则**：每项检查 Pass/Partial/Fail → 加权求和 → 0-100 总分。<br>
> **Critical Fail Cap**：关键问题（如 ≥60% 页面 title 雷同、sitemap 缺失、robots 屏蔽）直接封顶 60 分。

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
| **Vite SPA** | `vite.config.*` 无框架 |
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

`examples/` 目录包含完整的项目示例：

| 示例 | 框架 | 演示内容 |
|:------|:------|:---------|
| [`astro-site/`](examples/astro-site/) | Astro | Layout 驱动的 meta 标签、JSON-LD、sitemap 插件、robots.txt |
| [`nextjs-site/`](examples/nextjs-site/) | Next.js | Metadata API、generateMetadata、程序化 sitemap.ts / robots.ts |

<br>

## 仓库结构

```
seo-skill/
├── SKILL.md                              # SEO + GEO + 出海 完整审计系统
│                                         #（37 模块 300+ 检查 + 动态加权评分）
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

你写了好内容，但搜索引擎不知道。
你做了好产品，但海外用户找不到你。
你在 ChatGPT 里问自己家产品，AI 从竞品那里找答案。

**SEO 不是可选项 —— 它是你的内容和用户之间的桥梁。** 做好了，自然流量持续增长，获客成本趋近于零。做不好，再好的内容也只是自娱自乐。

问题是：SEO 的知识太零散、太分层了。

- 技术层：robots / sitemap / canonical / CWV
- 内容层：E-E-A-T / 主题权威 / 时效性 / 蚕食
- AI 层：llms.txt / 引用结构 / AI 爬虫 / 多引擎
- 行业层：SaaS 竞品页 / 电商变体 / 文档版本 / 出海域名
- 运营层：GSC 诊断 / 处罚恢复 / 抓取预算 / 迁移映射

每一层都有讲究，每一层都容易遗漏。再加上 **AI 搜索的崛起**（ChatGPT、Perplexity、Google AI Overviews）让传统 SEO 只是一半 —— 另一半是 GEO。再加上 **中国品牌出海** 让 Google 玩法和 Western E-E-A-T 成为必修课。

这个 Skill 把 **SEO + GEO + 出海专家的完整知识体系** 交给 Claude。37 个模块、300+ 项检查、按站点类型动态加权，一句 `/seo` 从诊断到修复，让你的网站被搜索引擎看见、被 AI 引用、被全球用户找到。

> 不用装任何 npm 包，不用配置任何东西。**一个 SKILL.md 文件，就是一个 SEO 专家团队。**

<br>

## 贡献

欢迎 PR。添加新检查项时：

1. 在 `SKILL.md` 对应章节添加检查项
2. 包含：查什么、正确值是什么、常见错误
3. 如果需要模板，加到 `references/`

## 许可证

MIT —— 随便用，随便改，尽情去用吧！

---

<p align="center"><em>让每一个好产品都能被搜索引擎看见，被用户找到，被 AI 引用，被全球听见。</em></p>
