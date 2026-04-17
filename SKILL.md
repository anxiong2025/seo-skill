---
name: seo
description: |
  Comprehensive SEO audit and optimization skill for any website.
  Performs technical SEO checks, on-page optimization, structured data validation,
  Open Graph / social preview fixes, performance analysis, content SEO review,
  and international SEO verification.
  TRIGGER when: user mentions SEO, asks to improve search rankings, wants to audit
  meta tags, fix OG images, add structured data, optimize for Google, or says /seo.
---

# SEO Audit & Optimization Skill

Systematic SEO audit and fix workflow for any website project.

```
Detect Framework → Crawl Pages → Audit → Report → Fix → Verify
```

## Quick Start

When invoked, run the audit pipeline in order:

1. **Detect** — identify the framework and project structure
2. **Crawl** — find all pages, layouts, and config files
3. **Audit** — run all checks from the checklist below
4. **Report** — present findings grouped by severity (Critical → High → Medium → Low)
5. **Fix** — apply fixes with user approval
6. **Verify** — rebuild and confirm fixes

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
- [ ] Pages link to related content (3-5 internal links per 1000 words)
- [ ] Anchor text is descriptive (not "click here")
- [ ] No orphan pages (every page reachable from at least one other page)

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

#### Content Quality
- [ ] No thin pages (< 300 words for informational content)
- [ ] Proper semantic HTML (`<article>`, `<section>`, `<nav>`, `<aside>`)
- [ ] Readable paragraph length (2-4 sentences)
- [ ] Subheadings every 200-300 words

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

### 3.9 GEO — Generative Engine Optimization (Low)

#### AI Crawler Access
- [ ] robots.txt does NOT block: GPTBot, ClaudeBot, PerplexityBot, Google-Extended
- [ ] Or: intentionally blocks with documented reason

#### Citation-Friendly Structure
- [ ] Clear topic sentences at paragraph start
- [ ] Explicit claims with supporting data
- [ ] Proper attribution for statistics and quotes
- [ ] Content structured for extraction (lists, tables, definitions)

#### Semantic Clarity
- [ ] Markdown-friendly HTML (proper headings, lists, paragraphs)
- [ ] No obfuscated content (hidden behind JS-only rendering)
- [ ] Clean, extractable text in semantic elements

---

## 4. Report Format

Present findings as:

```markdown
## SEO Audit Report

### 🔴 Critical (Blocks Indexing/Ranking)
1. [issue] — [file:line] — [fix]

### 🟠 High (Significant Impact)
1. [issue] — [file:line] — [fix]

### 🟡 Medium (Improvement)
1. [issue] — [file:line] — [fix]

### 🟢 Low (Nice to Have)
1. [issue] — [file:line] — [fix]

### ✅ Passing
- [list of things that are already correct]
```

---

## 5. Fix Strategy

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

---

## 6. Framework-Specific Notes

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
- Meta tags: `useHead()` composable or `nuxt.config.ts` app.head
- Sitemap: `@nuxtjs/sitemap` module
- SEO: `@nuxtjs/seo` module for comprehensive setup

### Static HTML
- Meta tags: Directly in `<head>` of each HTML file
- Sitemap: Manually create `sitemap.xml`
- Verify: Check every page individually
