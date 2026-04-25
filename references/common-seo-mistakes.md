# Common SEO Mistakes — Diagnostic Checklist

Fast scan for the errors that most frequently show up in audits. Use as a
sanity sweep after a full audit, or as a quick-fix list when time is short.

---

## 1. Keyword Cannibalization

Two or more of your own pages competing for the same query. Google picks one
(often the wrong one), neither ranks strongly.

### Detect

```
1. GSC → Performance → Query filter → one target query
2. Look at "Pages" tab → if >1 URL shows impressions, cannibalization exists
3. Or: site:example.com "[primary keyword]" in Google → multiple results = cannibalization risk
```

### Fix

- [ ] Merge thin pages → 301 the weaker URL to the stronger one
- [ ] Differentiate intent if both are valuable (e.g., `/pricing` vs `/pricing/enterprise`)
- [ ] Consolidate internal links to the winning page
- [ ] Update the weaker page's target keyword to a different term

---

## 2. Duplicate / Missing H1s

- [ ] Every indexable page has **exactly one** `<h1>`
- [ ] H1 is unique across pages (not "Welcome" or the brand name everywhere)
- [ ] H1 contains the primary keyword (or a close variant), different wording from `<title>`

### Detect

```
Grep -rn '<h1' src/ app/                          # find all H1s
Grep -rn '<h1' src/ | sort | uniq -c | sort -rn   # spot duplicates
```

---

## 3. Redirect Chains

A → B → C hurts crawl budget AND passes less authority than A → C directly.

- [ ] No redirect chains longer than 1 hop
- [ ] Permanent moves use 301 (not 302) — 302s don't pass authority long-term
- [ ] Internal links updated to point to final URL (not the redirected one)

### Detect

```
Bulk-check with a crawler (Screaming Frog, sitebulb) → "Redirect Chains" report
Or: for each key URL, curl -IL → count "Location:" headers
```

---

## 4. Noindex on Pages That Should Rank

Common in: staging environments promoted to prod, CMS templates, headless CMS
configs where noindex is the default.

### Detect

```
Grep -rn 'noindex' src/ app/ pages/
Grep -rn 'X-Robots-Tag' .          # check server/middleware headers
Check GSC → Pages → "Crawled — currently not indexed" + "Excluded by 'noindex' tag"
```

- [ ] Homepage and top-10-traffic pages do NOT carry `noindex`
- [ ] Staging/preview environments are noindexed AND password-protected (belt + suspenders)
- [ ] `noindex` removed from final prod URLs (common CMS leak)

---

## 5. Broken Canonicals

- [ ] Every page has `<link rel="canonical">`
- [ ] Canonical uses absolute HTTPS URL (not relative, not HTTP)
- [ ] Self-referential on every page (page points to itself unless intentionally consolidating)
- [ ] Canonical NOT pointing to a 404, redirect, or noindex URL
- [ ] Canonical NOT cross-linking language variants (that's hreflang's job — §3.8)

### Detect

```
# Find pages with canonical pointing elsewhere than self:
Grep -rn 'rel="canonical"' app/ pages/ src/ | review against each URL
```

---

## 6. Thin Content

- [ ] No indexable page under 300 words of unique body content (excluding nav/footer boilerplate)
- [ ] No "placeholder" pages indexed (coming-soon, empty category, no-results search)
- [ ] No doorway pages (near-duplicate pages targeting location/audience variants with same body)

---

## 7. Mixed HTTP / HTTPS

- [ ] Site config uses HTTPS everywhere
- [ ] No HTTP images, scripts, or iframes on HTTPS pages (browsers block; Google warns)
- [ ] HSTS header set at hosting level
- [ ] Canonical and sitemap use HTTPS URLs

### Detect

```
Grep -rn 'http://' src/ app/ pages/ public/ | grep -v 'localhost\|127\.0\.0\.1\|example'
```

---

## 8. www / non-www / Trailing-Slash Inconsistency

Google treats `example.com/page`, `www.example.com/page`, and
`example.com/page/` as distinct URLs unless you consolidate them.

- [ ] Pick one: www or non-www. Redirect the other.
- [ ] Pick one: trailing slash or no trailing slash. Redirect the other. (Or set framework `trailingSlash` config explicitly.)
- [ ] Internal links use the canonical form consistently
- [ ] Sitemap and canonicals use the canonical form

---

## 9. Broken Internal Links

Internal 404s waste crawl budget and frustrate users.

### Detect

```
# Screaming Frog / sitebulb → "Response Codes" → Internal 404 report
# Or: in-browser, use a link checker extension on key templates
```

- [ ] No internal links to 404 pages
- [ ] No internal links through redirect chains (update to final URL)
- [ ] Deleted pages return proper 410 (gone) or 301 (moved), not soft 404

---

## 10. Sitemap Bloat

- [ ] Sitemap contains ONLY indexable URLs (not 404s, not redirects, not noindex pages)
- [ ] `<lastmod>` reflects actual update date (not build timestamp — Google ignores always-fresh lastmod)
- [ ] Sitemap submitted to GSC (not just referenced in robots.txt)
- [ ] Large sites: split into sub-sitemaps < 50k URLs / < 50MB each, indexed by a sitemap index

---

## 11. OG Image Bugs

- [ ] `og:image` is an **absolute URL** (not relative — breaks on preview deployments)
- [ ] `metadataBase` set (Next.js) or equivalent config for other frameworks
- [ ] Image actually exists at the URL (check with `curl -I`)
- [ ] Image is 1200×630 (1.91:1) — some platforms crop aggressively otherwise
- [ ] Text on image is readable at small thumbnail size

---

## 12. JS-Only Content Googlebot Can't See

- [ ] `<title>`, `<meta>`, and `<link rel="canonical">` are in initial HTML (not injected client-side)
- [ ] JSON-LD is in the initial HTML, not added by analytics/tag manager
- [ ] Main content (H1, body paragraphs) is server-rendered or pre-rendered
- [ ] Verify: GSC URL Inspection → "View crawled page" → check rendered HTML contains your content
- [ ] Or: `curl <url> | grep -c "<h1>"` — should be ≥ 1

---

## 13. Auth-Gated Content Indexed

- [ ] `/app/*`, `/dashboard/*`, `/account/*` return 401 or 302 to login (not a thin logged-out view that gets indexed)
- [ ] These paths also `noindex` as belt + suspenders
- [ ] Sitemap does NOT include auth-gated paths

---

## 14. Year References Rotting

- [ ] Search for hardcoded years in titles, H1s, and meta descriptions
- [ ] "Best X of 2024" still in index in 2026 → update or 301 to evergreen

### Detect

```
Grep -rn '20[12][0-9]' src/ app/ pages/ public/ | grep -iE '(title|description|h1|<title>)'
```

---

## 15. robots.txt Overblocking

- [ ] Does NOT `Disallow: /` globally
- [ ] Does NOT block CSS/JS/image assets (Google needs these to render the page)
- [ ] `Sitemap:` directive present and correct
- [ ] AI crawlers intentionally allowed or blocked with documented reason (see GEO reference)
- [ ] Staging `Disallow: /` not copied to prod
