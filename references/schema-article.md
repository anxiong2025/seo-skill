# Article Schema — JSON-LD Templates

For blog posts, guides, news articles, tutorials. Pair with `Organization`
(publisher) and `BreadcrumbList`.

---

## Article

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title (max 110 chars)",
  "description": "Article meta description",
  "image": "https://example.com/article-image.jpg",
  "inLanguage": "en",
  "url": "https://example.com/blog/article-slug/",
  "datePublished": "2026-01-15T08:00:00+08:00",
  "dateModified": "2026-03-10T12:00:00+08:00",
  "author": {
    "@type": "Person",
    "name": "Author Name",
    "url": "https://example.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Site Name",
    "url": "https://example.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://example.com/blog/article-slug/"
  }
}
```

### Subtypes

- `NewsArticle` — press releases, breaking news (enables Top Stories eligibility)
- `TechArticle` — technical guides, engineering deep dives
- `BlogPosting` — generic blog post (use `Article` unless you need the exact subtype)

Swap `"@type": "Article"` for any subtype; the rest of the shape is identical.

---

## BreadcrumbList

Pair with every Article to give Google a navigation trail.

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com/" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://example.com/blog/" },
    { "@type": "ListItem", "position": 3, "name": "Article Title", "item": "https://example.com/blog/article-slug/" }
  ]
}
```

---

## Common mistakes

- `headline` longer than 110 chars — Google truncates / may not show rich result
- `dateModified` set to build timestamp — Google ignores always-fresh lastmod
- `author` as a string, not a `Person` object — weakens E-E-A-T signal
- `image` relative URL — must be absolute
- Missing `publisher.logo` with width/height → rich result disqualified
