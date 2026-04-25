# Core Web Vitals — Deep Diagnosis Guide

Companion to SKILL.md §3.6 (targets) and §3.25 (diagnosis). Covers field-vs-lab
data, INP-specific failure modes, third-party script impact, and the realistic
CrUX analysis workflow.

---

## 1. The 2026 CWV Metrics

| Metric | Good | Needs Improvement | Poor | What it measures |
|--------|:----:|:-----------------:|:----:|------------------|
| **LCP** — Largest Contentful Paint | ≤ 2.5s | 2.5 – 4.0s | > 4.0s | Time to render the largest above-fold element |
| **INP** — Interaction to Next Paint | ≤ 200ms | 200 – 500ms | > 500ms | Worst observed interaction latency (replaced FID in March 2024) |
| **CLS** — Cumulative Layout Shift | ≤ 0.1 | 0.1 – 0.25 | > 0.25 | Sum of unexpected layout shifts |

All three are measured at the **p75** of CrUX field data over a 28-day window.
A page passes only if all three metrics are in the "Good" band at p75.

FID (First Input Delay) was retired March 2024. If you see advice referencing
FID, it's pre-2024 and likely needs updating.

---

## 2. Field Data vs Lab Data — Why They Disagree

This is the #1 source of confusion. Teams fix "Lighthouse score 95" and ship,
then watch GSC CWV report stay red.

| Source | What it is | When to use |
|--------|-----------|-------------|
| **CrUX (field)** | 28-day rolling real-user data from Chrome users who opted in | **Authoritative** — this is what Google ranks on |
| **PageSpeed Insights** | CrUX (field) **+** Lighthouse (lab) on one page | First stop for per-URL diagnosis |
| **GSC Core Web Vitals report** | CrUX aggregated by URL group (good/needs improvement/poor counts) | Site-wide trend; shows which URL patterns are poor |
| **Lighthouse (local DevTools)** | Lab-only simulation on your machine | Debugging; NOT a pass/fail signal |
| **WebPageTest** | Lab + real device farms | Advanced diagnosis; fixed-route pages |

**The gap typically comes from:**
- **Lab** uses a cold page load on a simulated Moto G4 with 4x CPU throttling and 150ms RTT. It measures *that* device's experience once.
- **Field** includes warm loads, back-forward cache hits, slow networks, old Android devices, and users who interact with the page for 30 seconds.

**Rule of thumb.** If Lighthouse is green but CrUX is red, the problem is almost always INP from real interactions (clicks, form typing) that the lab run never performed.

---

## 3. LCP Diagnosis

Identify the LCP element first:

```
DevTools → Performance → record page load → "LCP" marker shows the element
Or: Lighthouse → Performance audit → "Largest Contentful Paint element"
Common LCP elements: hero image, H1 text, primary card image, video poster
```

Then fix by root cause:

| Root cause | Symptom | Fix |
|-----------|---------|-----|
| Large unoptimized hero image | LCP = image, size > 200KB | AVIF with WebP fallback; `<link rel="preload" as="image" fetchpriority="high">` |
| Lazy-loaded above-fold image | `loading="lazy"` on hero | Remove `loading="lazy"`; add `fetchpriority="high"` |
| Blocking webfont | LCP = above-fold text with FOIT | Preload font + `font-display: swap`; consider self-host |
| Slow TTFB | All metrics bad, not just LCP | Edge caching, CDN, DB query optimization; target TTFB < 600ms |
| Render-blocking CSS | First paint delayed | Inline critical CSS; defer non-critical with `media="print" onload` swap |
| Render-blocking JS | Parser blocked | Move scripts to body end with `defer`; audit third-party `<head>` scripts |
| Hydration delay (SPA) | LCP OK but INP bad; whole-page replaced post-load | Partial hydration, islands, SSG for static routes |

---

## 4. INP Diagnosis — The Silent Killer

INP became the standard in March 2024 and is the reason many JS-heavy sites
lost their CWV pass status overnight. It measures the **worst** observed
interaction latency across the entire page session — not the average.

### Common INP killers (roughly in order of prevalence)

1. **Hydration of large client components** on route change (Next.js App Router, Nuxt, SvelteKit). First click after navigation is often 300-800ms.
2. **Analytics / chat / ad scripts** running inline in click handlers.
3. **Large React re-renders** triggered by state changes far up the tree.
4. **Synchronous storage access** (`localStorage`, `document.cookie` parsing) in handlers.
5. **Unvirtualized long lists** (500+ items) that re-render on any interaction.
6. **Third-party iframes** (widgets, embeds) blocking the main thread.

