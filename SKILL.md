---
name: seo
description: |
  Complete SEO audit and optimization skill for any website — 16 modules, 100+ checks.
  Covers: foundation setup, technical SEO, on-page optimization, structured data,
  Open Graph / social, favicon, performance, content strategy, international SEO,
  keyword research, competitor analysis, link building, local SEO, e-commerce SEO,
  advanced SEO, and generative engine optimization (GEO).
  TRIGGER when: user mentions SEO, search rankings, meta tags, OG images, structured data,
  Google optimization, keyword research, competitor analysis, or says /seo.
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

### 3.0 SEO Foundation Setup (Critical)

Before auditing, ensure the basic SEO infrastructure is in place.

#### Search Console & Analytics
- [ ] Google Search Console account created and site verified
- [ ] Bing Webmaster Tools account created and site verified
- [ ] Google Analytics (GA4) installed and collecting data
- [ ] Analytics tracking code is properly placed (in `<head>`)

#### Site Indexing
- [ ] Site is indexed by Google (check: `site:yourdomain.com` in Google)
- [ ] No password protection blocking crawlers
- [ ] No `noindex` meta tags on pages that should be indexed
- [ ] Sitemap submitted to Google Search Console and Bing Webmaster Tools

#### SEO Tools Setup
- [ ] At least one keyword research tool configured (Google Keyword Planner, or paid: Ahrefs/Semrush/Moz)
- [ ] Google PageSpeed Insights bookmarked for performance checks
- [ ] Google Rich Results Test bookmarked for schema validation

