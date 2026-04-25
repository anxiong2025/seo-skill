---
name: seo
description: |
  SEO + GEO audit, scoring, and fix skill. 37 site-type-aware modules, 700+ checks,
  weighted 0-100 score with A-F grade, critical-fail cap, and three audit modes
  (Offline / Standard / Full). Covers technical, on-page, content, structured data,
  performance (Core Web Vitals), international (hreflang), keyword research,
  competitor analysis, GSC integration, penalty recovery, migration, ranking diagnosis,
  topical authority, GEO (AI citation / llms.txt), SaaS, docs, e-commerce, and 出海/going-global.
  TRIGGER when: SEO, GEO, meta tags, sitemap, robots.txt, schema.org, JSON-LD, Open Graph,
  hreflang, Core Web Vitals, LCP/INP/CLS, GSC, ranking, keyword research, llms.txt,
  AI Overview, SaaS / docs / e-commerce / 出海 SEO, or /seo.
---

# SEO Audit & Optimization Skill

Systematic SEO audit and fix workflow for any website project.

```
Detect Framework → Crawl Pages → Audit → Report → Fix → Verify
```

## § 0. Audit Mode Selection (Do This First)

Claude can audit code-layer SEO without any login. Deeper signals (real queries,
CTR, manual actions, CrUX field data) require the user to export from Google
Search Console or paste screenshots.

| Mode | Setup | Coverage | Use When |
|------|-------|----------|----------|
| **Offline** | Nothing | ~60-70% (code + public data) | Default; user opts out; cannot log in |
| **Standard** | GSC + GA4 CSV export | ~90% | Recommended for real audits |
| **Full** | + Bing WMT + Keyword Planner + MCP | ~100% | Serious SEO owners |

**At the start of a full audit:**
1. Grep `public/` for `google-site-verification` and layouts for `G-XXXXX` — guess whether GSC/GA4 are set up.
2. Ask the user **once**: "Offline, Standard, or Full?" Announce the chosen mode + what will be skipped.
3. If GSC data arrives mid-audit, re-enable its modules without restarting.
4. Never fabricate GSC data — mark GSC-dependent checks as "Unverifiable" (not "Fail") when absent.

**For full prep instructions, free-tool URLs, GSC export paths, and privacy rules, see
`references/audit-modes-guide.md`.**

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

#### X / Twitter Card Tags
The platform rebranded to X in 2023, but the meta tag names still use the
`twitter:` prefix — X honors them, LinkedIn/Slack/Discord fall back to them.
- [ ] `twitter:card` — "summary_large_image" for articles
- [ ] `twitter:title` — present
- [ ] `twitter:description` — present
- [ ] `twitter:image` — present, 1200x675px recommended
- [ ] `twitter:site` / `twitter:creator` — `@handle` of verified X account (optional)

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

All three CWV metrics must pass at the **p75** of CrUX field data. INP replaced
FID in March 2024 — advice referencing FID is stale.

#### Core Web Vitals Targets (p75, field data)
- [ ] LCP (Largest Contentful Paint) ≤ 2.5s
- [ ] INP (Interaction to Next Paint) ≤ 200ms
- [ ] CLS (Cumulative Layout Shift) ≤ 0.1

#### Render-Blocking Resources
- [ ] Critical CSS inlined or preloaded
- [ ] Non-critical JS deferred: `<script defer>` or `<script async>`
- [ ] No synchronous third-party scripts in `<head>`

#### Images
- [ ] Modern formats used (WebP/AVIF with fallback)
- [ ] Responsive images (`srcset` / `<picture>`)
- [ ] Off-viewport images use `loading="lazy"`
- [ ] Above-fold images use `fetchpriority="high"` (and NOT `loading="lazy"`)

#### Fonts
- [ ] `font-display: swap` or `optional` set
- [ ] Font files preloaded: `<link rel="preload" as="font" crossorigin>`
- [ ] Subset fonts to required characters (especially CJK)

#### Compression
- [ ] HTML minified in production build
- [ ] CSS/JS bundled and minified
- [ ] Server sends gzip/brotli compressed responses

**For deep diagnosis (INP killers, third-party script budget, field-vs-lab gap,
CrUX analysis workflow), see `references/core-web-vitals-guide.md`.**

---

### 3.7 Content SEO (Medium)

Owns content quality for **human readers + Google ranking** (E-E-A-T, HCU).
GEO-specific AI-citation formatting lives in §3.19 + `references/geo-llm-optimization.md`.

