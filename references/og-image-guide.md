# OG Image Generation Guide

How to create Open Graph images for social sharing previews.

---

## Specifications

| Platform | Recommended Size | Aspect Ratio | Format |
|----------|-----------------|--------------|--------|
| Facebook/LinkedIn | 1200×630 | 1.91:1 | JPEG/PNG |
| Twitter (large) | 1200×675 | 16:9 | JPEG/PNG |
| Twitter (summary) | 600×600 | 1:1 | JPEG/PNG |
| WhatsApp | 1200×630 | 1.91:1 | JPEG/PNG |
| Slack | 1200×630 | 1.91:1 | JPEG/PNG |

**Universal safe bet: 1200×630 PNG** — works everywhere.

---

## Design Guidelines

1. **Keep text large** — images are often shown as small thumbnails (300×157)
2. **High contrast** — ensure readability on both light and dark backgrounds
3. **Brand consistency** — use your brand colors, logo, and fonts
4. **No important content in edges** — some platforms crop 10-20px from edges
5. **File size** — keep under 1MB (8MB max for Facebook, but smaller is faster)

---

## Generation Methods

### Method 1: SVG → PNG (with ImageMagick)

Best for simple, text-based OG images.

```bash
# Convert SVG to PNG
magick og-template.svg -resize 1200x630 og-default.png
```

**Limitation:** ImageMagick may not render fonts or gradients correctly.

### Method 2: HTML → PNG (with Puppeteer)

Best for complex designs with web fonts and CSS.

```javascript
import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
await page.goto('file:///path/to/og-template.html', { waitUntil: 'load' });
await page.screenshot({
  path: 'public/og-default.png',
  clip: { x: 0, y: 0, width: 1200, height: 630 }
});
await browser.close();
```

### Method 3: @vercel/og (Next.js)

For Next.js App Router — generates OG images at build time or on request.

```typescript
// app/opengraph-image.tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    <div style={{ display: 'flex', fontSize: 48 }}>
      Your OG Image Content
    </div>,
    { ...size }
  );
}
```

### Method 4: Satori (Framework-agnostic)

Convert JSX/HTML to SVG, then to PNG. Works without a browser.

```javascript
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const svg = await satori(
  <div style={{ display: 'flex', fontSize: 48, background: '#FAF9F7' }}>
    OG Image Content
  </div>,
  { width: 1200, height: 630, fonts: [/* font data */] }
);

const resvg = new Resvg(svg);
const pngBuffer = resvg.render().asPng();
```

---

## HTML Template (for Puppeteer method)

```html
<!DOCTYPE html>
<html>
<head>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  width: 1200px; height: 630px;
  background: linear-gradient(135deg, #FAF9F7, #F0EDE8);
  font-family: -apple-system, sans-serif;
  position: relative;
}
.bar { width: 100%; height: 6px; background: #E8613C; }
.content { padding: 80px; }
.title { font-size: 52px; font-weight: 700; color: #1a1a1a; }
.subtitle { font-size: 28px; color: #666; margin-top: 12px; }
.tags { display: flex; gap: 16px; margin-top: 48px; }
.tag {
  padding: 8px 24px; border-radius: 20px;
  background: rgba(232,97,60,0.1); color: #E8613C; font-size: 18px;
}
.url {
  position: absolute; bottom: 48px; left: 80px;
  font-size: 20px; color: #999;
}
</style>
</head>
<body>
  <div class="bar"></div>
  <div class="content">
    <div class="title">Page Title Here</div>
    <div class="subtitle">Subtitle or tagline</div>
    <div class="tags">
      <span class="tag">Tag 1</span>
      <span class="tag">Tag 2</span>
      <span class="tag">Tag 3</span>
    </div>
  </div>
  <div class="url">example.com</div>
</body>
</html>
```

---

## Validation

After generating OG images, validate with:

1. **Facebook Sharing Debugger** — `https://developers.facebook.com/tools/debug/`
2. **Twitter Card Validator** — `https://cards-dev.twitter.com/validator`
3. **LinkedIn Post Inspector** — `https://www.linkedin.com/post-inspector/`
4. **OpenGraph.xyz** — `https://www.opengraph.xyz/`

Clear cache between updates — platforms aggressively cache OG data.
