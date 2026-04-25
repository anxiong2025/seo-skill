# GEO — Generative Engine Optimization

Optimize content to be **cited by AI systems** — ChatGPT, Perplexity, Google AI
Overviews, Claude. As of 2026 this is as important as traditional SEO for
future traffic, and for some B2B/tech topics it is already the dominant channel.

> **Scope note.** GEO = optimizing for AI citation. Traditional content quality
> for human readers + Google (E-E-A-T bylines, general content depth) is in
> SKILL.md §3.7. The two overlap but the *point* differs — don't double-check
> the same items. When in doubt: **GEO = AI extraction, §3.7 = human + Google ranking.**

---

## 1. AI Crawler Access & Discovery

- [ ] robots.txt explicitly ALLOWS: GPTBot, ChatGPT-User, ClaudeBot, Claude-Web, PerplexityBot, Google-Extended, Googlebot
- [ ] Or: intentionally blocks specific AI crawlers with documented business reason (and the loss is acknowledged)
- [ ] `llms.txt` exists at site root — plain-text site map for LLMs
- [ ] `llms-full.txt` exists if the site has substantial reference content (docs, guides, knowledge base)
- [ ] Sitemap.xml includes all content pages AI should discover
- [ ] No `X-Robots-Tag: noai, noimageai` headers on pages you want cited

### llms.txt vs llms-full.txt — when to use which

| File | Purpose | Size | Best for |
|------|---------|------|----------|
| `llms.txt` | Structured *index* — links and one-line descriptions pointing to canonical URLs | < 50 KB | Every site; marketing + product sites |
| `llms-full.txt` | Concatenated *full text* of key pages, plain markdown | 100 KB – several MB | Docs sites, knowledge bases, long-form content |
| Per-page `.md` mirrors | e.g. `/docs/intro.md` next to `/docs/intro` | — | Docs sites where LLMs can fetch individual pages |

Minimum llms.txt skeleton:

```
# [Site Name]

> [One-sentence description of what the site offers.]

## Docs
- [Quickstart](https://example.com/docs/quickstart): Get running in 5 minutes.
- [API reference](https://example.com/docs/api): Full endpoint list.

## Guides
- [Building X with Y](https://example.com/guides/x): Tutorial for common use case.

## Optional
- [Changelog](https://example.com/changelog): Product updates.
```

---

## 2. Citation-Optimized Content Structure

- [ ] Direct answer to the page's primary question in the **first 100 words** (AI systems extract openings)
- [ ] Claims are specific and quantified: not "many users" → "73% of users (Source XYZ, 2025)"
- [ ] Every factual claim cites a source, preferably a .gov / .edu / recognized publication / primary research
- [ ] Definitions use `<dfn>Term</dfn>` or `<strong>Term</strong> is [clear definition].`
- [ ] FAQ: `<h3>Question?</h3> <p>Self-contained answer…</p>` + FAQPage JSON-LD
- [ ] How-to: numbered `<ol>` with explicit step titles in `<strong>` or `<h4>`
- [ ] Comparison content: semantic `<table>` with `<th>` column headers and `<caption>`
- [ ] Each section is **self-contained** — can be quoted without surrounding context
- [ ] Content anticipates follow-up questions and answers them in later sections

---

## 3. Semantic Markup for AI Extraction

- [ ] Proper H1 → H2 → H3 hierarchy (one H1 per page; no skipped levels)
- [ ] `<article>` wraps main content; `<aside>` wraps supplementary content
- [ ] `<blockquote cite="URL">` for quoted content
- [ ] `<time datetime="2026-03-15">` for every date
- [ ] `<figure>` + `<figcaption>` for images/charts
- [ ] `<code>` for technical terms; `<mark>` for highlighted key points
- [ ] Tables have `<caption>` describing what is compared
- [ ] Lists use `<ol>` when order matters, `<ul>` when it doesn't

---

## 4. Entity & Knowledge Graph Signals

Helps LLMs disambiguate your brand and build reliable "triples" (subject → predicate → object).

- [ ] Brand/product names spelled identically everywhere (case, hyphenation, spacing)
- [ ] Entity relationships stated explicitly in prose: "[Product] is a [category] made by [Company] for [Audience]"
- [ ] Key entities linked to authoritative anchors (Wikipedia, Wikidata Q-ID, official pages)
- [ ] `Organization` / `Person` schema with `sameAs` pointing to **verified** profiles (LinkedIn, verified X/Twitter, Wikidata)
- [ ] Topic clusters: hub ↔ spoke bidirectional links (see §3.27 Topical Authority)

---

## 5. Multi-Engine Citation Patterns

Different engines weight different signals. Optimize for the engines your
audience uses most — don't chase all four equally.

| Engine | What it favors | Signal to emphasize |
|--------|---------------|---------------------|
| **Google AI Overview** | Authoritative, well-structured, already-ranking pages | Traditional SEO authority + FAQ/HowTo schema + concise intro |
| **ChatGPT (with browsing/search)** | Clear claims, named sources, specific numbers, recent dates | Quantified claims, datePublished/dateModified, source links |
| **Perplexity** | Direct answers, numbered lists, source URL availability | Opening answer paragraph + `<ol>` steps + external citations |
| **Claude (with web search)** | Semantic HTML, logical structure, factual density, clear attribution | Heading hierarchy + `<time>` + author byline + cited sources |

