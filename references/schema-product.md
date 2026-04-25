# Product & E-Commerce Schema — JSON-LD Templates

For product pages, offers, reviews, aggregate ratings. Pair with `BreadcrumbList`
and `Organization`.

---

## Product (Single Variant)

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Product Name",
  "image": "https://example.com/product.jpg",
  "description": "Product description",
  "brand": {
    "@type": "Brand",
    "name": "Brand Name"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://example.com/product/",
    "priceCurrency": "USD",
    "price": "29.99",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Store Name"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "120"
  }
}
```

## ProductGroup + Variants (Color / Size)

Use when a product has variants sharing one canonical URL.

```json
{
  "@context": "https://schema.org",
  "@type": "ProductGroup",
  "name": "Shirt",
  "productGroupID": "abc-123",
  "variesBy": ["https://schema.org/color", "https://schema.org/size"],
  "hasVariant": [
    {
      "@type": "Product",
      "sku": "shirt-red-m",
      "color": "red",
      "size": "M",
      "offers": {
        "@type": "Offer",
        "price": "29.99",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "Product",
      "sku": "shirt-red-l",
      "color": "red",
      "size": "L",
      "offers": {
        "@type": "Offer",
        "price": "29.99",
        "priceCurrency": "USD",
        "availability": "https://schema.org/OutOfStock"
      }
    }
  ]
}
```

## Review + AggregateRating

`aggregateRating` summarizes all reviews; `review` is one sample. Both must
match visible on-page content or Google flags it.

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Product Name",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "bestRating": "5",
    "reviewCount": "120"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Reviewer Name" },
      "datePublished": "2026-02-10",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Reviewer's actual review text..."
    }
  ]
}
```

---

## Availability values

| Value | When to use |
|-------|-------------|
| `InStock` | Can be purchased now |
| `OutOfStock` | Temporarily unavailable; page stays live |
| `PreOrder` | Accepting orders before release |
| `BackOrder` | Sold out; accepting orders for later fulfillment |
| `Discontinued` | Permanently unavailable (consider 301 to replacement) |
| `SoldOut` | One-time item, fully sold |

---

## Common mistakes

- `price` as a number with a `$` prefix — must be a plain decimal string
- `aggregateRating` without corresponding visible reviews → manual action risk
- `availability` without a full `https://schema.org/` URL — some parsers fail
- Mismatched price between schema and visible page → Google flags
- Missing `gtin` / `mpn` / `sku` on manufactured goods → Merchant Center disapproval
