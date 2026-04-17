# Examples

Ready-to-reference examples showing how to implement SEO best practices with the seo-skill.

## Astro Site (`astro-site/`)

A blog/documentation site built with Astro. Demonstrates:

| File | What It Shows |
|------|---------------|
| `astro.config.mjs` | Sitemap plugin with custom priorities |
| `src/layouts/BaseLayout.astro` | Full meta tag setup: OG, Twitter, JSON-LD (Article, WebSite, Organization, Breadcrumb), canonical, hreflang-ready |
| `src/pages/index.astro` | Homepage with proper title/description passing to layout |
| `src/pages/blog/getting-started-with-astro.md` | Blog post with frontmatter-driven SEO (title, description, datePublished, dateModified) |
| `public/robots.txt` | robots.txt with AI crawler rules and sitemap reference |
| `.claude/skills/seo/SKILL.md` | Where to place the skill in your project |

### How to use

```bash
# 1. Copy the skill into your project
mkdir -p your-astro-project/.claude/skills/seo
cp SKILL.md your-astro-project/.claude/skills/seo/
cp -r references your-astro-project/.claude/skills/seo/

# 2. Open Claude Code in your project
cd your-astro-project
claude

# 3. Run the audit
> /seo
```

### What the skill will check in this example

```
✅ Passing
- robots.txt with sitemap reference
- Sitemap plugin configured with priorities
- Canonical URLs on every page
- OG tags with 1200×630 image
- Twitter Card tags
- JSON-LD: WebSite, Article, Organization, BreadcrumbList
- Semantic HTML (h1, article structure)
- Meta descriptions under 155 chars

🟠 Issues it would find
- Missing og-default.png in public/ (no actual image file)
- Missing favicon.ico and favicon.svg
- Missing apple-touch-icon.png
- Organization sameAs needs real social URLs
- No hreflang tags (if multi-language)
```

---

## Next.js Site (`nextjs-site/`)

A SaaS marketing site built with Next.js App Router. Demonstrates:

| File | What It Shows |
|------|---------------|
| `app/layout.tsx` | Root layout with Metadata API: title template, OG, Twitter, robots |
| `app/page.tsx` | Homepage with page-level metadata override |
| `app/blog/[slug]/page.tsx` | Dynamic blog post with `generateMetadata()`, Article JSON-LD |
| `app/sitemap.ts` | Programmatic sitemap generation |
| `app/robots.ts` | Programmatic robots.txt with AI crawler rules |

### How to use

```bash
# 1. Copy the skill into your project
mkdir -p your-next-project/.claude/skills/seo
cp SKILL.md your-next-project/.claude/skills/seo/
cp -r references your-next-project/.claude/skills/seo/

# 2. Run the audit
cd your-next-project
claude
> /seo
```

### Key patterns

**Title template** — set once in root layout, every page gets `Page Title | Brand`:

```tsx
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'Brand Name',
    template: '%s | Brand Name',
  },
};
```

**Dynamic metadata** — use `generateMetadata()` for data-driven pages:

```tsx
// app/blog/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.description,
    openGraph: { type: 'article', publishedTime: post.date },
  };
}
```

**JSON-LD** — inject via `<script>` in the page component:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

---

## Applying to Your Own Project

### Step 1: Install the skill

```
your-project/
├── .claude/
│   └── skills/
│       └── seo/
│           ├── SKILL.md          ← copy from root
│           └── references/       ← copy from root
│               ├── schema-templates.md
│               ├── meta-tag-spec.md
│               └── og-image-guide.md
├── src/
│   ...
```

### Step 2: Run a full audit

```
> /seo
```

The skill will:
1. Auto-detect your framework (Astro, Next.js, Nuxt, etc.)
2. Find all pages, layouts, and config files
3. Run 100+ checks across 16 categories
4. Present a prioritized report (Critical → Low)
5. Ask which issues to fix

### Step 3: Fix issues

Tell Claude which issues to fix:

```
> Fix all critical and high issues
> Add structured data to blog posts
> Generate an OG image
> Fix the meta descriptions that are too long
> Do keyword research for my niche
> Analyze my top 3 competitors
> Optimize product pages for e-commerce SEO
> Set up Google Search Console and Analytics
```

### Step 4: Verify

After fixes, the skill will rebuild and verify the output HTML.