#### E-E-A-T Signals (owned here — do not re-check in §3.19)
- [ ] Author name visible on articles
- [ ] Author bio/credentials linked or displayed
- [ ] Sources cited for claims and statistics
- [ ] Publication date visible (`datePublished` in JSON-LD + on page)
- [ ] Last updated date visible (`dateModified` in JSON-LD + on page)
- [ ] Author schema (`Person`) includes credentials, social links, and bio page URL
- [ ] Original research, data, or first-hand experience present (HCU "who, how, why")

#### Content Quality
- [ ] No thin pages (< 300 words for informational content)
- [ ] Proper semantic HTML (`<article>`, `<section>`, `<nav>`, `<aside>`)
- [ ] Readable paragraph length (2-4 sentences)
- [ ] Subheadings every 200-300 words

#### Content Structure & Formatting
- [ ] Long-form pages (>1500 words) have a table of contents with jump links
- [ ] Content uses mix of formats: paragraphs, lists, tables, images, code blocks
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

Applies when §1.1 detects E-Commerce signals. **Full checklist in
`references/ecommerce-seo.md`.** This summary covers the must-pass items.

#### Must-Pass Checks
- [ ] Every product has a unique, keyword-rich description (not manufacturer copy-paste)
- [ ] `Product` JSON-LD with `name`, `image`, `description`, `brand`, `offers` (price, priceCurrency, availability)
- [ ] `AggregateRating` schema matches visible reviews (mismatches → Google disapproval)
- [ ] Product URLs are clean: `/products/product-name` not `/products?id=123`
- [ ] Faceted navigation uses canonical or noindex (no duplicate/thin pages)
- [ ] Out-of-stock handled with `availability: "OutOfStock"` (never 404 with backlinks)
- [ ] Permanently discontinued products 301 to replacement or collection (never 404 if traffic exists)
- [ ] One canonical taxonomy per product (category OR collection OR tag — not all three)
- [ ] Shopify: decided whether `/collections/` or `/products/` is the canonical URL

#### Deep-dive topics (see `references/ecommerce-seo.md`)
- Product variant canonicalization decision tree (hasVariant vs separate URLs)
- Out-of-stock scenario handling (temporary / permanent / seasonal / collection-wide)
- Google Merchant Center & Shopping feed optimization
- Long-tail commercial content ("Best X for Y", comparisons, alternatives)
- Seasonal / event content calendar with stable slugs
- Review UGC with images & video
- Marketplace / multi-seller canonicalization

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

Optimize content to be **cited by AI systems** — ChatGPT, Perplexity, Google AI
Overviews, Claude. In 2026 this is as important as traditional SEO; for
B2B/tech topics it is often already the dominant channel.

**Scope vs §3.7 Content SEO.** §3.7 = human + Google ranking (E-E-A-T bylines,
content depth). §3.19 = AI extraction. Author bylines, `datePublished`,
`dateModified`, and Person schema are owned by §3.7 — do not re-check here.

#### Core GEO Checklist (summary)
- [ ] robots.txt explicitly ALLOWS: GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Googlebot
- [ ] `llms.txt` exists at site root (index of canonical URLs with one-line descriptions)
- [ ] `llms-full.txt` or per-page `.md` mirrors for docs / knowledge bases
- [ ] Direct answer to page's primary question in the **first 100 words**
- [ ] Claims quantified with source + date: "73% of users (Source XYZ, 2025)"
- [ ] Definitions use `<dfn>Term</dfn>` or `<strong>Term</strong> is [clear definition].`
- [ ] FAQ, HowTo, comparison content use strict semantic structure (FAQPage/HowTo JSON-LD, `<ol>`, `<table>` with `<caption>`)
- [ ] Each section is **self-contained** — can be quoted without surrounding context
- [ ] Entity consistency: brand/product spelled identically everywhere
- [ ] `sameAs` in Organization/Person schema links to **verified** profiles (LinkedIn, Wikidata, verified X/Twitter)
- [ ] Canonical phrasing for critical facts (the exact sentence you want LLMs to quote)
- [ ] Dated claims: "As of [Month Year], …" for anything that changes

#### Deep-dive topics (see `references/geo-llm-optimization.md`)
- llms.txt vs llms-full.txt decision + skeleton template
- Multi-engine citation patterns (Google AI Overview vs ChatGPT vs Perplexity vs Claude)
- Zero-click / AI Overview optimization tradeoffs vs conversion copy
- Conversational query optimization (compound questions, disambiguation)
- Hallucination & misquotation mitigation (canonical phrasing, negative statements, error-correction pages)
- Attribution hierarchy — why some sites get cited and others don't
- Blocking AI crawlers (when appropriate) with GPTBot / Google-Extended

