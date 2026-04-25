# SaaS / Product Site SEO Deep Dive

Site-type reference triggered when §1.1 detects SaaS signals (`/features/`,
`/pricing/`, `/integrations/`, `SoftwareApplication` schema, trial/signup flow).
SKILL.md §3.34 gives the short summary; this file is the full playbook.

---

## 1. Site Architecture — Marketing vs Docs Separation

- [ ] Marketing site and product docs are clearly separated (`example.com` vs `docs.example.com` or `example.com/docs/`)
- [ ] Marketing targets commercial/informational queries; docs target navigational/problem-solving — no cannibalization
- [ ] If docs on subdomain: cross-linked from marketing nav; both submit sitemaps; schema `sameAs` or `isPartOf` links them
- [ ] If docs on subfolder: centralizes authority but requires separate content ownership to avoid dilution

## 2. Feature Pages

- [ ] One page per major feature at `/features/[feature-name]/` — each targets its own keyword cluster
- [ ] Covers: what it does, why it matters, visual/demo, use cases, FAQ, CTA
- [ ] Title pattern: `[Feature] — [Primary Benefit] | [Brand]` (not `[Brand] [Feature]`)
- [ ] Schema: `SoftwareApplication` or `Product` with `featureList`
- [ ] Cross-link to related features, relevant docs, and use-case pages
- [ ] Unique hero copy and screenshots per feature — not boilerplate with name swapped (thin-content / HCU risk)

## 3. `/vs/[competitor]/` Comparison Pages

- [ ] Comparison pages for top 3-10 direct competitors (`/vs/notion/`, `/vs/airtable/`) — high commercial intent
- [ ] Title: `[Your Product] vs [Competitor] — [Year-agnostic hook] | [Brand]`
- [ ] Side-by-side feature table + pricing + use-case fit + honest pros/cons of competitor
- [ ] NEVER trash the competitor — Google penalizes thin hit-pieces; write for users who are comparing
- [ ] Semantic `<table>` with `<th>` and `<caption>` (extractable as SERP table snippet)
- [ ] Competitor name in URL, title, H1, and first paragraph — but no trademark misuse

## 4. `/alternatives/[competitor]/` Pages

- [ ] Pages for top competitors (`/alternatives/slack/`, `/alternatives/salesforce/`)
- [ ] Different intent from `/vs/`: user is already dissatisfied — less comparison, more "why switch"
- [ ] Lists 3-5 alternatives (including your product prominently), not just self-promotion
- [ ] Each alternative gets an honest summary — builds trust AND ranks better than self-only pages
- [ ] Schema: `ItemList` of products being compared

## 5. Migration / "Switch from X" Pages

High intent: users searching "migrate from [Competitor] to [Your Product]" are
past the evaluation stage. One of the highest-converting SaaS SEO plays.

- [ ] `/migrate/[competitor]/` or `/switch-from-[competitor]/` for top competitors
- [ ] Step-by-step migration guide with screenshots (or CLI/API steps)
- [ ] Data export from competitor documented (often the biggest blocker)
- [ ] `HowTo` JSON-LD with numbered steps
- [ ] Link to a migration tool / import script if one exists
- [ ] Testimonial or case study from a customer who migrated
- [ ] Honest time/effort estimate — overselling ease hurts trust AND refunds

## 6. `/integrations/[tool]/` Pages

- [ ] One page per major integration (`/integrations/zapier/`, `/integrations/github/`)
- [ ] Targets "[Your Product] + [Tool]" and "[Your Product] [Tool] integration" queries
- [ ] Content: what the integration does, setup steps, use cases, video/screenshot
- [ ] Integrations directory hub (`/integrations/`) with searchable/filterable grid
- [ ] Schema: mention both tools with `sameAs` links to their official sites

### Integrations canonicalization (50+ integrations)

When you have many integrations, thin-content and duplicate-template risk is high:

- [ ] Each integration page has **unique, substantive content** (500+ words) — not boilerplate with only tool names swapped
- [ ] If only partner-supplied boilerplate is available, **noindex the thin integrations** and keep only the substantive ones in the index
- [ ] Integrations directory hub is canonical and indexable; individual pages self-canonical
- [ ] Category pages (`/integrations/crm/`, `/integrations/analytics/`) if you have enough integrations per category — avoids thin category pages
- [ ] Cross-link: feature pages ↔ related integrations ↔ use-case pages