**How Claude helps with setup:**
```
1. Check if site is indexed: WebFetch "site:domain.com" on Google
2. Verify robots.txt isn't blocking indexing
3. Generate sitemap submission instructions for the framework
4. Provide step-by-step Search Console verification guide
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
- [ ] Tap targets at least 48x48px with adequate spacing
- [ ] No mobile-only interstitials blocking content
- [ ] Viewport meta tag present: `<meta name="viewport" content="width=device-width, initial-scale=1">`

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
- [ ] Consider inviting third-party experts or influencers to contribute content for credibility

#### Content Quality
- [ ] No thin pages (< 300 words for informational content)
- [ ] Proper semantic HTML (`<article>`, `<section>`, `<nav>`, `<aside>`)
- [ ] Readable paragraph length (2-4 sentences)
- [ ] Subheadings every 200-300 words

#### Content Strategy
- [ ] Content marketing plan exists (topics, formats, publishing cadence)
- [ ] Content addresses audience's questions and pain points
- [ ] Mix of content formats: text, images, video, infographics, tables
- [ ] Table of contents with jump links for long-form content (helps Featured Snippets)
- [ ] FAQ sections included where appropriate
- [ ] AI-assisted content is reviewed and enhanced with unique insights (not published raw)

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
3. Use WebFetch to check Google autocomplete and "People also ask"
4. Analyze competitor pages for keyword ideas (see 3.10)

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

#### External Link Profile (Audit Only)
- [ ] Check if site has backlinks (use WebFetch to check referral mentions)
- [ ] Identify linkable assets (tools, guides, data, infographics)
- [ ] Suggest link-worthy content types for the site's niche
- [ ] Check for broken outbound links (links to dead external pages)

#### Off-Site Link Building Strategy
- [ ] Identify guest post opportunities in the niche (search: "[niche] + write for us")
- [ ] Look for unlinked brand mentions → request link addition
- [ ] Identify PR/news opportunities for the brand
- [ ] Consider directory listings (industry-specific, Google Business, Bing Places)
- [ ] Build relationships with relevant bloggers and influencers

#### Anchor Text Quality
- [ ] Internal link anchors are descriptive (not "click here" or "read more")
- [ ] Anchor text includes target page's keyword naturally
- [ ] Variety in anchor text (not all links use the exact same text)

---

### 3.12 Local SEO (If Applicable)

#### Google Business Profile Signals
- [ ] NAP (Name, Address, Phone) consistent across site
- [ ] **LocalBusiness** JSON-LD with address, geo, openingHours
- [ ] Embed Google Maps on contact/location page
- [ ] Local keywords in title/description (city, region, neighborhood)

#### Contact Page
- [ ] "Contact Us" page exists with complete NAP information
- [ ] Business hours clearly displayed and kept up to date
- [ ] Contact form is functional
- [ ] Physical address matches Google Business Profile exactly

#### Directory Listings
- [ ] Listed on Google Business Profile
- [ ] Listed on Bing Places
- [ ] Listed on Apple Maps
- [ ] Listed on relevant industry-specific directories
- [ ] NAP consistent across all directory listings

#### Local Content
- [ ] Location-specific landing pages for each city/region (if multi-location)
- [ ] Each location page has unique content (not just address swap)
- [ ] Local schema markup: `areaServed`, `serviceArea`
- [ ] Customer reviews/testimonials with location signals

---

### 3.13 E-Commerce SEO (If Applicable)

#### Product Pages
- [ ] Every product has a unique, keyword-rich description (not manufacturer copy)
- [ ] Product descriptions include long-tail keyword variations
- [ ] Product descriptions use bullet points and scannable formatting
- [ ] High-quality product images with descriptive alt text
- [ ] Product videos or GIFs where possible
- [ ] **Product** JSON-LD with name, image, description, brand, offers, price, availability

#### Customer Reviews
- [ ] Review collection system in place (automated post-purchase emails)
- [ ] Reviews displayed on product pages
- [ ] **AggregateRating** schema added to product pages
- [ ] Review stars visible in search results via schema markup

#### Collection/Category Pages
- [ ] Each collection has unique descriptive content (not just a product grid)
- [ ] Collection pages target commercial keywords ("best X", "top X", "X for [audience]")
- [ ] Collection pages include internal links to individual product pages

#### E-Commerce Technical
- [ ] Product feed submitted to Google Merchant Center (if applicable)
- [ ] Out-of-stock products handled properly (keep page, show status, suggest alternatives)
- [ ] Pagination uses `rel="next"` and `rel="prev"` or infinite scroll with crawlable links
- [ ] Faceted navigation doesn't create duplicate/thin pages (use canonical or noindex)

---

### 3.14 Advanced SEO (Low)

#### Zero-Click Search Optimization
- [ ] Content formatted to win Featured Snippets (direct answer in 40-60 words after H2)
- [ ] FAQ sections formatted for "People Also Ask" boxes
- [ ] Tables and lists used for data that could appear as rich snippets
- [ ] Content structured for AI Overviews (clear, authoritative, well-cited)

#### SEO Monitoring & Reporting
- [ ] Google Search Console checked regularly for crawl errors
- [ ] Key metrics tracked: organic traffic, keyword rankings, search visibility, CTR
- [ ] Content freshness maintained (update dates, new data, current year references)
- [ ] Declining pages identified and refreshed

#### User Experience Signals
- [ ] Low bounce rate (content matches search intent)
- [ ] Good dwell time (content is engaging and comprehensive)
- [ ] Clear calls-to-action on every page
- [ ] No intrusive interstitials or popups blocking content

---

### 3.15 GEO — Generative Engine Optimization (Low)

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

**Keyword not in title/H1** → Rewrite title and H1 to include primary keyword naturally

**Keyword cannibalization** → Merge competing pages or differentiate their target keywords

**Missing content for keyword** → Create new page targeting the gap keyword with proper on-page SEO

**Weak internal links** → Add contextual links from high-authority pages to target pages

**Competitor outperforming** → Match their structured data, surpass their content depth, improve E-E-A-T signals

**Not indexed** → Check robots.txt, remove noindex tags, submit sitemap to Search Console

**Not mobile-friendly** → Add viewport meta tag, fix tap target sizes, test responsive layout

**Missing product schema** → Add Product + AggregateRating JSON-LD, connect to review system

**No Featured Snippet** → Reformat answer as 40-60 word paragraph or list right after the H2 question

**Missing landing page** → Create dedicated page targeting the keyword with unique content + proper on-page SEO

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