#### Verification (at a glance)
```
For each priority page × target query:
1. User searches Google in incognito → captures AI Overview + cited URLs
2. User asks ChatGPT / Perplexity / Claude in fresh sessions → logs citations
3. WebFetch cited URLs → compare structure, schema, authority
4. Re-check monthly. Uncited after 3 months with good structure → authority is the bottleneck, not GEO.
```

**Realistic expectation.** LLM citation is uncertain and slow. Optimize
**structure + authority + freshness** together. No single lever unlocks
citation alone.

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

Goes beyond §3.6 targets — diagnoses *why* CWV fail and prescribes fixes.
**Full diagnosis playbook in `references/core-web-vitals-guide.md`** (INP killers,
third-party script budget, field-vs-lab gap, CrUX analysis workflow).

#### Data Sources (in priority order)
1. **CrUX Report** (real user, 28-day rolling) — authoritative; what Google ranks on
2. **PageSpeed Insights** — CrUX field + Lighthouse lab per URL
3. **GSC → Core Web Vitals** — site-wide CrUX by URL group; shows which patterns fail
4. **Lighthouse / WebPageTest** — lab only; for debugging, not pass/fail

**Rule:** If Lighthouse is green but CrUX is red, the problem is almost always
INP from real interactions that the lab run never performed.

#### Quick Diagnosis Flow
```
1. GSC → Core Web Vitals → identify the worst URL pattern
2. PageSpeed Insights on 2-3 URLs from that pattern → read FIELD data first
3. For the failing metric, jump to:
     LCP → identify LCP element in DevTools Performance → fix by root cause
     INP → record interactions in DevTools → find long tasks > 50ms → defer/split
     CLS → find shifting elements in Lighthouse "Avoid large layout shifts"
4. Ship fix, wait 4 weeks for CrUX to reflect it
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
  2. Add <link rel="preload" fetchpriority="high">    → LCP -0.3s
  3. Remove loading="lazy" from hero                  → LCP -0.2s
Expected post-fix LCP: 1.2s ✅
```

For the LCP / INP / CLS root-cause tables and the third-party script budget,
see `references/core-web-vitals-guide.md`.

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

Applies when §1.1 detects SaaS signals (`/features/`, `/pricing/`,
`/integrations/`, `SoftwareApplication` schema, trial/signup flow).
**Full checklist in `references/saas-seo.md`.**

