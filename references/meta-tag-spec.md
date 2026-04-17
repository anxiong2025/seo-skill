# Meta Tag Specification

Quick reference for all SEO-relevant meta tags with correct values and limits.

---

## Essential Tags

| Tag | Format | Limit | Notes |
|-----|--------|-------|-------|
| `<title>` | `Primary Keyword \| Brand` | 50-60 chars | Truncated at ~60 in SERP |
| `<meta name="description">` | Action-oriented summary | 120-155 chars | Truncated at ~160 |
| `<meta name="robots">` | `index, follow` | — | Add `max-image-preview:large, max-snippet:-1` for rich results |
| `<link rel="canonical">` | Absolute HTTPS URL | — | Self-referential on every page |
| `<html lang="xx">` | ISO 639-1 code | — | `zh-CN`, `en`, `ja`, `ko` |
| `<meta name="viewport">` | `width=device-width, initial-scale=1` | — | Required for mobile |

---

## Open Graph Tags

| Tag | Value | Limit | Notes |
|-----|-------|-------|-------|
| `og:title` | Page title | 50-60 chars | Can differ from `<title>` |
| `og:description` | Marketing copy | 120-155 chars | Can differ from meta description |
| `og:image` | Absolute URL to image | — | 1200×630px, JPEG/PNG, < 8MB |
| `og:image:width` | `1200` | — | Required for instant preview |
| `og:image:height` | `630` | — | Required for instant preview |
| `og:url` | Canonical URL | — | Must match `<link rel="canonical">` |
| `og:type` | `website` or `article` | — | `article` for blog/content pages |
| `og:locale` | `en_US`, `zh_CN` | — | Underscore format, not hyphen |
| `og:site_name` | Brand name | — | Consistent across all pages |
| `article:published_time` | ISO 8601 datetime | — | Only when `og:type="article"` |
| `article:modified_time` | ISO 8601 datetime | — | Only when `og:type="article"` |
| `article:author` | Author name or profile URL | — | Only when `og:type="article"` |

---

## Twitter Card Tags

| Tag | Value | Notes |
|-----|-------|-------|
| `twitter:card` | `summary_large_image` | Default for content with images |
| `twitter:title` | Same as `og:title` | Falls back to `og:title` if missing |
| `twitter:description` | Same as `og:description` | Falls back to `og:description` |
| `twitter:image` | Absolute URL | 1200×675px (16:9) recommended |
| `twitter:creator` | `@username` | Optional, author's Twitter handle |
| `twitter:site` | `@username` | Optional, site's Twitter handle |

---

## hreflang Tags

```html
<!-- On the zh-CN page -->
<link rel="alternate" hreflang="zh-CN" href="https://example.com/page/" />
<link rel="alternate" hreflang="en" href="https://example.com/en/page/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/page/" />

<!-- On the en page (bidirectional — MUST mirror) -->
<link rel="alternate" hreflang="zh-CN" href="https://example.com/page/" />
<link rel="alternate" hreflang="en" href="https://example.com/en/page/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/page/" />
```

### Common Language Codes

| Code | Language |
|------|----------|
| `en` | English |
| `zh-CN` | Simplified Chinese |
| `zh-TW` | Traditional Chinese |
| `ja` | Japanese |
| `ko` | Korean |
| `es` | Spanish |
| `fr` | French |
| `de` | German |
| `pt-BR` | Brazilian Portuguese |
| `x-default` | Fallback / unmatched regions |

---

## Favicon Tags

```html
<link rel="icon" href="/favicon.ico" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

### Required Files

| File | Size | Format | Notes |
|------|------|--------|-------|
| `favicon.ico` | 32×32 or 48×48 | ICO | Legacy browsers |
| `favicon.svg` | any | SVG | Modern browsers (preferred) |
| `apple-touch-icon.png` | 180×180 | PNG | iOS home screen |

---

## Performance Hints

```html
<!-- Preload critical font -->
<link rel="preload" as="font" type="font/woff2" href="/fonts/main.woff2" crossorigin />

<!-- Preload LCP image -->
<link rel="preload" as="image" href="/hero.webp" />

<!-- Preconnect to external origins -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="dns-prefetch" href="https://www.googletagmanager.com" />
```

---

## robots.txt Template

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_astro/
Disallow: /_next/static/

# AI Crawlers — allow for GEO (Generative Engine Optimization)
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: https://example.com/sitemap-index.xml
```
