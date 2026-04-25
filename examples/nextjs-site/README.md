# Next.js SEO Example

Reference files showing the seo skill's recommended Next.js App Router patterns.
This directory is a **reference, not a fully bootstrapped app** — copy individual
files into a real project to see them work.

## Files

| File | Pattern |
|------|---------|
| `app/layout.tsx` | `metadataBase` + title template + OG/Twitter/robots defaults |
| `app/page.tsx` | Page-level metadata override |
| `app/blog/[slug]/page.tsx` | `generateMetadata()` for dynamic pages + inline Article JSON-LD |
| `app/sitemap.ts` | `MetadataRoute.Sitemap` export (replaces `next-sitemap` plugin) |
| `app/robots.ts` | `MetadataRoute.Robots` export with AI-crawler allowlist |
| `package.json` | Target deps (Next.js 16 + React 19) |
| `tsconfig.json` | App Router TypeScript baseline |
| `next.config.ts` | Minimal config |

## To turn this into a runnable app

```bash
# From inside this directory
npm install
npm run dev
```

The files compile and `/`, `/blog/anything`, `/sitemap.xml`, `/robots.txt`
will all respond. Replace the stubbed `getPost()` with your real data source.

## Install the seo skill in your own project

```bash
mkdir -p your-project/.claude/skills/seo
cp ../../SKILL.md your-project/.claude/skills/seo/
cp -r ../../references your-project/.claude/skills/seo/
cd your-project
claude
> /seo
```