---

## 6. Zero-Click & AI Overview Optimization

Ranking *in* AI Overviews is often mutually exclusive with traditional
conversion-optimized copy. Decide per page: is this a brand/awareness page
(optimize for citation) or a bottom-funnel page (optimize for click-through)?

- [ ] **Awareness pages** (glossary, definitions, "what is X"): strip promotional language; write neutral, encyclopedia-style prose; AI will cite and users will click through for depth
- [ ] **Mid-funnel pages** (comparisons, guides): answer the question directly but include the CTA below the fold; AI extracts the answer, users click for the full context
- [ ] **Bottom-funnel pages** (pricing, signup): de-prioritize AI Overview placement; optimize for user click, not AI citation
- [ ] Format matches what the SERP currently shows: paragraph snippet → paragraph; list snippet → `<ol>` / `<ul>`; table snippet → `<table>`
- [ ] Anticipate the "next question" — AI Overviews often cite the site that *also* answers the follow-up

---

## 7. Conversational Query Optimization

Users increasingly ask AI long, compound, conversational questions
("can I use X with Y if I'm on plan Z?") instead of keyword searches. Pages
ranked purely for short head terms miss these.

- [ ] Content addresses the natural-language question, not just the keyword ("Can I use Stripe with Shopify on the Basic plan?" not just "Stripe Shopify")
- [ ] Long-tail question variants covered in H2/H3 headings and FAQ sections
- [ ] Compound conditions answered explicitly: "If [condition A] and [condition B], then [answer]"
- [ ] Disambiguation when terms have multiple meanings ("In the context of X, we mean Y")
- [ ] User intent variants covered in a single page when closely related (don't fragment into 10 near-duplicate pages — triggers HCU)

---

## 8. Hallucination & Misquotation Mitigation

LLMs paraphrase. Bad paraphrases damage your brand and spread wrong information.
Reduce the surface area:

- [ ] **Canonical phrasing** for critical facts: write the exact sentence you want LLMs to quote. Keep it under 25 words and self-contained.
- [ ] **Disambiguated definitions**: one formal definition per key term, repeated consistently across pages
- [ ] **Negative statements** where helpful: "X does NOT do Y" (LLMs often default to plausible-sounding false positives)
- [ ] **Dated claims**: "As of [Month Year], [claim]" — helps LLMs cite the *current* version, not a stale cached one
- [ ] **Error-correction pages** if misquotation is recurring: a public "common misconceptions about [brand]" page gives LLMs a canonical correction source
- [ ] **Structured data > semantic HTML > raw text** for critical facts (pricing, availability, compatibility) — JSON-LD is the hardest to misparse
- [ ] Monitor: periodically ask ChatGPT/Perplexity/Claude about your brand in fresh sessions; log hallucinations; fix on-site

---

## 9. Attribution & Citation Signals

Why do some sites get cited and others don't? Rough hierarchy of what LLMs use
when deciding whose URL to cite:

1. **Domain authority** (backlinks, brand mentions, training-data prevalence) — the #1 factor
2. **Structured data** (JSON-LD entities resolvable to Wikidata / Google KG)
3. **Freshness** (`dateModified`, recent cited sources)
4. **Source links** within your content to authoritative third parties (AI follows these too)
5. **Semantic HTML** (clear structure, `<article>`, heading hierarchy)
6. **Self-containment** (sections that can stand alone when quoted)

If you've done 3-6 perfectly and are still not cited after 3 months, the
bottleneck is #1 (authority), not page structure.

---

## 10. Verification Workflow

```
For each priority page × target query:
1. User searches Google in incognito → captures AI Overview + cited URLs
2. User asks ChatGPT / Perplexity / Claude the same question in fresh sessions
   → notes which (if any) cite our URL
3. WebFetch each cited URL → analyze their structure (heading depth, word
   count, schema, author signals, outbound citations). Match or exceed.
4. Re-check monthly. If uncited after 3 months with good structure →
   authority / backlinks are the bottleneck, not GEO.
```

**Realistic expectation.** LLM citation is uncertain and slow. A well-structured
page on a low-authority domain rarely gets cited; a poorly-structured page on a
high-authority domain often is. Optimize **structure + authority + freshness**
together; no single lever unlocks citation alone.

---

## 11. Blocking AI Crawlers (When Appropriate)

If you *don't* want your content in LLM training or real-time responses (legal,
IP, competitive reasons), be explicit:

```
# robots.txt
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: PerplexityBot
Disallow: /

User-agent: Google-Extended
Disallow: /
```

- `Google-Extended` blocks Bard/Gemini/Vertex training without affecting normal Googlebot indexing.
- `ChatGPT-User` handles real-time ChatGPT browsing; `GPTBot` handles training.
- The `noai` / `noimageai` `X-Robots-Tag` headers are a best-effort request honored by some crawlers.

Document the decision somewhere the team can find — AI-crawler policy changes often.
