---
name: seo
description: |
  Complete SEO + GEO audit, scoring, and fix skill — 37 modules, 700+ checks, 0-100 scoring.
  Covers: foundation, technical SEO, on-page, structured data, OG/social, favicon, performance,
  content, international, keyword research, competitor analysis, link building, local SEO,
  e-commerce SEO (with variants, Merchant Center, seasonal, marketplace), video SEO, advanced SEO,
  security, accessibility, HTML validation, JS rendering/SSR,
  deep GEO (Generative Engine Optimization for AI citation),
  Google Search Console integration, penalty recovery, crawl budget, site migration,
  Core Web Vitals diagnosis, ranking diagnosis, topical authority, link reclamation,
  content freshness, SEO A/B testing, UGC & programmatic SEO, CRO for SEO,
  international SEO deep dive, SaaS product site SEO (features/vs/alternatives/integrations/pricing/free-tools),
  developer documentation SEO (versioning/API refs/cookbooks/llms.txt), and 出海/going-global SEO
  (for Chinese companies expanding to Western markets with Google, Western E-E-A-T, and AI search).
  Supports three audit modes: Offline (no login), Standard (GSC + GA4), Full (all tools).
  Produces a weighted score (A-F grade) with critical fail cap and site-type customization.
  TRIGGER when: user mentions SEO, GEO, search rankings, AI optimization, meta tags, OG images,
  structured data, keyword research, competitor analysis, GSC, crawl, penalty, migration,
  Core Web Vitals, ranking diagnosis, topical authority, link reclamation, freshness, A/B,
  UGC, programmatic, CRO, hreflang, SaaS, docs, pricing page, 出海, going global, or says /seo.
---

# SEO Audit & Optimization Skill

Systematic SEO audit and fix workflow for any website project.

```
Detect Framework → Crawl Pages → Audit → Report → Fix → Verify
```

## § 0. User-Side Prep — What the User Needs to Set Up (Once)

Claude cannot log into the user's Google/Bing accounts. The richest SEO signals
live behind those accounts. **All services listed below are free** — "登录"
means account authorization, not payment. Set these up once; reuse forever.

### 0.1 Audit Modes by Login State

| Mode | User Setup Required | Coverage | Use When |
|------|---------------------|----------|----------|
| **Offline mode** | Nothing | ~60-70% of audit (code layer + public data) | First pass, user opts out, or cannot log in |
| **Standard mode** | GSC + GA4 (free) | ~90% of audit | Recommended — most users |
| **Full mode** | + Bing WMT + Keyword Planner + MCP | ~100% of audit | Serious SEO owners |

**Mode selection flow (ask the user ONCE at the start of a full audit):**

```
1. Detect login signals:
   • Grep public/ for google-site-verification meta or googleXXXX.html → GSC likely set up
   • Grep layouts for gtag / G-XXXXX / GoogleAnalytics → GA4 likely set up
   • Check ~/.claude/mcp.json or project mcp config for gsc / webmaster MCP servers
2. Ask the user:
   "I can run in Offline mode (no login needed) or Standard/Full mode
   (you paste GSC exports). Which do you prefer? [offline / standard / full]"
3. Announce selected mode + what will be included / skipped
```

**Explicit rules:**

- If user has GSC authorized AND shares CSV/screenshot → **run GSC-dependent modules (do NOT skip)**
- If user opts out or has no GSC access → **skip §3.21, §3.22 manual-action check, and §3.23 crawl-stats parts** (run the rest of those modules that work on code-layer signals)
- If user explicitly says "just use what you have" → run Offline mode silently, no repeated prompts
- If user later provides GSC data mid-audit → re-enable GSC-dependent modules without restarting the whole audit
- Never assume or fabricate GSC data when absent — if a module requires it and no data is provided, mark the checks as "Unverifiable" in the report (not "Fail")

Announce the detected mode at the start of every audit so the user knows
what's being skipped and why.

### 0.2 One-Time User Setup (All Free)

| Service | Why | Setup Time | Needed By |
|---------|-----|------------|-----------|
| **Google Search Console** | Real query/CTR/position data, manual action status, indexation | 5-10 min | §3.21, §3.22, §3.23, §3.24, §3.26 |
| **Google Analytics 4** | Traffic, user behavior, conversions | 10 min | §3.0, §3.21 |
| **Bing Webmaster Tools** | Bing/DuckDuckGo/ChatGPT-search coverage | 5 min | §3.21 (optional) |
| **Google Keyword Planner** | Keyword search volume (requires free Ads account — no ad spend needed) | 10 min | §3.9 (optional) |

**GSC setup path (the most important one):**
1. User visits `search.google.com/search-console`
2. Adds property → verifies ownership (Claude can generate the verification file or DNS TXT record)
3. Waits 2-3 days for initial data population

### 0.3 No-Login Tools (Claude Can Use These Without User Accounts)

| Tool | URL | Use For |
|------|-----|---------|
| PageSpeed Insights | pagespeed.web.dev | Real CWV data (CrUX) + lab diagnosis |
| Google Trends | trends.google.com | Search trend + seasonality + region |
| AnswerThePublic | answerthepublic.com (3 free/day) | Google autocomplete + PAA graph |
| Schema.org Validator | validator.schema.org | JSON-LD syntax/spec validation |
| Rich Results Test | search.google.com/test/rich-results | Google-specific rich result eligibility |
| Mobile-Friendly Test | search.google.com/test/mobile-friendly | Mobile rendering check |
| Bing Keyword Research | webmaster.bing.com/keyword-research | Keyword volume (no Ads account needed) |

### 0.4 How the User Hands GSC Data to Claude

Claude CANNOT access GSC directly. User must export and paste. Preferred
order by fidelity:

1. **CSV export** (best): GSC → Performance → Export → CSV → paste file or
   drag into conversation
2. **Screenshot** (acceptable): capture the relevant chart/table; Claude reads
   with vision
3. **MCP server** (automated, if available): install an MCP server that wraps
   the GSC API (e.g., community `mcp-gsc`); user authorizes once, then Claude
   queries via MCP in future sessions. Check `~/.claude/mcp.json` or project
   MCP config.

### 0.5 Privacy & Security Notes

- Never paste service account keys / OAuth tokens into the conversation —
  paste CSV *data*, not credentials
- GSC data contains query terms users searched — treat as PII-adjacent
- When Claude generates verification files (HTML/DNS TXT), user places them
  manually; Claude never pushes to production without explicit approval

---

## Quick Start

### Full Audit (`/seo`)

Run all applicable modules:

1. **Detect** — identify the framework AND site type (see § 1.1)
2. **Crawl** — find all pages, layouts, and config files
3. **Audit** — run checks from the checklist below (modules filtered by site type)
4. **Report** — present score (0-100) and findings grouped by severity
5. **Fix** — apply fixes with user approval
6. **Verify** — rebuild and confirm fixes

### Module-Level Audit

When the user requests a specific module, run ONLY that module (skip others). Match user intent to module:

| User Says | Module | Section |
|-----------|--------|---------|
| "技术 SEO" / "technical seo" | Technical SEO | 3.1 |
| "页面优化" / "on-page" / "meta 标签" | On-Page SEO | 3.2 |
| "结构化数据" / "JSON-LD" / "schema" | Structured Data | 3.3 |
| "OG" / "社交" / "分享预览" | Open Graph & Social | 3.4 |
| "favicon" / "图标" | Favicon & Icons | 3.5 |
| "性能" / "速度" / "Core Web Vitals" | Performance SEO | 3.6 |
| "内容" / "E-E-A-T" / "content" | Content SEO | 3.7 |
| "国际化" / "hreflang" / "多语言" | International SEO | 3.8 |
| "关键词" / "keyword" | Keyword Research | 3.9 |
| "竞品" / "竞争对手" / "competitor" | Competitor Analysis | 3.10 |
| "链接" / "内链" / "外链" / "link" | Link Building | 3.11 |
| "本地" / "local" / "地图" | Local SEO | 3.12 |
| "电商" / "产品页" / "e-commerce" | E-Commerce SEO | 3.13 |
| "高级" / "精选摘要" / "零点击" | Advanced SEO | 3.14 |
| "安全" / "HTTPS" / "security" | Security SEO | 3.15 |
| "无障碍" / "accessibility" / "a11y" | Accessibility | 3.16 |
| "HTML" / "验证" / "validation" | HTML Validation | 3.17 |
| "SSR" / "渲染" / "JS rendering" | JS Rendering | 3.18 |
| "GEO" / "AI 优化" / "AI 引用" / "llms.txt" | GEO | 3.19 |
| "视频" / "video seo" / "youtube" | Video SEO | 3.20 |
| "GSC" / "Search Console" / "搜索控制台" / "CTR" | GSC Integration | 3.21 |
| "处罚" / "penalty" / "manual action" / "helpful content" | Penalty Recovery | 3.22 |
| "抓取预算" / "crawl budget" / "日志" / "log analysis" | Crawl Budget | 3.23 |
| "迁移" / "migration" / "重定向批量" / "site move" | Site Migration | 3.24 |
| "CWV 诊断" / "LCP 优化" / "INP 优化" | CWV Diagnosis | 3.25 |
| "为什么没排名" / "ranking diagnosis" / "诊断排名" | Ranking Diagnosis | 3.26 |
| "主题权威" / "topical authority" / "hub spoke" / "话题集群" | Topical Authority | 3.27 |
| "链接回收" / "link reclamation" / "外链获取" / "unlinked mention" | Link Reclamation | 3.28 |
| "内容更新" / "时效性" / "freshness" / "refresh" | Content Freshness | 3.29 |
| "A/B 测试" / "ab test" / "标题测试" | A/B Testing | 3.30 |
| "UGC" / "用户生成" / "程序化 SEO" / "programmatic" / "分面导航" | UGC / Programmatic | 3.31 |
| "转化率" / "CRO" / "落地页" / "landing page" | CRO for SEO | 3.32 |
| "多语言" / "hreflang 策略" / "ccTLD" / "国际化深入" | International Deep Dive | 3.33 |
| "SaaS" / "产品页" / "pricing seo" / "vs competitor" / "集成页" / "free tools" | SaaS Product Site SEO | 3.34 |
| "文档" / "docs seo" / "api reference" / "changelog" / "开发者文档" | Developer Docs SEO | 3.35 |
| "出海" / "going global" / "海外" / "独立站出海" / "Google 从零" / "海外 seo" | 出海 / Going Global SEO | 3.36 |

Trigger matching is **case-insensitive** and supports partial matches (e.g., "SEO"
matches "technical seo", "competitor seo analysis"). When ambiguous, ask the user
which module they meant rather than guessing.

When running a single module:
1. **Detect** framework (always needed)
2. **Audit** only the requested module
3. **Report** that module's score + findings
4. **Fix** with user approval

---

## 1. Framework Detection

Identify the tech stack before auditing. Check for:

| Signal | Framework |
|--------|-----------|
| `astro.config.*` | Astro |
| `next.config.*` | Next.js |
| `nuxt.config.*` | Nuxt |
| `svelte.config.*` | SvelteKit |
| `gatsby-config.*` | Gatsby |
| `vite.config.*` + no framework | Vite SPA |
| `index.html` only | Static HTML |

Read the config to determine: SSG vs SSR, site URL, sitemap plugin, i18n setup.

### 1.1 Site Type Detection

Different site types need different module weights. Detect the site type from
signals below (may match multiple — use the most dominant):

| Signal | Site Type | Priority Modules | Skip/Deprioritize |
|--------|-----------|------------------|-------------------|
| `/products/`, `Product` schema, cart/checkout pages | **E-Commerce** | 3.13, 3.3, 3.2, 3.11 | 3.12 (unless physical stores) |
| Blog-heavy, `/posts/`, `/articles/`, `Article` schema | **Content/Blog** | 3.7, 3.9, 3.19, 3.11 | 3.13 |
| `/docs/`, `/api/`, OpenAPI/Swagger, versioned routes | **Developer Docs** | 3.35, 3.19, 3.7, 3.18, 3.3 | 3.12, 3.13 |
| `/features/`, `/pricing/`, `/integrations/`, `SoftwareApplication` schema, trial/signup flow | **SaaS / Product** | 3.34, 3.19, 3.7, 3.3, 3.18 | 3.12, 3.13 |
| Site in Chinese targeting Western markets, multi-locale with `zh` + `en/de/fr`, Chinese brand going global | **出海 / Going Global** | 3.36, 3.8, 3.33, 3.19, 3.7 | — |
| `LocalBusiness` schema, address/hours, service area | **Local Business** | 3.12, 3.7, 3.4 | 3.8 (unless multi-region) |
| `hreflang` tags, multi-language URL structure | **International** | 3.8, 3.7, 3.9 | — |
| News-style dates, press releases, `NewsArticle` schema | **News/Media** | 3.7, 3.19, 3.3, 3.2 | 3.13 |
| Video embeds, `VideoObject` schema, transcripts | **Video-Heavy** | 3.20, 3.19, 3.7 | — |
| Single landing page, product launch, waitlist | **Marketing Site** | 3.2, 3.6, 3.4, 3.7 | 3.12, 3.13 |
| Default (unknown) | **General** | Run all modules at default weights | — |

**Detection workflow:**

```
1. Glob for schema.org types in source: "Product", "LocalBusiness", "Article", "NewsArticle", "VideoObject"
2. Glob for URL patterns: /products/, /docs/, /blog/, /posts/, /news/, /videos/
3. Grep for i18n configs: hreflang, i18n, locales, [lang] in routes
4. If ambiguous → ask the user: "This looks like [X]. Confirm?"
```

After detecting, **announce the site type** before auditing so the user can
correct it. Use the detected type to adjust category weights (see § 4.1).

---

## 2. Page Discovery

Find all pages and their SEO-relevant files:

```
# Layouts (where meta tags usually live)
src/layouts/**/*.{astro,tsx,jsx,vue,svelte}
app/layout.{tsx,jsx}
components/Layout.{tsx,jsx,vue}

# Pages
src/pages/**/*.{astro,md,mdx,tsx,jsx}
app/**/page.{tsx,jsx}
pages/**/*.{tsx,jsx,vue}

# Config
robots.txt, sitemap*, astro.config.*, next.config.*

# Assets
public/favicon.*, public/og-*.*, public/apple-touch-icon.*
```

---

## 3. Audit Checklist

### 3.0 SEO Foundation — Indexing & Analytics Code (Critical)

Ensure the codebase has the infrastructure for search engines to discover and track the site.

#### Analytics & Tracking Code
- [ ] Google Analytics (GA4) `gtag.js` or `<GoogleAnalytics>` snippet present in `<head>`
- [ ] GA measurement ID is set via environment variable (not hardcoded)
- [ ] Google Search Console HTML verification tag or file present (e.g., `public/googleXXXX.html`)
- [ ] Bing Webmaster verification meta tag or `BingSiteAuth.xml` present

**How to check:**
```
Grep for "gtag", "GA-", "G-", "google-site-verification", "msvalidate" in layouts and <head>
Check public/ for verification files
```

#### Indexing Controls
- [ ] No accidental `noindex` meta tags on pages that should be indexed
- [ ] No password protection or auth gates blocking crawlers
- [ ] Sitemap plugin/generation is configured (framework-specific)
- [ ] `robots.txt` does not block important pages (checked in 3.1)

**How to check:**
```
Grep for "noindex" across all pages and layouts
Check framework config for sitemap integration
Verify robots.txt allows indexing of key paths
```

---

### 3.1 Technical SEO (Critical)

#### robots.txt
- [ ] File exists at `public/robots.txt` or is generated
- [ ] `Sitemap:` directive points to correct URL
- [ ] Does NOT block CSS/JS/image assets
- [ ] Does NOT block important pages
- [ ] AI crawlers handled intentionally (GPTBot, ClaudeBot, PerplexityBot)

#### Sitemap
- [ ] sitemap.xml is generated (check framework plugin)
- [ ] All indexable pages are included
- [ ] `<lastmod>` dates are present and accurate
- [ ] Priorities are set (homepage 1.0, key pages 0.8, others 0.7)
- [ ] No non-indexable pages (404, redirects, noindex) in sitemap