## 7. Pricing Page SEO

The single most common SaaS SEO bug: pricing renders client-side, Googlebot
sees "Loading…", AI crawlers see nothing.

### SSR vs pre-render decision tree

- [ ] **Static pricing** (tier prices rarely change) → SSG / pre-render at build time; plain HTML table
- [ ] **Localized pricing** (per-country currency/tax) → SSR with geolocation; include default USD/EUR tier in initial HTML for Googlebot
- [ ] **Dynamic pricing** (per-user, per-plan, enterprise quotes) → SSR the tier structure; client-side only fills in the specific-user details

### Checks

- [ ] Pricing tiers in crawlable HTML with semantic structure (`<table>` or definition lists)
- [ ] `Product` schema with `offers` for each tier (`price`, `priceCurrency`, `billingIncrement`)
- [ ] `SoftwareApplication` with `offers` array — AI extracts tier comparison directly
- [ ] FAQ schema for common pricing questions ("Can I cancel?", "Is there a free plan?")
- [ ] Linked from main nav, footer, and most feature pages
- [ ] "Enterprise" / "Contact us" tier has a price range hint (avoid Google "no price" error)
- [ ] Annual vs monthly toggle does NOT create duplicate URLs — one canonical, toggle via JS

## 8. Free Tools & Calculators (Linkable Assets)

The #1 SaaS linkbuilding asset. Free tools routinely outrank the marketing site.

- [ ] Tools live at `/tools/[tool-name]/` or `/free-tools/[tool-name]/`
- [ ] Each tool targets a specific job-to-be-done query ("roi calculator", "uuid generator", "regex tester")
- [ ] Tool WORKS without signup — gating kills organic rankings AND backlinks
- [ ] Each tool page: tool UI + how-to-use content + FAQ + related tools
- [ ] `SoftwareApplication` or `WebApplication` schema with `applicationCategory`
- [ ] Tool output has permalink URLs for results — enables social/blog citations
- [ ] Tool is genuinely useful (not a thinly-veiled lead gen) — Google detects and deranks

## 9. Use Case / Industry Pages

- [ ] Use cases: `/use-cases/[job]/` (e.g., "project management for agencies")
- [ ] Industries: `/solutions/[industry]/` (e.g., "for healthcare", "for e-commerce")
- [ ] Each targets "[product category] for [audience]" long-tail
- [ ] Industry-specific screenshots, testimonials, case studies — not boilerplate
- [ ] Link from use-case pages to relevant features, customer stories, blog posts
- [ ] **Page count discipline**: 50 near-duplicate pages triggers HCU; 10 substantive ones rank

## 10. Customer Story / Case Study Pages

- [ ] `/customers/[name]/` or `/case-studies/[name]/` — each customer has unique story
- [ ] Structure: company context → problem → solution (your product) → results with metrics
- [ ] Schema: `Organization` (customer) + `Review`/`Testimonial` + `Product` reference
- [ ] Customer logos on homepage link to case study pages (internal authority + nav aid)
- [ ] Metric-heavy headlines ("Saved 40 hours/week", "3x pipeline") — trust + AI citation

## 11. Changelog / Product Updates (Freshness Signal)

- [ ] `/changelog/` or `/whats-new/` with dated updates — strong freshness signal
- [ ] Each major update has its own URL (`/changelog/2026-03-new-ai-features/`) — linkable and indexable
- [ ] RSS feed for changelog (newsletter tools and aggregators backlink automatically)
- [ ] Cross-referenced from relevant feature pages (shows active development)
- [ ] `Article` or `TechArticle` schema per entry with `datePublished`

## 12. Signup / Trial Flow SEO Hygiene

- [ ] `/signup`, `/login`, `/app/*` pages are `noindex`
- [ ] Marketing CTAs use descriptive anchor text ("Start free trial", not "click here")
- [ ] Trial landing pages have unique meta; campaign variants canonicalized to main
- [ ] Thank-you / post-signup pages are `noindex`
