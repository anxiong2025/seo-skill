<h1 align="center">SEO Expert.skill</h1>

<p align="center">
  <strong>Why isn't your site ranking on Google — or cited by ChatGPT?</strong><br>
  One command <code>/seo</code>. Claude reads your code and fixes the problems directly.<br>
  <em>Great products shouldn't lose on technical details.</em>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
  <img src="https://img.shields.io/badge/Claude_Code-Skill-blueviolet" alt="Claude Code Skill">
  <img src="https://img.shields.io/badge/37_Modules-700+_Checks-blue.svg" alt="700+ Checks">
  <img src="https://img.shields.io/badge/Score-0--100_A--F-orange.svg" alt="Scoring System">
  <img src="https://img.shields.io/badge/For-Blog_·_SaaS_·_Ecommerce_·_Docs_·_Global-green.svg" alt="Use Cases">
</p>

<p align="center">
  <a href="README.md">🇨🇳 中文</a> ·
  <a href="README.en.md">🇺🇸 English</a> ·
  <a href="README.es.md">🇪🇸 Español</a> ·
  <a href="README.ar.md">🇸🇦 العربية</a>
</p>

<br>

<p align="center">
  <a href="#use-cases">Who it's for</a> ·
  <a href="#demo">See it in action</a> ·
  <a href="#install">Install</a> ·
  <a href="#usage">Usage</a> ·
  <a href="#whats-checked">What's checked</a> ·
  <a href="#supported-frameworks">Frameworks</a>
</p>

<br>

---

## Use Cases

| Scenario | Your problem | What the Skill does |
|:------|:---------|:---------------|
| 📝 **Blog / Indie Dev** | Great content, but Google won't index it and ChatGPT never cites it | Full technical SEO scan + GEO optimization + content freshness audit |
| 💼 **SaaS / Product site** | Competitors dominate `/vs/xxx`, your feature pages don't rank | Competitor comparison pages + integrations + Pricing SSR + free tool link assets |
| 🛒 **Ecommerce / DTC** | Duplicate variant pages, Merchant Center rejections, missing seasonal traffic | Product Schema + variant dedup + Shopping Feed + promotional calendar |
| 📖 **Developer docs** | API docs are SPA — Googlebot sees nothing, no llms.txt | Versioning strategy + code snippet SEO + llms.txt + Cookbook |
| 📍 **Local business** | Not showing on Google Maps, NAP info scattered | LocalBusiness Schema + NAP consistency + multi-location pages |
| 🌏 **Global / Cross-border** | Entering new markets with no rankings, weak E-E-A-T, no AI visibility | Cross-border SEO stack + domain strategy + hreflang + multi-market GEO |
| 🎬 **Content / Video / Media** | Video, news, or course sites need specialized Schema and freshness signals | Video SEO + NewsArticle + Course Schema + content update strategy |

**If your site runs in code, this Skill can audit it.**

<br>

---

## Demo

```
User   ❯ /seo

Claude ❯ Detected: Astro project + SaaS site (/features/, /pricing/, /integrations/)
         Applying SaaS weight config, starting audit...

         ## SEO Audit Report — yoursaas.com
         ## Score: 62/100 (D) — Site Type: SaaS / Product

         📊 Score Breakdown (SaaS weighted)
         ┌─────────────────────┬───────┬────────┬──────────┐
         │ Category            │ Score │ Weight │ Weighted │
         ├─────────────────────┼───────┼────────┼──────────┤
         │ SaaS Product SEO    │ 45    │ 10%    │ 4.5      │
         │ Technical SEO       │ 85    │ 12%    │ 10.2     │
         │ On-Page SEO         │ 70    │ 12%    │ 8.4      │
         │ GEO (AI citation)   │ 30    │ 16%    │ 4.8      │
         │ Topical Authority   │ 55    │  8%    │ 4.4      │
         │ Structured Data     │ 55    │  6%    │ 3.3      │
         │ ...                 │ ...   │  ...   │ ...      │
         └─────────────────────┴───────┴────────┴──────────┘

         ### 🔴 Critical (3)
         1. Pricing page is fully JS-rendered — Googlebot sees "Loading..."
            → Switch to SSR or generateStaticParams
         2. No /vs/competitor/ pages — competitors dominate all comparison SERPs
            → Create top 5 competitor comparison pages (with Migration Guide)
         3. llms.txt missing — AI crawlers can't understand product structure
            → Generate public/llms.txt

         ### 🟠 High (5)
         1. No /integrations/ directory — missing "product + tool" long-tail traffic
         2. No free tools as link assets — strongest SaaS link channel unused
         3. 12 feature pages share the same og:image — generate unique OG per page
         4. Changelog lastmod is 2025-08 — freshness signal decaying
         5. 5 feature pages titles don't contain target keywords

         Which issues to fix? Type "fix all" or choose a category.
```