#### Canonical URLs
- [ ] Every page has `<link rel="canonical">` tag
- [ ] Canonical is absolute URL with HTTPS
- [ ] Self-referential canonical on every page
- [ ] No canonical pointing to 404 or redirect

#### HTTPS
- [ ] Site URL uses HTTPS in config
- [ ] No mixed content (HTTP resources on HTTPS pages)
- [ ] HTTP → HTTPS redirect configured (hosting/server level)

#### Status Codes & Redirects
- [ ] No internal links pointing to 404 pages
- [ ] No redirect chains (A→B→C — max 1 hop)
- [ ] Permanent moves use 301, not 302
- [ ] Custom 404 page exists

#### Duplicate Content
- [ ] No URL variants creating duplicates (www/non-www, trailing slash)
- [ ] `trailingSlash` config is explicit (not "ignore")
- [ ] Query parameters don't create duplicate pages

#### Mobile-Friendly
- [ ] Site is responsive on mobile devices (no horizontal scroll)
- [ ] Text readable without zooming (min 16px body text)
- [ ] Tap targets ≥ 48×48 CSS pixels with ≥ 8px spacing between adjacent interactive elements (prevents mis-taps)
- [ ] No mobile interstitials or pop-ups blocking main content on initial load (post-scroll/post-interaction modals OK; consent banners exempt if dismissible)
- [ ] Viewport meta tag present: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- [ ] Body text readable at default zoom — no horizontal scrolling required

#### Site Navigation
- [ ] Global navigation menu is present and accessible
- [ ] Key pages reachable from navigation (not buried)
- [ ] Navigation works on both desktop and mobile
- [ ] Breadcrumb navigation present on inner pages
- [ ] Footer includes links to important pages (privacy, contact, sitemap)

---

### 3.2 On-Page SEO (Critical)

#### Title Tags
- [ ] Every page has a unique `<title>`
- [ ] Length: 50-60 characters (will be truncated beyond ~60)
- [ ] Format: `Primary Topic | Brand` or `Page Title - Brand`
- [ ] Primary keyword appears in first 50 characters
- [ ] No duplicate titles across pages

**How to check:**
```
grep -r 'title:' src/pages/ --include='*.md' --include='*.mdx'
```

#### Meta Descriptions
- [ ] Every indexable page has `<meta name="description">`
- [ ] Length: 120-155 characters (truncated beyond ~160)
- [ ] Contains primary keyword naturally
- [ ] Unique per page (no duplicates)
- [ ] Action-oriented / includes value proposition

#### Heading Hierarchy
- [ ] Exactly ONE `<h1>` per page
- [ ] No heading level skips (h1→h3 without h2)
- [ ] H1 contains primary keyword
- [ ] H1 is different from `<title>` (complementary, not identical)

#### Images
- [ ] All `<img>` have descriptive `alt` attribute
- [ ] Alt text describes the image content (not "image1.jpg")
- [ ] Decorative images use `alt=""` (empty, not missing)
- [ ] Images have explicit `width` and `height` (prevents CLS)

#### Internal Linking
- [ ] Pages link to contextually related content (typical range: 3-10 internal links per 1000 words; exact count matters less than topical relevance)
- [ ] Anchor text is descriptive and varied (not "click here"; not all links using the same anchor)
- [ ] No orphan pages (every indexable page has ≥ 1 internal inbound link)
- [ ] Hub pages link to all cluster spokes; spokes link back to the hub
- [ ] Priority pages receive more internal links than utility pages (/about, /contact)

**How to detect orphans:**
```
1. Glob all page files → list of all URLs
2. Grep all source for href patterns → list of link targets
3. URLs in set 1 not in set 2 = orphans
```

#### URL Structure
- [ ] URLs are lowercase, hyphenated, descriptive
- [ ] No special characters, spaces, or underscores in URLs
- [ ] Nesting depth ≤ 3 levels (`/section/topic/page`)

---

### 3.3 Structured Data / JSON-LD (High)

Check which schemas are appropriate and whether they're correctly implemented.

#### Always Present
- [ ] **Organization** — name, url, logo (min 112x112), sameAs (social profiles)
- [ ] **BreadcrumbList** — position, name, item for each level (matches visible breadcrumbs)

#### Homepage
- [ ] **WebSite** — name, url, description, potentialAction (SearchAction)

#### Articles / Blog Posts
- [ ] **Article** — headline, description, datePublished (ISO 8601), dateModified, author (Person), publisher (Organization with logo), image
- [ ] Author has name and url

#### Course / Tutorial Pages
- [ ] **Course** or **LearningResource** — name, description, provider, educationalLevel
- [ ] **HowTo** for step-by-step content — name, step[] with HowToStep

#### FAQ Sections
- [ ] **FAQPage** — mainEntity[] with Question + acceptedAnswer

#### Product Pages
- [ ] **Product** — name, image, description, brand, offers (price, priceCurrency, availability)

#### Validation
- [ ] JSON-LD is valid JSON (no syntax errors)
- [ ] Schema matches content on page (not misleading)
- [ ] Test with Google Rich Results Test or Schema.org validator

---

### 3.4 Open Graph & Social (High)

#### Open Graph Tags
- [ ] `og:title` — present, 50-60 characters
- [ ] `og:description` — present, 120-155 characters
- [ ] `og:image` — present, 1200x630px (1.91:1 ratio), JPEG or PNG
- [ ] `og:image:width` and `og:image:height` — explicitly set
- [ ] `og:url` — matches canonical URL
- [ ] `og:type` — "website" for homepage, "article" for posts
- [ ] `og:locale` — matches page language
- [ ] `og:site_name` — brand name

#### Twitter Card Tags
- [ ] `twitter:card` — "summary_large_image" for articles
- [ ] `twitter:title` — present
- [ ] `twitter:description` — present
- [ ] `twitter:image` — present, 1200x675px recommended

#### OG Image Asset
- [ ] OG image file actually exists (not a broken reference)
- [ ] Image is legible at small sizes (social feed thumbnails)
- [ ] Text on image is readable (contrast, font size)
- [ ] Per-page OG images for key pages (optional but recommended)

---

### 3.5 Favicon & Icons (Medium)

- [ ] `favicon.ico` exists in public/
- [ ] `favicon.svg` exists (modern browsers prefer SVG)
- [ ] `apple-touch-icon.png` (180x180) for iOS
- [ ] Favicon referenced in `<head>`: `<link rel="icon">`
- [ ] SVG favicon referenced: `<link rel="icon" type="image/svg+xml">`

---

### 3.6 Performance SEO (Medium)

#### Core Web Vitals Targets
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] INP (Interaction to Next Paint) < 200ms
- [ ] CLS (Cumulative Layout Shift) < 0.1

#### Render-Blocking Resources
- [ ] Critical CSS inlined or preloaded
- [ ] Non-critical JS deferred: `<script defer>` or `<script async>`
- [ ] No synchronous third-party scripts in `<head>`

#### Images
- [ ] Modern formats used (WebP/AVIF with fallback)
- [ ] Responsive images (`srcset` / `<picture>`)
- [ ] Off-viewport images use `loading="lazy"`
- [ ] Above-fold images use `fetchpriority="high"`

#### Fonts
- [ ] `font-display: swap` or `optional` set
- [ ] Font files preloaded: `<link rel="preload" as="font" crossorigin>`
- [ ] Subset fonts to required characters (especially CJK)

#### Compression
- [ ] HTML minified in production build
- [ ] CSS/JS bundled and minified
- [ ] Server sends gzip/brotli compressed responses

---

### 3.7 Content SEO (Medium)

#### E-E-A-T Signals
- [ ] Author name visible on articles
- [ ] Author bio/credentials linked or displayed
- [ ] Sources cited for claims and statistics
- [ ] Publication date visible (`datePublished`)
- [ ] Last updated date visible (`dateModified`)
- [ ] Author schema (Person) includes credentials, social links, and bio page URL

#### Content Quality
- [ ] No thin pages (< 300 words for informational content)
- [ ] Proper semantic HTML (`<article>`, `<section>`, `<nav>`, `<aside>`)
- [ ] Readable paragraph length (2-4 sentences)
- [ ] Subheadings every 200-300 words

#### Content Structure & Formatting
- [ ] Long-form pages (>1500 words) have a table of contents with jump links
- [ ] Content uses mix of formats: paragraphs, lists, tables, images, code blocks
- [ ] FAQ sections included where appropriate (with FAQPage JSON-LD)
- [ ] Subheadings use descriptive text containing secondary keywords
- [ ] Content answers the primary question within the first 100 words

#### Landing Pages
- [ ] High-value keywords have dedicated landing pages
- [ ] Product collection/category pages target commercial keywords
- [ ] Each landing page has a clear CTA and unique content
- [ ] No thin landing pages (each must provide genuine value)

---

### 3.8 International SEO (If Applicable)

#### hreflang Tags
- [ ] `<link rel="alternate" hreflang="xx" href="...">` for each language version
- [ ] `hreflang="x-default"` for fallback/default language
- [ ] Bidirectional: if Page-A links to Page-B, Page-B links back to Page-A
- [ ] Self-referential hreflang included
- [ ] Language codes follow ISO 639-1 (e.g., `zh-CN`, `en`, `ja`)

#### Language Targeting
- [ ] `<html lang="xx">` matches page language
- [ ] Content is properly translated (not just machine-translated)
- [ ] URL structure consistent (`/zh/`, `/en/` or subdomains)

---

### 3.9 Keyword Research & Strategy (High)

#### Seed Keyword Discovery
- [ ] Identify 3-5 seed keywords based on the site's products/services/content
- [ ] Expand each seed into long-tail variations (3-5 words, more specific intent)
- [ ] Categorize by search intent: Informational / Navigational / Commercial / Transactional
- [ ] Map keywords to existing pages (1 primary keyword per page, 2-3 secondary)

**How Claude does keyword research (no paid tools needed):**
1. Analyze site content to identify topics and themes
2. Generate keyword variations using linguistic patterns:
   - Question forms: "什么是X", "如何X", "X怎么选"
   - Comparison forms: "X vs Y", "X和Y区别"
   - Long-tail: "2026年最好的X", "适合初学者的X"
   - Intent signals: "X教程", "X价格", "X推荐", "买X"
3. **Validate keyword demand via free tools** (Claude cannot scrape Google SERP
   autocomplete/PAA directly — those require user-side tools):
   - AnswerThePublic.com → shows Google autocomplete + "People also ask" graph
   - Google Trends (trends.google.com) → relative volume + seasonality + region
   - Google Keyword Planner (requires free Google Ads account) → volume estimates
   - Bing Keyword Research (webmaster.bing.com) → free, no Ads account needed
   - Ask the user to paste SERP screenshots or export tool data into the conversation
4. **Use WebFetch for what it CAN do**: fetch competitor pages ranking for the
   keyword to analyze title/H1/word count/schema/internal links (see 3.10)
5. Cross-reference: candidates validated by ≥2 sources (tool volume + competitor
   presence) are high-confidence; single-source candidates are speculative

#### Page-Keyword Alignment Audit
- [ ] Every indexable page targets a primary keyword
- [ ] Primary keyword appears in: title, H1, first paragraph, URL, meta description
- [ ] Secondary keywords appear naturally in H2s and body content
- [ ] No keyword cannibalization (multiple pages targeting the same keyword)
- [ ] No keyword stuffing (keyword density > 3% is suspicious)

**How to check alignment:**
```
For each page, verify keyword placement:
  title:       contains primary keyword? ✓/✗
  H1:          contains primary keyword? ✓/✗
  URL slug:    contains primary keyword? ✓/✗
  description: contains primary keyword? ✓/✗
  first 100 words: mentions primary keyword? ✓/✗
  H2/H3:      contain secondary keywords? ✓/✗
```

#### Content Gap Analysis
- [ ] Identify topics the site should cover but doesn't have pages for
- [ ] Check if high-value keywords have dedicated landing pages
- [ ] Identify thin pages that could be expanded with keyword-targeted content
- [ ] Look for internal search queries (if analytics available) that have no matching page

#### Search Intent Matching
- [ ] Informational queries → Blog posts, guides, tutorials
- [ ] Commercial queries → Comparison pages, reviews, "best of" lists
- [ ] Transactional queries → Product pages, pricing pages, signup pages
- [ ] Navigational queries → Homepage, about page, brand pages
- [ ] Page content type matches the dominant intent for its target keyword

---

### 3.10 Competitor & SERP Analysis (High)

#### Competitor Page Analysis
- [ ] Identify 3-5 competitor sites ranking for target keywords
- [ ] For each competitor, analyze with WebFetch:
  - Title tag format and length
  - Meta description messaging
  - H1/H2 heading structure and keyword usage
  - JSON-LD structured data types used
  - Content length and depth
  - Internal linking patterns

**How to analyze competitors:**
```
1. WebFetch the competitor's page
2. Extract: title, description, headings, word count, schema types
3. Compare against our page targeting the same keyword
4. Note what they do better → actionable improvements
```

#### SERP Feature Opportunities
- [ ] Check if target keywords trigger rich results (FAQ, HowTo, Review, etc.)
- [ ] If rich results exist → ensure matching structured data is implemented
- [ ] Check for Featured Snippet format (paragraph, list, table) → match format
- [ ] Check "People Also Ask" questions → create content answering them

#### Content Differentiation
- [ ] Our content offers unique value not found in top 5 results
- [ ] Better depth, freshness, or perspective than competitors
- [ ] Author expertise/credentials visible (E-E-A-T advantage)
- [ ] Unique data, case studies, or original research included

---

### 3.11 Link Building & Authority (Medium)

#### Internal Link Architecture
- [ ] Key pages are reachable within 3 clicks from homepage
- [ ] Hub pages link to all related content (topic clusters)
- [ ] New content is linked from existing high-authority pages
- [ ] Breadcrumb navigation reflects site hierarchy
- [ ] No orphan pages (pages with zero internal links pointing to them)

#### External Backlink Audit
- [ ] User exports GSC → Links → Top linking sites (Claude cannot query this directly)
- [ ] Referring domain count benchmarked: compare against top-3 SERP competitors
- [ ] Anchor text distribution is natural: brand 40-50%, exact-match 15-25%, branded+keyword 15-25%, generic/other 10-20%
- [ ] No obvious spam signals: casino/pharma/adult domains, foreign-language bulk, sudden link spike
- [ ] Identify 3-5 linkable assets the site already has (original research, free tools, comprehensive guides)
- [ ] Check for broken outbound links (links to dead external pages) using link-checker or grep + HEAD requests

#### Off-Site Link Opportunities (Research)
- [ ] Use WebFetch to find guest post targets: search "[niche] + write for us" or "[niche] + contribute"
- [ ] Use WebFetch to find unlinked brand mentions (search brand name, check if pages link back)
- [ ] List linkable assets the site already has (tools, guides, original data, templates)
- [ ] Suggest new linkable asset ideas based on content gap analysis

#### Anchor Text Quality
- [ ] Internal link anchors are descriptive (not "click here" or "read more")
- [ ] Anchor text includes target page's keyword naturally
- [ ] Variety in anchor text (not all links use the exact same text)

---

### 3.12 Local SEO (If Applicable)

#### NAP & Contact Page (Code-Level)
- [ ] "Contact Us" or "About" page exists with NAP (Name, Address, Phone)
- [ ] NAP information is consistent across all pages (footer, contact, about)
- [ ] Business hours displayed and structured
- [ ] Google Maps embed present on contact/location page (check for `<iframe>` with maps.google)

#### LocalBusiness Structured Data
- [ ] **LocalBusiness** JSON-LD with: name, address, telephone, geo (lat/lng), openingHoursSpecification
- [ ] `areaServed` and `serviceArea` fields populated
- [ ] Local keywords included in title/description (city, region, neighborhood)

#### Multi-Location Pages
- [ ] Location-specific landing pages for each city/region (if multi-location)
- [ ] Each location page has unique content (not just address swap)
- [ ] Each location page has its own LocalBusiness JSON-LD
- [ ] Internal links between location pages and main site

