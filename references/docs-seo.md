# Developer Documentation SEO Deep Dive

Site-type reference triggered when §1.1 detects docs signals (`/docs/`, `/api/`,
OpenAPI/Swagger, versioned routes). SKILL.md §3.35 gives the short summary;
this file is the full playbook. Docs sites are the #1 LLM citation target —
GEO (§3.19 + `references/geo-llm-optimization.md`) deserves heavy weight here.

---

## 1. Version Management

- [ ] Decide indexing strategy: **index latest only** (common) OR **index all versions** with clear canonicalization
- [ ] If indexing latest only: versioned URLs (`/v1/`, `/v2/`) canonical to `/latest/` equivalent OR `noindex` older versions
- [ ] If indexing all versions: self-canonical per version + clear version switcher UI + `lastmod` per version
- [ ] Never have `/docs/[topic]/` duplicate of `/docs/latest/[topic]/` without canonical — Google sees duplicates
- [ ] Unversioned URL (`/docs/topic/`) redirects or renders latest; never dead
- [ ] Sitemap lists only indexed versions (don't submit deprecated versions)

## 2. API Reference Pages (JS-Rendered Risk)

The #1 docs SEO bug: API references rendered client-side from OpenAPI spec.

- [ ] API reference content is server-rendered or pre-rendered at build (not JS-fetched at runtime)
- [ ] Each API endpoint has its own URL + unique H1 + description — not an SPA that swaps content via JS
- [ ] HTTP methods, parameters, request/response examples present in initial HTML (test with JS disabled or Googlebot mobile)
- [ ] Problem tools to watch for: Redoc/Swagger UI with client-side rendering → switch to Redocly Static, MDX-based docs, or Hugo/Astro with pre-rendered content
- [ ] Verify with `curl <url>` or GSC URL Inspection → rendered HTML must contain the endpoint details

## 3. Code Snippet SEO

- [ ] Error messages appear verbatim in HTML (developers Google error strings — own that SERP)
- [ ] Method signatures and function names in `<code>` with surrounding explanatory prose
- [ ] Code examples are crawlable `<pre><code>` — not images of code, not embedded gists that hide content
- [ ] Code has language hint (`class="language-python"`) — aids AI understanding and syntax-highlighted rich snippets
- [ ] Common error messages get dedicated troubleshooting pages (`/errors/ERR_INVALID_FOO/`)

## 4. Cookbook / Recipes / How-To Structure

- [ ] How-to content uses `HowTo` JSON-LD (`step`, `totalTime`, `tool`, `supply`)
- [ ] Each recipe targets a specific task query ("how to [verb] with [product]")
- [ ] Headers use task language: "How to authenticate a user", not "Authentication"
- [ ] Step-by-step numbered lists in HTML (Google extracts as step snippets)
- [ ] Complete working examples (not partial fragments) — higher AI citation rate

## 5. Deprecation & Migration Pages

- [ ] Deprecated API/feature pages clearly labeled at top (`<aside role="alert">` + "Deprecated" banner)
- [ ] Deprecated pages link to replacement (internal link passes users AND authority)
- [ ] Migration guides for major version bumps (`/migrate/v1-to-v2/`) — high intent, high traffic
- [ ] Never 404 deprecated pages with backlinks/traffic — 301 to replacement or keep as historical with canonical to current

## 6. llms.txt for Docs (High Value)

Docs sites are the single highest-value place for `llms.txt` + `llms-full.txt`.

- [ ] `llms.txt` at site root lists the docs structure with direct links to `.md` or `llms-full.txt`
- [ ] `llms-full.txt` (concatenated plain-markdown of all docs) OR per-page `.md` mirrors (`/docs/intro.md` next to `/docs/intro`)
- [ ] Docs content is MDX/Markdown-friendly; expose raw Markdown as companion to HTML
- [ ] `llms.txt` groups docs by: Quickstart, Guides, API Reference, Integrations, FAQ
- [ ] See `references/geo-llm-optimization.md` §1 for the llms.txt skeleton

## 7. GitHub README ↔ Docs Site Deduplication

- [ ] Pick ONE canonical: docs site (richer, versioned) OR GitHub README (simple projects)
- [ ] If docs site primary: README is a short summary with link to docs; don't duplicate full getting-started (Google picks one, often wrong)
- [ ] If both must exist: docs site pages self-canonical; README content should differ substantively (GitHub doesn't honor canonical tags)
- [ ] GitHub Pages / ReadTheDocs mirrors — pick ONE primary and 301 the other

## 8. Interactive Playgrounds & Embeds

- [ ] CodeSandbox / StackBlitz embeds have text fallback context (surrounding prose) — embeds are invisible to Googlebot
- [ ] Each playground example has a unique indexable URL with descriptive content
- [ ] Playground URLs don't get crawled into infinite variant space (noindex dynamic result URLs)

## 9. Search Within Docs

- [ ] Docs search (`/docs/search?q=...`) noindexed — prevents infinite thin pages
- [ ] Algolia DocSearch or equivalent configured — doesn't affect SEO but reduces bounce from SERP
- [ ] Dead-end "No results" search pages noindexed

## 10. Content Length & Structure for Docs

- [ ] Reference pages can be shorter (50-300 words) IF they serve clear navigational intent — not thin content
- [ ] Tutorial/guide pages aim for 800-2000 words with runnable examples
- [ ] Every doc page has: clear H1, one-sentence summary, table of contents (for long pages), runnable example, "Next steps"
- [ ] Prerequisites and "related topics" sections — internal linking + AI context