### Identify slow interactions

```
DevTools → Performance → record → interact with the page (click, type, scroll)
  → look at the "Interactions" track
  → any bar > 200ms is a problem; > 500ms is "Poor"
  → expand to see the long task breakdown
```

Or use the [web-vitals JS library](https://github.com/GoogleChrome/web-vitals) with attribution build to log the worst interaction and its long-task source in production.

### Fix patterns

| Cause | Fix |
|-------|-----|
| Heavy JS in click handler | Split into `requestAnimationFrame` + `setTimeout(fn, 0)` or `scheduler.postTask()` |
| Large component re-render | `React.memo`, stable reducers, `useMemo` on expensive child props |
| State updates cascading | Move state down to the leaf that needs it; use signals / `useSyncExternalStore` for granular subs |
| Analytics on click | Fire-and-forget: `navigator.sendBeacon()`, or batch and send on `requestIdleCallback` |
| LocalStorage parsing on each call | Cache parsed value in a module-scope variable; update on write |
| Long list re-render | Virtualize (`react-window`, `@tanstack/virtual`, solid-virtual) |
| Third-party scripts | Defer with `<script async>`; use facades (e.g. lite-youtube-embed) for embeds |

### The third-party script budget

On a typical marketing page in 2026, this stack is common:
- GTM + GA4 (~50KB)
- A marketing pixel (Meta/LinkedIn/TikTok) (~20-40KB each)
- A chat widget (Intercom, Drift) (~100-300KB)
- Consent manager (OneTrust, CookieBot) (~50-100KB)
- Hotjar / Fullstory / Microsoft Clarity (~100-400KB)

**Even defer-loaded, these steal main thread time from INP.** Rules:

- [ ] Every third-party script has a documented business owner and removal date
- [ ] Consent manager uses asynchronous mode; no blocking consent gate on first load
- [ ] Chat widget uses a facade — load the heavy SDK only on click, not on page load
- [ ] Session recording tools (Hotjar, Fullstory) sampled at ≤ 10% of traffic, not 100%
- [ ] Marketing pixels loaded via GTM with triggers, not inline in `<head>`
- [ ] Partytown or similar main-thread offloading considered if the stack is > 500KB gzipped

---

## 5. CLS Diagnosis

Top causes and fixes:

| Cause | Fix |
|-------|-----|
| Images without dimensions | Add explicit `width`/`height` or `aspect-ratio` CSS |
| Ads / embeds loaded async | Reserve minimum space with a placeholder `<div style="min-height: 250px">` |
| Webfont causing FOUT/FOIT | `size-adjust` in `@font-face`; match fallback metrics via `font-family: "Inter", "Adjusted Arial Fallback"` |
| Late-injected consent banner | Reserve space at top OR inject below fold OR use a modal (shift = 0) |
| Dynamically inserted content above existing | Inject below or reserve space with `min-height` / `content-visibility: auto` + `contain-intrinsic-size` |
| Client-side hydration swapping skeletons | SSR the final layout, not skeletons, where possible |

```
# Find images missing dimensions
Grep -rn '<img' src/ | grep -v 'width=' | grep -v 'height='
```

---

## 6. Realistic CrUX Analysis Workflow

```
1. GSC → Core Web Vitals report (Mobile tab):
   → Note "Poor" and "Needs improvement" URL counts per pattern

2. Identify top 3 worst URL patterns (e.g., /products/*, /blog/*)

3. For each pattern, pick 2-3 representative URLs:
   → PageSpeed Insights on each → read the **Field** section
   → Which of LCP / INP / CLS is red?

4. For red metrics, open the Lighthouse tab → look at the matching diagnostics:
   → LCP: "Largest Contentful Paint element", "Avoid enormous network payloads"
   → INP: NOT in Lighthouse field data — use the web-vitals JS library in production,
          or PSI's "Javascript execution time" as a proxy
   → CLS: "Avoid large layout shifts" (lists the shifting elements)

5. Fix the root cause on ONE URL, ship, wait 4 weeks, re-check CrUX

6. If CrUX doesn't move after 4 weeks but the fix is live:
   → Check: is the URL pattern actually represented in CrUX?
     (Low-traffic URLs don't appear in CrUX — they inherit the origin's CWV)
   → Origin-level CWV is hard to move; needs site-wide fixes
```

**Timeline expectation.** CrUX is a 28-day rolling window. A real fix takes
**4-6 weeks** to fully reflect in GSC and ranking. Don't panic-fix in week 2.