#### Local SEO Checklist for User (Cannot Be Automated)
> Claude will remind the user to:
> - Create/verify Google Business Profile (GBP) — single most impactful local ranking factor
> - Add categories (primary + up to 9 secondary), hours, photos (≥ 10), services/products
> - Collect ≥ 30 Google reviews; respond to every review (positive and negative)
> - List on Bing Places, Apple Maps, Yelp (if applicable to vertical)
> - Ensure NAP matches **exactly** across site, GBP, and all directory listings (even a trailing period difference hurts)
> - Build citations in industry-specific directories (Avvo for lawyers, Healthgrades for doctors, etc.)
> - Add GBP posts weekly (events, offers, updates) — GBP activity is a ranking signal

---

### 3.13 E-Commerce SEO (If Applicable)

#### Product Page Content
- [ ] Every product has a unique, keyword-rich description (not manufacturer copy-paste)
- [ ] Product descriptions include long-tail keyword variations naturally
- [ ] Descriptions use bullet points, highlights, and scannable formatting
- [ ] High-quality product images with descriptive `alt` text
- [ ] **Product** JSON-LD with name, image, description, brand, offers (price, priceCurrency, availability)

#### Review & Rating Schema
- [ ] **AggregateRating** schema added to product pages (if reviews exist)
- [ ] Review display component exists on product pages
- [ ] Rating data in JSON-LD matches visible review content

**How to check:**
```
Grep for "Product" and "AggregateRating" in JSON-LD scripts
Check product page templates for review rendering components
```

#### Collection/Category Pages
- [ ] Each collection page has unique descriptive content (not just a product grid)
- [ ] Collection pages target commercial keywords ("best X", "top X", "X for [audience]")
- [ ] Collection pages include internal links to individual product pages
- [ ] Collection descriptions contain relevant keywords naturally

#### E-Commerce Technical
- [ ] Out-of-stock products handled properly (keep page live, show status, suggest alternatives — not 404)
- [ ] Pagination uses `rel="next"` / `rel="prev"` or infinite scroll with crawlable links
- [ ] Faceted navigation doesn't create duplicate/thin pages (use canonical or noindex on filter URLs)
- [ ] Product URL structure is clean: `/products/product-name` not `/products?id=123`

#### Product Variants (Color / Size / Material) — Canonicalization Decision Tree
- [ ] Variants share same product page + JS swap (default for most stores): one canonical URL, `Product` schema uses `hasVariant` / `ProductGroup`
- [ ] Variants have separate indexable URLs only if: (a) each has unique search demand, (b) each has unique content/images worth a dedicated page
- [ ] If variants are separate URLs: self-referential canonical per variant, `isVariantOf` pointing to parent product group
- [ ] Color/size picker state does NOT generate crawlable duplicate URLs (block `?color=red` with robots or canonical to parent)
- [ ] Default variant selected on page load (avoid empty PDP before JS hydration)

#### Out-of-Stock — Scenario-Based Handling
- [ ] **Temporarily out of stock** → keep page live, `availability: "OutOfStock"` in schema, show restock date or waitlist
- [ ] **Permanently discontinued** → 301 redirect to replacement product or nearest collection page (never 404 if page has backlinks/traffic)
- [ ] **Seasonal products** → keep page live year-round, show "Available [season]" messaging
- [ ] **Collection page** with 100% out-of-stock products → show related collections, don't let it become a thin page
- [ ] Sort out-of-stock products to the bottom of collection listings (or filter behind toggle)

#### Google Merchant Center & Shopping Feed
- [ ] Merchant Center account connected (free) — enables Shopping tab, free product listings, Google AI citations for shopping queries
- [ ] Product feed submitted (XML, TSV, or Content API) with all required attributes: `id`, `title`, `description`, `link`, `image_link`, `price`, `availability`, `brand`, `gtin` or `mpn`
- [ ] Feed `title` and `description` optimized (include brand, model, key attributes — these drive Shopping SERP ranking, not just ads)
- [ ] `gtin` (UPC/EAN/ISBN) populated for manufactured goods — critical for matching
- [ ] Product Schema on-site MUST match feed (price, availability) — mismatch triggers disapproval
- [ ] Feed refreshed at least daily (hourly for high-velocity inventory)

#### Long-Tail Commercial Content ("Best X for Y")
- [ ] "Best [category] for [audience]" guide pages (e.g., "Best running shoes for flat feet") — huge commercial intent
- [ ] "[Product A] vs [Product B]" comparison pages (own the comparison SERP before affiliates do)
- [ ] "[Product] alternatives" and "[Competitor] alternatives" pages
- [ ] "How to choose [product type]" buying guides — mid-funnel capture
- [ ] Size/fit guides, care instructions, compatibility tables — serve existing customers AND rank

#### Seasonal / Event Content Calendar
- [ ] Black Friday / Cyber Monday hub page exists year-round (same URL, refreshed yearly — preserves rankings and backlinks)
- [ ] Region-appropriate events covered: 双11 / 618 (China), Diwali (India), Prime Day (US/EU), Boxing Day (UK/CA)
- [ ] Seasonal URLs use stable slugs (`/black-friday/` not `/black-friday-2024/`) — avoid URL decay
- [ ] Gift guides: "Gifts for [recipient] under $X", "[Holiday] gift guide"
- [ ] Schema `Product` offers updated with sale `price`, `priceValidUntil`, `availability` during promotions

#### Review UGC with Images & Video
- [ ] Reviews with photos/videos rendered in HTML (not JS-only) — Google uses these for SERP thumbnails
- [ ] Review images have descriptive alt text
- [ ] `Review` schema includes `author`, `reviewRating`, `datePublished`, and `image` when UGC images exist
- [ ] Review text is in-page content (crawlable) — reviews in `<iframe>` or JS-injected from third-party widget often invisible to crawlers
- [ ] Review sort/filter doesn't generate duplicate URLs (canonical to default sort)