#### Must-Pass Checks
- [ ] Marketing site and docs clearly separated (subdomain or subfolder, no cannibalization)
- [ ] One page per major feature at `/features/[feature]/` with unique content (not boilerplate)
- [ ] `/vs/[competitor]/` pages for top 3-10 direct competitors (title: `[Your Product] vs [Competitor]`)
- [ ] `/alternatives/[competitor]/` pages for dissatisfied-user intent
- [ ] `/integrations/[tool]/` pages with unique content; thin ones noindexed
- [ ] Pricing page **server-rendered** (the #1 SaaS SEO bug: client-only pricing → Googlebot sees "Loading…")
- [ ] `Product` schema with `offers` for each pricing tier; FAQ schema on common pricing questions
- [ ] `/signup`, `/login`, `/app/*`, thank-you pages are `noindex`
- [ ] Changelog with dated entries + RSS — strong freshness signal

#### Deep-dive topics (see `references/saas-seo.md`)
- Migration / "Switch from X" pages (high-intent conversion play)
- Integrations canonicalization at scale (50+ integrations)
- Pricing SSR vs pre-render decision tree (static / localized / dynamic)
- Free tools & calculators as linkbuilding assets
- Use-case / industry pages with HCU discipline (10 substantive > 50 boilerplate)
- Customer stories / case studies with metric-heavy headlines

---

### 3.35 Developer Documentation SEO (If Applicable)

Applies when §1.1 detects docs signals (`/docs/`, `/api/`, OpenAPI/Swagger,
versioned routes). Docs are the #1 LLM citation target — pair with
§3.19 GEO + `references/geo-llm-optimization.md`.
**Full checklist in `references/docs-seo.md`.**

#### Must-Pass Checks
- [ ] Version indexing strategy chosen (latest-only canonical, or all versions with self-canonical)
- [ ] API reference is server-rendered or pre-rendered — NOT client-side OpenAPI (the #1 docs SEO bug)
- [ ] Each API endpoint has its own URL + unique H1 (not an SPA that swaps content)
- [ ] Error messages appear verbatim in HTML (devs Google error strings)
- [ ] Code snippets are crawlable `<pre><code>` with language hint — not images of code, not hidden gists
- [ ] `HowTo` JSON-LD on tutorials with numbered steps
- [ ] `llms.txt` groups docs by Quickstart / Guides / API / Integrations / FAQ
- [ ] `llms-full.txt` OR per-page `.md` mirrors (e.g., `/docs/intro.md` next to `/docs/intro`)
- [ ] Deprecated pages labeled + link to replacement; never 404 if they have backlinks
- [ ] Docs search (`/docs/search?q=…`) noindexed

#### Deep-dive topics (see `references/docs-seo.md`)
- Version management strategies (latest-only vs all-versions)
- API reference SSR patterns (Redoc Static, MDX, Hugo/Astro)
- GitHub README ↔ docs site deduplication
- Interactive playgrounds (CodeSandbox/StackBlitz) visibility
- Migration guides for major version bumps

---

### 3.36 出海 SEO — Chinese Companies Going Global (If Applicable)

Applies when §1.1 detects 出海 signals (Chinese content targeting Western
markets, `zh` + `en/de/fr` locales, Chinese brand going global).
**Full checklist in `references/going-global-seo.md`.**

#### Must-Pass Checks
- [ ] Primary target market identified (US / UK / EU / SEA / MENA / LATAM) — drives language + currency + content
- [ ] Baidu-specific tactics removed from target-market site (no `baidu-site-verification`, no 百度统计)
- [ ] Domain strategy decided: `.com` + subfolder (default) / ccTLD (local-heavy) / subdomain (middle ground). Avoid `.cn` for target market
- [ ] Hosting in target region or global CDN with edge in target region — latency is a CWV signal
- [ ] Hreflang bidirectional `zh-CN` ↔ `en-US` + `x-default` (points to English for non-Chinese visitors)
- [ ] English brand name trademarked in target markets (USPTO/EUIPO)
- [ ] Western E-E-A-T signals: real author bylines + photos + LinkedIn, press mentions, physical address, GDPR/CCPA policy
- [ ] Chinese trust signals removed from target-market site (ICP备案号, 百度信誉, 淘宝/天猫 badges)
- [ ] Content transcreated (not machine-translated); cultural references adapted
- [ ] No Chinese CDN / fonts / analytics on target-market site (slow / blocked / GDPR-risk)
- [ ] G2 / Capterra / TrustRadius / Trustpilot presence — feeds both Google and LLMs

#### Deep-dive topics (see `references/going-global-seo.md`)
- Domain strategy tradeoffs (subfolder vs ccTLD vs subdomain)
- Western E-E-A-T adaptation (experience / expertise / authority / trust)
- AI search visibility in Western markets (Wikipedia, HN, Reddit, YouTube)
- Chinese origin — strategic disclosure decisions
- Localization beyond English (DE/FR/JP/KR/ES native review)
- Western link building channels (HARO, guest posts, data studies)

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

### Next.js (App Router, 15 / 16+)
- Meta tags: `export const metadata` (static) or `export async function generateMetadata(...)` (dynamic) in `layout.tsx` / `page.tsx`
- **`metadataBase`**: set in root `layout.tsx` metadata — required for absolute OG/Twitter image URLs; without it, `og:image` may resolve to wrong origin in preview deployments
- Sitemap: `app/sitemap.ts` (or `app/sitemap.(xml|ts)/route.ts` for splits) returning `MetadataRoute.Sitemap`
- Robots: `app/robots.ts` returning `MetadataRoute.Robots`
- OG images: `app/opengraph-image.tsx` (and `twitter-image.tsx`) using the built-in `ImageResponse` — convention-based, no manual route needed
- **Next.js 16 Cache Components** (`use cache` directive): for SEO pages with PPR, the static shell (title, meta, above-fold content) prerenders; dynamic bits hydrate. Apply `'use cache'` to data fetchers used in `generateMetadata` so metadata itself is cacheable
- **Large product/doc catalogs**: prefer `generateStaticParams` + `export const dynamicParams = false` (build-time full SSG) over on-demand ISR when the set is known; avoids stale metadata and crawl-budget churn
- **`next-sitemap` plugin is no longer needed** in App Router projects — the built-in `app/sitemap.ts` and `app/robots.ts` exports replace it

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