<br>

---

## Install

### Option 1: npx skills (works with Cursor, Cline, etc.)

```bash
npx skills add anxiong2025/seo-skill
```

> Files land in `.agents/skills/seo/`. If `/seo` isn't recognized, use Option 2.

### Option 2: Manual install (recommended for Claude Code)

```bash
mkdir -p .claude/skills/seo
curl -sL https://raw.githubusercontent.com/anxiong2025/seo-skill/main/SKILL.md \
  -o .claude/skills/seo/SKILL.md
```

```bash
# Optional: download reference docs (keyword research, competitor analysis, Schema templates, etc.)
mkdir -p .claude/skills/seo/references
for f in keyword-research-guide competitor-analysis-guide schema-templates meta-tag-spec og-image-guide; do
  curl -sL "https://raw.githubusercontent.com/anxiong2025/seo-skill/main/references/${f}.md" \
    -o ".claude/skills/seo/references/${f}.md"
done
```

<br>

---

## Usage

### Three ways to invoke

| Method | Example | Description |
|:------|:------|:------|
| **Full audit** | `/seo` | Run all applicable modules, output score + full report (auto-weighted by site type) |
| **Module audit** | `/seo global`, `/seo SaaS`, `/seo ecommerce`, `/seo GEO` | Run a specific module only |
| **Natural language** | `do keyword research`, `analyze pricing page competitors`, `optimize AI citations` | Describe what you need, Claude picks the right module |

### Three audit modes

| Mode | Requires | Coverage | Best for |
|:------|:----------|:------:|:------|
| **Offline** | Nothing | ~60-70% | First try, no login needed |
| **Standard** | Google Search Console + GA4 (both free) | ~90% | **Recommended** |
| **Full** | + Bing WMT + Keyword Planner + MCP | ~100% | Professional SEO teams |

> Start with `/seo` for a full audit and score. Then audit by module as needed — saves tokens and stays focused.

<br>

---

## What's Checked

**37 modules · 700+ checks · 0-100 score + A-F grade · dynamic weighting by site type**

<details open>
<summary><strong>📋 Full module list</strong></summary>

<br>

#### Foundation & Technical (all sites)

| Module | Key checks |
|:------|:--------|
| **Foundation** | GA4, GSC verification, noindex, sitemap config |
| **Technical SEO** | robots.txt, canonical, HTTPS, redirects, mobile |
| **On-Page SEO** | title, description, H1 hierarchy, image alt, internal links, URL structure |
| **Structured Data** | 12 JSON-LD types (Article / Product / FAQ / HowTo / LocalBusiness, etc.) |
| **Performance / CWV** | LCP, INP, CLS, fonts, image compression, CrUX real-world data |
| **JS Rendering / SSR** | Server-side rendering, hydration, SPA fallback, noscript |
| **HTML Validation** | DOCTYPE, charset, head structure, duplicate tags |
| **Security SEO** | HTTPS/HSTS, CSP, leaked keys, mixed content |
| **Accessibility** | ARIA, color contrast, form labels, keyboard navigation |
| **Favicon** | favicon.ico / .svg, apple-touch-icon |

#### AI Era (GEO + Content)