#### Category vs Collection vs Tag — Dedup Strategy
- [ ] ONE primary taxonomy per product (pick: category OR collection OR tag — don't index all three)
- [ ] Shopify: decide whether `/collections/` or `/products/` is the canonical product URL; apply consistently (many stores accidentally index both)
- [ ] Tag pages (e.g., `/tags/sale`) noindexed unless each tag has unique content and search demand
- [ ] Overlapping collections (e.g., "Red Dresses" and "Dresses: Red filter") consolidated to one URL
- [ ] Brand pages (`/brands/nike`) treated as distinct collections with unique brand content (not just product grid)

#### Marketplace / Multi-Seller Sites (Amazon/Etsy-style)
- [ ] Seller storefronts have unique brand content (not just their product grid)
- [ ] Product listings from multiple sellers consolidate to one canonical (`Product` schema + multiple `Offer` nodes), not N duplicate pages
- [ ] Seller review aggregation separate from product review aggregation (distinct schema contexts)
- [ ] Search results pages (`/search?q=...`) noindexed to avoid infinite thin pages

---

### 3.14 Advanced SEO (Low)

#### Zero-Click Search Optimization
- [ ] Direct answer to the target query appears in the **first 100 words** of the page (Google extracts 40-200 words depending on query — focus on being first, not fixed length)
- [ ] FAQ sections use proper Q&A format: `<h3>` question → `<p>` answer (+ FAQPage JSON-LD)
- [ ] Comparison data in `<table>` with explicit `<th>` column headers (Google extracts table snippets)
- [ ] Numbered `<ol>` for "how to" (steps), `<ul>` for "best of" lists (Google extracts list snippets)
- [ ] The answer paragraph/list/table format **matches the format Google currently shows** for that query (if Google shows a list snippet, match list format — don't submit a paragraph)

**How to check (user-side verification required):**
```
For each target keyword, the user should:
  1. Search the keyword on Google in an incognito window
  2. Note: Is there a Featured Snippet? What format (paragraph/list/table)?
     Is there an AI Overview? What sources does it cite?
     What questions appear in "People Also Ask"?
  3. Paste the SERP screenshot or cited URLs into the conversation
Claude can then:
  - WebFetch each cited URL to analyze their structure (headings, length, schema)
  - Compare against our page and recommend format alignment
```

#### Content Freshness
- [ ] `dateModified` in JSON-LD and visible on page reflects actual update date
- [ ] Year references are current (e.g., "2026" not "2024")
- [ ] Outdated statistics or claims are refreshed with current data
- [ ] Seasonal or time-sensitive content has been reviewed recently

#### User Experience (Code-Level)
- [ ] Clear calls-to-action on every landing page
- [ ] No intrusive interstitials or popups blocking main content on load
- [ ] Above-fold content loads without JavaScript dependency (SSR/SSG)
- [ ] Page content matches the promise of its title and description (intent alignment)

---

### 3.15 Security SEO (Medium)

#### HTTPS & Transport Security
- [ ] All pages served over HTTPS (no HTTP URLs in links, assets, or config)
- [ ] HSTS header configured: `Strict-Transport-Security: max-age=31536000; includeSubDomains`
- [ ] No mixed content (HTTP resources loaded on HTTPS pages)
- [ ] SSL/TLS version is modern (TLS 1.2+ only)

**How to check:**
```
Grep for "http://" in all source files (should only appear in comments or schemas)
Check framework config / hosting config for HSTS headers
Check <head> for mixed content: http:// in src/href attributes
```

#### Content Security Policy
- [ ] CSP header or `<meta http-equiv="Content-Security-Policy">` present
- [ ] CSP blocks inline scripts unless explicitly needed (`script-src` directive)
- [ ] No `unsafe-eval` or `unsafe-inline` without justification

#### Sensitive Data Exposure
- [ ] No API keys, tokens, or secrets hardcoded in client-side code
- [ ] No `.env` files committed to public repository
- [ ] No server-side credentials exposed in HTML source or JavaScript bundles
- [ ] `X-Robots-Tag` used appropriately for sensitive pages

**How to check:**
```
Grep for patterns: "sk-", "api_key", "secret", "token", "password" in src/ and public/
Check .gitignore includes .env* files
Verify no sensitive data in build output
```

---

### 3.16 Accessibility SEO (Medium)

Search engines reward accessible websites. Accessibility issues directly impact SEO rankings.

#### ARIA & Semantic Roles
- [ ] Navigation landmarks: `<nav>`, `<main>`, `<header>`, `<footer>` used properly
- [ ] Interactive elements have accessible names (buttons, links, inputs)
- [ ] `role` attributes used correctly (not redundant with semantic HTML)
- [ ] `aria-label` or `aria-labelledby` on icon-only buttons

#### Color & Contrast
- [ ] Text color contrast ratio meets WCAG AA (4.5:1 for normal text, 3:1 for large text)
- [ ] Information not conveyed by color alone (icons, text labels as backup)
- [ ] Focus indicators visible on interactive elements (not `outline: none` without replacement)

#### Forms & Inputs
- [ ] All `<input>` have associated `<label>` (via `for`/`id` or wrapping)
- [ ] Required fields marked with `aria-required="true"` or `required` attribute
- [ ] Error messages programmatically associated with inputs (`aria-describedby`)
- [ ] Form submission feedback is accessible (not just visual)

#### Keyboard & Touch
- [ ] All interactive elements reachable via Tab key
- [ ] Tab order is logical (follows visual layout)
- [ ] Tap targets at least 44x44px on mobile (48x48px recommended)
- [ ] No keyboard traps (modal dialogs can be dismissed with Escape)
- [ ] Skip-to-content link present for keyboard users

**How to check:**
```
Grep for "outline: none" or "outline: 0" without replacement focus styles
Check all <button> and <a> elements have text content or aria-label
Verify all <input> have associated <label>
Check for landmark elements: <nav>, <main>, <header>, <footer>
```

---

### 3.17 HTML Validation (Medium)

Invalid HTML can confuse search engine parsers and reduce crawl efficiency.

#### Document Structure
- [ ] `<!DOCTYPE html>` declaration present
- [ ] `<html>` has `lang` attribute matching page language
- [ ] `<meta charset="utf-8">` is the first element in `<head>`
- [ ] `<head>` contains `<title>` before any other tags
- [ ] No duplicate `<title>` tags
- [ ] No duplicate `<meta name="description">` tags

#### Head Element Integrity
- [ ] No `<script>` or `<style>` before `<meta charset>`
- [ ] No body content inside `<head>`
- [ ] All `<link>` and `<meta>` tags properly closed (self-closing or void)
- [ ] No deprecated HTML tags (`<font>`, `<center>`, `<marquee>`, etc.)

#### Content Integrity
- [ ] No lorem ipsum or placeholder text in production pages
- [ ] No empty `<a>` tags (links without href or text)
- [ ] No duplicate `id` attributes on the same page
- [ ] Images use modern `<picture>` or `<img>` (not `<embed>` for images)
- [ ] No broken HTML entities (unescaped `&`, `<`, `>` in text content)

**How to check:**
```
Grep for "lorem ipsum", "placeholder", "TODO", "FIXME" in page content
Grep for duplicate id attributes in components
Verify DOCTYPE in layout files
Check <head> structure in all layout templates
```

---

### 3.18 JavaScript Rendering & SSR (Medium)

Search engines may not execute JavaScript fully. Ensure critical content is server-rendered.

#### Server-Side Rendering Check

Modern Googlebot can execute JavaScript, but: (1) rendering is deferred and
slower than HTML-first indexing, (2) Bing/DuckDuckGo/AI crawlers (GPTBot,
ClaudeBot, PerplexityBot) have weaker or no JS execution. SSR/SSG remains
the safer default for indexable content.

- [ ] Framework configured for SSG or SSR (not client-only SPA) — required for reliable indexing across all crawlers
- [ ] Critical content (title, H1, body text, internal links, canonical) present in the initial HTML response (view-source, not DevTools)
- [ ] JSON-LD structured data rendered server-side — Google supports client-rendered JSON-LD but AI crawlers often don't
- [ ] Meta tags rendered server-side in `<head>` (not set via `document.title` / `document.head.appendChild` in client JS)
- [ ] For SPA: every indexable route either pre-rendered at build time OR SSR'd on request

**How to check by framework:**
```
Astro: SSG by default ✓ — verify no client:only components contain SEO-critical content
Next.js: Check for 'use client' on pages — SEO content should be in Server Components
Nuxt: SSR by default ✓ — verify useFetch/useAsyncData for data-dependent SEO content
SvelteKit: SSR by default ✓ — verify load functions for SEO data
Static HTML: Already server-rendered ✓
```

#### Hydration & Client-Side Issues
- [ ] No content hidden behind "Read more" / "Show more" buttons requiring JS click
- [ ] No essential content loaded only via `useEffect` / `onMounted` (invisible to crawlers)
- [ ] No content behind authentication/login gates that should be indexed
- [ ] Lazy-loaded content below fold still accessible without JS (via `<noscript>` fallback or SSR)

#### SPA-Specific Concerns
- [ ] If SPA: pre-rendering or SSR configured for all indexable routes
- [ ] If SPA: hash-based routing (`/#/page`) replaced with history API (`/page`)
- [ ] If SPA: `<noscript>` tag provides meaningful fallback content
- [ ] Dynamic `<title>` and `<meta>` tags update on route change (client-side routing)

---

### 3.19 GEO — Generative Engine Optimization (High)

GEO (Generative Engine Optimization) optimizes content to be **cited by AI systems** — ChatGPT, Perplexity, Google AI Overviews, Claude. This is as important as traditional SEO for future traffic.

#### AI Crawler Access & Discovery
- [ ] robots.txt explicitly ALLOWS: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Googlebot
- [ ] Or: intentionally blocks specific AI crawlers with documented business reason
- [ ] `llms.txt` file exists at site root (plain-text site description for LLMs)
- [ ] `llms-full.txt` exists with comprehensive site content summary (optional but recommended)
- [ ] Sitemap includes all content pages AI should discover

**How to create llms.txt:**
```
# llms.txt — placed at public/llms.txt
# Site: [Your Site Name]
# Description: [What your site is about]
# Key Topics: [Main topics covered]
# Content Types: [Blog posts, tutorials, product pages, etc.]
# Language: [Primary language]
# Contact: [How to reference/cite]
```

#### Citation-Optimized Content Structure
- [ ] Every page has a clear, direct answer to its primary question in the first 100 words
- [ ] Claims are specific and quantified (not vague: "many" → "73% of users")
- [ ] Statistics and data points include sources and dates
- [ ] Definitions follow the pattern: `<strong>Term</strong> is [clear definition]`
- [ ] Lists and tables used for comparisons (AI systems extract structured data easily)
- [ ] Each section is self-contained (can be cited independently without surrounding context)

#### Authority & Trust Signals for AI
- [ ] Author name, credentials, and expertise visible on every article
- [ ] Author schema (Person) with `sameAs` links to authoritative profiles
- [ ] Organization schema with `sameAs` links to verified social/professional accounts
- [ ] Published date and last modified date visible and in JSON-LD
- [ ] External citations to authoritative sources (links to .gov, .edu, industry leaders)
- [ ] Original research, data, or unique insights that AI systems can't find elsewhere

#### Semantic Markup for AI Extraction
- [ ] Proper heading hierarchy (H1 → H2 → H3) creates a clear document outline
- [ ] `<article>` wraps main content, `<aside>` wraps supplementary content
- [ ] `<blockquote>` with `cite` attribute for quoted content
- [ ] `<dfn>` for term definitions, `<abbr>` for abbreviations
- [ ] `<figure>` + `<figcaption>` for images/charts with descriptions
- [ ] `<time datetime="ISO-8601">` for all dates
- [ ] `<code>` for technical terms, `<mark>` for highlighted key points

#### AI Overview & Featured Answer Optimization
- [ ] First 100 words directly answer the page's primary question (AI systems extract opening paragraphs)
- [ ] All factual claims include a source (link to .gov, .edu, or recognized publication)
- [ ] Data is **quantified and dated**: not "many users" but "73% of users (Source XYZ, 2025)"
- [ ] FAQ content follows strict Q&A format: `<h3>Question?</h3> <p>Direct answer (self-contained)...</p>` + FAQPage JSON-LD
- [ ] "How to X" uses numbered `<ol>` steps with explicit step titles in `<strong>` or `<h4>`
- [ ] Comparison content uses `<table>` with `<th>` column headers and `<caption>` describing what's compared
- [ ] Each section is **self-contained** — can be quoted without needing surrounding context to make sense
- [ ] Author credentials visible on-page (bio line) and in Person schema (`sameAs` to verified profile)
- [ ] Definitions use the pattern: `<dfn>Term</dfn>` or `<strong>Term</strong> is [clear definition].`
- [ ] Content anticipates follow-up questions and answers them in subsequent sections

#### Entity & Knowledge Graph Optimization
- [ ] Brand/product names used consistently (identical spelling/casing everywhere) — helps AI disambiguate; **not a direct Google ranking factor** but improves citation quality
- [ ] Entity relationships made explicit in prose: "[Product] is a [category] made by [Company] for [Audience]" — improves AI triple extraction
- [ ] Key entities linked to authoritative sources (Wikipedia, official sites) — gives AI a verification anchor
- [ ] `sameAs` in Organization/Person schema links to **verified** profiles (company LinkedIn, author's public professional account, Wikidata Q-ID if applicable)
- [ ] Topic clusters: hub page links to all related sub-pages; each sub-page links back to the hub (bidirectional)

#### Multi-Engine Optimization
- [ ] Content optimized for Google AI Overviews (authoritative, well-structured, cited)
- [ ] Content optimized for ChatGPT citations (clear claims, named sources, specific data)
- [ ] Content optimized for Perplexity (direct answers, numbered lists, source URLs)
- [ ] Content optimized for Claude (semantic HTML, logical structure, factual accuracy)
- [ ] Monitor: use WebFetch to check if your content appears in AI answers for target queries

**How to verify AI citation (realistic workflow):**
```
For each target keyword:
1. User searches Google for the query → notes whether AI Overview appears
   and whether it cites your site. (Claude cannot reliably scrape AI Overviews.)
2. User asks Claude/ChatGPT/Perplexity the same question in a fresh session →
   notes whether the AI cites your site. Note: citations are heavily influenced
   by training data recency and backlink authority, not just your page structure.
3. WebFetch each URL the AI Overview DID cite → analyze their structure
   (heading depth, word count, schema, author signals). Match or exceed.
4. Re-check monthly. If after 3 months you still aren't cited, the bottleneck
   is likely authority/backlinks, not page structure.
```

**Realistic expectation:** LLM citation is uncertain and slow. Focus on
**structure + authority + freshness** simultaneously. A well-structured page
on a low-authority domain rarely gets cited; a poorly-structured page on a
high-authority domain often is.

---

### 3.20 Video SEO (If Applicable)

Apply when the site hosts video content, YouTube embeds, or video tutorials.
Video is 30%+ of SERP real estate and has its own ranking pathway.

#### VideoObject Structured Data
- [ ] **VideoObject** JSON-LD on every video page: `name`, `description`, `thumbnailUrl`, `uploadDate` (ISO 8601), `duration` (ISO 8601 `PT5M30S`), `contentUrl` or `embedUrl`
- [ ] `thumbnailUrl` uses multiple aspect ratios (16:9, 4:3, 1:1) for device coverage
- [ ] `transcript` field included (or full transcript visible on page)
- [ ] `interactionStatistic` with `WatchAction` / `userInteractionCount` for popular videos
- [ ] If tutorial: use `HowTo` + `VideoObject` combined; each step has `thumbnailUrl`

#### Video Sitemap
- [ ] Dedicated `video-sitemap.xml` (or `<video:video>` namespace in main sitemap)
- [ ] Each entry: `<video:title>`, `<video:description>`, `<video:thumbnail_loc>`, `<video:content_loc>` or `<video:player_loc>`, `<video:duration>`, `<video:publication_date>`
- [ ] Sitemap referenced in robots.txt

#### On-Page Video Optimization
- [ ] Each video has a dedicated landing page (not lumped onto a category page)
- [ ] Full **transcript** visible on page (rank-boost + accessibility + AI citation)
- [ ] Timestamped chapters listed on page (YouTube chapters + on-page anchors)
- [ ] Video appears above the fold for video-primary pages (Google prioritizes video-first layouts)
- [ ] Video file / YouTube embed uses `loading="lazy"` or facade pattern (CWV)
- [ ] `<noscript>` fallback: link to video thumbnail + title + transcript

#### YouTube Optimization (if videos are on YouTube)
- [ ] Video titles include primary keyword (YouTube is itself the #2 search engine)
- [ ] Description ≥ 250 words with keyword + timestamps + links to canonical page
- [ ] Closed captions uploaded (auto-generated is not sufficient — manual review)
- [ ] End screens / cards link back to canonical site pages
- [ ] Playlist groupings reflect topic clusters (mirror site's topical structure)
- [ ] Channel page has links to site, Organization schema on site links to YouTube via `sameAs`

#### Video Accessibility & Indexability
- [ ] Closed captions or subtitles in the video's primary language
- [ ] Audio description track for complex visual content (optional but boosts a11y)
- [ ] Videos not behind login/paywall if intended to be indexed
- [ ] Autoplay disabled by default (Google penalizes autoplay-with-sound)

**How to check:**
```
Grep for "VideoObject" in JSON-LD scripts
Glob for video-sitemap*, check sitemap.xml for <video:*> elements
Check video page templates for transcript + chapter markers
```

---

### 3.21 Google Search Console Integration (High)

GSC is the richest source of real search data. This module guides the user to
export GSC data and turn it into an opportunity list. **Claude cannot access
GSC directly** — the user exports CSVs or shares screenshots.

#### Data to Request from the User
- [ ] Performance report: Queries (top 1000 by impressions, last 28 days) — CSV
- [ ] Performance report: Pages (top 500 by impressions, last 28 days) — CSV
- [ ] Coverage report: any "Error" or "Excluded" pages — screenshot or CSV
- [ ] Enhancement reports: Core Web Vitals, Mobile Usability, Structured Data issues
- [ ] Manual Actions tab: screenshot (even if "No issues detected" — confirms status)
- [ ] Links report: Top linking sites + top linked pages (for authority context)

#### Opportunity Mining — Query Analysis

Once GSC query CSV is available, Claude identifies:

1. **High-Impression / Low-CTR queries** (striking distance for title rewrites)
   - Filter: impressions > 100, CTR < 2%, position ≤ 10
   - Action: rewrite title + meta description to match intent + add benefit hook

2. **Position 5-20 queries** (striking distance for content improvements)
   - Filter: 5 ≤ avg position ≤ 20, impressions > 50
   - Action: expand content, add internal links from high-authority pages, match SERP intent

3. **Query-Page mismatches** (wrong page ranking for a query)
   - Cross-reference: which page ranks for query X? Does that match user intent?
   - If wrong page ranks → add internal links with target anchor text to correct page
   - Or: consolidate cannibalizing pages

4. **Zero-CTR branded queries** (trust/SERP feature problem)
   - Brand queries with CTR < 50% → competitor bidding on brand OR missing sitelinks
   - Action: add Organization + WebSite schema with SiteNavigationElement, verify brand control

#### Opportunity Mining — Page Analysis

From GSC page CSV:

- [ ] Pages with 0 impressions in 28 days (Coverage "Excluded" or low-value content) → deindex or consolidate
- [ ] Pages with dropping CTR (compare 28d vs prior 28d if user exports both) → SERP feature cannibalization or stale title
- [ ] Top pages by impressions → identify what's working and replicate patterns on weaker pages

#### URL Inspection (User-Side)
- [ ] For any page not appearing in Google: user runs URL Inspection in GSC
- [ ] Check: "Page availability" — indexed? blocked by robots.txt? noindex?
- [ ] Check: "Mobile usability" — any issues?
- [ ] Check: "Enhancements" — structured data valid?
- [ ] If blocked: address root cause (not just request reindex)

#### Action Plan Template
```
Based on GSC data:
  - [N] striking-distance queries (rewrite title/meta) — Effort: 30min, Impact: High
  - [N] position 5-20 queries (content expansion) — Effort: 2-4h each, Impact: High
  - [N] cannibalization conflicts (merge/differentiate) — Effort: 1h each, Impact: Medium
  - [N] indexation errors (fix root cause) — Effort: varies, Impact: Critical
```

---

### 3.22 Penalty Detection & Recovery (Conditional)

Run when the user reports a traffic drop OR when GSC Manual Actions is non-empty.
Traffic drops > 20% in 28 days warrant this audit.

#### Manual Action Check
- [ ] GSC → Security & Manual Actions → Manual actions: any entries?
- [ ] Common actions: Pure spam, Thin content, Unnatural links to your site, Unnatural links from your site, User-generated spam, Structured data issue, Cloaking
- [ ] For each action: read the specific description — Google specifies URLs or patterns affected
- [ ] Reconsideration request requires: (a) fix the issue thoroughly, (b) document what you did, (c) explain why it won't recur

#### Algorithmic Penalty Diagnosis

Compare traffic drop date against known Google updates (search "Google algorithm update [month] [year]"):

- [ ] **Helpful Content Update (HCU)** — site-wide signal. Symptoms: drop across many pages, especially AI-generated or thin content. Recovery: 4-6 months minimum, requires comprehensive content overhaul (not page-level fixes)
- [ ] **Core Update** — broad E-E-A-T recalibration. Symptoms: category-level drops. Recovery: improve E-E-A-T signals site-wide (author credentials, citations, freshness)
- [ ] **Spam Update** — targets manipulative SEO. Symptoms: pages with thin/spun content drop. Recovery: remove or rewrite flagged content
- [ ] **Product Reviews Update** — targets review content. Symptoms: review/affiliate pages drop. Recovery: add first-hand testing, original photos, pros AND cons

#### HCU/Content Quality Recovery Workflow

The Helpful Content system is the most common 2024-2026 penalty. Recovery:

1. **Audit**: List all indexable pages with GSC impressions. Bucket by:
   - High impressions, high engagement → keep, improve
   - Low impressions, low engagement → consolidate, rewrite, or deindex
   - AI-generated without human editing → rewrite with human expertise
   - Duplicated / thin / doorway pages → delete (410) or noindex
2. **Consolidate**: Merge 3-5 thin pages into 1 comprehensive page; 301 old URLs
3. **Add E-E-A-T**: Author bios, credentials, first-hand experience sections, original photos/data
4. **Wait**: HCU is re-evaluated every 4-6 months; patience required
5. **Monitor**: weekly GSC check on affected URL patterns

#### Backlink Penalty (Unnatural Links)
- [ ] Audit backlinks: GSC → Links → External links → Top linking sites
- [ ] Flag suspicious: casino/pharma/gambling domains, foreign-language bulk, recent link spike
- [ ] Create disavow file: one domain per line, `domain:spamdomain.com`
- [ ] Submit via Google Disavow Tool (last resort — Google prefers self-correction)

#### Recovery Tracking
- [ ] Baseline: GSC impressions, clicks, avg position (pre-fix)
- [ ] Weekly check: movement on affected URL patterns
- [ ] Expected timeline: Manual action 1-4 weeks post-reconsideration; algo penalty 4-6 months
- [ ] If no movement in 6 months → re-audit, assumption that fixes were insufficient

---

### 3.23 Crawl Budget & Efficiency (Conditional — Sites > 1000 pages)

For large sites, Googlebot won't crawl every URL. Focus crawl budget on high-value pages.

#### Crawl Budget Signals (from GSC)
- [ ] GSC → Settings → Crawl stats → requests/day trend (stable or dropping?)
- [ ] Crawl stats → Response codes → % 200 vs 301/404/5xx (high non-200 wastes budget)
- [ ] Crawl stats → File types → excess JS/CSS crawls signal poorly-organized assets
- [ ] Crawl stats → By purpose → "Discovery" vs "Refresh" balance
- [ ] Average response time (server-side) — >1s hurts crawl rate

#### Internal Link Depth Audit
- [ ] Every indexable page reachable within 3 clicks from homepage
- [ ] No pages at depth ≥ 5 (Googlebot heavily deprioritizes deep pages)
- [ ] Pagination uses crawlable `<a href>` (not JS buttons)
- [ ] Faceted navigation: parameter combinations don't explode crawl space (see 3.13)

#### robots.txt Crawl Optimization
- [ ] `Disallow` paths that don't need crawling: `/search?`, `/filter?`, `/cart`, `/checkout`, `/account`, `/*?sort=`
- [ ] `Crawl-delay` NOT set for Googlebot (Google ignores; only useful for Bingbot/Yandex)
- [ ] Sitemap declared: `Sitemap: https://example.com/sitemap.xml`

#### Sitemap Prioritization
- [ ] Split into topic-based sub-sitemaps (products-sitemap.xml, articles-sitemap.xml) for sites > 10K URLs
- [ ] Sitemap index file links all sub-sitemaps
- [ ] Only indexable URLs in sitemap (no canonicalized duplicates, no noindex, no 404/301)
- [ ] `<lastmod>` accurate — Google uses this to prioritize refresh crawls
- [ ] News sitemap for sites publishing ≥ 10 articles/week

#### URL Parameter Handling
- [ ] Tracking parameters (`utm_*`, `gclid`, `fbclid`) don't create indexable duplicates (canonical to param-free URL)
- [ ] Sort/filter parameters: canonical back to the default-sort version
- [ ] Pagination parameters: self-canonical on each page (do NOT canonical all to page 1; Google retired rel=next/prev but still crawls paginated sets)

#### Server Log Analysis (If Logs Available)
- [ ] Identify most-crawled URLs — are they your highest-value pages?
- [ ] Identify wasted crawls: 404s, redirect chains, thin tag pages, parameter URLs
- [ ] Identify under-crawled important pages — boost with internal links from frequently-crawled pages
- [ ] Googlebot IP verification: `dig -x <ip>` should resolve to `*.google.com` / `*.googlebot.com` (filters spoofed traffic)

```
# Example log analysis with awk
awk '$0 ~ /Googlebot/ {print $7}' access.log | sort | uniq -c | sort -rn | head -50
# → Top 50 Googlebot-crawled paths
```

---

### 3.24 Site Migration & Redirect Audit (Conditional — During Migration)

Run when moving domains, restructuring URLs, or merging sites. Mismanaged
migrations regularly cause 30-70% traffic loss.

#### Pre-Migration Baseline
- [ ] Export all indexed URLs: GSC → Performance → Pages → export CSV (all time)
- [ ] Export backlinks: GSC → Links → Top linked pages
- [ ] Record current organic traffic, rankings, revenue for top 100 pages
- [ ] Screenshot SERP positions for top 20 target keywords
- [ ] Lock baseline timestamp: "Migration baseline: 2026-MM-DD"

#### URL Mapping Plan
- [ ] Complete old-URL → new-URL mapping (CSV, one row per URL)
- [ ] Mapping coverage ≥ 95% of indexed URLs
- [ ] For URLs with no direct equivalent: map to closest parent category (never homepage unless last resort)
- [ ] For deleted content: `410 Gone` not `404` (tells Google to deindex faster)
- [ ] No redirect chains: old → new must be one hop (not old → intermediate → new)

#### Redirect Implementation
- [ ] All redirects are `301 (Permanent)` not `302`
- [ ] Redirect rules preserve query strings (or strip intentionally — document decision)
- [ ] Redirects work for HTTPS + HTTP + www + non-www (edge cases)
- [ ] Redirects applied at server/edge (not meta-refresh, not JS redirects)

#### Migration Verification
- [ ] Spot-check 50 random old URLs → all return 301 to correct new URL
- [ ] Verify no redirect chains (single hop): `curl -sIL old-url | grep -E 'HTTP|Location'`
- [ ] Verify canonical on new URL is the new URL (not old)
- [ ] Internal links updated to point to new URLs directly (not via 301)
- [ ] Sitemap updated to new URLs only (no old URLs present)
- [ ] robots.txt updated for new domain/structure

#### Post-Migration Monitoring (First 30 Days)
- [ ] Week 1: daily GSC Coverage report — any "Redirect error" or "Not found (404)"?
- [ ] Week 1-2: daily traffic check vs baseline — acceptable drop is 5-15% for 1-2 weeks
- [ ] Week 2-4: rankings should stabilize — if >20% drop sustained, re-audit
- [ ] Day 30: compare GSC pages report — all old URLs deindexed, all new URLs indexed?
- [ ] Submit new sitemap in GSC + Bing Webmaster
- [ ] Request reindex for top 20 pages via URL Inspection

#### Common Migration Failures
- 301-to-homepage fallback (kills topical authority — always map to closest equivalent)
- Missed subdomain redirects (blog.old.com → old.com/blog forgotten)
- HTTPS cert not covering all variants (www, subdomains)
- Internal links still pointing to old URLs (creates 301 hops for users/bots)
- Sitemap not updated (Google keeps crawling old URLs)

---

### 3.25 Core Web Vitals Diagnosis (High)

Goes beyond § 3.6 targets. Diagnoses *why* CWV fail and prescribes fixes.

#### Data Sources (Prefer in This Order)
1. **CrUX Report** (real user data, 28-day rolling) — authoritative but needs ≥ sufficient traffic
2. **PageSpeed Insights** (pagespeed.web.dev) — combines CrUX (field) + Lighthouse (lab)
3. **GSC → Core Web Vitals** — site-wide CrUX aggregation by URL group
4. **Lab testing** (Lighthouse in DevTools, WebPageTest) — only when field data unavailable

Check field data first — lab data predicts lab data, not real user experience.

#### LCP Diagnosis (Target < 2.5s)

Identify the LCP element first:

```
In DevTools → Performance → record page load → "LCP" marker shows element
Common LCP elements: hero image, H1 text, primary card image
```

Then apply the fix:

| LCP Element | Likely Cause | Fix |
|-------------|--------------|-----|
| Hero image | Large file size, no preload | Compress (WebP/AVIF), add `<link rel="preload" as="image" fetchpriority="high">`, serve via CDN |
| Hero image | Lazy loading (mistakenly) | Remove `loading="lazy"` from above-fold image; add `fetchpriority="high"` |
| Above-fold text | Blocking webfont | Preload font + `font-display: swap`; consider self-host vs CDN |
| Any | Slow server TTFB | Optimize server (caching, edge, DB queries); target TTFB < 600ms |
| Any | Render-blocking CSS | Inline critical CSS, defer non-critical with `media="print" onload` trick |
| Any | Render-blocking JS | Move scripts to `<body>` end with `defer` or `async` |
| Any | Hydration delay (SPA) | Partial hydration, islands architecture, SSG for static routes |

#### INP Diagnosis (Target < 200ms)

INP measures interaction latency — clicks, taps, keypresses.

- [ ] Identify slow interactions via DevTools → Performance → Interactions track
- [ ] Long task audit: any JS task > 50ms blocks main thread
- [ ] Common INP killers: heavy event handlers, large React re-renders, synchronous LocalStorage access, third-party scripts

| Cause | Fix |
|-------|-----|
| Heavy JS in handler | `requestIdleCallback` or `setTimeout(fn, 0)` to defer non-critical work |
| Large React re-render | `useMemo`, `useCallback`, `React.memo`; avoid setState in handlers |
| Third-party analytics on click | Load analytics after idle, not inline in handler |
| LocalStorage sync reads | Cache in memory, read once at init |
| Unoptimized lists | Virtualize long lists (react-window, tanstack virtual) |

#### CLS Diagnosis (Target < 0.1)

CLS measures visual instability during page load.

Top causes:
1. Images without `width`/`height` → reserve space with `aspect-ratio` or explicit dimensions
2. Ads/embeds loaded asynchronously → reserve minimum space container
3. Webfonts causing FOIT/FOUT → `size-adjust` in `@font-face`, match fallback metrics
4. Late-injected banners (consent, announcement) → reserve space at top OR inject below fold
5. Dynamically injected content above existing content → inject below instead

```
# Find images missing dimensions
Grep -rn '<img' src/ | grep -v 'width=' | grep -v 'height='
```

#### Diagnosis Report Template
```
## CWV Diagnosis — [URL]
Field data (CrUX, 28d):  LCP 3.2s (❌ p75), INP 180ms (✅ p75), CLS 0.18 (❌ p75)
Lab data (Lighthouse):   LCP 2.8s, TBT 180ms, CLS 0.12

LCP element: hero image (hero.jpg, 850KB)
Bottleneck:  uncompressed image + no preload + lazy-loaded above fold
Fixes (in order of impact):
  1. Convert to AVIF + WebP fallback (est. 120KB)     → LCP -1.5s
  2. Add <link rel="preload" fetchpriority="high">   → LCP -0.3s
  3. Remove loading="lazy" from hero                  → LCP -0.2s
Expected post-fix LCP: 1.2s ✅
```

---

### 3.26 Ranking Diagnosis (Conditional — On Request)

Use when the user asks: "why isn't my page ranking for [keyword]?" — a
decision tree, not a checklist.

#### Input Required from User
- Target keyword
- Target URL
- Current position (from GSC or manual SERP check)
- Target country / language

#### Diagnosis Decision Tree

```
Step 1: IS THE PAGE INDEXED?
  ├─ Check site:example.com/path in Google → appears?
  ├─ GSC URL Inspection → "URL is on Google"?
  └─ NO → not a ranking problem, it's an indexation problem:
         • blocked by robots.txt?        → fix robots.txt
         • noindex meta?                  → remove
         • canonical points elsewhere?    → fix canonical
         • low quality / HCU exclusion?   → see § 3.22
         • soft 404?                      → improve content substance

Step 2: IS THE PAGE RANKING ANYWHERE (positions 1-100)?
  ├─ GSC Performance → filter by query → any impressions?
  └─ NO → relevance / on-page mismatch:
         • primary keyword in title, H1, URL, first 100 words?   → § 3.2, 3.9
         • content matches query intent? (info vs commercial)   → § 3.9 intent
         • page < 300 words OR thin content?                    → expand
         • keyword cannibalization (another page ranks)?        → merge/differentiate

Step 3: IS THE PAGE IN POSITIONS 21-100?
  ├─ Relevance exists but authority/quality gap
  └─ Gap analysis:
         • backlinks to this page?                    → if 0 → § 3.11 link building
         • competitor depth (top-10 average word count vs ours)?
         • competitor schema types present that we lack?
         • competitor E-E-A-T (author, citations, freshness) richer?
         • content is fresh? (dateModified > 12mo?) → refresh

Step 4: IS THE PAGE IN POSITIONS 11-20? (STRIKING DISTANCE)
  ├─ Close to page 1 — small lift gets outsized return
  └─ Levers (in order of impact):
         • Add 3-5 internal links from high-authority pages with target anchor
         • Expand content with secondary keywords + FAQ section
         • Match SERP intent format (list? table? how-to?)
         • Upgrade E-E-A-T: author bio, cited sources, original data/photos
         • Refresh dateModified + revise facts

Step 5: IS THE PAGE IN POSITIONS 4-10?
  ├─ On page 1 but below the fold — CTR optimization
  └─ Levers:
         • Rewrite title for click appeal (benefit, number, year)
         • Rewrite meta description with CTA
         • Add FAQ schema to capture PAA real estate
         • Win featured snippet with § 3.14 format matching
         • Gain backlinks — authority gap vs top 3

Step 6: IS THE PAGE IN POSITIONS 1-3?
  ├─ Already winning — defend against drops
  └─ Levers:
         • Monitor competitor changes monthly
         • Keep content fresh (quarterly update minimum)
         • Add zero-click structures (FAQ, table, HowTo schema) to capture SERP features
         • Build more backlinks to widen authority moat
```

#### Output Format
```
## Ranking Diagnosis — "[keyword]" → [URL]
Current position: [N] (GSC avg, last 28d)
Diagnosis stage:  [Step N]
Bottleneck:       [the ONE thing holding this back]
Recommended actions (in order of impact):
  1. [action] — Effort: [X hours], Expected lift: [positions]
  2. [action] — Effort: [X hours], Expected lift: [positions]
  3. [action] — Effort: [X hours], Expected lift: [positions]
Expected timeline: [2-4 weeks for on-page, 2-6 months for authority-based fixes]
```

---

### 3.27 Topical Authority Audit (High)

Google rewards sites that comprehensively cover a topic (not sites that cover
200 unrelated topics shallowly). This module maps the site's topic clusters
and finds gaps.

#### Cluster Mapping
- [ ] List all indexable pages, group by semantic topic (not by URL structure)
- [ ] For each cluster, identify: 1 hub page + N spoke pages
- [ ] Each cluster has ≥ 5 spokes to establish depth (1-hub-2-spoke clusters look thin)
- [ ] Hub page targets the head term (e.g., "Content Marketing"); spokes target long-tails ("content marketing for B2B SaaS", "content marketing KPIs", etc.)
- [ ] No pages belong to ≥ 2 clusters (suggests cannibalization or unclear topic ownership)

#### Bidirectional Linking
- [ ] Hub links to all spokes in its cluster
- [ ] Every spoke links back to its hub
- [ ] Spokes link to 2-3 sibling spokes within the same cluster (not across clusters)
- [ ] Sibling links use descriptive anchor text reflecting the target topic

#### Gap Detection
- [ ] For each cluster, identify missing spoke topics competitors cover
  (WebFetch top 3 competitors' hub pages → list their spokes → diff vs ours)
- [ ] Identify orphaned topics: pages with no hub above them
- [ ] Identify orphaned hubs: hubs with < 5 spokes (shallow cluster)
- [ ] Identify clusters where WE are the only weak link (e.g., our hub is thin while spokes are strong)

#### Cluster Health Scoring
```
Cluster score = (spoke count ≥ 5 ? 1 : 0.5)
              × (hub links to all spokes ? 1 : 0.5)
              × (all spokes link back ? 1 : 0.5)
              × (hub has ≥ 1500 words ? 1 : 0.7)

A cluster with score < 0.5 is a "weak cluster" — fix before expanding into new topics
```

#### Output Format
```
## Topical Authority Map
Cluster 1: "Prompt Engineering" (12 pages) — Score: 0.85
  Hub:    /guides/prompt-engineering (2800 words) ✓
  Spokes: 11 (all linked to hub, 9/11 link back)
  Gaps:   competitors cover "prompt engineering for code review" — we don't
Cluster 2: "Agent Design" (3 pages) — Score: 0.35 ⚠ WEAK
  Hub:    /agents (450 words) — too thin, expand to 1500+
  Spokes: only 2 — add 3+ to establish depth
...
Orphan pages: /2024-retrospective, /about-old → consolidate or assign to cluster
```

---

### 3.28 Link Reclamation & Outreach (Medium)

Converting existing signals (unlinked mentions, broken backlinks, internal
gaps) into real backlinks is far cheaper than cold outreach. Claude can help
identify opportunities; user executes outreach.

#### Unlinked Brand Mentions
- [ ] User searches Google: `"[Brand Name]" -site:yourdomain.com` → list of pages mentioning the brand
- [ ] Claude WebFetches top 20 results → checks if they link to yourdomain.com
- [ ] List pages that mention the brand but don't link → outreach targets
- [ ] Draft personalized outreach: reference the specific article + suggest the most relevant page to link

#### Broken Backlink Recovery
- [ ] User exports backlinks from GSC → Links → Top linking pages (or Ahrefs/Moz if available)
- [ ] For each referring URL, check the page they're linking to on your site returns 200:
  ```
  curl -sI https://yourdomain.com/old-path | head -1
  # If 404 or chain → broken backlink
  ```
- [ ] For 404s: either restore the page OR set up a 301 to the closest current equivalent
- [ ] For redirect chains: collapse to single hop
- [ ] Priority: backlinks from DA 40+ domains first

#### Unlinked Image Attribution (if site has original images/infographics)
- [ ] Google Reverse Image Search your infographics
- [ ] For sites using your image without attribution → outreach requesting a link (polite, cite fair-use courtesy)

#### Guest Post & Digital PR Opportunities
- [ ] Search queries user can run:
  - `"[niche]" + "write for us"`
  - `"[niche]" + "guest post guidelines"`
  - `"[niche]" + "contribute"`
  - `[competitor name] + "interview"` (pitch yourself to same outlets)
- [ ] For each target, WebFetch their submission guidelines + recent posts
- [ ] Claude drafts pitch referencing their recent coverage + your unique angle

#### Outreach Email Template (Claude generates, user sends)
```
Subject: Quick fix for [specific page] — missing link

Hi [name],

I noticed your [month year] article "[title]" mentions [specific concept]
alongside [related context]. We published original research on exactly this
at [URL] — it might be a useful citation for your readers.

No pressure either way. Great article regardless.

[Your name]
[Role / site]
```

**Anti-pattern (do NOT generate):** mass-blast templates, fake urgency, reciprocal-link asks, paid-link offers. These hurt deliverability and risk manual action (§3.22).

#### Tracking
- [ ] Maintain a spreadsheet: Target URL / Contact / Date Sent / Response / Link Acquired
- [ ] Realistic conversion: 5-15% reply rate, 1-5% link rate for well-researched outreach
- [ ] Re-audit monthly for new unlinked mentions

---

### 3.29 Content Freshness & Update Strategy (Medium)

Stale content decays in rankings. Systematic refresh is cheaper and higher-ROI
than writing new content.

#### Staleness Detection
- [ ] List all pages with `dateModified` (from JSON-LD or visible on page)
- [ ] Bucket by age:
  - Fresh: modified < 3 months ago
  - Aging: 3-12 months
  - Stale: 12-24 months
  - Decayed: > 24 months
- [ ] Cross-reference with GSC impressions to prioritize high-traffic stale pages first

#### Update Cadence by Content Type
| Content Type | Refresh Cadence | Triggers |
|--------------|-----------------|----------|
| News / Press | Once (dateModified = dateCreated) | Major factual correction only |
| Tool reviews / comparisons | Quarterly | Feature changes, pricing, new competitors |
| How-to tutorials | 6 months | Software version bumps, deprecated APIs |
| Evergreen guides | 12 months | Stats > 12 months old, broken examples |
| Statistics / data pages | 6 months minimum | Dataset updates |
| Listicles ("top N of YEAR") | Annually (update YEAR + refresh entries) | January each year |
| Definitions / glossary | 18-24 months | Terminology shifts |

#### What "Updating" Actually Means
- [ ] Update all dated statistics with current sources (don't just change dates — Google detects year-swap without content change)
- [ ] Replace broken screenshots/screencasts with current UI
- [ ] Remove references to deprecated tools/features/APIs
- [ ] Add new sections covering developments since last update
- [ ] Expand short pages into comprehensive coverage if competitors have caught up
- [ ] Update `dateModified` in both visible page AND JSON-LD
- [ ] Keep URL stable — don't rename (that requires §3.24 redirect work)

#### Anti-Pattern: "Fake Freshness"
- ❌ Changing only the visible year (e.g., "2025" → "2026") without substantive updates
- ❌ Bumping `dateModified` in schema without any text changes
- ❌ Auto-inserting current year via server-side template (Google can detect this pattern)
- ❌ AI-regenerating content wholesale (triggers HCU risk)

#### Update ROI Tracking
- [ ] Baseline pre-update: GSC impressions, clicks, avg position, CTR (last 28 days)
- [ ] Wait 2-4 weeks post-update for Google to recrawl + reweigh
- [ ] Measure: impressions delta, position delta, CTR delta
- [ ] If no lift after 6 weeks → either update was superficial or the bottleneck is authority (see §3.26 Ranking Diagnosis)

---

### 3.30 A/B Testing for SEO (Low)

SEO testing is different from conversion testing. Google explicitly permits
A/B testing but flags cloaking if done wrong.

#### What's Safe to Test
- [ ] Title tags (via server-side rendering with deterministic cohort assignment)
- [ ] Meta descriptions (Google rewrites ~50% of them anyway, low risk)
- [ ] H1 and first paragraph wording
- [ ] Internal link anchor text variations
- [ ] Structured data additions (with/without FAQPage schema)
- [ ] Page layout for CWV (no content difference)

#### What NOT to Test (Google policy violations)
- ❌ Showing different content to Googlebot vs users (cloaking)
- ❌ User-agent-based redirects for "test" vs "control"
- ❌ Hidden text variants
- ❌ Swapping content client-side based on cookies if variants are substantially different (borderline cloaking)

#### Safe Testing Methodology
1. **Deterministic split by URL pattern, not per-visitor cookie** — e.g., test all `/blog/a-*` vs `/blog/b-*` pages. Googlebot sees the same variant consistently per URL.
2. **Use canonical correctly** — both variants should self-canonical; no redirects
3. **Test duration**: 4-6 weeks minimum (Google needs time to recrawl + reweigh)
4. **One variable per test** — don't change title AND description AND H1 simultaneously
5. **Sample size**: ≥ 20 pages per variant for statistical meaning on CTR
6. **Metric**: CTR from GSC (not conversion rate — that's CRO territory, see §3.32)

#### Recommended Test Patterns
- **Title format test**: "[Keyword] — [Benefit]" vs "[Benefit]: [Keyword]" across 40 similar pages
- **Number in title**: "7 Ways to X" vs "Ways to X" (numbers often lift CTR 10-20%)
- **Year in title**: "[Keyword] 2026" vs "[Keyword]" (time-sensitive terms only)
- **Description CTA**: passive vs active voice on commercial pages

#### Rollout Rule
- [ ] If winning variant improves CTR by ≥ 15% with p < 0.05 over 4+ weeks → roll out site-wide
- [ ] If inconclusive → extend test or accept either; move on
- [ ] Document every test (hypothesis, variants, result) to build institutional knowledge

---

### 3.31 UGC & Programmatic SEO at Scale (If Applicable)

Applies to sites with forums, reviews, comments, user profiles, or
auto-generated template pages (programmatic SEO). These are high-risk
surfaces for spam and thin-content penalties.

#### UGC Indexation Strategy
- [ ] Decide per UGC type whether to index, noindex, or block:

| UGC Type | Default | Rationale |
|----------|---------|-----------|
| Product reviews | Index (with AggregateRating) | High SEO value when quality |
| Forum threads | Index if Q&A/solution-oriented | Noindex if chat-style / off-topic |
| User profiles | Noindex unless user has public contribution | Most are thin |
| Comments | Usually fine to index inline | Blocks rarely needed |
| Upvotes / reactions | N/A (not a page) | — |
| Bookmarks / saves | Noindex or block | Private/redundant |

#### Link Attribution for UGC
- [ ] User-submitted links: `rel="ugc"` (tells Google "user-generated, don't fully trust")
- [ ] User profile links: `rel="ugc nofollow"`
- [ ] Paid placements (sponsored reviews, paid posts): `rel="sponsored"`
- [ ] Never plain `<a>` without rel on UGC links — that's an unmanaged vote

#### Spam Moderation (Automated)
- [ ] New UGC holds in moderation queue before indexing (noindex until approved)
- [ ] Honeypot field + rate limiting on submission forms
- [ ] Akismet, reCAPTCHA, or similar on public forms
- [ ] Auto-deindex posts flagged/deleted by mods: set `noindex` + submit URL removal

#### Programmatic SEO Safeguards

Programmatic SEO = template + database → thousands of pages. Huge ranking
potential AND huge penalty risk. Keep these rules:

- [ ] Each generated page must have ≥ 200 unique words beyond the template
- [ ] Unique data/values per page — not just swapping one variable
- [ ] Block generated pages until they pass quality threshold (e.g., page only published when data depth ≥ 10 attributes)
- [ ] Index in waves: publish 100, monitor GSC for 2 weeks, scale if indexing is healthy
- [ ] If many pages remain in GSC "Discovered — not indexed" → Google found them low-quality; reduce scope

#### Faceted Navigation Canonicalization

Category filter URLs multiply combinatorially. Without rules:
`/shoes?color=red&size=10&sort=price&brand=nike` creates duplicate-thin pages.

- [ ] Choose **one** filter dimension to expose as crawlable + indexable (usually the most commercially intent-heavy one, e.g., brand or category)
- [ ] All other filter combinations: set `<link rel="canonical">` to the default-sort, single-filter view
- [ ] Add `robots.txt` disallow for noise parameters: `Disallow: /*?*sort=`, `Disallow: /*?*view=`
- [ ] For high-intent combined filters (e.g., "red nike shoes") → promote to a real indexed category page with unique content
- [ ] Never block CSS/JS via robots.txt even while blocking param URLs (Googlebot needs those to render)

#### Parameter Consolidation
- [ ] Strip tracking params (`utm_*`, `gclid`, `fbclid`) before canonical URL generation
- [ ] Normalize parameter order (always alphabetical in canonical output)
- [ ] Remove default-value parameters from URLs (`?sort=default` → strip)
- [ ] 301 empty-result pages to parent category (better than soft 404)

---

### 3.32 CRO for SEO Landing Pages (Low)

Ranking is half the battle — conversion is the other half. SEO-driven pages
often rank well but convert poorly due to generic templates. This module
audits post-click experience. Runs after pages reach page-1 rankings.

#### Above-the-Fold Alignment
- [ ] The page's promise (from SERP title/description) is fulfilled in the first screenful
- [ ] Primary CTA visible without scrolling
- [ ] Hero/summary matches search intent (informational page → direct answer; commercial → product benefit)
- [ ] No intrusive popups/interstitials on first load (§3.1 covers this but worth re-checking on key pages)

#### Trust Signals (Critical for Commercial Pages)
- [ ] Social proof visible above fold: customer count, logos, review stars
- [ ] Testimonial with real name + photo + context (not "- John D.")
- [ ] Trust badges on checkout/signup (SSL, money-back, industry certifications)
- [ ] Author credentials visible on informational pages (§3.7 E-E-A-T)
- [ ] Recent date stamp for time-sensitive content

#### CTA Optimization
- [ ] Primary CTA uses action verb + value ("Start Free Trial", not "Submit")
- [ ] CTA contrast passes WCAG AA against background
- [ ] Mobile CTA is thumb-reachable (bottom 1/3 of screen) + ≥ 48×48px
- [ ] Secondary CTA for users not ready (save/download/subscribe)
- [ ] No decision paralysis: one primary CTA per page section

#### Forms
- [ ] Form fields ≤ 5 for top-of-funnel; progressive disclosure for longer forms
- [ ] Inline validation on blur (not only after submit)
- [ ] Error messages specific ("Email must include @", not "Invalid input")
- [ ] Autocomplete attributes on all relevant fields (`autocomplete="email"`, `"name"`, `"tel"`)
- [ ] No CAPTCHA unless abuse confirmed — kills conversion 20%+

#### Mobile Experience
- [ ] Page loads < 3s on 4G (§3.25 CWV Diagnosis)
- [ ] No horizontal scroll at any viewport width
- [ ] Fixed CTAs don't cover > 15% of viewport
- [ ] Tap targets comply with §3.1 mobile-friendly

#### Intent-Format Match
| Search Intent | Expected Page Format |
|---------------|----------------------|
| Informational ("what is X") | Article with TOC, definition in first 100 words, FAQ at end |
| Commercial ("best X") | Comparison table, review criteria, winner pick |
| Transactional ("buy X") | Product hero, price, CTA, reviews, FAQs below fold |
| Navigational ("brand X") | Homepage-style, clear navigation to subsections |

Mismatched format (e.g., product page ranking for an info query) converts poorly regardless of SEO strength — either reformat or build a dedicated page (§3.9).

---

### 3.33 International SEO Deep Dive (If Applicable)

Extends §3.8 with decision frameworks. Applies when the site targets
multiple languages AND/OR multiple countries.

#### Domain Architecture Decision
| Option | Example | Pros | Cons | Best For |
|--------|---------|------|------|----------|
| **ccTLD** | example.de, example.fr | Strongest geo signal, user trust | Separate domain authority per TLD, expensive | Large global brands per country |
| **Subdomain** | de.example.com | Clear separation, language-focused | Separate subdomain authority | Medium brands, language-primary |
| **Subfolder** | example.com/de/ | All authority consolidates, cheap | Weakest geo signal | Most startups, SMBs |
| **Parameter** | example.com?lang=de | Trivial to implement | Google hates — avoid | ❌ Don't use |

**Default recommendation for most projects:** subfolder (`/de/`, `/fr/`). Only choose ccTLDs if you can invest in separate link building per country.

#### Language vs Region Distinction
- `en` = English speakers anywhere
- `en-US` = English speakers in United States specifically
- `en-GB` = English speakers in United Kingdom
- `zh-Hans` = Simplified Chinese (script, not region) — use instead of `zh-CN` for language-first targeting
- `zh-CN` = Simplified Chinese for Mainland China specifically (region-first)

Rule: use language-only code (`en`, `de`) if content doesn't differ by region; use `lang-region` (`en-US`, `en-GB`) only when content DOES differ (pricing, currency, availability).

#### hreflang Priority Order
```html
<!-- Good: consistent, one per variant + x-default -->
<link rel="alternate" hreflang="en" href="https://example.com/" />
<link rel="alternate" hreflang="de" href="https://example.com/de/" />
<link rel="alternate" hreflang="fr" href="https://example.com/fr/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/" />

<!-- Good: region-specific when content differs -->
<link rel="alternate" hreflang="en-US" href="https://example.com/us/" />
<link rel="alternate" hreflang="en-GB" href="https://example.com/uk/" />
<link rel="alternate" hreflang="en" href="https://example.com/" />  <!-- fallback for other English -->
<link rel="alternate" hreflang="x-default" href="https://example.com/" />
```

#### Common Mistakes
- [ ] Missing x-default — required for users outside your targeted locales
- [ ] Non-bidirectional tags (A says "alternate is B" but B doesn't say so back)
- [ ] Using `lang="zh"` when content is `zh-Hans` (Google fine, but losing precision)
- [ ] hreflang pointing to noindex/404 URLs (breaks the whole cluster)
- [ ] Using canonical to cross-link language variants (wrong — canonicals stay within a single variant; hreflang handles variants)

#### Country Targeting (if using ccTLD or subfolder)
- [ ] GSC → Settings → International Targeting → set country for subfolder/subdomain (ccTLDs auto-target)
- [ ] Server/CDN serves appropriate variant based on user geo (with explicit country switcher as override)
- [ ] Never auto-redirect based on IP without giving users a way to override — Google penalizes forced redirects

#### Content Localization Quality
- [ ] NOT machine-translated without human review (thin-content risk under HCU)
- [ ] Currency, units (metric/imperial), date formats localized
- [ ] Local examples / case studies / testimonials where possible
- [ ] Local phone number format (E.164 in schema, local-friendly display)
- [ ] Local structured data: `LocalBusiness` per country if applicable (§3.12)

#### Internal Linking Across Languages
- [ ] Language switcher visible in global nav (uses language names, not flags — flags ≠ languages)
- [ ] Language switcher preserves the current page path (don't dump users to homepage)
- [ ] Internal links within a language stay within that language (don't cross-link /en/ to /de/ without language switcher context)

---

### 3.34 SaaS / Product Site SEO (If Applicable)

SaaS and product marketing sites have a distinct SEO playbook: feature pages,
competitive comparison pages, integration directories, pricing SEO, and free
tools. These pages drive high-intent trial/signup traffic.

#### Site Architecture — Marketing vs Docs Separation
- [ ] Marketing site and product docs are clearly separated (e.g., `example.com` vs `docs.example.com` or `example.com/docs/`)
- [ ] Marketing pages target commercial/informational queries; docs target navigational/problem-solving queries — no cannibalization
- [ ] If docs on subdomain: cross-linked from marketing nav; both submit sitemaps; schema `sameAs` or `isPartOf` links them
- [ ] If docs on subfolder: centralizes authority; but requires separate content ownership to avoid dilution

#### Feature Pages
- [ ] One page per major feature at `/features/[feature-name]/` — each targets its own keyword cluster
- [ ] Feature page covers: what it does, why it matters, visual/demo, use cases, FAQ, CTA
- [ ] Feature page title pattern: `[Feature] — [Primary Benefit] | [Brand]` (not `[Brand] [Feature]`)
- [ ] Feature schema: `SoftwareApplication` or `Product` with `featureList`
- [ ] Cross-link from feature page to related features, related docs, and relevant use-case pages
- [ ] Each feature page has unique hero copy and screenshots — not boilerplate with only the feature name swapped (thin-content risk)

#### `/vs/[competitor]/` Comparison Pages
- [ ] Comparison pages exist for top 3-10 direct competitors (`/vs/notion/`, `/vs/airtable/`, etc.) — high commercial intent
- [ ] Title pattern: `[Your Product] vs [Competitor] — [Year-agnostic hook] | [Brand]`
- [ ] Content includes: side-by-side feature table, pricing comparison, use-case fit, honest pros/cons of competitor
- [ ] NEVER just trash the competitor — Google penalizes thin hit-pieces; write for users who are comparing
- [ ] Use comparison table with semantic `<table>`, `<th>`, clear column headers (extractable as SERP table snippet)
- [ ] Migration/switching content: "How to move from [Competitor] to [Your Product]"
- [ ] Competitor name in URL, title, H1, and first paragraph — but avoid trademark misuse (don't claim ownership)

#### `/alternatives/[competitor]/` Pages
- [ ] Alternatives pages for top competitors (`/alternatives/slack/`, `/alternatives/salesforce/`)
- [ ] Different intent from `/vs/`: user is already dissatisfied and looking for options — less comparison, more "why switch"
- [ ] Lists 3-5 alternatives (including your product prominently), not just self-promotion
- [ ] Each alternative has honest summary — builds trust AND ranks better than self-only pages
- [ ] Schema: `ItemList` of products being compared

#### `/integrations/[tool]/` Pages
- [ ] One page per major integration (`/integrations/zapier/`, `/integrations/github/`, etc.)
- [ ] Each integration page targets "[Your Product] + [Tool]" and "[Your Product] [Tool] integration" queries
- [ ] Content: what the integration does, setup steps, use cases, video/screenshot
- [ ] Integrations directory hub page (`/integrations/`) with searchable/filterable grid
- [ ] Integration schema: mention both tools with `sameAs` links to their official sites
- [ ] Integrations cross-linked from feature pages and use-case pages

#### Pricing Page SEO
- [ ] Pricing page is server-rendered or has pre-rendered HTML (common SaaS bug: pricing table renders client-only → Googlebot sees "Loading..." and AI crawlers see nothing)
- [ ] Pricing tiers in crawlable HTML with semantic structure (`<table>` or definition lists)
- [ ] `Product` schema with `offers` for each tier (price, priceCurrency, billingIncrement)
- [ ] FAQ schema for common pricing questions ("Can I cancel anytime?", "Is there a free plan?")
- [ ] Pricing page linked from main nav, footer, and most feature pages
- [ ] "Enterprise" / "Contact us" tier has a price range hint if possible (avoid Google "no price" error)
- [ ] Annual vs monthly toggle state does not create duplicate URLs (use one canonical page, toggle via JS)

#### Free Tools & Calculators (Linkable Assets)
- [ ] Free tools/calculators live at `/tools/[tool-name]/` or `/free-tools/[tool-name]/`
- [ ] Each tool targets a specific job-to-be-done query (e.g., "roi calculator", "uuid generator", "regex tester")
- [ ] Tool must WORK without signup — gating kills organic rankings AND backlinks
- [ ] Each tool page has: tool UI + how-to-use content + FAQ + related tools
- [ ] Tool pages target high-backlink potential keywords — free tools are the #1 SaaS linkbuilding asset
- [ ] `SoftwareApplication` or `WebApplication` schema with `applicationCategory: "Calculator"` or similar
- [ ] Tool output is crawlable/shareable (permalink URLs for results enable social/blog citations)

#### Use Case / Industry Pages
- [ ] Use case pages: `/use-cases/[job]/` (e.g., "project management for agencies")
- [ ] Industry pages: `/solutions/[industry]/` (e.g., "for healthcare", "for e-commerce")
- [ ] Each page targets "[product category] for [audience]" long-tail
- [ ] Use case pages include industry-specific screenshots, testimonials, case studies — not boilerplate
- [ ] Link from use case pages to relevant features, customer stories, and blog posts
- [ ] Keep page count manageable — 50 near-duplicate use-case pages triggers HCU; 10 substantive ones rank

#### Customer Story / Case Study Pages
- [ ] `/customers/[name]/` or `/case-studies/[name]/` — each customer has unique story
- [ ] Story structure: company context → problem → solution (your product) → results with metrics
- [ ] Schema: `Organization` (customer) + `Review` or `Testimonial` + `Product` reference
- [ ] Customer logos on homepage link to case study pages (passes internal authority + aids navigation)
- [ ] Metric-heavy headlines ("Saved 40 hours/week", "3x pipeline") — good for both trust and AI citation

#### Changelog / Product Updates (Freshness Signal)
- [ ] `/changelog/` or `/whats-new/` page with dated updates — strong freshness signal
- [ ] Each major update gets its own URL (`/changelog/2026-03-new-ai-features/`) — linkable and indexable
- [ ] RSS feed for changelog (enables newsletter tools and aggregator backlinks)
- [ ] Changelog cross-referenced from relevant feature pages (shows active development)
- [ ] `Article` or `TechArticle` schema per entry with `datePublished`

#### Signup / Trial Flow SEO Hygiene
- [ ] `/signup`, `/login`, `/app/*` pages are `noindex` (prevent auth-gated clutter in search)
- [ ] Marketing CTAs use descriptive anchor text ("Start free trial", not "click here")
- [ ] Trial landing pages have unique meta (each campaign variant canonicalized to main)
- [ ] Thank-you / post-signup pages are `noindex`

---

### 3.35 Developer Documentation SEO (If Applicable)

Documentation sites have unique SEO needs: API references with JS-rendered content,
versioned URLs, code snippets as ranking assets, and high AI-citation value.

#### Version Management
- [ ] Decide indexing strategy for versioned docs: index latest only (common) OR index all versions with clear canonicalization
- [ ] If indexing only latest: versioned URLs (`/v1/`, `/v2/`) canonical to `/latest/` equivalent OR noindex older versions
- [ ] If indexing all versions: self-canonical per version + clear version switcher UI + `lastmod` per version
- [ ] Never have `/docs/[topic]/` duplicate of `/docs/latest/[topic]/` without canonical — Google sees duplicates
- [ ] Unversioned URL (`/docs/topic/`) redirects or renders latest; never dead
- [ ] Sitemap lists only indexed versions (don't submit deprecated versions)

#### API Reference Pages (JS-Rendered Risk)
- [ ] API reference content is server-rendered or pre-rendered at build (not JS-fetched from OpenAPI spec at runtime)
- [ ] Each API endpoint has its own URL + unique H1 + description — not a single-page app that swaps content via JS
- [ ] HTTP methods, parameters, request/response examples present in initial HTML (test with JS disabled or Googlebot mobile)
- [ ] Common tools that cause SEO bugs: Redoc/Swagger UI with client-side rendering — switch to Redocly Static, MDX-based docs, or Hugo/Astro with pre-rendered content

#### Code Snippet SEO
- [ ] Error messages appear verbatim in HTML (developers Google error strings — own that SERP)
- [ ] Method signatures and function names in `<code>` tags with surrounding explanatory prose
- [ ] Code examples are crawlable `<pre><code>` — not images of code, not embedded gists that hide content
- [ ] Code has language hint (`class="language-python"` etc.) — aids AI understanding and syntax-highlighted rich snippets
- [ ] Common error messages get dedicated troubleshooting pages (`/errors/ERR_INVALID_FOO/`)

#### Cookbook / Recipes / How-To Structure
- [ ] How-to content structured with `HowTo` JSON-LD (`step`, `totalTime`, `tool`, `supply`)
- [ ] Each recipe/cookbook entry targets a specific task query ("how to [verb] with [product]")
- [ ] Headers use task language: "How to authenticate a user", not "Authentication"
- [ ] Step-by-step numbered lists in HTML (Google extracts as step snippets)
- [ ] Complete working examples (not partial fragments) — higher AI citation rate

#### Deprecation & Migration Pages
- [ ] Deprecated API/feature pages clearly labeled at top (`<aside role="alert">` + "Deprecated" banner)
- [ ] Deprecated pages link to replacement (internal link passes users AND authority)
- [ ] Migration guide pages for major version bumps (`/migrate/v1-to-v2/`) — high intent, high traffic
- [ ] Never 404 deprecated pages if they have backlinks/traffic — 301 to replacement or keep as historical with canonical to current

#### llms.txt for Docs (High Value)
- [ ] `llms.txt` lists the docs structure, with direct links to full-text `.md` or `llms-full.txt` — docs are the #1 LLM training/citation target
- [ ] `llms-full.txt` or per-page `.md` variants available (e.g., `/docs/intro.md` mirrors `/docs/intro`)
- [ ] Docs content is MDX/Markdown-friendly; expose raw Markdown as companion to HTML
- [ ] `llms.txt` groups docs by: Quickstart, Guides, API Reference, Integrations, FAQ

#### GitHub README ↔ Docs Site Deduplication
- [ ] Canonical choice: docs site is primary (richer, versioned) OR GitHub README is primary (simple projects)
- [ ] If docs site primary: README is a short summary with link to docs; don't duplicate full getting-started on both (Google picks one, often the wrong one)
- [ ] If both must exist: docs site pages canonical to themselves; README has no canonical (GitHub doesn't honor it anyway) but content should differ
- [ ] GitHub Pages / ReadTheDocs mirror duplication — pick ONE primary and 301 the other

#### Interactive Playgrounds & Embeds
- [ ] CodeSandbox / StackBlitz embeds have text fallback context (surrounding prose) — embeds themselves are invisible to Googlebot
- [ ] Each playground example has a unique indexable URL with descriptive content
- [ ] Playground URLs don't get crawled into infinite variant space (noindex dynamic result URLs)

#### Search Within Docs (Internal Search)
- [ ] Docs search (`/docs/search?q=...`) noindexed — prevents infinite thin pages
- [ ] Algolia DocSearch or equivalent configured (doesn't affect SEO but dramatically improves UX, reducing bounce from SERP)
- [ ] Dead-end "No results" search pages noindexed

#### Content Length & Structure for Docs
- [ ] Reference pages can be shorter (50-300 words) IF they serve a clear navigational intent — not thin content
- [ ] Tutorial/guide pages aim for 800-2000 words with runnable examples
- [ ] Every doc page has: clear H1, one-sentence summary, table of contents (for long pages), runnable example, "Next steps"
- [ ] Prerequisites and "related topics" sections — internal linking + AI context

---

### 3.36 出海 SEO — Chinese Companies Going Global (If Applicable)

For Chinese companies expanding to Western markets (US/EU/SEA). The playbook
differs from domestic SEO: Google instead of Baidu, Western E-E-A-T standards,
brand re-introduction, and AI search (ChatGPT/Perplexity) in target markets.

#### Target Market & Search Engine Strategy
- [ ] Primary market identified (US, UK, EU, SEA, MENA, LATAM) — determines language, currency, content priorities
- [ ] Google share in target market confirmed (>90% in most Western markets; Yandex in RU, Naver in KR, Yahoo in JP — different rules)
- [ ] AI search considered: ChatGPT/Perplexity/Claude have significant share for B2B and tech queries in US — GEO (§3.19) weighted heavily
- [ ] Baidu-specific tactics removed from the target-market site (no `baidu-site-verification`, no `百度统计`, no Baidu-preferred image dimensions)

#### Domain & URL Strategy
- [ ] Domain strategy chosen with tradeoffs documented:
    - **`.com` + subfolder `/en/`, `/de/`**: centralizes authority, lowest cost, best for most
    - **`.com` + ccTLD (`.de`, `.co.uk`)**: strongest local signal, highest cost, best for local-business markets
    - **`.com` + subdomain (`us.brand.com`)**: middle ground, Google treats as separate site
- [ ] Avoid `.cn` TLD for target-market site — Western users associate it with "Chinese site" and trust drops
- [ ] Avoid brand name containing Chinese characters or pinyin that's hard to pronounce — rebrand if needed (many 出海 brands use a new English name)
- [ ] Domain age/history checked — don't buy a domain with prior spam penalty (use `archive.org` + Wayback + tools like Ahrefs backlink history)
- [ ] Hosting in target region (or on global CDN with edge in target region) — latency is a CWV signal

#### Hreflang for zh → en/multi Transition
- [ ] If existing `zh` site: hreflang bidirectional `zh-CN` ↔ `en-US` + `x-default` (point to English for non-Chinese visitors)
- [ ] Decide whether to expose the Chinese site to Western Google at all — if it outranks the English version due to domain age, hreflang + canonical are critical
- [ ] Language switcher uses flags CAUTIOUSLY — language ≠ country; prefer language names ("English", "中文")
- [ ] GSC International Targeting set per subfolder/subdomain (if using subfolder strategy)

#### Brand Internationalization
- [ ] English brand name defined + trademarked in target markets (trademark checks via USPTO/EUIPO before launch)
- [ ] Brand `Organization` schema with `sameAs` linking to: English LinkedIn, English Twitter/X, Crunchbase, Wikipedia (if applicable), press mentions
- [ ] Founder/exec `Person` schema if they have English-language presence (LinkedIn, speaking events, interviews)
- [ ] About page tells company story for Western audience (why founded, who leads, where based — transparency wins trust)
- [ ] Avoid "We are the leading..." superlative copy — Western SEO trusts specifics; replace with quantified claims and citations

#### Western E-E-A-T Adaptation
- [ ] **Experience**: First-hand usage, case studies, real customer names (not "Company A", "客户甲") — privacy-anonymized OK, fake-anonymized hurts
- [ ] **Expertise**: Author bylines with real person names, photos, LinkedIn links — ghost-written-by-agency content detected by Google's HCU
- [ ] **Authoritativeness**: Press mentions (TechCrunch, Forbes, Bloomberg — earned via PR, not buy-links), awards, certifications relevant to target market (SOC 2, GDPR compliance badge)
- [ ] **Trust**: Physical address in target market (or at minimum company HQ address publicly visible), phone with target-market country code, privacy policy GDPR/CCPA compliant, clear refund/return policy
- [ ] Contact page shows real human faces / team — builds trust that matters for Western conversion
- [ ] Remove or translate all Chinese-market trust signals (ICP备案号, 百度信誉, 淘宝/天猫 badges) from the target-market site

#### Content Localization Quality (Not Just Translation)
- [ ] Content is transcreated, not machine-translated — even human-translated-from-Chinese often reads awkwardly; rewrite natively when possible
- [ ] Cultural references adapted (Chinese internet memes, 双11 → Black Friday, 长辈 → aunt/uncle, etc.)
- [ ] Examples use Western names, companies, currencies, units (USD/EUR, imperial where applicable)
- [ ] Date formats: MM/DD/YYYY for US, DD/MM/YYYY for UK/EU; ISO `<time datetime="">` for schema
- [ ] Avoid direct translation of Chinese marketing idioms ("一站式解决方案" → "one-stop solution" is OK but overused; vary)
- [ ] Tone calibrated: Western B2B is more skeptical, data-driven, less hype; Western B2C allows more personality

#### AI Search Visibility in Western Markets
- [ ] ChatGPT / Perplexity / Claude / Google AI Overview tested with relevant queries — is brand being cited?
- [ ] llms.txt prioritizes English (or target language) content — AI crawlers prefer clean, structured English docs
- [ ] Brand presence in AI training-relevant sources: Wikipedia (if notable enough), G2/Capterra reviews, Product Hunt, HackerNews, Reddit discussions, YouTube English-language content
- [ ] Western review sites targeted: G2, Capterra, TrustRadius (B2B SaaS), Trustpilot (consumer) — reviews here feed both Google and LLMs

#### Chinese Origin — Strategic Disclosure
- [ ] Decide disclosure strategy: some markets (US gov, enterprise security) require origin transparency; consumer markets less so
- [ ] If transparent: "Founded in Shenzhen, with offices in [target market]" is fine and often helps
- [ ] If headquartered abroad: make sure the corporate structure reflects reality — Google and users can see through shell entities via LinkedIn, press, Crunchbase
- [ ] Data residency clearly stated (where is user data stored? — critical for EU GDPR and US enterprise)

#### Technical Pitfalls Specific to 出海
- [ ] Chinese CDN / hosting (Aliyun CN, Tencent Cloud CN) NOT used for target-market site — slow outside China + may be blocked by some firewalls; use Cloudflare, AWS, Vercel, Fastly
- [ ] No font CDNs that are slow/blocked outside China (don't use `fonts.useso.com`, alibaba fonts CDN — use Google Fonts or self-host)
- [ ] No tracking/analytics scripts from Chinese vendors on target-market site (triggers Western privacy concerns; GDPR requires consent)
- [ ] Images optimized with Western-market-appropriate formats (WebP/AVIF widely supported) and hosted on global CDN
- [ ] No hardcoded Chinese phone/WeChat/QQ contact on target-market site — use market-local support channels

#### Localization Beyond English
- [ ] If expanding to non-English markets (DE, FR, JP, KR, ES): native speakers review content, not just translators
- [ ] Each language targeted has its own keyword research — direct translation of Chinese keywords misses local search behavior
- [ ] Currency, payment methods relevant to target market (Alipay/WeChat Pay NOT required; PayPal, Stripe, SEPA, iDEAL, etc. per market)
- [ ] Support hours overlap with target market business hours OR 24/7 documented
- [ ] Meta `og:locale` and `og:locale:alternate` set correctly per page

#### Western Link Building Channels
- [ ] Guest posting on Western industry blogs (quality matters more than quantity — one Forbes > 50 spam directories)
- [ ] HARO (Help a Reporter Out) / Qwoted / Connectively responses for earned media
- [ ] Open source / free tools as linkable assets (§3.34 — free tools)
- [ ] Data studies / original research — publishable assets that Western press and AI training data will cite
- [ ] Avoid Chinese-style "友情链接" (friend links) sections — Google treats as manipulative

---

## 4. Scoring System

Every audit produces a quantified score — not just a checklist.

### 4.1 Category Weights

Weights reflect 2026 ranking reality: AI Overviews are mature, Core Web Vitals
are confirmed signals, and authority/content quality dominate. Weights are
**adjusted by site type** (see § 1.1) — conditional modules contribute 0%
when not applicable, and their weight is redistributed proportionally.

**Default weights (General site):**

| Category | Weight | Rationale |
|----------|:------:|-----------|
| Technical SEO | 12% | Foundation — blocks indexing if broken |
| On-Page SEO | 12% | Direct ranking signals |
| GEO (AI Optimization) | 14% | 2026 reality — AI Overviews + LLM search surface |
| Content SEO | 8% | E-E-A-T & content quality — core to HCU era |
| Topical Authority | 6% | Cluster completeness drives topical ranking (§3.27) |
| Keyword Research | 7% | Targeting the right terms |
| Structured Data | 6% | Rich results & AI extraction |
| Performance SEO (incl. CWV Diagnosis) | 6% | Core Web Vitals are confirmed ranking signal |
| Competitor Analysis | 4% | Relative positioning |
| Link Building | 4% | Authority signals (internal + external) |
| Link Reclamation | 2% | Cheap authority gains (§3.28) |
| Content Freshness | 3% | Decay prevention (§3.29) |
| OG / Social | 2% | Social visibility |
| GSC Integration | 3% | Opportunity mining from real search data |
| Security | 2% | Trust signals (HTTPS, CSP) |
| Accessibility | 2% | Usability & ranking bonus |
| HTML Validation | 1% | Crawl efficiency |
| JS Rendering | 1% | Content discoverability |
| Favicon | 1% | Brand recognition |
| Crawl Budget | 1%* | *Only for sites >1000 pages, else 0% |
| Advanced SEO | 1% | Bonus nuances (zero-click, UX) |
| CRO for SEO | 2%* | *Only on page-1 ranking pages (§3.32) |
| A/B Testing | 0%* | *Advisory-only; not directly scored |
| Foundation Setup | 0% | Prerequisite gating — triggers critical fail if absent |
| Penalty Recovery | 0%* | *Only scored when a penalty is detected (then 20%) |
| Site Migration | 0%* | *Only scored during a migration audit (then 15%) |
| Ranking Diagnosis | 0%* | *Only scored when user requests keyword-specific diagnosis |
| E-Commerce SEO | 0%* | *10% for E-Commerce sites; redistribute otherwise |
| Local SEO | 0%* | *8% for Local Business sites; redistribute otherwise |
| International SEO | 0%* | *4% for International sites; redistribute otherwise |
| International Deep Dive | 0%* | *3% for Multi-region sites; redistribute otherwise |
| Video SEO | 0%* | *4% for Video-Heavy sites; redistribute otherwise |
| UGC / Programmatic | 0%* | *5% for UGC or programmatic SEO sites; redistribute otherwise |
| SaaS Product Site SEO | 0%* | *10% for SaaS/product sites; redistribute otherwise |
| Developer Docs SEO | 0%* | *8% for developer docs sites; redistribute otherwise |
| 出海 / Going Global SEO | 0%* | *8% for Chinese companies targeting Western markets; redistribute otherwise |

**Site-type weight adjustments (examples):**

```
E-Commerce site → E-Commerce +10%, Structured Data +3%, Local 0%, Video 0%
                  (Redistribute from International/Link Building)
Local Business → Local +8%, On-Page +2% (local keywords), International 0%
Content/Blog   → Content SEO +3%, GEO +2%, E-Commerce/Local 0%
International  → International +5%, On-Page +1%, reduce Performance -1%
Video-Heavy    → Video +4%, GEO +2%, reduce Link Building -2%
SaaS / Product → SaaS +10%, GEO +2%, Topical Authority +2%, Local 0%, E-Commerce 0%
Developer Docs → DevDocs +8%, GEO +4% (high AI citation value), JS Rendering +2%, Local 0%
出海 (Going Global) → 出海 +8%, International +4%, GEO +3%, reduce Local -0%
```

Announce the final weight table to the user before scoring so they can override.

### 4.2 Scoring Rules

**Per-check scoring:**
- ✅ Pass = full points for that check
- ⚠️ Partial = 50% points (e.g., meta description exists but too long)
- ❌ Fail = 0 points

**Category score** = (passed + partial × 0.5) / total checks × 100

**Overall score** = Σ (category score × category weight)

**Worked example — Technical SEO (12 checks):**

```
Passed:  10 checks → 10.0 points
Partial:  1 check  →  0.5 points  (e.g., robots.txt exists but missing Sitemap: directive)
Failed:   1 check  →  0.0 points  (e.g., 3-hop redirect chain on key URL)

Category score = (10 + 0.5) / 12 × 100 = 87.5
Weighted      = 87.5 × 15% = 13.13 points toward overall
```

Report BOTH the category score and the raw ratio (`87.5 (10.5/12 checks)`)
so users see depth vs. breadth at a glance.

### 4.3 Critical Fail Cap

If ANY of these critical items fail, the overall score is **capped at 60** regardless of other scores:

| Critical Fail | Threshold | Why |
|---------------|-----------|-----|
| Missing `<title>` on pages | ≥ 20% of indexable pages have no title | Invisible to search engines |
| No sitemap | No sitemap.xml generated or referenced | Search engines can't discover pages |
| robots.txt blocks indexing | `Disallow: /` or blocks key paths | Search engines can't crawl |
| No HTTPS | Site served over HTTP in production | Google marks as "Not Secure" and deranks |
| Generic/duplicate titles | ≥ 60% of pages share identical or near-identical title format (e.g., "Home \| Brand" everywhere) | No differentiation in SERPs |
| Missing H1 | ≥ 20% of indexable pages have no `<h1>` | Missing primary heading signal |
| `noindex` on important pages | Homepage or top-10-traffic pages carry `noindex` | Actively blocking indexing |
| Manual action in GSC | Any active manual action | Google has explicitly penalized the site |
| SSL certificate expired | HTTPS with invalid cert | Browsers block, Google deranks |

### 4.4 Grade Scale

| Score | Grade | Meaning |
|:-----:|:-----:|---------|
| 90-100 | **A** | Excellent — minor tweaks only |
| 80-89 | **B** | Good — some optimization needed |
| 70-79 | **C** | Average — significant issues |
| 60-69 | **D** | Poor — many critical issues |
| 0-59 | **F** | Failing — fundamental problems |

### 4.5 Score Presentation

```markdown
## SEO Score: 73/100 (C) — [Site Type: E-Commerce]

| Category | Score (Ratio) | Weight | Weighted | Top Issue |
|----------|:-------------:|:------:|:--------:|-----------|
| Technical SEO | 85 (17/20) | 13% | 11.05 | Redirect chain on /products/* |
| On-Page SEO | 70 (14/20) | 13% | 9.10 | 12 pages duplicate titles |
| GEO | 45 (9/20) | 15% | 6.75 | No llms.txt, no FAQ schema |
| Content SEO | 65 (13/20) | 9% | 5.85 | No author bylines on articles |
| Keyword Research | 60 (12/20) | 8% | 4.80 | 3 cannibalizing page pairs |
| Structured Data | 80 (16/20) | 7% | 5.60 | Missing AggregateRating |
| E-Commerce SEO | 55 (11/20) | 8% | 4.40 | Out-of-stock → 404 |
| ... | ... | ... | ... | ... |
| **Total** | | | **73.0** | |

⚠️ Critical Fail Cap: None triggered
ℹ️ Weighting adjusted for E-Commerce site type (see § 4.1)
```

---

## 5. Report Format

Present findings as:

```markdown
## SEO Audit Report — [Site Name]
## Score: [XX]/100 ([Grade]) — Site Type: [E-Commerce / Content / Local / ...]

### 🔴 Critical (Blocks Indexing/Ranking)
1. [issue] — [file:line] — [fix] — Effort: [5min / 30min / 1-2h / half-day / multi-day]

### 🟠 High (Significant Impact)
1. [issue] — [file:line] — [fix] — Effort: [X]

### 🟡 Medium (Improvement)
1. [issue] — [file:line] — [fix] — Effort: [X]

### 🟢 Low (Nice to Have)
1. [issue] — [file:line] — [fix] — Effort: [X]

### ✅ Passing
- [list of things that are already correct]

### 📊 Score Breakdown
[Category score table from 4.5]

### 🎯 Recommended Quick Wins (best ROI in 1 week)
1. [issue] — [Effort: 30min] — [Impact: +3 points / high CTR gain / etc.]
2. ...
3. ...

### 📅 30/60/90-day Roadmap
- **Week 1** (Critical + quick wins): [list]
- **Weeks 2-4** (High-impact content/schema): [list]
- **Months 2-3** (Authority, CWV, migration finishing): [list]
```

**Effort estimation scale:**
- **5min**: meta tag edit, alt text addition, single-file config change
- **30min**: new JSON-LD block, title/description rewrite batch, redirect rule
- **1-2h**: rewrite a page for keyword alignment, install + configure sitemap plugin
- **Half-day**: migrate to SSR, fix site-wide schema rollout, keyword gap content
- **Multi-day**: site migration, HCU recovery content overhaul, backlink campaign

---

## 6. Fix Strategy

When fixing issues:

1. **Ask before fixing** — present the report first, let user choose what to fix
2. **Fix by severity** — Critical first, then High, then Medium
3. **One commit per category** — group related fixes
4. **Verify after each fix** — rebuild and check the output HTML
5. **Don't over-optimize** — avoid keyword stuffing, keep content natural

### Common Fix Patterns

**Missing meta tags** → Edit layout file to accept props, update page frontmatter

**Missing OG image** → Generate SVG → Convert to PNG (1200x630), place in public/

**Missing structured data** → Add JSON-LD `<script>` in layout, populate from page props

**Missing sitemap** → Install framework sitemap plugin, configure priorities

**Missing favicon** → Create SVG favicon + ICO fallback, add `<link>` tags

**Broken hreflang** → Ensure bidirectional links, add x-default, verify ISO codes

**Keyword not in title/H1** → Rewrite title and H1 to include primary keyword naturally

**Keyword cannibalization** → Merge competing pages or differentiate their target keywords

**Missing content for keyword** → Create new page targeting the gap keyword with proper on-page SEO

**Weak internal links** → Add contextual links from high-authority pages to target pages

**Competitor outperforming** → Match their structured data, surpass their content depth, improve E-E-A-T signals

**Not indexed** → Check robots.txt, remove noindex tags, submit sitemap to Search Console

**Not mobile-friendly** → Add viewport meta tag, fix tap target sizes, test responsive layout

**Missing product schema** → Add Product + AggregateRating JSON-LD, connect to review system

**No Featured Snippet** → Match the current SERP snippet format for that query (paragraph, list, or table); place the direct answer in the first 100 words after the H2 question with proper HTML semantics (`<ol>`/`<table>`/`<p>`)

**Missing landing page** → Create dedicated page targeting the keyword with unique content + proper on-page SEO

**Mixed content (HTTP)** → Replace all `http://` URLs with `https://` in src/href attributes

**Missing HSTS** → Add Strict-Transport-Security header in server/hosting config

**API key exposed** → Move to environment variable, add to .gitignore, rotate the key

**Missing alt/label** → Add descriptive alt text to images, associate labels with form inputs

**Invalid HTML structure** → Fix DOCTYPE, charset order, duplicate tags, deprecated elements

**Client-only SEO content** → Move titles, meta tags, and JSON-LD to server-side rendering

**Missing llms.txt** → Create public/llms.txt with site description, topics, and content types

**Weak AI citation structure** → Add quantified claims, source attribution, self-contained sections

**Low GEO score** → Add entity schema, citation-friendly formatting, llms.txt, semantic markup

**Traffic dropped >20%** → Run § 3.22 Penalty Recovery; check GSC Manual Actions first, then correlate drop date with known Google updates

**Large site crawl issues** → Run § 3.23 Crawl Budget; split sitemaps by topic, disallow parameter URLs, flatten internal link depth

**Pre/during site migration** → Run § 3.24 Site Migration audit; complete URL mapping, verify 301s are single-hop

**Page not ranking despite good content** → Run § 3.26 Ranking Diagnosis decision tree; identify bottleneck stage (indexation → relevance → authority → CTR)

**Slow Core Web Vitals** → Run § 3.25 CWV Diagnosis; identify LCP element, INP-blocking JS, CLS-causing layout shifts — fix by bottleneck, not blanket optimization

**Video not ranking** → Add VideoObject schema + transcript + video sitemap; upload closed captions on YouTube; dedicated page per video

---

## 7. Framework-Specific Notes

### Astro
- Meta tags: Set in layout frontmatter props, passed from page frontmatter
- Sitemap: `@astrojs/sitemap` integration in `astro.config.mjs`
- RSS: `@astrojs/rss` integration
- Config: `site` property required for canonical URLs and sitemap

### Next.js (App Router)
- Meta tags: `export const metadata` in `layout.tsx` / `page.tsx`
- Sitemap: `app/sitemap.ts` with `MetadataRoute.Sitemap` return type
- Robots: `app/robots.ts` with `MetadataRoute.Robots` return type
- OG images: `app/opengraph-image.tsx` for dynamic generation

### Nuxt
- Meta tags: `useHead()` composable or `nuxt.config.ts` app.head; use `useSeoMeta()` for OG/Twitter
- Sitemap: `@nuxtjs/sitemap` module (auto-discovers routes)
- SEO: `@nuxtjs/seo` module for comprehensive setup (robots, OG, JSON-LD helpers)
- OG images: `nuxt-og-image` for runtime SVG→PNG generation
- SSR default: verify `ssr: true` in `nuxt.config.ts`

### SvelteKit
- Meta tags: `<svelte:head>` in `+layout.svelte` / `+page.svelte`
- Sitemap: manual `+server.ts` at `src/routes/sitemap.xml/+server.ts` returning XML
- Robots: `static/robots.txt` or dynamic via `+server.ts`
- OG images: `@vercel/og` or `satori` in API route
- SSR default: server adapter (`@sveltejs/adapter-vercel`, `-node`) must be SSR-capable (not static-only unless SSG)
- Load functions: put SEO-critical data in `load()` (runs server-side first)

### Gatsby
- Meta tags: `gatsby-plugin-react-helmet` or `Head` export in pages (Gatsby 4.19+)
- Sitemap: `gatsby-plugin-sitemap`
- Robots: `gatsby-plugin-robots-txt`
- OG images: build-time generation via `gatsby-plugin-sharp`
- Note: Gatsby is SSG — ensure no CSR-only meta tag patterns

### Remix / React Router v7
- Meta tags: `export const meta` from route modules (returns array of meta descriptors)
- Sitemap: manual resource route `routes/[sitemap.xml].tsx`
- Robots: manual resource route or `public/robots.txt`
- OG images: `@vercel/og` in resource route
- SSR default: yes — verify no client-only data for SEO content

### Vite SPA (plain React/Vue/Svelte)
- **Warning**: CSR-only sites have the weakest SEO. Strongly recommend pre-rendering or SSR.
- Pre-rendering: `vite-plugin-ssr`, `vite-plugin-prerender`, or static snapshot service
- Meta tags: `react-helmet-async` or `@vueuse/head` — BUT only works if pre-rendered
- Alternative: migrate to Next/Nuxt/SvelteKit for indexable routes

### Static HTML
- Meta tags: Directly in `<head>` of each HTML file
- Sitemap: Manually create `sitemap.xml` OR use a generator (e.g., `sitemap-generator` npm package)
- Verify: Check every page individually
- Includes: use Server-Side Includes (SSI) or a build step (11ty, Jekyll, Hugo) for shared `<head>`

---

## 8. Skill Self-Limits & Honest Expectations

What this skill can and cannot do:

**CAN (code-level):**
- Audit HTML/meta/schema/sitemap/robots.txt/config
- Rewrite titles, descriptions, JSON-LD, internal links
- Detect cannibalization via site-wide keyword grep
- Analyze competitor pages via WebFetch
- Generate OG images (via build step or SVG→PNG)
- Verify post-fix HTML output

**CANNOT (requires user or external tools):**
- Access Google SERP autocomplete, "People also ask", or AI Overviews
- Query Google Search Console API directly (user exports CSVs)
- Measure real user Core Web Vitals (user pulls from PSI/CrUX)
- Submit URL reindex requests (user does in GSC)
- Verify backlinks (user exports from GSC, Ahrefs, or Moz)
- Guarantee timelines — SEO results lag 2 weeks to 6 months

**When Claude cannot verify something, say so explicitly.** Do not fabricate
SERP positions, traffic estimates, or keyword volumes.
