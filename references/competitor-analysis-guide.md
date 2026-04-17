# Competitor & SERP Analysis Guide

How to analyze competitors and search results to improve your rankings.

---

## 1. Competitor Identification

### Find Your SEO Competitors

Your SEO competitors are not necessarily your business competitors — they're whoever ranks for your target keywords.

```
For each target keyword:
1. WebFetch the Google SERP
2. Note the top 5 organic results
3. These are your SEO competitors for that keyword
```

### Competitor Profile Template

```markdown
## Competitor: [Name]
URL: [domain]
Overlapping keywords: [list]
Strengths: [what they do well]
Weaknesses: [gaps we can exploit]
Content strategy: [blog frequency, content types, depth]
Technical SEO: [fast/slow, schema usage, mobile-friendly]
```

---

## 2. On-Page Competitor Analysis

### What to Extract (via WebFetch)

For each competitor page ranking for your target keyword:

| Element | What to Check | Why It Matters |
|---------|--------------|---------------|
| Title tag | Keyword placement, length, format | Directly affects CTR |
| Meta description | Messaging, CTA, keyword usage | Affects CTR from SERP |
| H1 | Keyword usage, different from title? | Primary ranking signal |
| H2-H3 structure | Topics covered, keyword variations | Topical coverage |
| Word count | Content depth | Longer ≠ better, but thin content rarely ranks |
| Schema types | Article, FAQ, HowTo, Product, etc. | Rich result eligibility |
| Internal links | Count, anchor text patterns | Authority distribution |
| Images | Count, alt text quality, optimization | Visual content value |
| Publish/update date | Freshness signal | Recent content may rank higher |

### Analysis Output Template

```markdown
### Keyword: [target keyword]

| Element | Competitor A | Competitor B | Our Page |
|---------|-------------|-------------|----------|
| Title | [their title] | [their title] | [our title] |
| H1 | [their h1] | [their h1] | [our h1] |
| Word count | ~2,500 | ~1,800 | ~800 |
| Schema | Article, FAQ | Article | Article |
| Publish date | 2026-03 | 2025-12 | 2025-06 |

**Action items:**
1. Expand content from 800 to 2,000+ words
2. Add FAQPage schema (competitor A has it)
3. Update publish date with fresh content
```

---

## 3. SERP Feature Analysis

### Rich Results to Check

| SERP Feature | Required Schema | Content Format |
|-------------|----------------|---------------|
| Featured Snippet | None (content quality) | Paragraph, list, or table matching query format |
| FAQ dropdown | FAQPage | Q&A pairs directly answering common questions |
| How-to steps | HowTo | Numbered step-by-step instructions |
| Review stars | Product + AggregateRating | Star ratings with review count |
| Breadcrumbs | BreadcrumbList | Hierarchical site path |
| Sitelinks | WebSite + SearchAction | Well-structured navigation |
| Video | VideoObject | Embedded video with metadata |
| Recipe | Recipe | Structured recipe data |

### How to Win Featured Snippets

1. Identify queries where competitors have snippets
2. Check the snippet format (paragraph / list / table)
3. Create content matching that format:
   - **Paragraph snippet**: Direct answer in 40-60 words after the question heading
   - **List snippet**: Numbered or bulleted list under the question heading
   - **Table snippet**: HTML `<table>` with clear headers
4. Place the answer immediately after an H2/H3 that matches the query

---

## 4. Content Differentiation Strategy

### The "10x Content" Framework

Your content should offer something competitors don't:

| Differentiation Type | Example |
|---------------------|---------|
| **Deeper** | Cover subtopics they skip |
| **Fresher** | Include 2026 data, recent changes |
| **More practical** | Working code examples, not just theory |
| **Better structured** | Table of contents, clear sections, scannable |
| **Original research** | Your own data, case studies, benchmarks |
| **Expert perspective** | Author credentials, first-hand experience |
| **Visual** | Custom diagrams, infographics, screenshots |
| **Interactive** | Calculators, tools, quizzes |

### Content Audit vs Competitors

```markdown
Topic: [shared topic]

| Aspect | Top Competitor | Our Content | Gap |
|--------|---------------|-------------|-----|
| Depth | 3,000 words, 8 sections | 1,200 words, 4 sections | Need 2x depth |
| Examples | 2 code samples | 0 | Add 3+ examples |
| Visuals | 5 screenshots | 1 diagram | Add screenshots |
| Freshness | Updated 2026-03 | Written 2025-01 | Update needed |
| Schema | Article + FAQ | Article only | Add FAQ schema |
| E-E-A-T | Author bio, credentials | No author info | Add author |
```

---

## 5. Backlink Gap Analysis

### What to Look For

Without paid tools, check:
- Do competitors get mentioned/linked by industry sites?
- Do they have linkable assets (tools, data, calculators)?
- What content types earn them links?

### Linkable Asset Ideas

| Asset Type | Example | Link Potential |
|-----------|---------|---------------|
| Free tool | SEO checker, calculator | High |
| Original data | Survey results, benchmarks | High |
| Comprehensive guide | "Ultimate guide to X" | Medium-High |
| Infographic | Visual data summary | Medium |
| Template/checklist | Downloadable resource | Medium |
| Case study | Real results with data | Medium |

---

## 6. Monitoring & Iteration

### Monthly Competitor Check

```
□ Re-check rankings for target keywords
□ Note any new competitors entering top 10
□ Check if competitors updated their content
□ Look for new SERP features (FAQ, HowTo)
□ Update content that's losing positions
□ Create content for newly discovered gaps
```

### Key Metrics to Track

| Metric | How to Check | Action If Declining |
|--------|-------------|-------------------|
| Keyword position | Google Search Console | Update content, add depth |
| Organic traffic | Analytics | Check for lost rankings |
| Click-through rate | Search Console | Improve title + description |
| Impressions | Search Console | Content may need better targeting |
| Bounce rate | Analytics | Content may not match intent |
