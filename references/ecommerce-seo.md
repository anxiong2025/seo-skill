# E-Commerce SEO Deep Dive

Site-type reference for e-commerce audits. Triggered when §1.1 detects E-Commerce
signals (`/products/`, `Product` schema, cart/checkout). SKILL.md §3.13 gives
the short summary; this file is the full checklist.

---

## 1. Product Page Content

- [ ] Every product has a unique, keyword-rich description (no manufacturer copy-paste)
- [ ] Descriptions include long-tail keyword variations naturally
- [ ] Bullet points, highlights, and scannable formatting
- [ ] High-quality product images with descriptive `alt` text
- [ ] `Product` JSON-LD: `name`, `image`, `description`, `brand`, `offers` (price, priceCurrency, availability)

## 2. Review & Rating Schema

- [ ] `AggregateRating` schema added when reviews exist
- [ ] Review display component present on product pages
- [ ] Schema rating matches visible review content (Google penalizes mismatches)

```
Grep for "Product" and "AggregateRating" in JSON-LD scripts
Check product page templates for review rendering components
```

## 3. Collection / Category Pages

- [ ] Each collection page has unique descriptive content (not just a product grid)
- [ ] Targets commercial keywords: "best X", "top X", "X for [audience]"
- [ ] Internal links to individual product pages
- [ ] Collection descriptions contain relevant keywords naturally

## 4. E-Commerce Technical

- [ ] Out-of-stock products handled via availability states (not 404)
- [ ] Pagination uses `rel="next"` / `rel="prev"` or infinite scroll with crawlable fallback links
- [ ] Faceted navigation doesn't create duplicate/thin pages (canonical or noindex on filter URLs)
- [ ] Clean product URLs: `/products/product-name` not `/products?id=123`

## 5. Product Variants (Color / Size / Material)

Canonicalization decision tree:

- [ ] **Default**: variants share same product page + JS swap — one canonical URL, `Product` schema uses `hasVariant` / `ProductGroup`
- [ ] **Separate URLs** only if: (a) each variant has unique search demand, (b) each has unique content/images worth a dedicated page
- [ ] If separate: self-referential canonical per variant, `isVariantOf` pointing to parent `ProductGroup`
- [ ] Color/size picker state must NOT generate crawlable duplicate URLs (block `?color=red` via robots or canonical to parent)
- [ ] Default variant selected on page load (avoid empty PDP before JS hydration)

## 6. Out-of-Stock — Scenario-Based Handling

- [ ] **Temporarily out of stock** → keep page live, `availability: "OutOfStock"` in schema, show restock date or waitlist
- [ ] **Permanently discontinued** → 301 redirect to replacement product or nearest collection page (never 404 if page has backlinks/traffic)
- [ ] **Seasonal products** → keep page live year-round, show "Available [season]" messaging
- [ ] **Collection page** with 100% out-of-stock products → show related collections, don't let it become thin
- [ ] Sort out-of-stock products to the bottom of collection listings (or filter behind toggle)

## 7. Google Merchant Center & Shopping Feed

- [ ] Merchant Center account connected (free) — enables Shopping tab, free product listings, Google AI citations for shopping queries
- [ ] Feed submitted (XML, TSV, or Content API) with all required attributes: `id`, `title`, `description`, `link`, `image_link`, `price`, `availability`, `brand`, `gtin` or `mpn`
- [ ] Feed `title` and `description` optimized (brand, model, key attributes — these drive Shopping SERP ranking, not just ads)
- [ ] `gtin` (UPC/EAN/ISBN) populated for manufactured goods — critical for matching
- [ ] Product schema on-site MUST match feed (price, availability) — mismatch triggers disapproval
- [ ] Feed refreshed at least daily (hourly for high-velocity inventory)

## 8. Long-Tail Commercial Content ("Best X for Y")

- [ ] "Best [category] for [audience]" guide pages — huge commercial intent
- [ ] "[Product A] vs [Product B]" comparisons (own the SERP before affiliates do)
- [ ] "[Product] alternatives" and "[Competitor] alternatives" pages
- [ ] "How to choose [product type]" buying guides — mid-funnel capture
- [ ] Size/fit guides, care instructions, compatibility tables — serve existing customers AND rank

## 9. Seasonal / Event Content Calendar

- [ ] Black Friday / Cyber Monday hub page exists year-round (same URL, refreshed yearly)
- [ ] Region-appropriate events: 双11 / 618 (China), Diwali (India), Prime Day (US/EU), Boxing Day (UK/CA)
- [ ] Seasonal URLs use stable slugs (`/black-friday/` not `/black-friday-2024/`)
- [ ] Gift guides: "Gifts for [recipient] under $X", "[Holiday] gift guide"
- [ ] `Product` offers updated with sale `price`, `priceValidUntil`, `availability` during promotions

## 10. Review UGC with Images & Video

- [ ] Reviews with photos/videos rendered in HTML (not JS-only) — Google uses these for SERP thumbnails
- [ ] Review images have descriptive alt text
- [ ] `Review` schema includes `author`, `reviewRating`, `datePublished`, and `image` when UGC images exist
- [ ] Review text is in-page content (crawlable) — iframe / JS-injected widgets often invisible to crawlers
- [ ] Review sort/filter doesn't generate duplicate URLs (canonical to default sort)

## 11. Category vs Collection vs Tag — Dedup Strategy

- [ ] ONE primary taxonomy per product (pick category OR collection OR tag — don't index all three)
- [ ] Shopify: decide whether `/collections/` or `/products/` is the canonical product URL; apply consistently
- [ ] Tag pages (e.g., `/tags/sale`) noindexed unless each tag has unique content and search demand
- [ ] Overlapping collections ("Red Dresses" vs "Dresses: Red filter") consolidated to one URL
- [ ] Brand pages (`/brands/nike`) treated as distinct collections with unique brand content

## 12. Marketplace / Multi-Seller Sites (Amazon/Etsy-style)

- [ ] Seller storefronts have unique brand content (not just their product grid)
- [ ] Listings from multiple sellers consolidate to ONE canonical (`Product` + multiple `Offer` nodes), not N duplicate pages
- [ ] Seller review aggregation separate from product review aggregation (distinct schema contexts)
- [ ] Search results pages (`/search?q=...`) noindexed to avoid infinite thin pages