| Module | Key checks |
|:------|:--------|
| **GEO (AI citation)** | llms.txt, AI crawler access, entity optimization, semantic markup, multi-engine |
| **Content SEO** | E-E-A-T signals, content structure, FAQ, landing page quality |
| **Topical Authority** | Hub-Spoke clusters, content gaps, topic completeness |
| **Content Freshness** | dateModified updates, decay detection, refresh strategy |
| **Keyword Research** | Seed expansion, long-tail, search intent, cannibalization |

#### Operations (data-driven)

| Module | Key checks |
|:------|:--------|
| **GSC Integration** | Query/CTR/position analysis, opportunity mining, index status |
| **Penalty Recovery** | Manual Action, HCU decay, Core Update diagnosis |
| **Crawl Budget** | Large sites (>1000 pages) log analysis, duplicate crawling |
| **Site Migration** | 301 mapping, redirect chains, pre/post comparison |
| **Ranking Diagnosis** | Why pages don't rank — keyword → URL deep analysis |
| **Competitor Analysis** | SERP features, content differentiation, featured snippet opportunities |
| **Link Building** | Internal link architecture, anchor text, outreach research |
| **Link Reclamation** | Unlinked brand mentions, broken backlinks |
| **OG / Social** | og:image (1200×630), Twitter Card |
| **A/B Testing** | Title / meta / structure experiment methodology |
| **CRO for SEO** | Landing page conversion, CTA, trust signals |

#### Industry-Specific (auto-activated by site type)

| Module | Activated when |
|:------|:---------|
| 🛒 **Ecommerce SEO** (40+ checks) | Product pages / shopping cart present |
| 💼 **SaaS / Product site** | Has /features /pricing /integrations |
| 📖 **Developer docs** | Has /docs /api, versioned content |
| 🌏 **Global / Cross-border** | Multi-language / multi-region targets |
| 📍 **Local SEO** | LocalBusiness site |
| 🌐 **International deep-dive** | Multi-language hreflang site |
| 🎬 **Video SEO** | Video-first site |
| 👥 **UGC / Programmatic** | Community / aggregator site |

</details>

> **Scoring**: each check is Pass / Partial / Fail → weighted sum → 0-100 score.
> **Critical Fail Cap**: critical issues (missing sitemap, blocked robots, ≥60% duplicate titles) cap the score at 60.

<br>

---

## Supported Frameworks

Auto-detected — no manual configuration needed:

| Framework | Detection signal |
|:----------|:---------|
| **Astro** | `astro.config.*` |
| **Next.js** (App Router) | `next.config.*` |
| **Nuxt** | `nuxt.config.*` |
| **SvelteKit** | `svelte.config.*` |
| **Gatsby** | `gatsby-config.*` |
| **Vite SPA** | `vite.config.*` (no framework) |
| **Static HTML** | `index.html` |

<br>

---

## Built-in Reference Docs

Optional download at install time — Claude uses these automatically during audits:

| File | Contents |
|:------|:------|
| `keyword-research-guide.md` | Full keyword research workflow: seed → intent → gap analysis |
| `competitor-analysis-guide.md` | Competitor analysis: page comparison, SERP features, content differentiation |
| `schema-templates.md` | 12 ready-to-use JSON-LD templates |
| `meta-tag-spec.md` | Meta tag spec: length limits, format, common mistakes |
| `og-image-guide.md` | OG image generation: 4 approaches (SVG / Puppeteer / Satori / @vercel/og) |

<br>

---

## Repo Structure

```
seo-skill/
├── SKILL.md              # Core: 37 modules, 700+ checks, dynamic scoring system
├── README.md             # 中文
├── README.en.md          # English (this file)
├── README.es.md          # Español
├── README.ar.md          # العربية
├── LICENSE               # MIT
├── references/           # Reference docs (optional download)
└── examples/             # Full project examples
    ├── astro-site/
    └── nextjs-site/
```

<br>

---

## Contributing

PRs welcome. When adding new checks:

1. Add to the relevant section in `SKILL.md`
2. Include: what to check, correct value, common mistakes
3. If a template is needed, add it to `references/`

## License

MIT — use it, fork it, ship it.

---

<p align="center"><em>Every great product deserves to be found — by search engines, by users, by AI.</em></p>
