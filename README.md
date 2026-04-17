# seo-skill

A comprehensive SEO audit and optimization Skill for [Claude Code](https://docs.anthropic.com/en/docs/claude-code).

Performs systematic checks across technical SEO, on-page optimization, structured data, Open Graph, performance, content quality, and international SEO — then generates a prioritized report with actionable fixes.

## Installation

Copy the skill into your project's `.claude/skills/` directory:

```bash
# Option 1: Clone and copy
git clone https://github.com/your-username/seo-skill.git
cp -r seo-skill/SKILL.md your-project/.claude/skills/seo/SKILL.md
cp -r seo-skill/references your-project/.claude/skills/seo/references

# Option 2: Manual setup
mkdir -p your-project/.claude/skills/seo
# Copy SKILL.md and references/ into that directory
```

## Usage

In Claude Code, type:

```
/seo
```

Or describe what you need:

```
"Audit the SEO of this site"
"Fix the meta tags on all pages"
"Add structured data to the course pages"
"Generate an OG image for social sharing"
"Check if the sitemap is correct"
```

## What It Checks

### Critical
- robots.txt & sitemap configuration
- Canonical URLs on every page
- Title tags (unique, 50-60 chars, keyword placement)
- Meta descriptions (unique, 120-155 chars)
- OG image exists and is correct size (1200×630)
- Favicon exists

### High
- JSON-LD structured data (Article, Organization, BreadcrumbList, etc.)
- Open Graph & Twitter Card tags
- Heading hierarchy (single H1, no skipped levels)
- Image alt text

### Medium
- Core Web Vitals indicators (LCP, INP, CLS)
- Font loading strategy
- Content quality (E-E-A-T signals, semantic HTML)
- Internal linking

### Low
- AI crawler access (GPTBot, ClaudeBot)
- Citation-friendly content structure
- hreflang implementation

## Supported Frameworks

| Framework | Auto-detected | Notes |
|-----------|:---:|-------|
| Astro | ✅ | Full support |
| Next.js (App Router) | ✅ | Metadata API patterns |
| Nuxt | ✅ | useHead / nuxt.config |
| SvelteKit | ✅ | svelte:head patterns |
| Gatsby | ✅ | gatsby-plugin-react-helmet |
| Static HTML | ✅ | Direct `<head>` editing |

## Reference Files

| File | Contents |
|------|----------|
| `references/schema-templates.md` | Copy-paste JSON-LD templates for 12 Schema.org types |
| `references/meta-tag-spec.md` | Complete meta tag specification with limits and formats |
| `references/og-image-guide.md` | OG image generation methods (SVG, Puppeteer, Satori, @vercel/og) |

## Example Output

```
## SEO Audit Report

### 🔴 Critical
1. Missing og-default.png — public/og-default.png — Generate 1200×630 OG image
2. Title too long (78 chars) — src/pages/about.md:3 — Shorten to under 60 chars

### 🟠 High
1. No Article schema on blog posts — src/layouts/BlogLayout.astro — Add JSON-LD
2. Missing alt text on 12 images — src/pages/courses/*.md — Add descriptive alts

### ✅ Passing
- robots.txt configured correctly
- Sitemap generated with priorities
- Canonical URLs on all pages
- HTTPS enforced
```

## Contributing

Issues and PRs welcome. When adding new checks:

1. Add the check to the appropriate section in `SKILL.md`
2. Include: what to check, correct value, common mistakes
3. If it needs a template, add it to `references/`

## License

MIT
