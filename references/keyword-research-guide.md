# Keyword Research Guide

How to do keyword research without paid tools — using Claude's capabilities.

---

## 1. Seed Keyword Generation

Start with 3-5 seed keywords based on the site's core offering.

### Template: Seed → Expansion

```
Seed keyword: [your product/topic]

Long-tail variations:
  - [seed] + 教程/guide/tutorial
  - [seed] + 推荐/best/top
  - [seed] + 价格/pricing/cost
  - [seed] + vs [competitor]
  - [seed] + 怎么用/how to use
  - [seed] + 适合初学者/for beginners
  - [seed] + 2026/[current year]
  - [seed] + 免费/free
  - [seed] + 工具/tool
  - [seed] + 区别/difference

Question forms:
  - 什么是[seed]? / What is [seed]?
  - 如何[seed]? / How to [seed]?
  - [seed]有什么用? / Why use [seed]?
  - [seed]和[alternative]哪个好?
```

---

## 2. Search Intent Classification

Every keyword has a dominant intent. Match page type to intent.

| Intent | User Wants | Signal Words | Page Type |
|--------|-----------|-------------|-----------|
| **Informational** | Learn/understand | 什么是, 如何, 为什么, guide, tutorial, how to | Blog, guide, docs |
| **Navigational** | Find a specific site | brand name, login, official | Homepage, brand page |
| **Commercial** | Compare/evaluate | 最好的, 推荐, vs, 对比, review, best, top | Comparison, review |
| **Transactional** | Buy/sign up | 价格, 购买, 下载, 注册, buy, pricing, download | Product, pricing, signup |

### Intent Mapping Template

```markdown
| Keyword | Intent | Target Page | Status |
|---------|--------|-------------|--------|
| [keyword 1] | Informational | /blog/xxx | Exists / Needs creation |
| [keyword 2] | Transactional | /pricing | Exists / Needs optimization |
| [keyword 3] | Commercial | /compare/xxx | Missing |
```

---

## 3. Page-Keyword Alignment Checklist

For each page, verify keyword placement across all critical positions:

```markdown
Page: /path/to/page
Primary keyword: [keyword]
Secondary keywords: [kw2], [kw3]

Placement Check:
  ✓/✗ Title tag — contains primary keyword
  ✓/✗ H1 — contains primary keyword (different wording than title)
  ✓/✗ URL slug — contains primary keyword
  ✓/✗ Meta description — contains primary keyword
  ✓/✗ First 100 words — mentions primary keyword
  ✓/✗ H2/H3 headings — contain secondary keywords
  ✓/✗ Image alt text — relevant keywords where natural
  ✓/✗ Internal link anchors — use keyword variations
```

### Keyword Density Guidelines

- **Target**: 1-2% for primary keyword (natural usage)
- **Warning**: > 3% may trigger keyword stuffing signals
- **Rule**: If it sounds forced when reading aloud, rewrite it

---

## 4. Content Gap Analysis

### Step-by-Step Process

1. **List your pages**: All indexable pages with their target keywords
2. **List competitor topics**: What do top 3-5 competitors cover that you don't?
3. **Find the gaps**: Topics your audience searches for but you have no page for
4. **Prioritize**: High commercial intent + low competition = create first

### Gap Analysis Template

```markdown
| Topic/Keyword | We Have Page? | Competitor 1 | Competitor 2 | Priority |
|--------------|:---:|:---:|:---:|:---:|
| [topic 1] | ✗ | ✓ | ✓ | High — commercial intent |
| [topic 2] | ✓ (thin) | ✓ (2000 words) | ✓ | High — needs expansion |
| [topic 3] | ✗ | ✗ | ✓ | Medium |
```

---

## 5. Competitor Keyword Analysis

### What to extract from competitor pages (via WebFetch)

```markdown
Competitor: [URL]
Ranking for: [target keyword]

Title: [their title tag]
Description: [their meta description]
H1: [their h1]
Word count: [approximate]
Schema types: [Article, FAQ, HowTo, etc.]
Unique content angle: [what makes their page rank]
Internal links: [how many, what anchor text]

Our advantage: [what we can do better]
Our gap: [what we're missing]
```

### Competitive Content Strategy

| Their Strength | Our Counter-Strategy |
|---------------|---------------------|
| Longer, deeper content | Match depth + add unique insights |
| FAQ rich results | Add FAQPage schema with better answers |
| Recent publish date | Update our content with current data |
| More backlinks | Create more linkable assets (tools, data, guides) |
| Author authority | Highlight our author credentials, add Author schema |

---

## 6. Keyword Research Without Paid Tools

Claude can help with keyword research using free methods:

### Google Autocomplete
Use WebFetch on Google search to see autocomplete suggestions:
- Type seed keyword → note suggestions
- Add letters a-z after seed → more suggestions
- Add question words before seed → question-based keywords

### People Also Ask
Check Google SERP for "People Also Ask" boxes:
- Each question is a keyword opportunity
- Answering these questions improves Featured Snippet chances

### Google Search Console (if available)
- Check which queries already bring impressions
- Find queries with high impressions but low CTR → optimize titles
- Find queries where you rank positions 5-20 → improve content to reach top 5

### Free Keyword Tools to Recommend
| Tool | Best For | URL |
|------|---------|-----|
| Google Keyword Planner | Search volume estimates | ads.google.com |
| Keyword.io | Free keyword suggestions | keyword.io |
| AnswerThePublic | Question-based keywords | answerthepublic.com |
| Ubersuggest (free tier) | Basic keyword data | neilpatel.com/ubersuggest |
| SEO查 | Baidu keyword research | seocha.com |
| Google Trends | Trend comparison | trends.google.com |

---

## 7. Keyword Implementation Checklist

After research, implement keywords systematically:

```
□ Create keyword map (keyword → page mapping)
□ Update title tags with primary keywords
□ Update H1 tags (different wording than title, same keyword)
□ Rewrite meta descriptions with keyword + CTA
□ Optimize URL slugs for new pages
□ Add keywords to first paragraph naturally
□ Use secondary keywords in H2/H3 subheadings
□ Update image alt text with relevant keywords
□ Add internal links with keyword-rich anchor text
□ Create missing pages for content gaps
□ Set up tracking for target keyword rankings
```
