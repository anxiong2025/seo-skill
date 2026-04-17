---
layout: ../../layouts/BaseLayout.astro
title: "Getting Started with Astro | Beginner's Guide"
description: "Learn how to build fast static sites with Astro. From installation to deployment, this step-by-step guide covers everything you need to get started."
type: article
datePublished: "2026-03-15"
dateModified: "2026-04-10"
---

# Getting Started with Astro

Astro is a modern static site generator that delivers lightning-fast performance by shipping zero JavaScript by default.

## Why Astro?

Astro's island architecture lets you use any UI framework (React, Vue, Svelte) while keeping your site fast.

## Installation

```bash
npm create astro@latest
```

## Your First Page

Create a new file at `src/pages/hello.astro`:

```astro
---
// Component Script (server-side)
const greeting = "Hello, World!";
---

<html>
  <body>
    <h1>{greeting}</h1>
  </body>
</html>
```

## Next Steps

- Add layouts for consistent page structure
- Set up content collections for blog posts
- Configure SEO with meta tags and structured data
